import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat IA — Aizen",
  description:
    "Discutez avec l'assistant IA Aizen. Posez vos questions et obtenez une réponse instantanée sur nos services d'automatisation.",
};

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return children;
}
