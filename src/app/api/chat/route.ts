import { NextRequest, NextResponse } from "next/server";

const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions";
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

export async function POST(request: NextRequest) {
  try {
    console.log("Chat API called");

    // 验证API密钥是否存在
    if (!DEEPSEEK_API_KEY) {
      console.error("DeepSeek API key not configured");
      return NextResponse.json(
        { error: "DeepSeek API key not configured" },
        { status: 500 }
      );
    }

    // 检查API密钥是否看起来有效
    if (!DEEPSEEK_API_KEY.startsWith('sk-') || DEEPSEEK_API_KEY.length < 20) {
      console.error("DeepSeek API key appears to be invalid");
      return NextResponse.json(
        { error: "DeepSeek API key appears to be invalid" },
        { status: 500 }
      );
    }

    const { messages } = await request.json();

    // 验证messages参数是否存在且不为空
    if (!messages || !Array.isArray(messages)) {
      console.error("Invalid messages parameter");
      return NextResponse.json(
        { error: "Messages parameter is required and must be an array" },
        { status: 400 }
      );
    }

    console.log("Received messages:", JSON.stringify(messages, null, 2));

    const requestBody = {
      model: "deepseek-chat",
      messages: messages,
      stream: false,
    };

    console.log("Request body to DeepSeek API:", JSON.stringify(requestBody, null, 2));

    const response = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${DEEPSEEK_API_KEY}`,
        "Accept": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    console.log("DeepSeek API response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("DeepSeek API error response:", errorText);
      try {
        const errorData = JSON.parse(errorText);
        return NextResponse.json(
          { error: errorData.error?.message || "Failed to get response from DeepSeek" },
          { status: response.status }
        );
      } catch (e) {
        console.error("Error parsing DeepSeek response:", e);
        return NextResponse.json(
          { error: `Failed to parse response from DeepSeek: ${errorText}` },
          { status: response.status }
        );
      }
    }

    const data = await response.json();
    console.log("DeepSeek API response data:", JSON.stringify(data, null, 2));

    const content = data.choices[0]?.message?.content || "No response from AI";

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: `Internal server error: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    );
  }
}