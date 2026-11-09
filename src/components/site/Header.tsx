"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SITE, telLink } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/coverage", label: "Coverage" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl" style={{ background: "rgba(8,8,8,0.6)", borderBottom: "1px solid rgb(255 255 255 / 0.06)" }}>
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center">
          <span className="leading-tight font-bold"><span className="gold-text">On-Call 24/7</span><br /><span className="text-xs font-medium">Breakdown Recovery</span></span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              href={n.to}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:bg-white/5 aria-[current=page]:text-foreground"
              aria-current={pathname === n.to ? "page" : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={telLink} className="btn-gold text-sm">
            <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden container-x pb-4">
          <div className="glass flex flex-col gap-1 p-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5"
                aria-current={pathname === n.to ? "page" : undefined}
              >
                {n.label}
              </Link>
            ))}
            <a href={telLink} className="btn-gold mt-2 justify-center text-sm">
              <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
