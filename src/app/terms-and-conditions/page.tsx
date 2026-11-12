import { pageMetadata } from "@/lib/seo";
import { SITE, telLink } from "@/lib/site";

export const metadata = pageMetadata(
  "Terms and Conditions | On-Call 24/7 Breakdown Recovery",
  "Read how bookings, quotes, payment, access and cancellations work for On-Call 24/7 Breakdown Recovery.",
  "/terms-and-conditions",
);

const terms = [
  {
    title: "Bookings and availability",
    body: "You can contact us 24 hours a day, seven days a week. A booking is confirmed when we accept the job and you agree to the service and price. Availability depends on your location, access, weather, traffic and suitable equipment. Arrival times are estimates and may change.",
  },
  {
    title: "Quotes and payment",
    body: "We confirm the price, payment method and when payment is due before you book. Our quote is based on the information you give us. If the job differs from what we agreed, we’ll explain any change in price and ask you to agree before we carry out extra work.",
  },
  {
    title: "Your vehicle and access",
    body: "Please provide accurate pickup and drop-off details, the vehicle’s condition and any access restrictions. Tell us if the vehicle has no keys, cannot roll or steer, or has been modified. Make sure you have permission for us to collect it and that any site, yard or garage can give us access.",
  },
  {
    title: "Safety and limits of the service",
    body: "We carry out the agreed work with reasonable care and skill. We may need to pause or decline a job if the vehicle, site or conditions make recovery unsafe or unsuitable for the available equipment. You can ask us about insurance cover when you call. Your statutory rights apply.",
  },
  {
    title: "Changes and cancellations",
    body: "Call us as soon as possible if you need to change or cancel a booking. Before you book, we’ll explain any cancellation terms that apply. If you have a statutory right to cancel and expressly ask us to start work during the cancellation period, you may have to pay for the work already done, where the law allows.",
  },
];

export default function TermsAndConditions() {
  return (
    <article className="container-x section-pad">
      <div className="max-w-3xl">
        <h1 className="text-[34px] font-bold tracking-tight md:text-[52px]">Terms and Conditions</h1>
        <p className="mt-4 text-muted-foreground">These terms cover recovery and transport bookings with {SITE.name}.</p>
        {terms.map(({ title, body }) => (
          <section key={title} className="mt-8">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-muted-foreground">{body}</p>
          </section>
        ))}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Questions or complaints</h2>
          <p className="mt-2 text-muted-foreground">
            Call <a className="text-gold underline" href={telLink}>{SITE.phoneDisplay}</a> or email{" "}
            <a className="break-all text-gold underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            If you’re contacting us about a booking, include the pickup date and vehicle registration.
          </p>
        </section>
      </div>
    </article>
  );
}
