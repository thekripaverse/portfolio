import AccordionGallery from "./creative/AccordionGallery";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-32 border-b border-black/5 bg-[#FAF6EE] relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20 text-left">
          <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-[#B28D95] uppercase block">
            04 / EXPERIENTIAL ARCHIVE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1C1412] mt-4 uppercase">
            MILESTONES & EVENTS
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#777777] max-w-xl mt-2 uppercase tracking-wide">
            Interact with the gallery panels below to expand each milestone. Click any panel to jump directly to its detailed scroll narrative.
          </p>
        </div>

        {/* Dynamic Accordion Gallery */}
        <AccordionGallery />
      </div>
    </section>
  );
}
