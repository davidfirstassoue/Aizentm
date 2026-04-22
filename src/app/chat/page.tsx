"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "Comment automatiser mes relances clients ?",
  "Quels agents IA pour mon secteur ?",
  "Quel est le délai de mise en place ?",
];

const INITIAL_MESSAGE: Message = {
  id: "init",
  role: "assistant",
  content:
    "Bonjour ! Je suis l'assistant Aizen.\nPosez-moi vos questions sur l'automatisation, les agents IA, ou nos offres — je suis là pour vous aider.",
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const sessionId = useRef(
    typeof crypto !== "undefined" ? crypto.randomUUID() : String(Date.now())
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  function autoResize() {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId: sessionId.current }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.output ?? "Une erreur est survenue.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Une erreur de connexion est survenue. Veuillez réessayer.",
        },
      ]);
    } finally {
      setLoading(false);
      textareaRef.current?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  const showSuggestions = messages.length === 1 && !loading;

  return (
    <div
      className="flex flex-col"
      style={{ height: "100dvh", paddingTop: "90px" }}
    >
      {/* Header */}
      <div
        className="flex-shrink-0 flex items-center gap-4 px-6 md:px-10 py-4"
        style={{ borderBottom: "1px solid var(--border-faint)" }}
      >
        <div>
          <p
            className="text-label text-cinematic"
            style={{ color: "var(--text-muted)" }}
          >
            Assistant IA
          </p>
          <h1 className="text-cinematic text-[15px] tracking-widest mt-0.5">
            AIZEN
          </h1>
        </div>
        <span
          className="ml-auto flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest"
          style={{ color: "var(--text-muted)" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
            aria-hidden
          />
          En ligne
        </span>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 md:px-10 py-6 space-y-4"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <span
                className="text-label text-cinematic mt-1 mr-2 select-none flex-shrink-0"
                style={{ color: "var(--text-muted)" }}
              >
                AI
              </span>
            )}
            <div
              className="max-w-[75%] md:max-w-[60%] px-4 py-3 text-[14px] leading-relaxed whitespace-pre-wrap"
              style={{
                borderRadius: "var(--radius-sm)",
                ...(msg.role === "user"
                  ? {
                      background: "var(--primary)",
                      color: "var(--bg)",
                    }
                  : {
                      border: "1px solid var(--border-soft)",
                      color: "var(--text)",
                    }),
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start items-start gap-2">
            <span
              className="text-label text-cinematic mt-1 select-none"
              style={{ color: "var(--text-muted)" }}
            >
              AI
            </span>
            <div
              className="px-4 py-3 flex gap-1 items-center"
              style={{
                border: "1px solid var(--border-soft)",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-bounce"
                style={{
                  background: "var(--text-muted)",
                  animationDelay: "0ms",
                }}
              />
              <span
                className="w-1.5 h-1.5 rounded-full animate-bounce"
                style={{
                  background: "var(--text-muted)",
                  animationDelay: "150ms",
                }}
              />
              <span
                className="w-1.5 h-1.5 rounded-full animate-bounce"
                style={{
                  background: "var(--text-muted)",
                  animationDelay: "300ms",
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Suggestions */}
      {showSuggestions && (
        <div className="flex-shrink-0 px-4 md:px-10 pb-3 flex gap-2 flex-wrap">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => {
                setInput(s);
                textareaRef.current?.focus();
              }}
              className="cp-outline-btn"
              style={{ fontSize: "10px", padding: "8px 12px" }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div
        className="flex-shrink-0 px-4 md:px-10 py-4"
        style={{ borderTop: "1px solid var(--border-faint)" }}
      >
        <div className="flex gap-3 items-end max-w-3xl mx-auto">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              autoResize();
            }}
            onKeyDown={handleKeyDown}
            placeholder="Posez votre question…"
            rows={1}
            className="flex-1 resize-none bg-transparent outline-none text-[14px] transition-colors"
            style={{
              border: "1px solid var(--border-soft)",
              borderRadius: "var(--radius-sm)",
              padding: "12px 16px",
              color: "var(--text)",
              minHeight: "48px",
              maxHeight: "160px",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "var(--border-strong)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "var(--border-soft)")
            }
          />
          <button
            onClick={send}
            disabled={!input.trim() || loading}
            className="cp-solid-btn flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ padding: "12px 20px", fontSize: "16px" }}
            aria-label="Envoyer"
          >
            ↑
          </button>
        </div>
        <p
          className="text-center text-[10px] mt-3 font-bold uppercase tracking-widest"
          style={{ color: "var(--text-muted)" }}
        >
          Entrée pour envoyer · Maj+Entrée pour saut de ligne
        </p>
      </div>
    </div>
  );
}
