import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { message } = await request.json();
    console.log("Received message:", message);
    console.log("HF API Key:", process.env.HUGGINGFACE_API_KEY);
    // console.log("HUGGINGFACE_API_KEY:", process.env.HUGGINGFACE_API_KEY);

    const response = await fetch("https://router.huggingface.co/v1/chat/completions", {

      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b:novita",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("HF API error:", errorData);
      return NextResponse.json({ error: errorData.error || "API error" }, { status: response.status });
    }

    const data = await response.json();
    console.log("HF response data:", data);

    const answer = data.choices?.[0]?.message?.content || "Sorry, I couldn't understand.";
    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Catch error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
