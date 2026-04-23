import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, sessionId } = body;

    const N8N_URL = process.env.N8N_WEBHOOK_URL || "https://davidfirst.app.n8n.cloud/webhook/chat";
    
    console.log("Appel n8n vers :", N8N_URL);

    if (!message?.trim()) {
      return NextResponse.json({ error: "Message vide" }, { status: 400 });
    }

    const res = await fetch(N8N_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        chatInput: message, // Format standard
        input: message,     // Souvent attendu par AI Agent
        message: message,   // Commun
        sessionId 
      }),
    });

    const contentType = res.headers.get("content-type");
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Erreur n8n:", res.status, errorText);
      return NextResponse.json({ error: `n8n a répondu ${res.status}` }, { status: 502 });
    }

    if (!contentType || !contentType.includes("application/json")) {
      const text = await res.text();
      console.error("Réponse n8n non-JSON:", text);
      return NextResponse.json({ output: text || "Réponse reçue (format texte)" });
    }

    const data = await res.json();
    console.log("Data n8n reçue:", data);

    const output =
      data.output ?? data.text ?? data.response ?? data.message ?? data.answer ?? (typeof data === 'string' ? data : "…");

    return NextResponse.json({ output });
  } catch (error: any) {
    console.error("Erreur API Route:", error);
    return NextResponse.json(
      { error: "Erreur interne", details: error.message },
      { status: 500 }
    );
  }
}
