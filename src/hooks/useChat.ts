"use client";

import { useCallback, useRef, useState } from "react";

export type MessageRole = "user" | "assistant" | "error";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: number;
}

export interface LeadMetadata {
  fullName: string;
  company: string;
  email: string;
  phone: string;
}

function newId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function useChat(lead?: LeadMetadata) {
  const sessionIdRef = useRef<string>("");
  if (!sessionIdRef.current) sessionIdRef.current = newId();
  const isFirstMessageRef = useRef(true);

  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: newId(),
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
    };
    setMessages((m) => [...m, userMsg]);
    setIsLoading(true);

    const isFirst = isFirstMessageRef.current;
    if (isFirst) isFirstMessageRef.current = false;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
          message: trimmed,
          ...(isFirst && lead ? { lead } : {}),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      const output =
        typeof data === "string"
          ? data
          : data?.output ?? data?.message ?? data?.response ?? "";

      setMessages((m) => [
        ...m,
        {
          id: newId(),
          role: "assistant",
          content: String(output || "(réponse vide)"),
          timestamp: Date.now(),
        },
      ]);
    } catch (err) {
      const detail = err instanceof Error ? err.message : "Erreur inconnue";
      setMessages((m) => [
        ...m,
        {
          id: newId(),
          role: "error",
          content: `Impossible de joindre l'assistant (${detail}).`,
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
    sessionIdRef.current = newId();
    isFirstMessageRef.current = true;
  }, []);

  return { messages, isLoading, sendMessage, clearMessages };
}
