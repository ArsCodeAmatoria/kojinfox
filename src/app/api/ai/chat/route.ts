import { NextResponse } from 'next/server'

// This is a placeholder for the actual Deepseek API integration
// We'll need to add the actual API key and implementation
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    // TODO: Implement actual Deepseek API call
    // This is a mock response for now
    const response = {
      message: "I understand you're working on a FLHA. Could you tell me more about the work you'll be doing today?",
      type: "question"
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error in AI chat:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
} 