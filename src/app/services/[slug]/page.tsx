import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Phone, MessageCircle, ArrowLeft, CheckCircle2 } from "lucide-react";
import { SERVICES, SITE, telLink, waLink } from "@/lib/site";
import { PageHero, InlineCTA } from "@/components/site/PageSections";


type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find(item => item.slug === slug);
  if (!service) notFound();
  return pageMetadata(`${service.title} | On-Call 24/7`, service.short, `/services/${slug}`);
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find(item => item.slug === slug);
  if (!service) notFound();
  return (
    <>
      <PageHero
        eyebrow={"Service"}
        title={<>{service.title}</>}
        sub={service.short}
      />

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <article>
            <Link href="/services" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> All services
            </Link>
            <h2 className="mt-6 text-3xl font-semibold">How we can help</h2>
            <p className="mt-4 text-muted-foreground">{service.long}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.details.map((b) => (
                <div key={b} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> {b}
                </div>
              ))}
            </div>

            <h3 className="mt-12 text-2xl font-semibold">How a booking works</h3>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><strong className="text-foreground">1. You call or WhatsApp</strong> — share your location, vehicle details and what happened.</li>
              <li><strong className="text-foreground">2. We check the job</strong> — tell us about access, the vehicle condition and your destination.</li>
              <li><strong className="text-foreground">3. We confirm the plan</strong> — ask about availability, timing and price.</li>
              <li><strong className="text-foreground">4. We arrange the job</strong> — we agree where to meet and, for transport, where to drop off.</li>
            </ol>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="glass p-6">
              <h4 className="text-lg font-semibold">Ask about this service</h4>
              <p className="mt-2 text-sm text-muted-foreground">Call or message us with the details for a quote.</p>
              <div className="mt-5 flex flex-col gap-3">
                <a href={telLink} className="btn-gold justify-center"><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a>
                <a href={waLink(`Hi, I need help with: ${service.title}`)} target="_blank" rel="noopener noreferrer" className="btn-wa justify-center"><MessageCircle className="h-4 w-4" /> WhatsApp us</a>
              </div>
              <div className="mt-6 border-t border-white/10 pt-5 text-xs text-muted-foreground">
                Available 24/7 · Based in Birmingham
              </div>
            </div>
          </aside>
        </div>
      </section>

      <InlineCTA />
    </>
  );
}
