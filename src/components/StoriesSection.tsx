import { achievementsData } from "../data/portfolioData";
import ScrollReveal from "./creative/ScrollReveal";

interface SceneImage {
  src: string;
  caption?: string;
  rotation?: number;
  offset?: string;
}

export default function StoriesSection() {
  // Map images for each scene matching the exact requirements
  const scenePhotoMappings: Record<string, SceneImage[]> = {
    "ai-by-her": [
      { src: "/data/aibyher.jpeg", caption: "AI BY HER REPRESENTATION", rotation: -1.5 },
      { src: "/data/love-to-travel (2).jpeg", caption: "NEW DELHI SUMMIT VENUE", rotation: 2, offset: "mt-6 ml-6" },
      { src: "/data/Monisha-mentor.jpeg", caption: "DR. MONISHA RAGUNATHAN MENTORSHIP", rotation: -1, offset: "mt-12 ml-12" }
    ],
    "dhruva": [
      { src: "/data/dhruva1.jpeg", caption: "DHRUVA 2025 REGISTRATION SETUP", rotation: 1 },
      { src: "/data/dhruva2.jpeg", caption: "PROMPT WIZARD CHALLENGE LAB", rotation: -2, offset: "mt-6 ml-6" },
      { src: "/data/dhruva3.jpeg", caption: "CREATIVE WINNERS STAGE", rotation: 1.5, offset: "mt-12 ml-12" }
    ],
    "hcl-guvi": [
      { src: "/data/HCL-GUVI.jpeg", caption: "TEAM ASTRACHIP GRAND FINALE CEREMONY", rotation: -1 }
    ],
    "leadership": [
      { src: "/data/conducting-events.jpeg", caption: "WORKSHOP EVENT INTRODUCTION", rotation: -1.5 },
      { src: "/data/beyond-academics.jpeg", caption: "COLLABORATIVE PLANNING SESSIONS", rotation: 2 },
      { src: "/data/beyond-academics2.jpeg", caption: "ORGANIZATIONAL COORDINATION", rotation: -2 },
      { src: "/data/GUIDE-SURENTHER-SIR.jpeg", caption: "DR. SURENTHER SIR GUIDANCE", rotation: 1 },
      { src: "/data/image-workshop.jpeg", caption: "HANDS-ON IMAGE PROCESSING LABS", rotation: -1 },
      { src: "/data/image-workshop2.jpeg", caption: "DEEP LEARNING PROMPT WALKTHROUGHS", rotation: 2.5 }
    ],
    "smartathon": [
      { src: "/data/smartathon.jpeg", caption: "CHENNAI ARRIVAL & ASSEMBLY", rotation: -2 },
      { src: "/data/SMARTATHON (2).jpeg", caption: "SPECIAL INNOVATION PRIZE AWARD", rotation: 2, offset: "mt-8 ml-8" }
    ],
    "tnau": [
      { src: "/data/TNAU.jpeg", caption: "TNAU CROP ZONES RESEARCH VISIT", rotation: 1.5 },
      { src: "/data/TNAU2.jpeg", caption: "DEPARTMENT OF AGRONOMY INFRASTRUCTURE", rotation: -1.5, offset: "mt-6 ml-6" },
      { src: "/data/TNAU3.jpeg", caption: "VET MONITORING SYSTEM FIELD TESTS", rotation: 1, offset: "mt-12 ml-12" }
    ],
    "vigyan": [
      { src: "/data/VIGYAN1.jpeg", caption: "GESTURE INTERACTION DEMONSTRATION", rotation: -1.5 },
      { src: "/data/VIGYAN2.jpeg", caption: "PEERS AND FACULTY REVIEW", rotation: 2.5, offset: "mt-8 ml-8" }
    ],
    "kit": [
      { src: "/data/msmehackathon.jpeg", caption: "MSME IDEA HACKATHON PITCH PANEL", rotation: 0 }
    ]
  };

  const getStoryText = (id: string) => {
    switch (id) {
      case "ai-by-her":
        return {
          headline: "FROM VISION TO GLOBAL VALIDATION",
          paragraphs: [
            "Our student team made history at the AI BY HER – India AI Impact Summit 2026, standing among the World’s Top 1.5% at the AI by HER – Global Impact Challenge.",
            "Out of 8,500+ teams worldwide, we emerged as one of the Top 150 Finalists and proudly represented as the only student team in the finals at Sushma Swaraj Bhawan, New Delhi.",
            "It was a proud moment of women-led AI innovation, global recognition, and a milestone powered by inclusion, mentorship, and investor-backed opportunities.",
            "This is not just participation. This is impact."
          ],
          metadata: "TEAM ASTRACHIP • SUSHMA SWARAJ BHAWAN, NEW DELHI"
        };
      case "dhruva":
        return {
          headline: "CREATIVE CASTER: THE POWER OF AI PROMPTING",
          paragraphs: [
            "I successfully conducted the 'Creative Caster (Prompt Wizard)' event at Dhruva 2025, alongside my amazing teammate Madhu Rithika and with the guidance of our dedicated mentors, Navaneetha Krishnan Sir.",
            "A special thanks to Surenther Sir for his valuable ideas and mentorship, which greatly contributed to the success of this event. His guidance and support throughout Dhruva 2025 meant a lot to us, providing invaluable experience and insights on how to effectively promote and execute an event.",
            "This event was designed to push the boundaries of imagination and technical skills. Participants were given a set amount of time to analyze a topic and craft compelling AI-generated images using prompt engineering techniques.",
            "It was fascinating to see how each participant approached the task differently. Some focused on artistic creativity, while others emphasized technical precision, ensuring the AI-generated images were as close to reality as possible. I learned the importance of iterative refinement—adjusting and tweaking prompts to get closer to the desired output."
          ],
          metadata: "MADHU RITHIKA, KRIPASREE • KARPAGAM COLLEGE OF ENGINEERING"
        };
      case "hcl-guvi":
        return {
          headline: "TOP 2% NATIONWIDE OUT OF 40,000+ BUILDERS",
          paragraphs: [
            "Finalists at AI Impact Buildathon – HCL GUVI. Top 2% among 40,000+ participants. That moment… I don’t even have words. I felt like I was flying. Like all the sleepless nights, self-doubt, and quiet efforts were finally being acknowledged.",
            "Throughout this phase, Dr. Surenther Sir stood as a steady guide, always there with the right direction when we needed it the most.",
            "Then came Delhi. More than a city, it became a turning point. We met people. Built connections. Explored powerful ideas and projects. And somewhere in between all those conversations and startup showcases, we felt something beautiful—that realization: 'We already know this. We’ve already worked on things like this. We are not behind.'",
            "We didn’t win a trophy. But we walked back with something far more valuable: Pride in how far we’ve come, in the path we’re walking, and in the people who walked with us. My deepest gratitude to Monisha ma’am, for being more than a mentor — for being a constant source of care, belief, and strength."
          ],
          metadata: "TEAM ASTRACHIP • BHARAT MANDAPAM, NEW DELHI"
        };
      case "leadership":
        return {
          headline: "LEADING PEERS: IMAGE PROCESSING & DEEP LEARNING",
          paragraphs: [
            "I co-organized my first-ever workshop @KCE! This two-day workshop (16th & 17th Oct 2024) was an exciting dive into the basics of Image Processing, Deep Learning, and a touch of ML.",
            "The hands-on sessions were a highlight—processing images and predicting outcomes based on input was not only fun but also deeply insightful. The workshop was made even more impactful thanks to the resource person Mohammed Harun Babu R, who brought impressive Expertise, Experience, and Knowledge to the table.",
            "And now coming to my team, what truly made this experience unforgettable was the chance to Lead and Collaborate with my peers, gaining practical knowledge and fostering teamwork.",
            "The entire journey—from planning and coordinating to executing the workshop—has been an invaluable learning experience that has inspired me to embrace more leadership roles in the future, coordinating complex tech builds and collaborating with mentors."
          ],
          metadata: "CO-ORGANIZER / COORDINATOR • KCE LABS"
        };
      case "smartathon":
        return {
          headline: "CHAOS & CONFIENCE: SOLAR DEWATERING TWIN",
          paragraphs: [
            "What started as chaos turned into one of the most unforgettable experiences of our journey. We were a team of 6, heading to Smartathon 2.0 with barely any time to prepare. Between our hectic schedules and organizing a hackathon for our own college fest, building a strong prototype felt almost impossible.",
            "The moment we stepped in and saw other teams with massive, polished prototypes… we lost confidence instantly. But that’s when our mentor, Dr. Monisha ma’am, reminded us: 'If your idea is strong, it will stand out.' That stuck with us.",
            "Our problem statement—solar mine dewatering—was common among teams, so we knew we had to think differently. After hours of brainstorming, we finally landed on a unique approach… but there was a catch—we didn’t have enough components. We tried Blinkit, Zepto, but there was no service in that area.",
            "22 hours in... final evaluation. Other teams had prototypes that looked like fully designed modular kitchens. Ours? A mini kitchen set. But the judges liked our innovation. They saw potential. Even when our dewatering demo failed at the last minute, they gave us a second chance. We ran around, borrowed components, fixed things in a rush… and made it work. We walked away with the Special Prize for Innovation."
          ],
          metadata: "TEAM ASTRACHIP • CHENNAI FINALS"
        };
      case "tnau":
        return {
          headline: "ON-SITE AGRITECH & VETTECH VISIT",
          paragraphs: [
            "Recently, I had the incredible opportunity to visit Tamil Nadu Agricultural University (TNAU) as part of our project training, and it was nothing short of inspiring!",
            "We explored the agricultural research zones, where a wide variety of crops are cultivated purely for research and development. Visiting the Department of Agronomy gave us hands-on exposure to experimental farming techniques and sustainable crop management practices.",
            "What truly amazed us was the integration of AI in agriculture and veterinary sciences! From poultry monitoring to livestock health tracking, we discovered real-world applications where AI is already making a difference and areas where it's still needed.",
            "Meeting with domain experts and observing cattle, goats, sheep, and poultry in their research environments gave us valuable insights into how technology can revolutionize traditional practices and sparked curiosity in AgriTech and VetTech."
          ],
          metadata: "TRAINING RESEARCH TEAM • TNAU CAMPUS"
        };
      case "vigyan":
        return {
          headline: "VIGYAN PROJECT EXPO: VIRTUAL GESTURE SYSTEM",
          paragraphs: [
            "I recently had the wonderful opportunity to participate in the 3-day Project Expo – Vigyan 2025, where I, along with my teammate Madhu Rithika R K, showcased our project 'Gesture-Based System (Virtual Hand Gesture Mouse)'.",
            "Our project aimed at exploring how human-computer interaction can move beyond traditional devices like the mouse and keyboard, making technology more natural, accessible, and intuitive. Presenting it to freshers, parents, faculty, and peers was an overwhelming yet fulfilling experience.",
            "Beyond showcasing our work, the expo was a great learning platform. I got to explore many innovative projects presented by fellow participants, and I learned immensely from my seniors, who brought in their expertise, exposure, and real-world perspectives."
          ],
          metadata: "MADHU RITHIKA, KRIPASREE • VIGYAN EXPO"
        };
      case "kit":
        return {
          headline: "MSME IDEA HACKATHON 5.0 REVIEW PITCH",
          paragraphs: [
            "As a team, myself, Madhu Rithika R K and RAJ MOORTHY B had the incredible opportunity to pitch our idea at the MSME IDEA HACKATHON 5.0 – Review Process held at Karpagam Innovation Centre (KIC), Karpagam College of Engineering.",
            "We are truly grateful for the valuable feedback and insights shared by the panel of experts, which helped us look at our idea from new perspectives and refine it further.",
            "A special thanks to the mentors and reviewers for guiding us in this journey of innovation and entrepreneurship, supporting our path from raw research prototypes to scaled commercial ideas."
          ],
          metadata: "MADHU, KRIPASREE, RAJ • KARPAGAM INNOVATION CENTRE"
        };
      default:
        return { headline: "", paragraphs: [], metadata: "" };
    }
  };

  return (
    <section id="stories" className="bg-[#FAF6EE] text-[#1C1412] relative z-10 select-none">
      {/* Visual Divider / Line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-black/10 my-8"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-36 pb-36">
        {achievementsData.map((ach, idx) => {
          const indexStr = (idx + 1).toString().padStart(2, "0");
          const isEven = idx % 2 === 0;
          const storyData = getStoryText(ach.id);
          const photos = scenePhotoMappings[ach.id] || [];

          return (
            <div
              key={`scene-${ach.id}`}
              id={`scene-${indexStr}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start pt-16"
            >
              {/* --- ALTERNATING TEXT COLUMN --- */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? "order-1" : "order-1 lg:order-2"
                }`}
              >
                {/* Scene Meta Indicator */}
                <ScrollReveal delay={0.05} className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-[10px] font-black tracking-widest text-[#B28D95] uppercase">
                      CHAPTER {indexStr}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5C2533]" />
                    <span className="font-mono text-[9px] font-bold tracking-widest text-[#777777] uppercase">
                      {storyData.metadata}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-[#1C1412] uppercase">
                    {ach.title.split(" — ")[0].split(" / ")[0]}
                  </h3>
                  <p className="font-display text-sm font-semibold tracking-wider text-[#C0A0A5] uppercase">
                    {storyData.headline}
                  </p>
                </ScrollReveal>

                {/* Progressive Story Paragraphs */}
                <div className="space-y-4 font-sans text-sm sm:text-base leading-relaxed text-[#554A47]">
                  {storyData.paragraphs.map((p, pIdx) => (
                    <ScrollReveal
                      key={pIdx}
                      delay={0.1 + pIdx * 0.1}
                      baseRotation={3}
                      blurStrength={6}
                      enableBlur={true}
                    >
                      <p>{p}</p>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* --- ALTERNATING IMAGES Composition COLUMN --- */}
              <div
                className={`lg:col-span-6 flex justify-center relative min-h-[300px] md:min-h-[400px] w-full ${
                  isEven ? "order-2" : "order-2 lg:order-1"
                }`}
              >
                {/* SINGLE IMAGE LAYOUT (HCL-GUVI) */}
                {photos.length === 1 && (
                  <ScrollReveal
                    delay={0.2}
                    className="w-full max-w-lg overflow-hidden border border-black/10 rounded-lg shadow-xl bg-stone-100"
                  >
                    <img
                      src={photos[0].src}
                      alt={photos[0].caption}
                      style={{ transform: `rotate(${photos[0].rotation || 0}deg)` }}
                      className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-102 hover:scale-100"
                      loading="lazy"
                    />
                    {photos[0].caption && (
                      <div className="bg-[#1C1412] text-[#FAF6EE] text-[8px] font-mono uppercase tracking-widest px-4 py-3 text-center border-t border-white/10">
                        {photos[0].caption}
                      </div>
                    )}
                  </ScrollReveal>
                )}

                {/* TWO IMAGES COLLAGE LAYOUT (Smartathon, Vigyan, KIT) */}
                {photos.length === 2 && (
                  <div className="relative w-full max-w-lg flex items-center justify-center">
                    <ScrollReveal
                      delay={0.15}
                      className="w-[70%] z-10 border border-black/10 rounded shadow-lg overflow-hidden -translate-x-12 -translate-y-4"
                    >
                      <img
                        src={photos[0].src}
                        alt={photos[0].caption}
                        style={{ transform: `rotate(${photos[0].rotation || 0}deg)` }}
                        className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                      />
                    </ScrollReveal>
                    <ScrollReveal
                      delay={0.3}
                      className="w-[65%] absolute right-4 top-12 z-20 border border-black/15 rounded shadow-2xl overflow-hidden"
                    >
                      <img
                        src={photos[1].src}
                        alt={photos[1].caption}
                        style={{ transform: `rotate(${photos[1].rotation || 0}deg)` }}
                        className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                      />
                      {photos[1].caption && (
                        <div className="bg-[#1C1412]/95 text-[#FAF6EE] text-[7px] font-mono uppercase tracking-widest px-2.5 py-2 text-center border-t border-white/5 truncate">
                          {photos[1].caption}
                        </div>
                      )}
                    </ScrollReveal>
                  </div>
                )}

                {/* THREE IMAGES COLLAGE LAYOUT (AI BY HER, Dhruva, TNAU) */}
                {photos.length === 3 && (
                  <div className="relative w-full max-w-lg flex items-center justify-center py-6">
                    <ScrollReveal
                      delay={0.1}
                      className="w-[55%] z-10 border border-black/10 rounded shadow-md overflow-hidden -translate-x-16 -translate-y-6"
                    >
                      <img
                        src={photos[0].src}
                        className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                      />
                    </ScrollReveal>
                    <ScrollReveal
                      delay={0.25}
                      className="w-[50%] absolute z-20 border border-black/10 rounded shadow-lg overflow-hidden translate-x-8 -translate-y-12"
                    >
                      <img
                        src={photos[1].src}
                        className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                      />
                    </ScrollReveal>
                    <ScrollReveal
                      delay={0.4}
                      className="w-[45%] absolute bottom-2 left-10 z-30 border border-black/15 rounded shadow-2xl overflow-hidden"
                    >
                      <img
                        src={photos[2].src}
                        className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                      />
                      {photos[2].caption && (
                        <div className="bg-[#1C1412] text-[#FAF6EE] text-[7px] font-mono uppercase tracking-widest px-2 py-1.5 text-center truncate">
                          {photos[2].caption}
                        </div>
                      )}
                    </ScrollReveal>
                  </div>
                )}

                {/* MULTI IMAGE COLLAGE LAYOUT (Conducting Events - 6 images!) */}
                {photos.length > 3 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg p-2 bg-[#FAF6EE] border border-black/10 rounded-lg shadow-2xl relative">
                    {photos.map((photo, pIdx) => (
                      <ScrollReveal
                        key={pIdx}
                        delay={0.15 + pIdx * 0.05}
                        className="overflow-hidden border border-black/10 rounded bg-stone-100 aspect-[4/3] group relative"
                      >
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          style={{ transform: `rotate(${(photo.rotation || 0) * 1.5}deg)` }}
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 scale-102 group-hover:scale-100 transition-all duration-500"
                          loading="lazy"
                        />
                        {photo.caption && (
                          <div className="absolute inset-x-0 bottom-0 bg-black/90 text-white text-[5px] sm:text-[6px] font-mono uppercase tracking-widest py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none truncate px-1">
                            {photo.caption}
                          </div>
                        )}
                      </ScrollReveal>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
