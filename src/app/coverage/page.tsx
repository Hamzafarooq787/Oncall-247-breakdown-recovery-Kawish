import { RECOVERY_PHOTOS } from "@/lib/recovery-photos";
import { pageMetadata } from "@/lib/seo";

import { MapPin, Phone } from "lucide-react";
import { SITE, telLink } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, InlineCTA } from "@/components/site/PageSections";

const areas = [
  { name: "Birmingham", note: "Local breakdown recovery, roadside help and emergency fuel delivery in Birmingham." },
  { name: "West Midlands", note: "Share your pickup point and vehicle details for recoveries around Birmingham and the West Midlands." },
  { name: "Across the UK", note: "Ask about longer recoveries and booked vehicle transport. Send both postcodes so we can check the route." },
];

export const metadata = pageMetadata("Birmingham and UK Recovery Coverage | On-Call 24/7", "See where On-Call 24/7 provides local roadside recovery in Birmingham and arranges UK-wide vehicle transport.", "/coverage");

export default function CoveragePage() {
  return (
    <>
      <PageHero
        photo={RECOVERY_PHOTOS.miltonKeynesAudi.src}
        eyebrow="Coverage"
        title={<>Based in Birmingham. <span className="gold-text">Covering the UK.</span></>}
        sub="We handle local recovery around Birmingham and longer trips across the UK. Call or WhatsApp with your location to check availability."
      />

      <section className="section-pad">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.04}>
              <div className="glass h-full p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--gold-soft)] text-[color:var(--gold)]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{a.name}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{a.note}</p>
                <a href={telLink} className="btn-ghost mt-5 w-full justify-center text-sm">
                  <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <InlineCTA />
    </>
  );
}
