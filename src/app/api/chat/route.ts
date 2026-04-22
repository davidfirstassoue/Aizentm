import { NextRequest, NextResponse } from "next/server";

const N8N_URL =
  process.env.N8N_WEBHOOK_URL ??
  "https://davidfirst.app.n8n.cloud/webhook/chat";

export async function POST(req: NextRequest) {
  const { message, sessionId } = await req.json();

  if (!message?.trim()) {
    return NextResponse.json({ error: "Message vide" }, { status: 400 });
  }

  let res: Response;
  try {
    res = await fetch(N8N_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chatInput: message, sessionId }),
    });
  } catch {
    return NextResponse.json({ error: "Impossible de joindre le workflow" }, { status: 502 });
  }

  if (!res.ok) {
    return NextResponse.json({ error: "Erreur du workflow n8n" }, { status: 502 });
  }

  const data = await res.json();
  // n8n AI Agent typically responds with { output: "..." }
  const output =
    data.output ?? data.text ?? data.response ?? data.message ?? data.answer ?? "…";

  return NextResponse.json({ output });
}
