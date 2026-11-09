export const SITE = {
  name: "On-Call 24/7 Breakdown Recovery",
  phoneDisplay: "+44 7425 953894",
  email: "Oncall247breakdownrecovery@gmail.com",
  hours: "24 hours a day, 7 days a week",
  areas: ["Birmingham", "West Midlands", "Across the UK"],
};

export const telLink = "tel:+447425953894";
export function waLink(message = "Hi, I'd like to ask about vehicle recovery.") {
  return `https://wa.me/447425953894?text=${encodeURIComponent(message)}`;
}

export const SERVICES = [
  {
    slug: "roadside-recovery", title: "Roadside Recovery",
    short: "Help when your vehicle stops and you cannot carry on.",
    long: "Tell us where the vehicle has stopped and what happened. We can help arrange collection from the roadside and transport to your chosen garage or another suitable destination.",
    details: ["Road name or map pin", "Vehicle make, model and registration", "Preferred drop-off address"],
  },
  {
    slug: "breakdown-recovery", title: "Breakdown Recovery",
    short: "24/7 recovery for vehicles that have broken down.",
    long: "If your vehicle will not start or a fault makes it unsuitable to drive, we can collect it from home, work or the roadside. Share the symptoms and where it needs to go so we can plan the recovery.",
    details: ["Pickup postcode", "Whether the vehicle rolls and steers", "Garage or drop-off postcode"],
  },
  {
    slug: "motorbike-recovery", title: "Motorbike Recovery",
    short: "Collection and transport for motorbikes that cannot be ridden.",
    long: "We can collect a motorbike after a breakdown or arrange a planned move. Tell us the make and model, whether it rolls and where you want it delivered so we can plan the loading and transport.",
    details: ["Bike make and model", "Whether the bike rolls freely", "Pickup and delivery locations"],
  },
  {
    slug: "fuel-delivery-birmingham", title: "Fuel Delivery in Birmingham",
    short: "Emergency fuel delivery when you run out in Birmingham.",
    long: "If you have run out of fuel in Birmingham, share your exact location and tell us whether the vehicle takes petrol or diesel. We can confirm availability for fuel delivery at your location.",
    details: ["Exact location in Birmingham", "Petrol or diesel", "Vehicle registration"],
  },
  {
    slug: "winch-recovery", title: "Winch Recovery",
    short: "Ditch and mud pull-outs for vehicles that cannot move under their own power.",
    long: "Winch recovery can help pull a vehicle out of a ditch or free one stuck in mud. Share a map pin and, if you can take them safely, photos of the vehicle and the surrounding ground. We use those details to assess access and confirm what the recovery involves.",
    details: ["Ditch pull-outs", "Mud pull-outs", "Photos showing the ground and access"],
  },
  {
    slug: "sports-car-recovery", title: "Sports Car Recovery",
    short: "Recovery and transport for sports cars and low-clearance vehicles.",
    long: "Tell us the model, ground clearance and whether the wheels turn freely. We use that information to plan loading for a sports car after a breakdown or for a booked collection.",
    details: ["Vehicle model and clearance", "Any damage or modifications", "Access at pickup and drop-off"],
  },
  {
    slug: "motorway-recovery", title: "Motorway Recovery",
    short: "Vehicle recovery after a motorway breakdown.",
    long: "When it is safe to contact us, share the motorway number, direction of travel and nearest junction, marker or service area. Tell us where the vehicle is stopped so we can assess the pickup.",
    details: ["Motorway and direction", "Nearest junction or marker", "Vehicle details and destination"],
  },
  {
    slug: "battery-jump-start", title: "Battery Jump Start",
    short: "Help starting a vehicle when its battery has gone flat.",
    long: "If a flat battery has left you stuck at home, at work or in a car park, call with the make, model and location. Tell us what happens when you try to start the vehicle so we can check if a jump start is suitable.",
    details: ["Vehicle make and model", "What happens when you try to start it", "Car park or site access details"],
  },
  {
    slug: "dvsa-recovery", title: "DVSA Recovery",
    short: "Collection arrangements for vehicles released for recovery following a DVSA stop.",
    long: "If a vehicle needs moving after a DVSA stop, share the vehicle details, site and collection instructions. Confirm that the site has authorised collection and tell us about any restrictions before we arrange pickup.",
    details: ["Inspection or holding site", "Collection authorisation", "Vehicle type and destination"],
  },
  {
    slug: "accident-recovery", title: "Accident Recovery",
    short: "Collection and transport for vehicles damaged in a collision.",
    long: "Once the vehicle is cleared for collection, tell us where it is, what damage you can see and whether it can roll or steer. We can discuss transport to your garage, repair centre or agreed destination.",
    details: ["Vehicle location and condition", "Whether collection has been cleared", "Agreed drop-off address"],
  },
  {
    slug: "auction-salvage-yard-pickups", title: "Auction and Salvage Yard Pickups",
    short: "Booked vehicle collection from auction sites and salvage yards.",
    long: "Send the yard name, lot number, collection slot and drop-off postcode. Let us know whether the vehicle runs, rolls and steers, and which release documents the yard requires.",
    details: ["Lot number and collection slot", "Yard release instructions", "Vehicle condition and destination"],
  },
  {
    slug: "scrap-car-van-service", title: "Scrap Car and Van Service",
    short: "Collection and transport for cars or vans going for scrap.",
    long: "If a car or van is ready to be moved for scrap, tell us where it is and where it needs to go. Mention missing wheels, locked steering or tight access so we can assess the pickup.",
    details: ["Vehicle type and condition", "Whether it has keys and wheels", "Pickup and scrap yard details"],
  },
  {
    slug: "tyre-changeover", title: "Tyre Changeover Service",
    short: "Help swapping a damaged wheel for a suitable spare.",
    long: "If a tyre has failed and you have a suitable spare, we can help with a wheel change when the location allows it. Tell us your registration, where you are and whether you have the locking wheel nut key.",
    details: ["Suitable spare wheel", "Locking wheel nut key if fitted", "Vehicle location and registration"],
  },
  {
    slug: "mobile-car-battery-fitting", title: "Mobile Car Battery Fitting",
    short: "Replacement battery fitting at your vehicle.",
    long: "Send your registration, make and model so we can check battery compatibility and availability. Let us know if the car has stop-start and where it is parked before booking the fitting.",
    details: ["Vehicle registration and model", "Whether the car has stop-start", "Access to the parked vehicle"],
  },
  {
    slug: "caravans-motorhomes", title: "Caravan and Motorhome Recovery",
    short: "Recovery and transport for caravans and motorhomes.",
    long: "Send the vehicle or caravan dimensions, weight if known, and a description of the fault. We can use those details to check whether we can collect it and what access is needed at each end.",
    details: ["Length, height and weight if known", "Vehicle or caravan condition", "Access at pickup and drop-off"],
  },
  {
    slug: "vans-minibuses-light-commercials", title: "Vans, Minibuses and Light Commercials",
    short: "Breakdown recovery and transport for light commercial vehicles.",
    long: "We can discuss recovery for a van, minibus or light commercial vehicle. Share the registration, vehicle size and whether it is carrying a load, plus the pickup and delivery locations.",
    details: ["Vehicle size and weight if known", "Any cargo or access limits", "Pickup and delivery postcodes"],
  },
  {
    slug: "forklift-collection-drop-off", title: "Forklift Collection and Drop-Off",
    short: "Booked forklift transport between sites.",
    long: "To arrange a forklift move, send the make, model, dimensions and weight. Tell us whether it runs and describe loading access at both sites so we can confirm whether the move is suitable.",
    details: ["Forklift model, dimensions and weight", "Whether the forklift drives", "Loading access at both sites"],
  },
];
