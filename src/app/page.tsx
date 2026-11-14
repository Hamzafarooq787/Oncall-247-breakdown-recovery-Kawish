import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { RECOVERY_PHOTOS, SERVICE_PHOTOS } from "@/lib/recovery-photos";
import * as motion from "motion/react-client";
import {
  Phone, MessageCircle, Clock, ShieldCheck, MapPin, Star, ArrowRight, Zap,
  CheckCircle2, Wrench, Truck, AlertTriangle, ChevronDown,
} from "lucide-react";
import { SITE, SERVICES, telLink, waLink } from "@/lib/site";
import { AreaCoverage } from "@/components/site/AreaCoverage";
import { RecoveryBanner } from "@/components/site/PageSections";
import { Reveal } from "@/components/site/Reveal";


export const metadata = pageMetadata("24/7 Breakdown Recovery Birmingham | On-Call", "On-Call 24/7 Breakdown Recovery is based in Birmingham and covers the UK. Call for roadside help, breakdown recovery, winch pull-outs and vehicle transport.", "/");

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <HowItWorks />
      <About />
      <Stats />
      <Coverage />
      <WhyChooseUs />
      <FAQ />
      <CTABanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={RECOVERY_PHOTOS.nightTruck.src} alt="" fill unoptimized loading="eager" fetchPriority="high" className="object-cover object-[50%_68%]" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.64) 0%, rgba(5,5,5,0.48) 62%, #050505 100%)" }} />
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/10" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(800px 400px at 80% 30%, rgba(255,208,0,0.18), transparent 60%)" }} />
      </div>

      <div className="container-x relative pt-20 pb-28 md:pt-28 md:pb-36">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-wrap items-center gap-2">
          <span className="chip"><span className="h-2 w-2 rounded-full bg-[color:var(--gold)] animate-pulse" /> Open now · 24/7 emergency cover</span>
          <span className="chip"><Star className="h-3.5 w-3.5 text-[color:var(--gold)]" /> Birmingham-based team</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-6 max-w-4xl text-[34px] font-bold leading-[1.05] tracking-tight md:text-[64px]"
        >
          <span className="gold-text">24/7 breakdown recovery</span> in Birmingham and across the UK.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12 }}
          className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          Stranded by a breakdown or need a vehicle moved? Call or WhatsApp On-Call 24/7 Breakdown Recovery with your location and vehicle details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.18 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href={telLink} className="btn-gold">
            <Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa">
            <MessageCircle className="h-5 w-5" /> WhatsApp us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="mt-14 grid max-w-3xl gap-3 sm:grid-cols-3"
        >
          <Badge icon={<Clock className="h-4 w-4" />} title="24/7" sub="Day, night, weekends" />
          <Badge icon={<Zap className="h-4 w-4" />} title="Birmingham" sub="Local roadside recovery" />
          <Badge icon={<ShieldCheck className="h-4 w-4" />} title="UK-wide" sub="Long-distance vehicle transport" />
        </motion.div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 md:flex">
          <span className="text-[11px] uppercase tracking-widest text-muted-foreground">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-scroll-hint text-[color:var(--gold)]" />
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="glass flex items-center gap-3 px-4 py-3">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--gold-soft)] text-[color:var(--gold)]">
        {icon}
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-[12px] text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}

function TrustStrip() {
  const items = [
    "Cars", "Motorbikes", "Vans", "Minibuses", "Caravans", "Motorhomes", "Forklifts",
  ];
  return (
    <section className="border-y border-white/5 bg-black/40">
      <div className="container-x py-6">
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Vehicles we help with</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {items.map((b) => (
              <span key={b} className="opacity-70 transition hover:opacity-100 hover:text-[color:var(--gold)]">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="chip">Our services</span>
          <h2 className="mt-4 text-[28px] md:text-[42px]">Roadside help and <span className="gold-text">vehicle recovery.</span></h2>
          <p className="mt-4 text-muted-foreground">From a breakdown to a vehicle stuck in mud, find the right service for your vehicle.</p>
        </Reveal>

        <RecoveryBanner />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
        <Link href="/services" className="btn-ghost mt-8">Browse the Services page <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}

function ServiceCard({ slug, title, short }: typeof SERVICES[number]) {
  const photo = SERVICE_PHOTOS[slug];
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-b from-white/5 to-white/[0.02] transition-all duration-500 hover:-translate-y-1.5 hover:border-[color:var(--gold)]/30 hover:shadow-[0_30px_60px_-20px_rgba(255,208,0,0.25)]">
      <div className="media-placeholder relative grid aspect-square place-items-center overflow-hidden">
        {photo ? (
          <Image {...photo} fill unoptimized className="object-cover object-[50%_64%] transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <Truck aria-hidden="true" className="h-14 w-14 text-gold/50 transition-transform duration-700 group-hover:scale-105" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[22px] font-semibold">{title}</h3>
        <p className="mt-2 text-[15px] text-muted-foreground">{short}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href={`/services/${slug}`} className="btn-ghost text-sm">Learn more <ArrowRight className="h-4 w-4" /></Link>
          <a href={telLink} className="btn-gold text-sm"><Phone className="h-4 w-4" /> Call now</a>
        </div>
      </div>
    </article>
  );
}

function HowItWorks() {
  const steps = [
    { icon: <Phone className="h-5 w-5" />, t: "Call or WhatsApp", d: "Tell us where you are, what you drive and what happened." },
    { icon: <Truck className="h-5 w-5" />, t: "Share the details", d: "Tell us about access and where the vehicle needs to go." },
    { icon: <Wrench className="h-5 w-5" />, t: "Confirm the plan", d: "We confirm availability, the recovery plan and the quote for your job." },
    { icon: <CheckCircle2 className="h-5 w-5" />, t: "Arrange collection", d: "Agree on a place to meet and, if needed, where we should take the vehicle." },
  ];
  return (
    <section className="section-pad bg-[color:var(--surface)]/40">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="chip">How it works</span>
          <h2 className="mt-4 text-[28px] md:text-[40px]">Four steps to <span className="gold-text">book recovery.</span></h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.07}>
              <div className="glass relative h-full p-6">
                <div className="absolute right-5 top-5 text-5xl font-black text-white/5">0{i + 1}</div>
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[color:var(--gold)] text-black">{s.icon}</div>
                <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-pad">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal dir="right">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <div className="media-placeholder relative aspect-[4/3]">
              <Image {...RECOVERY_PHOTOS.coastalTruck} fill unoptimized className="object-cover object-[50%_65%]" />
            </div>
            <div className="absolute bottom-5 left-5 right-5 glass flex items-center gap-3 p-4">
              <ShieldCheck className="h-6 w-6 text-[color:var(--gold)]" />
              <div>
                <div className="text-sm font-semibold">On call 24 hours a day</div>
                <div className="text-xs text-muted-foreground">Birmingham and UK-wide coverage</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal dir="left">
          <span className="chip">About us</span>
          <h2 className="mt-4 text-[28px] md:text-[40px]">Based in Birmingham. <span className="gold-text">Covering the UK.</span></h2>
          <p className="mt-4 text-muted-foreground">We help drivers who have broken down and people who need to move a vehicle. Call for local roadside recovery in Birmingham or arrange a longer trip across the UK.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "24/7 phone and WhatsApp",
              "Local breakdown recovery",
              "Ditch Pull Out",
              "Pull Out from Mud",
              "Booked vehicle collections",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="btn-ghost text-sm">About the team <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/about#recovery-gallery" className="btn-ghost text-sm">Recovery photos <ArrowRight className="h-4 w-4" /></Link>
            <a href={telLink} className="btn-gold text-sm"><Phone className="h-4 w-4" /> Speak to us</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { title: "24/7", label: "Call and WhatsApp" },
    { title: "Local", label: "Birmingham roadside recovery" },
    { title: "UK-wide", label: "Vehicle transport" },
    { title: String(SERVICES.length), label: "Recovery and roadside services" },
  ];
  return (
    <section className="border-y border-white/5 bg-black/40">
      <div className="container-x grid gap-8 py-14 md:grid-cols-4">
        {stats.map((item) => (
          <Reveal key={item.label}>
            <div className="text-center md:text-left">
              <div className="text-4xl font-bold tracking-tight gold-text md:text-5xl">{item.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section className="section-pad">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="chip"><MapPin className="h-3.5 w-3.5 text-[color:var(--gold)]" /> Coverage area</span>
          <h2 className="mt-4 text-[28px] md:text-[40px]">Local to Birmingham. <span className="gold-text">Available UK-wide.</span></h2>
          <p className="mt-4 text-muted-foreground">We cover Birmingham and the surrounding area for local recovery, with longer vehicle moves available across the UK. Share both postcodes so we can check your route.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {SITE.areas.map((a) => (
              <span key={a} className="chip"><MapPin className="h-3 w-3 text-[color:var(--gold)]" /> {a}</span>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/coverage" className="btn-ghost text-sm">See all areas <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>

        <Reveal dir="left">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
            <iframe className="aspect-[4/3] w-full" title="Map of Birmingham, our recovery base" src="https://www.google.com/maps?q=Birmingham,+UK&output=embed" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
          </div>
        </Reveal>
      </div>
      <div className="container-x mt-12"><AreaCoverage /></div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    { title: "Call any time", description: "Phone or WhatsApp us for recovery day or night.", icon: Clock },
    { title: "Help with awkward recoveries", description: "We assess difficult access and ground conditions before planning how to recover your vehicle.", icon: ShieldCheck },
    { title: "Local and long-distance jobs", description: "We handle local Birmingham recoveries and arrange vehicle transport across the UK.", icon: Truck },
  ];
  return (
    <section className="section-pad bg-[color:var(--surface)]/40">
      <div className="container-x">
        <Reveal>
          <span className="chip">Why choose us</span>
          <h2 className="mt-4 max-w-xl text-[28px] md:text-[40px]">Help when your vehicle <span className="gold-text">can’t go any further.</span></h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reasons.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <article className="glass h-full p-6">
                <Icon className="h-6 w-6 text-gold" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Are you available at night?", a: "Yes. You can call or WhatsApp us 24 hours a day, seven days a week. Share your location so we can check availability for your job." },
    { q: "Can you pull a vehicle out of a ditch?", a: "Yes. For a ditch pull out, send a map pin and describe where the vehicle is sitting. Photos taken from a safe place help us assess access." },
    { q: "Can you free a vehicle stuck in mud?", a: "Yes. For a mud pull out, tell us how deeply the vehicle is stuck and where the nearest firm access point is. Send photos if you can take them safely." },
    { q: "Do you cover areas outside Birmingham?", a: "Yes. We cover nearby towns including Wolverhampton, Coventry and Worcester, and arrange longer vehicle transport across the UK. Fuel delivery is listed for Birmingham." },
    { q: "What should I send for a quote?", a: "Send the vehicle registration, pickup location, destination and what happened. Let us know if the vehicle can roll and steer." },
    { q: "Can I book an auction yard collection?", a: "Yes. Send the yard name, lot number, collection slot and destination. Check the yard’s release instructions before booking." },
    { q: "How long might recovery take?", a: "Where possible, we typically arrive within 30–45 minutes. Traffic, location, access and the job can affect the estimate. Call for an estimate for your location." },
    { q: "Can you take my vehicle to a garage of my choice?", a: "Yes. Send the garage name and postcode so we can check the route and agree the drop-off. If the garage is closed, check whether it can accept a delivery out of hours." },
    { q: "Can you collect from a car park with a height barrier?", a: "Tell us the height limit, which level the vehicle is on and whether there are any locked gates. We’ll use those details to check access before confirming the job." },
    { q: "Can I arrange recovery in advance?", a: "Yes. Share the pickup and drop-off postcodes, your preferred date and whether the vehicle rolls and steers so we can check availability." },
  ];
  return (
    <section id="faq" className="section-pad">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <span className="chip">FAQs</span>
          <h2 className="mt-4 text-[28px] md:text-[40px]">Quick answers to <span className="gold-text">common questions.</span></h2>
          <p className="mt-4 text-muted-foreground">Can’t find what you need? Call us to talk through your situation.</p>
          <a href={telLink} className="btn-gold mt-6 text-sm"><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a>
        </Reveal>
        <Reveal dir="left">
          <div className="divide-y divide-white/5 rounded-3xl border border-white/10 bg-white/[0.02]">
            {faqs.map((f, i) => (
              <details key={f.q} className="group p-5 md:p-6" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-medium">
                  {f.q}
                  <ChevronDown className="h-4 w-4 text-[color:var(--gold)] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--gold)]/20">
            <Image src={RECOVERY_PHOTOS.eveningSuv.src} alt="" fill unoptimized className="object-cover object-[50%_65%] opacity-55" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.55) 70%, rgba(5,5,5,0.2) 100%)" }} />
            <div className="relative grid gap-8 p-8 md:grid-cols-[1.4fr_1fr] md:items-center md:p-12">
              <div>
                <span className="chip"><AlertTriangle className="h-3.5 w-3.5 text-[color:var(--gold)]" /> Need help right now?</span>
                <h2 className="mt-4 text-[28px] md:text-[40px]">Need to get your <span className="gold-text">vehicle moved?</span></h2>
                <p className="mt-3 text-muted-foreground">Call us any time or send your location, vehicle details and destination on WhatsApp.</p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <a href={telLink} className="btn-gold w-full justify-center md:w-auto"><Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}</a>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa w-full justify-center md:w-auto"><MessageCircle className="h-5 w-5" /> WhatsApp us</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
