"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";

type FormState = "idle" | "loading" | "success" | "error";

const LABELS = {
  fr: {
    fullName:     "Nom complet",
    company:      "Entreprise",
    email:        "Email",
    message:      "Votre message",
    send:         "Envoyer →",
    sending:      "Envoi en cours…",
    successTitle: "Message reçu.",
    successBody:  "Notre équipe vous répondra sous 24h.",
    errorMsg:     "Une erreur est survenue. Réessayez ou écrivez-nous directement.",
    required:     "Ce champ est requis.",
    invalidEmail: "Email invalide.",
  },
  en: {
    fullName:     "Full name",
    company:      "Company",
    email:        "Email",
    message:      "Your message",
    send:         "Send →",
    sending:      "Sending…",
    successTitle: "Message received.",
    successBody:  "Our team will get back to you within 24 hours.",
    errorMsg:     "Something went wrong. Please try again or contact us directly.",
    required:     "This field is required.",
    invalidEmail: "Invalid email.",
  },
} as const;

export function ContactForm({ lang }: { lang: Lang }) {
  const l = LABELS[lang];
  const [form, setForm] = useState({ fullName: "", company: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [status, setStatus] = useState<FormState>("idle");

  function validate() {
    const errs: Partial<typeof form> = {};
    if (!form.fullName.trim()) errs.fullName = l.required;
    if (!form.email.trim())     errs.email     = l.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = l.invalidEmail;
    if (!form.message.trim())   errs.message   = l.required;
    return errs;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof form]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ ...form }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ fullName: "", company: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="border border-[color:var(--primary)] rounded-[var(--radius-sm)] p-10 md:p-16 text-center max-w-2xl w-full mx-auto"
        style={{ background: "color-mix(in srgb, var(--primary) 4%, transparent)" }}
      >
        <p className="text-cinematic text-[28px] md:text-[36px] leading-tight">{l.successTitle}</p>
        <p className="mt-4 text-[14px] not-italic font-normal text-[color:var(--text-muted)]">{l.successBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-[color:var(--border-soft)] rounded-[var(--radius-sm)] p-6 md:p-12 lg:p-16 max-w-2xl w-full mx-auto"
      style={{ background: "color-mix(in srgb, var(--primary) 2%, transparent)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Field id="cf-fullName" label={l.fullName} name="fullName" type="text"  value={form.fullName} error={errors.fullName} onChange={handleChange} />
        <Field id="cf-company"  label={l.company}  name="company"  type="text"  value={form.company}  error={errors.company}  onChange={handleChange} />
      </div>

      <div className="mt-4 md:mt-6">
        <Field id="cf-email" label={l.email} name="email" type="email" value={form.email} error={errors.email} onChange={handleChange} />
      </div>

      <div className="mt-4 md:mt-6">
        <label htmlFor="cf-message" className="block text-[11px] text-cinematic tracking-[0.1em] text-[color:var(--text-muted)] mb-2">
          {l.message}
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          className={`w-full bg-transparent border rounded-[var(--radius-sm)] px-4 py-3 text-[14px] not-italic font-normal text-[color:var(--text)] placeholder:text-[color:var(--text-muted)] outline-none resize-none transition-colors duration-200 ${
            errors.message
              ? "border-red-500/70 focus:border-red-400"
              : "border-[color:var(--border-soft)] focus:border-[color:var(--primary)]"
          }`}
        />
        {errors.message && <p className="mt-1 text-[11px] text-red-400">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="mt-4 text-[12px] not-italic font-normal text-red-400">{l.errorMsg}</p>
      )}

      <div className="mt-8">
        <button
          id="cf-submit"
          type="submit"
          disabled={status === "loading"}
          className="cp-solid-btn-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? l.sending : l.send}
        </button>
      </div>
    </form>
  );
}

function Field({
  id, label, name, type, value, error, onChange,
}: {
  id: string; label: string; name: string; type: string;
  value: string; error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] text-cinematic tracking-[0.1em] text-[color:var(--text-muted)] mb-2">
        {label}
      </label>
      <input
        id={id} name={name} type={type} value={value} onChange={onChange}
        className={`w-full bg-transparent border rounded-[var(--radius-sm)] px-4 py-3 text-[14px] not-italic font-normal text-[color:var(--text)] outline-none transition-colors duration-200 ${
          error
            ? "border-red-500/70 focus:border-red-400"
            : "border-[color:var(--border-soft)] focus:border-[color:var(--primary)]"
        }`}
      />
      {error && <p className="mt-1 text-[11px] text-red-400">{error}</p>}
    </div>
  );
}
