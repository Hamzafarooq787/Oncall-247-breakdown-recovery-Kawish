import { RECOVERY_PHOTOS } from "@/lib/recovery-photos";
import { pageMetadata } from "@/lib/seo";

import { MapPin, Phone } from "lucide-react";
import { SITE, UK_RECOVERY_COVERAGE, WEST_MIDLANDS_COVERAGE, telLink } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { CoverageMap } from "@/components/site/CoverageMap";
import { AreaCoverage } from "@/components/site/AreaCoverage";
import { PageHero, InlineCTA } from "@/components/site/PageSections";

const areas = [
  { name: "Birmingham", note: "Local breakdown recovery, roadside help and emergency fuel delivery in Birmingham." },
  { name: "West Midlands", note: "Breakdown recovery across the whole West Midlands. Share your pickup point and vehicle details so we can check availability." },
  { name: "Across the UK", note: UK_RECOVERY_COVERAGE },
];

export const metadata = pageMetadata("West Midlands & UK Recovery Coverage | On-Call 24/7", "On-Call 24/7 provides breakdown recovery across the West Midlands and anywhere in the UK. Check coverage and share your pickup postcode.", "/coverage");

export default function CoveragePage() {
  return (
    <>
      <PageHero
        photo={RECOVERY_PHOTOS.miltonKeynesAudi.src}
        eyebrow="Coverage"
        title={<>West Midlands breakdown recovery. <span className="gold-text">Drivers nationwide.</span></>}
        sub={`On-Call 24/7 – ${WEST_MIDLANDS_COVERAGE} ${UK_RECOVERY_COVERAGE}`}
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

      <section className="container-x space-y-8 pb-16">
        <CoverageMap />
        <AreaCoverage />
      </section>

      <InlineCTA />
    </>
  );
}
