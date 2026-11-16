export function CoverageMap() {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
        <iframe
          className="block aspect-[3/4] w-full"
          title="West Midlands map centred between Wolverhampton and Coventry"
          src="https://www.google.com/maps?ll=52.49,-1.89&z=9&output=embed"
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
