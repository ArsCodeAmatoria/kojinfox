import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Initialize Mailchimp with API key if available
const apiKey = process.env.MAILCHIMP_API_KEY;
const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
const listId = process.env.MAILCHIMP_LIST_ID;

// Check if Mailchimp is properly configured
const isMailchimpConfigured = apiKey && serverPrefix && listId;

if (isMailchimpConfigured) {
  mailchimp.setConfig({
    apiKey,
    server: serverPrefix // e.g., "us10"
  });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, service, message } = data;

    // Basic validation
    if (!email || !name || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields (name, email, and message)' },
        { status: 400 }
      );
    }

    // Check if Mailchimp is configured
    if (!isMailchimpConfigured) {
      console.warn('Mailchimp is not properly configured. Skipping subscription but returning success.');
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully! (Note: Email subscription is not active)'  
      });
    }

    try {
      // Add subscriber to list
      await mailchimp.lists.addListMember(listId as string, {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name,
          COMPANY: company || '',
          SERVICE: service || '',
          MESSAGE: message,
        },
      });

      // Return success
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully!'  
      });
    } catch (mailchimpError: unknown) {
      console.error('Mailchimp API Error:', mailchimpError);
      
      // Handle mailchimp-specific errors
      if (
        typeof mailchimpError === 'object' && 
        mailchimpError !== null && 
        'response' in mailchimpError && 
        mailchimpError.response && 
        typeof mailchimpError.response === 'object' && 
        'body' in mailchimpError.response
      ) {
        const errorDetails = mailchimpError.response.body as { title?: string };
        
        // Check if it's a duplicate subscriber (already exists)
        if (errorDetails.title === 'Member Exists') {
          return NextResponse.json({ 
            success: true, 
            message: 'Thank you for your submission! We already have your email on file.'  
          });
        }
        
        // Return the specific error from Mailchimp
        return NextResponse.json(
          { error: `Mailchimp error: ${errorDetails.title || 'Unknown error'}` },
          { status: 500 }
        );
      }
      
      throw mailchimpError; // Re-throw for general error handling
    }
  } catch (error) {
    console.error('Form Submission Error:', error);
    return NextResponse.json(
      { error: 'Failed to process your submission. Please try again later.' },
      { status: 500 }
    );
  }
} 