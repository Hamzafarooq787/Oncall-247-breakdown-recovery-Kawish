"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { SITE, telLink, waLink } from "@/lib/site";

export function ContactForm() {
  const [messageUrl, setMessageUrl] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      "Hi, I’d like a recovery quote.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Vehicle registration: ${data.get("reg") || "Not provided"}`,
      `Pickup: ${data.get("location")}`,
      `Destination: ${data.get("destination") || "Not provided"}`,
      `Details: ${data.get("message")}`,
    ].join("\n");
    const url = waLink(message);
    window.open(url, "_blank", "noopener,noreferrer");
    setMessageUrl(url);
  };
  return (
    <form onSubmit={onSubmit} className="glass space-y-4 p-6 md:p-8">
      <h3 className="text-2xl font-semibold">Send an enquiry</h3>
      <p className="text-sm text-muted-foreground">This opens WhatsApp with your details filled in.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Your name" placeholder="John Smith" required />
        <Field name="phone" label="Phone" placeholder="07…" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="reg" label="Vehicle reg" placeholder="BX64 CSO" />
        <Field name="location" label="Where are you?" placeholder="Postcode or road name" required />
      </div>
      <Field name="destination" label="Where does the vehicle need to go?" placeholder="Garage or drop-off postcode" />
      <Field name="message" label="How can we help?" placeholder="Tell us what happened and which service you need." textarea required />
      {messageUrl && (
        <div className="rounded-xl border border-[color:var(--gold)]/40 bg-[color:var(--gold-soft)] p-3 text-sm">
          <a href={messageUrl} target="_blank" rel="noopener noreferrer" className="underline">Open the pre-filled WhatsApp message</a> if it didn’t open automatically.
        </div>
      )}
      <button type="submit" className="btn-gold w-full justify-center">
        <Send className="h-4 w-4" /> Send via WhatsApp
      </button>
      <div className="text-center text-xs text-muted-foreground">Or call us directly on <a href={telLink} className="text-[color:var(--gold)]">{SITE.phoneDisplay}</a></div>
    </form>
  );
}

function Field({ name, label, placeholder, required, textarea }: { name: string; label: string; placeholder?: string; required?: boolean; textarea?: boolean }) {
  const cls = "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--gold)]/50 focus:ring-2 focus:ring-[color:var(--gold)]/20";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} required={required} rows={4} className={cls} />
      ) : (
        <input type={name === "phone" ? "tel" : "text"} name={name} placeholder={placeholder} required={required} className={cls} />
      )}
    </label>
  );
}
