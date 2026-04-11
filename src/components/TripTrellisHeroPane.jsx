const featureCards = [
  {
    number: "01",
    title: "Stay grounded",
    body: "Plan around your hotel area, or choose the strongest base first.",
  },
  {
    number: "02",
    title: "Shape the day",
    body: "Balance food, culture, nightlife, and wandering into a real sequence.",
  },
  {
    number: "03",
    title: "Edit everything",
    body: "Add, replace, drag, remove, and save without rebuilding the trip.",
  },
];

export default function TripTrellisHeroPane() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[#EAE3D5] bg-gradient-to-br from-[#FFFCF7] via-[#FAF7F2] to-[#EEE3D2] p-8 text-[#1C1A17] shadow-[0_30px_80px_rgba(42,30,20,0.16)] sm:p-10 lg:p-12">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C2825B]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-[#4C4B3C]/12 blur-3xl" />

      <div className="relative">
        <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#EAE3D5] bg-white/70 px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-widest text-[#B5764D] shadow-[0_8px_22px_rgba(42,30,20,0.06)]">
          <span className="h-2 w-2 rounded-full bg-[#C2825B] shadow-[0_0_0_4px_rgba(194,130,91,0.15)]" />
          DETAILED TRIP BRIEFS, NOT GENERIC LISTS
        </p>

        <h1 className="max-w-[11ch] font-sans text-[clamp(3.35rem,5.7vw,6.8rem)] font-black leading-[0.9] -tracking-[0.075em] text-[#1C1A17]">
          Plan city days that actually make sense.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-[#6B6258] lg:text-[1.05rem]">
          Choose one city, set your dates, and tell TripTrellis how you travel.
          It turns that into a hotel-aware planning workspace with a stronger
          base, a deeper city library, and a day-by-day itinerary you can keep
          shaping as you go.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {["Hotel-aware planning", "Better day flow", "Editable itinerary"].map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-[#EAE3D5] bg-white px-4 py-2 text-sm font-bold text-[#5E554D] shadow-[0_8px_18px_rgba(42,30,20,0.05)]"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#4C4B3C] to-[#34352A] p-7 text-white shadow-[0_34px_78px_rgba(28,24,18,0.34),0_10px_28px_rgba(28,24,18,0.22),inset_0_1px_0_rgba(255,255,255,0.12)]">
          <div className="space-y-3">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-widest text-[#E8BE83]">
              HOW TRIPTRELLIS HELPS
            </p>
            <h2 className="max-w-2xl text-2xl font-black leading-tight -tracking-[0.035em] text-[#FFF8EE]">
              Built for trips that need structure, taste, and room to edit.
            </h2>
          </div>

          <div className="my-6 h-px bg-white/10" />

          <div className="grid gap-4 md:grid-cols-3">
            {featureCards.map((card) => (
              <article
                key={card.number}
                className="rounded-[1.25rem] border border-white/30 bg-[#FAF7F2] px-[1.125rem] py-[1.0625rem] text-[#1C1A17] shadow-[0_16px_28px_rgba(14,12,9,0.2)]"
              >
                <span className="text-xs font-black tracking-widest text-[#B5764D]">
                  {card.number}
                </span>
                <h3 className="mt-[0.6875rem] text-base font-black leading-tight">
                  {card.title}
                </h3>
                <p className="mt-[0.5625rem] text-sm leading-[1.55] text-[#6B6258]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
