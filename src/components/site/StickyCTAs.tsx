import { Phone, MessageCircle } from "lucide-react";
import { SITE, waLink, telLink } from "@/lib/site";

export function StickyCTAs() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="group flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_10px_30px_-10px_rgba(31,149,80,.6)] transition-transform hover:scale-105"
        style={{ background: "linear-gradient(180deg,#2AB663,#1F9550)" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={telLink}
        aria-label={`Call ${SITE.phoneDisplay}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full text-black shadow-[0_10px_30px_-10px_rgba(255,208,0,.7)] transition-transform hover:scale-105"
        style={{ background: "linear-gradient(180deg,#FFE470,#FFD000)" }}
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
