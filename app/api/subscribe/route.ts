// app/api/subscribe/route.ts
import { NextResponse } from 'next/server';
import { SIGNUP_TAGS } from '@/utils/kit';
import type { SignupType } from '@/utils/kit';

interface SubscribeRequest {
  email: string;
  signupType: SignupType;
}

export async function POST(request: Request) {
  try {
    const { email, signupType } = await request.json() as SubscribeRequest;
    
    if (!process.env.KIT_API_KEY || !process.env.KIT_FORM_ID) {
      throw new Error('Missing API configuration');
    }

    // Subscribe to the form
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.KIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: process.env.KIT_API_KEY,
          email,
          tags: [SIGNUP_TAGS[signupType]]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Subscription error:', data);
      return NextResponse.json(
        { success: false, message: 'Failed to subscribe' },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed!'
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}