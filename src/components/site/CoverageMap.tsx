export function CoverageMap() {
  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
        <iframe
          className="aspect-[4/3] max-h-[480px] w-full"
          title="Map of the United Kingdom, our nationwide breakdown recovery area"
          src="https://www.google.com/maps?q=United+Kingdom&z=5&output=embed"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <a
        className="mt-3 inline-block text-sm text-gold underline"
        href="https://www.google.com/maps/search/?api=1&query=West+Midlands%2C+UK"
        target="_blank"
        rel="noopener noreferrer"
      >
        View the West Midlands in Google Maps
      </a>
    </div>
  );
}
