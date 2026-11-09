type RecoveryPhoto = { src: string; alt: string };

export const RECOVERY_PHOTOS = {
  greySuv: {
    src: "/images/recovery/grey-suv-flatbed-recovery.webp",
    alt: "Grey SUV on a flatbed beside a workshop",
  },
  audiQ5: {
    src: "/images/recovery/audi-q5-flatbed-transport.webp",
    alt: "Grey Audi Q5 secured to a flatbed by its wheels",
  },
  coastalTruck: {
    src: "/images/recovery/flatbed-recovery-truck-coast.webp",
    alt: "Grey flatbed recovery truck parked beside the coast",
  },
  bmwBreakdown: {
    src: "/images/recovery/bmw-breakdown-recovery.webp",
    alt: "Red BMW with its bonnet open on a recovery truck",
  },
  wednesburyAuction: {
    src: "/images/recovery/wednesbury-auction-vehicle-collection.webp",
    alt: "Two cars loaded onto flatbeds at Manheim Auctions in Wednesbury",
  },
  silverBmw: {
    src: "/images/recovery/silver-bmw-flatbed-transport.webp",
    alt: "Silver BMW on a recovery truck at a petrol station",
  },
  roadsideCar: {
    src: "/images/recovery/roadside-car-recovery.webp",
    alt: "Grey recovery truck carrying a dark car on a residential street",
  },
  redGla: {
    src: "/images/recovery/mercedes-gla-flatbed-transport.webp",
    alt: "Red Mercedes GLA secured on a flatbed",
  },
  blackAmg: {
    src: "/images/recovery/mercedes-amg-vehicle-transport.webp",
    alt: "Black Mercedes AMG secured to a flatbed with green wheel straps",
  },
  greyPorsche: {
    src: "/images/recovery/porsche-flatbed-transport.webp",
    alt: "Grey Porsche secured to a recovery truck on a road",
  },
  classicSportsCar: {
    src: "/images/recovery/classic-sports-car-recovery.webp",
    alt: "Red classic sports car loaded onto a flatbed outside houses",
  },
  eveningSuv: {
    src: "/images/recovery/evening-suv-recovery.webp",
    alt: "Grey SUV loaded on a recovery truck under petrol station lights",
  },
  yardAudi: {
    src: "/images/recovery/auction-yard-audi-collection.webp",
    alt: "Dark Audi hatchback on a flatbed at a vehicle yard",
  },
  nightSuv: {
    src: "/images/recovery/nighttime-suv-recovery.webp",
    alt: "White recovery truck carrying a white SUV after dark",
  },
  redSportsCar: {
    src: "/images/recovery/red-sports-car-transport.webp",
    alt: "Red sports car secured on a flatbed with wheel straps",
  },
  garageDropOff: {
    src: "/images/recovery/garage-drop-off-flatbed.webp",
    alt: "Black hatchback on a recovery truck outside a tyre garage",
  },
  damagedHatchback: {
    src: "/images/recovery/accident-damaged-hatchback-recovery.webp",
    alt: "Red hatchback with rear-side damage strapped to a flatbed",
  },
  rangeRover: {
    src: "/images/recovery/range-rover-flatbed-transport.webp",
    alt: "White Range Rover loaded onto a grey recovery truck",
  },
  nightTruck: {
    src: "/images/recovery/night-breakdown-recovery-truck.webp",
    alt: "Recovery truck with amber lights carrying a dark car at night",
  },
  silverMercedes: {
    src: "/images/recovery/silver-mercedes-flatbed-recovery.webp",
    alt: "Silver Mercedes coupé secured on a flatbed beside a road barrier",
  },
} satisfies Record<string, RecoveryPhoto>;

export const SERVICE_PHOTOS: Partial<Record<string, RecoveryPhoto>> = {
  "roadside-recovery": RECOVERY_PHOTOS.roadsideCar,
  "breakdown-recovery": RECOVERY_PHOTOS.bmwBreakdown,
  "sports-car-recovery": RECOVERY_PHOTOS.redSportsCar,
  "accident-recovery": RECOVERY_PHOTOS.damagedHatchback,
  "auction-salvage-yard-pickups": RECOVERY_PHOTOS.wednesburyAuction,
};
