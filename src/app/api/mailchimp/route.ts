import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Initialize Mailchimp with API key
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX // e.g., "us10"
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, service, message } = data;

    if (!email || !name || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Subscribe user to list
    const listId = process.env.MAILCHIMP_LIST_ID || '';
    
    // Add subscriber to list
    await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name,
        COMPANY: company || '',
        SERVICE: service || '',
        MESSAGE: message,
      },
    });

    // Store contact information in a custom field or tag
    // This approach ensures you capture the contact form data
    const contactData = {
      email_address: email,
      merge_fields: {
        FNAME: name,
        COMPANY: company || '',
        SERVICE: service || '',
        MESSAGE: message || '',
      },
      tags: ['contact-form'],
    };

    // Return success
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully!'  
    });
    
  } catch (error) {
    console.error('Mailchimp Error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
} 