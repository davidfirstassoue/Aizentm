"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface LeadInfo {
  fullName: string;
  company: string;
  email: string;
  phone: string;
}

const STORAGE_KEY = "aizen_lead";

export function loadLead(): LeadInfo | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as LeadInfo) : null;
  } catch {
    return null;
  }
}

function saveLead(info: LeadInfo) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
}

interface Props {
  onComplete: (info: LeadInfo) => void;
}

export function ChatGateForm({ onComplete }: Props) {
  const [form, setForm] = useState<LeadInfo>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<LeadInfo>>({});

  function validate(): boolean {
    const e: Partial<LeadInfo> = {};
    if (!form.fullName.trim()) e.fullName = "Requis";
    if (!form.company.trim()) e.company = "Requis";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email invalide";
    if (!form.phone.trim()) e.phone = "Requis";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    saveLead(form);
    onComplete(form);
  }

  const fields: Array<{
    key: keyof LeadInfo;
    label: string;
    type: string;
    placeholder: string;
  }> = [
    { key: "fullName", label: "Nom complet", type: "text", placeholder: "Jean Dupont" },
    { key: "company", label: "Entreprise", type: "text", placeholder: "Acme Corp" },
    { key: "email", label: "Email", type: "email", placeholder: "jean@acme.com" },
    { key: "phone", label: "Téléphone", type: "tel", placeholder: "+33 6 00 00 00 00" },
  ];

  return (
    <section className="display-grid">
      <div
        style={{ gridColumn: "2 / -2" }}
        className="flex flex-col min-h-[calc(100vh-80px)] py-[40px] md:py-[80px] items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-lg"
        >
          {/* Header */}
          <p className="text-label text-cinematic text-[color:var(--text-muted)] mb-3">
            Avant de commencer
          </p>
          <h1 className="text-cinematic text-title-lg mb-2">
            Qui êtes-vous ?
          </h1>
          <p className="text-[13px] text-[color:var(--text-muted)] mb-10">
            Ces informations permettent à notre assistant de personnaliser chaque réponse pour votre contexte.
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {fields.map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label className="block text-[12px] text-cinematic text-[color:var(--text-muted)] mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  value={form[key]}
                  placeholder={placeholder}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                  className={`w-full bg-transparent border rounded-[var(--radius-sm)] px-4 py-3 text-[14px] text-[color:var(--text)] placeholder:text-[color:var(--text-muted)] outline-none transition-colors focus:border-[color:var(--primary)] ${
                    errors[key]
                      ? "border-[#E57373]"
                      : "border-[color:var(--border-soft)]"
                  }`}
                />
                {errors[key] && (
                  <p className="mt-1 text-[11px] text-[#E57373]">{errors[key]}</p>
                )}
              </div>
            ))}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full flex items-center justify-center gap-2 mt-2 bg-[color:var(--primary)] text-[color:var(--bg)] text-cinematic text-[13px] py-4 rounded-[var(--radius-sm)] transition-opacity hover:opacity-90"
            >
              Accéder au chat
              <ArrowRight size={15} strokeWidth={2} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
