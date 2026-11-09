import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { SITE, telLink, waLink } from "@/lib/site";
import { SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-[#0a0a0a]">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <Link href="/" className="inline-flex">
            <Image src="/images/brand/on-call-247-logo.webp" alt={SITE.name} width={860} height={212} unoptimized className="h-auto w-52" />
          </Link>
          <p className="mt-4 text-[15px] text-muted-foreground">
            Based in Birmingham, we provide 24/7 breakdown recovery locally and arrange vehicle transport across the UK.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={telLink} className="btn-gold text-sm"><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa text-sm"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.slice(0, 5).map(service => (
              <li key={service.slug}><Link href={`/services/${service.slug}`} className="hover:text-gold">{service.title}</Link></li>
            ))}
            <li><Link href="/services" className="hover:text-gold">All services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> <a href={telLink}>{SITE.phoneDisplay}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> <a className="min-w-0 break-all" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> Birmingham and UK-wide recovery</li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> {SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div>Designed With <span aria-label="love" className="text-gold">♥</span> by <a href="https://linkedo.co.uk/" target="_blank" rel="nofollow noopener noreferrer" className="hover:text-gold">Linkedo</a></div>
        </div>
      </div>
    </footer>
  );
}
