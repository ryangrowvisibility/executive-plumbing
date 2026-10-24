import Image from "next/image";
import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(905) 516-4865";
const TEL = "tel:+19055164865";
const SMS = "sms:+19055164865";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Executive%20Plumbing&query_place_id=ChIJHzSgkB1vzA0R3QCst_eJIIM";

const services = [
  {
    icon: "bolt",
    title: "24/7 Emergency Plumbing",
    text: "Burst pipe at 2 a.m. or a backup on a Saturday night, Matt answers the phone himself. Customers in town regularly see him at the door within 15 minutes to an hour.",
    featured: true,
  },
  {
    icon: "drop",
    title: "Sewer & Basement Backups",
    text: "When the basement floods or the sewer line backs up, we clear the line, get your drains flowing again and tell you plainly what caused it. If you need a cleanup crew afterwards, we will point you to a good one.",
  },
  {
    icon: "snow",
    title: "Frozen Water Lines",
    text: "Northern Ontario winters freeze lines, especially under mobile homes and in older houses. We thaw the line, restore your water and set things up so it is less likely to happen again, even at -35°.",
  },
  {
    icon: "waves",
    title: "Camp & Cottage Water Pumps",
    text: "No water at camp? We diagnose and repair seasonal water pumps and water systems, usually within 24 hours of your call, so the weekend is not lost.",
  },
  {
    icon: "search",
    title: "Leak Diagnosis & Older Homes",
    text: "Old cast iron tied into newer plastic lines, duplexes with combined plumbing, mystery drips in the ceiling. We trace the problem methodically and fix the cause, not just the symptom.",
  },
  {
    icon: "building",
    title: "Residential & Commercial Service",
    text: "Homes, rentals, camps and local businesses. You get a fixed-price quote before the work starts, so the bill at the end matches the number you agreed to.",
  },
];

const reviews = [
  { name: "Sherrie D.", job: "Frozen water line, -35°", text: "My 81-year-old mom had no water in the middle of a -35° cold snap. Matt turned his truck around, bought a heater for under her mobile home, set it up and got her water running again." },
  { name: "Tanya C.", job: "Saturday-night sewer backup", text: "We had a massive basement backup on a Saturday evening. Matt said he would be there in 15 minutes and he was. Fixed it at a fair price and even recommended a cleanup company." },
  { name: "Kelly C.", job: "Camp water pump", text: "Came out to our camp within 24 hours of the call and had the water pump fixed within an hour of arriving." },
  { name: "Jayson S.", job: "Basement flood, older duplex", text: "Our duplex has a messy mix of old cast iron and modern plumbing. He figured it out, explained it, and got both units running again." },
  { name: "George K.", job: "Plumbing service", text: "Fixed-price quotes and clear communication. And they actually pick up the phone, which is rare." },
  { name: "Kathy & Rick", job: "Service call", text: "Matt showed up early, worked quickly and the price was fair. We will be calling him again." },
];

const steps = [
  { t: "Call or text Matt", d: "Day or night, call (905) 516-4865. You talk to the plumber, not an answering service." },
  { t: "Tell us what is happening", d: "Water where it should not be, no water at all, or a drain that will not move. We will tell you what to shut off while we head over." },
  { t: "Fixed-price quote on site", d: "We find the cause and give you one price before any work starts. No surprises on the bill." },
  { t: "Fixed, cleaned up, explained", d: "We do the repair, tidy up and walk you through what failed and how to avoid it next time." },
];

const faqs = [
  { q: "Are you really available 24 hours a day?", a: "Yes. Executive Plumbing is open 24 hours, 7 days a week, and Matt answers the phone himself. Customers have had him at their door on Saturday nights and in the middle of winter cold snaps." },
  { q: "How fast can you get to me?", a: "In and around Espanola, customers often see us within 15 minutes to an hour for an emergency. For camps and further out on the North Shore or Manitoulin, we usually come out within 24 hours, and we will give you an honest arrival time when you call." },
  { q: "What areas do you serve?", a: "We are based at 153 Barber St in Espanola and serve Espanola, Massey, the North Shore, Manitoulin Island and Sudbury. If you are not sure whether you are in range, just call." },
  { q: "How does pricing work?", a: "You get a fixed-price quote before we start. Reviewers regularly mention that the price was fair and matched what they were told." },
  { q: "Do you work on camps, cottages and mobile homes?", a: "Yes. Camp water pumps and frozen lines under mobile homes are a big part of what we do up here." },
  { q: "Do you do commercial plumbing?", a: "Yes. We handle residential and commercial plumbing, from rentals and duplexes to local businesses." },
  { q: "My basement is flooding. What should I do right now?", a: "Shut off the main water valve if the water is coming from a supply line, keep people and pets away from any outlets near the water, and call (905) 516-4865. We will talk you through the next step while we are on the way." },
];

const areas = ["Espanola", "Massey", "Webbwood", "Nairn Centre", "Walford", "The North Shore", "Manitoulin Island", "Sudbury"];

const gallery = [
  { src: "/images/p7.jpg", alt: "Matt with the Executive Plumbing service truck on a wooded job-site road" },
  { src: "/images/p2.jpg", alt: "Executive Plumbing truck parked at a customer's house in autumn" },
  { src: "/images/p3.jpg", alt: "Executive Plumbing yard sign: serving the North Shore, Manitoulin and Sudbury, 24 hour emergency service" },
  { src: "/images/p5.jpg", alt: "Executive Plumbing pickup with toolbox cap, ready for the next call" },
  { src: "/images/p4.jpg", alt: "The Executive Plumbing truck in town between service calls" },
  { src: "/images/p1.jpg", alt: "Executive Plumbing sign at a rural property under a clear northern sky" },
  { src: "/images/p6.jpg", alt: "Basement floor after a water backup, before cleanup" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Executive Plumbing",
  telephone: "+1-905-516-4865",
  image: "https://executive-plumbing.growlocalvisibility.com/images/p7.jpg",
  url: "https://executive-plumbing.growlocalvisibility.com",
  address: { "@type": "PostalAddress", streetAddress: "153 Barber St", addressLocality: "Espanola", addressRegion: "ON", postalCode: "P5E 1S4", addressCountry: "CA" },
  areaServed: areas,
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "28" },
  founder: { "@type": "Person", name: "Matt Amy" },
  hasMap: MAPS,
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      {/* Utility strip */}
      <div className="hidden bg-navy text-[15px] text-white/90 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Espanola · Massey · North Shore · Manitoulin · Sudbury</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Open 24 hours, 7 days a week</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Executive Plumbing home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal text-white"><Icon name="wrench" className="h-5 w-5" /></span>
            <span className="leading-tight">
              <span className="block font-heading text-xl font-extrabold">Executive Plumbing</span>
              <span className="block text-[13px] text-muted">24/7 · Espanola, Ontario</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-[16px] font-semibold lg:flex" aria-label="Main">
            <a href="#services" className="hover:text-teal">Services</a>
            <a href="#reviews" className="hover:text-teal">Reviews</a>
            <a href="#about" className="hover:text-teal">About</a>
            <a href="#area" className="hover:text-teal">Service Area</a>
            <a href="#faq" className="hover:text-teal">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-heading text-lg font-extrabold text-teal-deep xl:block">{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden sm:inline-flex"><Icon name="phone" className="h-5 w-5" /> Call Now</a>
            <a href={TEL} className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-ink sm:hidden" aria-label={`Call ${PHONE}`}><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden bg-tint">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[15px] font-semibold text-teal-deep ring-1 ring-line">
                <span className="h-2 w-2 rounded-full bg-[oklch(0.65_0.17_150)]" /> Answering calls now, day or night
              </p>
              <h1 className="text-[clamp(2.3rem,5vw,3.75rem)]">24/7 Emergency Plumber in Espanola, Massey &amp; the North Shore</h1>
              <p className="mt-5 max-w-[58ch] text-[19px] text-muted">
                Basement backups, frozen lines, camp water pumps and everyday repairs. Matt picks up the phone himself, shows up fast and gives you a fixed price before any work starts.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn btn-cta text-[18px]"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href={SMS} className="btn btn-ghost text-[18px]"><Icon name="text" className="h-5 w-5" /> Text Us</a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[16px]">
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold hover:underline">
                  <Stars className="h-[18px] w-[18px]" /> 4.9 · 28 Google reviews
                </a>
                <span className="flex items-center gap-1.5 text-muted"><Icon name="clock" className="h-[18px] w-[18px] text-teal" /> Open 24/7</span>
                <span className="flex items-center gap-1.5 text-muted"><Icon name="tag" className="h-[18px] w-[18px] text-teal" /> Fixed-price quotes</span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[440px]">
              <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-20px_oklch(0.3_0.06_225/0.45)] ring-1 ring-line">
                <Image src="/images/p7.jpg" alt="Matt from Executive Plumbing with his service truck" width={810} height={1080} priority className="aspect-[4/5] w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-4 max-w-[290px] rounded-xl bg-white p-4 shadow-lg ring-1 ring-line sm:-left-10">
                <Stars className="h-4 w-4" />
                <p className="mt-1.5 text-[15px] leading-snug">&ldquo;Massive basement backup on a Saturday evening. Matt arrived 15 minutes later, as promised.&rdquo;</p>
                <p className="mt-1.5 text-[14px] font-semibold text-muted">Tanya C. · Google review</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-teal-deep text-white" aria-label="Why customers trust us">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { i: "thumb", t: "4.9 stars", s: "28 Google reviews" },
              { i: "clock", t: "24 hours, 7 days", s: "Matt answers himself" },
              { i: "tag", t: "Fixed-price quotes", s: "Agreed before we start" },
              { i: "home", t: "Homes, camps & businesses", s: "Residential & commercial" },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-3">
                <Icon name={x.i} className="mt-0.5 h-7 w-7 shrink-0 text-[oklch(0.85_0.08_200)]" />
                <div><p className="font-heading text-lg font-bold leading-tight">{x.t}</p><p className="text-[15px] text-white/75">{x.s}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-[62ch]">
              <p className="font-semibold text-teal">Plumbing services</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.75rem)]">What we fix, any hour of the day</h2>
              <p className="mt-4 text-muted">From a full sewer backup to a slow leak under the sink, one call gets a plumber headed your way with the tools to finish the job.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className={`reveal lift flex flex-col rounded-2xl bg-white p-7 ring-1 ${s.featured ? "ring-2 ring-teal" : "ring-line"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-soft text-teal-deep"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-teal px-3 py-1 text-[13px] font-semibold text-white">Most called for</span>}
                  </div>
                  <h3 className="mt-5 text-[22px]">{s.title}</h3>
                  <p className="mt-2.5 flex-1 text-[17px] text-muted">{s.text}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-semibold text-teal-deep hover:gap-2.5 transition-[gap]">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal flex flex-wrap items-end justify-between gap-6">
              <div>
                <Stars />
                <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,2.75rem)]">Rated 4.9 from 28 Google reviews</h2>
                <p className="mt-3 max-w-[56ch] text-muted">The word that keeps coming up: he actually picks up the phone. Here is what neighbours across the North Shore say.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-2xl bg-white p-6 ring-1 ring-line">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 flex-1 text-[17px] leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-teal-soft font-heading font-bold text-teal-deep">{r.name[0]}</span>
                    <span><span className="block font-semibold">{r.name}</span><span className="block text-[14px] text-muted">{r.job}</span></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal grid grid-cols-2 gap-4">
              <Image src="/images/p2.jpg" alt="Executive Plumbing truck at a customer's home" width={600} height={800} className="aspect-[3/4] w-full rounded-2xl object-cover" />
              <Image src="/images/p3.jpg" alt="Executive Plumbing yard sign listing the North Shore, Manitoulin and Sudbury" width={810} height={1080} className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover" />
            </div>
            <div className="reveal">
              <p className="font-semibold text-teal">About Executive Plumbing</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.75rem)]">The local plumber who answers the phone</h2>
              <p className="mt-5">Executive Plumbing is Matt Amy&rsquo;s plumbing company, run out of 153 Barber St in Espanola with help from Mark. We look after homes, camps and businesses from Espanola and Massey across the North Shore, out to Manitoulin and into Sudbury.</p>
              <p className="mt-4 text-muted">Up here, plumbing problems do not wait for business hours. A line freezes at -35°, a sewer backs up on a Saturday night, the camp pump quits on a long weekend. That is why we run 24 hours a day and why Matt keeps his phone on. When one customer&rsquo;s 81-year-old mother lost water in a cold snap, Matt turned around, bought a heater for under her mobile home and stayed until the water ran.</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { i: "phone", t: "Picks up the phone", d: "No call centre. You talk to the plumber." },
                  { i: "bolt", t: "Shows up fast", d: "Often 15 minutes to an hour in town." },
                  { i: "tag", t: "Fixed, fair prices", d: "One quote, agreed before work starts." },
                  { i: "heart", t: "Community-minded", d: "Goes out of the way for neighbours in need." },
                ].map((x) => (
                  <li key={x.t} className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal-soft text-teal-deep"><Icon name={x.i} className="h-5 w-5" /></span>
                    <span><span className="block font-semibold">{x.t}</span><span className="block text-[16px] text-muted">{x.d}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-[60ch]">
              <p className="font-semibold text-teal">How it works</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.75rem)]">From your call to running water in four steps</h2>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.t} className="reveal rounded-2xl bg-white p-7 ring-1 ring-line">
                  <span className="font-heading text-6xl font-extrabold leading-none text-teal/25">{i + 1}</span>
                  <h3 className="mt-4 text-[21px]">{s.t}</h3>
                  <p className="mt-2 text-[17px] text-muted">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 md:py-24" aria-labelledby="work-h">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-[60ch]">
              <p className="font-semibold text-teal">On the road</p>
              <h2 id="work-h" className="mt-2 text-[clamp(1.9rem,3.6vw,2.75rem)]">Out on calls across the North Shore</h2>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {gallery.map((g, i) => (
                <div key={g.src} className={`reveal overflow-hidden rounded-2xl ring-1 ring-line ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                  <Image src={g.src} alt={g.alt} width={810} height={1080} className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <p className="font-semibold text-teal">Service area</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.75rem)]">Plumbing for Espanola and the North Shore</h2>
              <p className="mt-4 text-muted">Based on Barber Street in Espanola. We cover the towns, camps and rural properties along Highway 17 and Highway 6, plus Manitoulin Island and Sudbury.</p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {areas.map((a) => (
                  <li key={a} className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[16px] font-semibold ring-1 ring-line"><Icon name="pin" className="h-4 w-4 text-teal" /> {a}</li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-line">
                <p className="font-heading text-lg font-bold">Executive Plumbing</p>
                <p className="mt-1 text-muted">153 Barber St, Espanola, ON P5E 1S4</p>
                <p className="mt-1 text-muted">Open 24 hours, every day</p>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 font-semibold text-teal-deep">Get directions <Icon name="arrow" className="h-4 w-4" /></a>
              </div>
            </div>
            <div className="reveal min-h-[380px] overflow-hidden rounded-2xl ring-1 ring-line">
              <iframe title="Map of Executive Plumbing in Espanola, Ontario" src="https://maps.google.com/maps?q=153%20Barber%20St%2C%20Espanola%2C%20ON%20P5E%201S4&output=embed" className="h-full min-h-[380px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="reveal lg:sticky lg:top-28 lg:self-start">
              <p className="font-semibold text-teal">FAQ</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.75rem)]">Questions people ask before they call</h2>
              <p className="mt-4 text-muted">Do not see yours? Call or text Matt at <a href={TEL} className="font-semibold text-teal-deep underline">{PHONE}</a>.</p>
            </div>
            <div className="reveal divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-center justify-between gap-4 text-[19px] font-semibold">
                    {f.q}
                    <span className="plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal-soft text-teal-deep"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 max-w-[65ch] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 pb-16 md:px-6 md:pb-24">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 rounded-3xl bg-teal-deep px-7 py-12 text-white md:flex-row md:items-center md:px-14 md:py-16">
            <div>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)]">Water where it shouldn&rsquo;t be? Call Matt now.</h2>
              <p className="mt-3 text-[18px] text-white/80">Open 24 hours, 7 days a week. Fixed-price quotes, fast arrival.</p>
            </div>
            <a href={TEL} className="btn btn-cta shrink-0 px-7 text-[19px]"><Icon name="phone" className="h-5 w-5" /> {PHONE}</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-white pb-28 pt-14 md:pb-14">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-[1.3fr_1fr_1fr] md:px-6">
          <div>
            <p className="font-heading text-2xl font-extrabold">Executive Plumbing</p>
            <p className="mt-3 text-muted">153 Barber St<br />Espanola, ON P5E 1S4</p>
            <a href={TEL} className="mt-3 block font-heading text-xl font-bold text-teal-deep">{PHONE}</a>
            <p className="mt-1 text-muted">Open 24 hours, 7 days a week</p>
            <p className="mt-3 text-[15px] text-muted">Owner: Matt Amy</p>
          </div>
          <div>
            <p className="font-semibold">Services</p>
            <ul className="mt-3 space-y-2 text-[16px] text-muted">
              {services.map((s) => <li key={s.title}><a href="#services" className="hover:text-ink">{s.title}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="font-semibold">Service area</p>
            <ul className="mt-3 space-y-2 text-[16px] text-muted">
              {areas.map((a) => <li key={a}>{a}</li>)}
            </ul>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-teal-deep">Google reviews <Icon name="arrow" className="h-4 w-4" /></a>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-[1200px] px-5 text-[14px] text-muted md:px-6">© {new Date().getFullYear()} Executive Plumbing, Espanola, Ontario.</p>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn btn-ghost"><Icon name="text" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
