import Image from "next/image";
import { RECOVERY_PHOTOS } from "@/lib/recovery-photos";
import { pageMetadata } from "@/lib/seo";

import { CheckCircle2, ShieldCheck, Award, Users, Phone } from "lucide-react";
import { SITE, telLink } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, InlineCTA } from "@/components/site/PageSections";

export const metadata = pageMetadata("About On-Call 24/7 | Birmingham Recovery Team", "Get to know On-Call 24/7 Breakdown Recovery, based in Birmingham and available for local and UK-wide vehicle recovery.", "/about");

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>A Birmingham recovery team <span className="gold-text">on call 24/7.</span></>}
        sub="On-Call 24/7 Breakdown Recovery helps with unexpected breakdowns and planned vehicle moves, locally and across the UK."
      />

      <section className="section-pad">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="chip">What we do</span>
            <h2 className="mt-4 text-3xl md:text-4xl">From a roadside call to a <span className="gold-text">booked collection.</span></h2>
            <p className="mt-5 text-muted-foreground">A flat battery, a breakdown or a vehicle stuck in mud can leave you unsure what to do next. Tell us what happened and where the vehicle is so we can work out what help fits the job.</p>
            <p className="mt-4 text-muted-foreground">We also arrange planned transport, including auction and salvage yard pickups, motorbike moves and forklift collections. Share any site rules or collection times when you get in touch.</p>
          </Reveal>
          <Reveal dir="left">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <div className="media-placeholder relative aspect-[4/3]">
                <Image {...RECOVERY_PHOTOS.blackAmg} fill unoptimized className="object-cover object-[50%_62%]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[color:var(--surface)]/40">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="chip">What sets us apart</span>
            <h2 className="mt-4 text-3xl md:text-4xl">What you can <span className="gold-text">expect.</span></h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { i: <ShieldCheck className="h-5 w-5" />, t: "24/7 contact", d: "Call or WhatsApp any time for help with a breakdown." },
              { i: <Award className="h-5 w-5" />, t: "Planned collections", d: "Share the pickup window and site requirements for booked transport." },
              { i: <Users className="h-5 w-5" />, t: "Birmingham base", d: "We cover local jobs and arrange longer vehicle moves across the UK." },
              { i: <CheckCircle2 className="h-5 w-5" />, t: "Quotes for your job", d: "Ask for a quote based on your vehicle, location and destination." },
            ].map((f) => (
              <Reveal key={f.t}>
                <div className="glass h-full p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[color:var(--gold)] text-black">{f.i}</div>
                  <h3 className="mt-4 text-lg font-semibold">{f.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {[
            { title: "24/7", label: "Phone and WhatsApp" },
            { title: "Local", label: "Based in Birmingham" },
            { title: "UK-wide", label: "Vehicle recovery and transport" },
          ].map((s) => (
            <Reveal key={s.label}>
              <div className="glass p-8 text-center">
                <div className="text-5xl font-bold tracking-tight gold-text">
                  {s.title}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="container-x mt-10 text-center">
          <a href={telLink} className="btn-gold"><Phone className="h-5 w-5" /> Speak to the team · {SITE.phoneDisplay}</a>
        </div>
      </section>

      <section id="recovery-gallery" aria-labelledby="recovery-gallery-title" className="section-pad scroll-mt-16">
        <div className="container-x">
          <h2 id="recovery-gallery-title" className="text-3xl md:text-4xl">
            Recovery <span className="gold-text">photo gallery</span>
          </h2>
          <p className="mt-4 text-muted-foreground">See our flatbeds, roadside recoveries and vehicle collections.</p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {Object.values(RECOVERY_PHOTOS).map(photo => (
              <li key={photo.src} className="media-placeholder relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
                <Image {...photo} fill unoptimized className="object-cover object-[50%_62%]" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InlineCTA />
    </>
  );
}
