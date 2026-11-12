const regionalAreas = [
  "Birmingham city centre", "Wolverhampton", "Coventry", "Worcester",
  "Lichfield", "Stoke-on-Trent", "Derby", "Leicester", "Gloucester", "Hereford",
  "Walsall", "Dudley", "Solihull", "Bromsgrove", "Redditch", "Kidderminster",
  "Bewdley", "Bridgnorth", "Shrewsbury", "Stafford", "Burton-upon-Trent",
  "Tamworth", "Nuneaton", "Warwick", "Stratford-upon-Avon",
  "Royal Leamington Spa", "Evesham", "Ross-on-Wye",
];

const coverageByDirection = [
  { direction: "North", areas: "Up to Stoke-on-Trent, Derby and the southern Peak District edge" },
  { direction: "East", areas: "Leicester, Nuneaton, Warwick and Stratford-upon-Avon" },
  { direction: "South", areas: "Evesham, northern Cotswold towns and Gloucester" },
  { direction: "West", areas: "Kidderminster, Bridgnorth, Shrewsbury and the Herefordshire border" },
];

const localAreas = [
  "Alvechurch", "Barnt Green", "Bromsgrove", "Frankley",
  "Kidderminster", "Droitwich", "Worcester", "Stourbridge",
];

export function AreaCoverage() {
  return (
    <section aria-labelledby="area-coverage" className="glass p-6 md:p-8">
      <h2 id="area-coverage" className="text-2xl font-semibold md:text-3xl">Area Coverage</h2>
      <p className="mt-3 text-sm text-muted-foreground">Share your pickup postcode so we can check availability for your recovery.</p>
      <h3 className="mt-6 text-lg font-semibold">Birmingham and surrounding towns</h3>
      <ul className="mt-3 flex flex-wrap gap-2 text-sm">
        {regionalAreas.map(area => <li key={area} className="chip">{area}</li>)}
      </ul>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">Coverage by direction</h3>
          <dl className="mt-3 space-y-2 text-sm text-muted-foreground">
            {coverageByDirection.map(({ direction, areas }) => (
              <div key={direction}>
                <dt className="inline font-semibold text-foreground">{direction} </dt>
                <dd className="inline">{areas}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Local areas</h3>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            {localAreas.map(area => <li key={area} className="chip">{area}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
