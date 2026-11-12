import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { SITE, telLink, waLink } from "@/lib/site";

export function PageHero({ eyebrow, title, sub, photo }: { eyebrow: string; title: React.ReactNode; sub: string; photo?: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {photo ? (
          <Image src={photo} alt="" fill unoptimized loading="eager" className="object-cover object-[50%_62%] opacity-60" />
        ) : (
          <div aria-hidden="true" className="media-placeholder h-full w-full" />
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.6), #050505 90%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(700px 350px at 80% 20%, rgba(255,208,0,0.18), transparent 60%)" }} />
      </div>
      <div className="container-x relative py-20 md:py-28">
        <span className="chip">{eyebrow}</span>
        <h1 className="mt-5 max-w-3xl text-[34px] font-bold leading-[1.05] md:text-[56px]">{title}</h1>
        <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">{sub}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={telLink} className="btn-gold"><Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}</a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa"><MessageCircle className="h-5 w-5" /> WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export function InlineCTA() {
  return (
    <section className="pb-24">
      <div className="container-x">
        <div className="glass flex flex-col items-start justify-between gap-5 p-8 sm:flex-row md:items-center md:p-10">
          <div>
            <h3 className="text-2xl font-semibold">Get a quote for your recovery</h3>
            <p className="mt-2 text-sm text-muted-foreground">Send your pickup location, vehicle details and where it needs to go.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={telLink} className="btn-gold text-sm"><Phone className="h-4 w-4" /> Call now</a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa text-sm"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RecoveryBanner() {
  return (
    <aside aria-label="Recovery timing and insurance" className="mt-6 rounded-2xl border border-gold/25 bg-gold/5 px-5 py-4">
      <p className="text-sm font-semibold text-gold">Recovery typically 30-45 mins where possible | Fully insured 24/7* company you can trust</p>
      <p className="mt-1 text-xs text-muted-foreground">*24/7 availability depends on your location and the circumstances of the recovery.</p>
    </aside>
  );
}
