import { pageMetadata } from "@/lib/seo";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE, telLink, waLink } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageSections";

export const metadata = pageMetadata("Contact On-Call 24/7 Breakdown Recovery", "Call +44 7425 953894 or send a WhatsApp enquiry for breakdown recovery in Birmingham and across the UK.", "/contact");

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={<>Call or message us <span className="gold-text">24/7.</span></>}
        sub="For a recovery quote, share your pickup location, vehicle details and destination."
      />

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-4">
              <ContactCard icon={<Phone className="h-5 w-5" />} title="Call 24/7" value={SITE.phoneDisplay} href={telLink} />
              <ContactCard icon={<MessageCircle className="h-5 w-5" />} title="WhatsApp" value="Send us a message" href={waLink()} external />
              <ContactCard icon={<Mail className="h-5 w-5" />} title="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
              <ContactCard icon={<MapPin className="h-5 w-5" />} title="Service area" value="Birmingham and across the UK" />
              <ContactCard icon={<Clock className="h-5 w-5" />} title="Hours" value={SITE.hours} />
            </div>
          </Reveal>
          <Reveal dir="left">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactCard({ icon, title, value, href, external }: { icon: React.ReactNode; title: string; value: string; href?: string; external?: boolean }) {
  const inner = (
    <div className="glass flex items-center gap-4 p-5 transition-all hover:border-[color:var(--gold)]/30">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--gold-soft)] text-[color:var(--gold)]">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="mt-1 font-semibold [overflow-wrap:anywhere]">{value}</div>
      </div>
    </div>
  );
  if (!href) return inner;
  return <a href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})}>{inner}</a>;
}
