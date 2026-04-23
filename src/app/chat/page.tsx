"use client";

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";
import { useChat, type Message } from "@/hooks/useChat";
import { ChatGateForm, loadLead, type LeadInfo } from "@/components/ChatGateForm";

const ERROR_COLOR = "#E57373";

export default function ChatPage() {
  const [lead, setLead] = useState<LeadInfo | null>(null);
  const [gateChecked, setGateChecked] = useState(false);

  useEffect(() => {
    setLead(loadLead());
    setGateChecked(true);
  }, []);

  if (!gateChecked) return null;
  if (!lead) return <ChatGateForm onComplete={setLead} />;

  return <ChatInterface lead={lead} />;
}

function ChatInterface({ lead }: { lead: LeadInfo }) {
  const { messages, isLoading, sendMessage, clearMessages } = useChat(lead);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isLoading]);

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, 160)}px`;
  }, [input]);

  const canSend = input.trim().length > 0 && !isLoading;

  function submit(e?: FormEvent) {
    e?.preventDefault();
    if (!canSend) return;
    const value = input;
    setInput("");
    void sendMessage(value);
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  return (
    <section className="display-grid">
      <div
        style={{ gridColumn: "2 / -2" }}
        className="flex flex-col min-h-[calc(100vh-80px)] py-[40px] md:py-[80px]"
      >
        {/* Header */}
        <div className="flex items-end justify-between gap-4 pb-6 md:pb-10 border-b border-[color:var(--border-soft)]">
          <div>
            <p className="text-label text-cinematic text-[color:var(--text-muted)]">
              Assistant IA
            </p>
            <h1 className="text-cinematic text-title-lg mt-3">AI Assistant</h1>
          </div>
          <button
            type="button"
            onClick={clearMessages}
            className="cp-outline-btn shrink-0"
            aria-label="Démarrer une nouvelle session"
          >
            Nouvelle session
          </button>
        </div>

        {/* Messages */}
        <div
          ref={listRef}
          className="flex-1 overflow-y-auto py-6 md:py-10 space-y-4"
        >
          {messages.length === 0 ? (
            <EmptyState />
          ) : (
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <Bubble key={m.id} message={m} />
              ))}
            </AnimatePresence>
          )}

          {isLoading && <TypingIndicator />}
        </div>

        {/* Composer */}
        <form
          onSubmit={submit}
          className="sticky bottom-0 pt-4 pb-6 md:pb-8 bg-[color:var(--bg)]"
        >
          <div className="flex items-end gap-3 border border-[color:var(--border-soft)] rounded-[var(--radius-sm)] p-3 focus-within:border-[color:var(--primary)] transition-colors">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Écrivez votre message…"
              rows={1}
              disabled={isLoading}
              className="flex-1 resize-none bg-transparent outline-none text-[15px] leading-[1.5] text-[color:var(--text)] placeholder:text-[color:var(--text-muted)] disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!canSend}
              aria-label="Envoyer"
              className="shrink-0 h-10 w-10 flex items-center justify-center rounded-[var(--radius-sm)] bg-[color:var(--primary)] text-[color:var(--bg)] disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
            >
              <Send size={16} strokeWidth={2} />
            </button>
          </div>
          <p className="mt-2 text-[11px] text-[color:var(--text-muted)]">
            Entrée pour envoyer · Maj + Entrée pour saut de ligne
          </p>
        </form>
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center py-16 md:py-24">
      <p className="text-label text-cinematic text-[color:var(--text-muted)]">
        Bienvenue
      </p>
      <h2 className="text-cinematic text-[22px] md:text-[28px] mt-3 max-w-md">
        Comment pouvons-nous vous aider aujourd'hui ?
      </h2>
      <p className="mt-4 text-[13px] text-[color:var(--text-muted)] max-w-md">
        Posez vos questions sur nos automatisations IA ou nos offres. L'assistant
        vous répond en quelques secondes.
      </p>
    </div>
  );
}

function Bubble({ message }: { message: Message }) {
  const isUser = message.role === "user";
  const isError = message.role === "error";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] md:max-w-[70%] px-4 py-3 rounded-[var(--radius-sm)] text-[14px] leading-[1.55] whitespace-pre-wrap break-words ${
          isUser
            ? "bg-[color:var(--primary)] text-[color:var(--bg)]"
            : "border border-[color:var(--border-soft)] text-[color:var(--text)]"
        }`}
        style={isError ? { color: ERROR_COLOR } : undefined}
      >
        {isError ? `⚠ ${message.content}` : message.content}
      </div>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1.5 px-4 py-3 rounded-[var(--radius-sm)] border border-[color:var(--border-soft)]">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block w-1.5 h-1.5 rounded-full bg-[color:var(--text-muted)]"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
