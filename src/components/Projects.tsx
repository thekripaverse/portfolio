import { motion } from "framer-motion";
import { projectsData } from "../data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 border-b border-black/5 bg-[#FAF6EE] relative z-10 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-[#B28D95] uppercase block">
            03 / SELECTED SHOWCASES
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1412] mt-4 uppercase">
            SELECTED PROJECTS
          </h2>
        </div>

        {/* Editorial Project Showcases */}
        <div className="divide-y divide-black/10 border-t border-b border-black/10">
          {projectsData.map((project, idx) => {
            const indexStr = (idx + 1).toString().padStart(2, "0");
            return (
              <motion.div
                key={project.id}
                className="group py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start px-4 transition-colors duration-300 hover:bg-[#5C2533]/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Index / Category Column */}
                <div className="lg:col-span-3 flex items-center space-x-6">
                  <span className="font-display text-2xl font-bold tracking-tight text-[#777777] group-hover:text-[#5C2533] transition-colors">
                    [{indexStr}]
                  </span>
                  <span className="font-mono text-[9px] font-bold tracking-widest text-[#FAF6EE] bg-[#5C2533]/90 px-2.5 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                {/* Main Info Column: Title & Description */}
                <div className="lg:col-span-6 space-y-2">
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight group-hover:text-[#5C2533] transition-all duration-300 ease-out group-hover:translate-x-2 uppercase text-[#1C1412]">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base leading-relaxed text-[#777777] max-w-xl group-hover:text-[#1C1412] transition-colors">
                    {project.description}
                  </p>
                </div>

                {/* Technologies Badges */}
                <div className="lg:col-span-3 lg:text-right flex flex-wrap gap-1.5 lg:justify-end items-start pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-display text-[9px] font-semibold tracking-wider border border-black/10 group-hover:border-[#5C2533]/30 px-2 py-0.5 text-[#777777] group-hover:text-[#5C2533] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
