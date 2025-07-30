 // /app/api/chat/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { messages } = await req.json();

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'system', content: 'You are Reena, a helpful assistant from CrackIQ. Answer smartly with exam guidance and friendly tone.' },
        ...messages
      ],
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
