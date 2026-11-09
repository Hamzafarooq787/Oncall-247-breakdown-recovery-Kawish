import { PageHero, InlineCTA } from "@/components/site/PageSections";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { RECOVERY_PHOTOS, SERVICE_PHOTOS } from "@/lib/recovery-photos";
import { Phone, ArrowRight, Wrench } from "lucide-react";
import { SERVICES, telLink } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";


export const metadata = pageMetadata("Recovery Services in Birmingham | On-Call 24/7", "Browse all 17 services from On-Call 24/7, including breakdown recovery, winch recovery, fuel delivery in Birmingham and booked vehicle transport.", "/services");

export default function ServicesPage() {
  return (
    <>
      <PageHero
        photo={RECOVERY_PHOTOS.greySuv.src}
        eyebrow="Our services"
        title={<>Vehicle recovery and <span className="gold-text">roadside help.</span></>}
        sub="Choose a service to see what we can help with and what to have ready when you call. We’re based in Birmingham and cover local and UK-wide recoveries."
      />

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2">
            {SERVICES.map((s, i) => {
              const photo = SERVICE_PHOTOS[s.slug];
              return (
                <Reveal key={s.slug} delay={(i % 2) * 0.05}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] sm:flex-row">
                    <div className="media-placeholder relative grid aspect-square w-full place-items-center overflow-hidden sm:w-36 sm:shrink-0 xl:w-56">
                      {photo ? (
                        <Image {...photo} fill unoptimized className="object-cover object-[50%_64%] transition-transform duration-700 group-hover:scale-105" />
                      ) : (
                        <Wrench aria-hidden="true" className="h-12 w-12 text-gold/50 transition-transform duration-700 group-hover:scale-105" />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-[color:var(--gold)]" />
                        <span className="text-[11px] uppercase tracking-widest text-muted-foreground">Service</span>
                      </div>
                      <h3 className="mt-2 text-[22px] font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.long}</p>
                      <div className="mt-auto flex flex-wrap gap-3 pt-6">
                        <Link href={`/services/${s.slug}`} className="btn-ghost text-sm">Learn more <ArrowRight className="h-4 w-4" /></Link>
                        <a href={telLink} className="btn-gold text-sm"><Phone className="h-4 w-4" /> Call now</a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <InlineCTA />
    </>
  );
}
