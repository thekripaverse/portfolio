import { useState } from "react";
import { socialLinks } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="py-24 bg-[#1C1412] text-[#FAF6EE] relative select-none">
      {/* Top Border */}
      <div className="absolute top-0 left-6 right-6 border-t border-[#FAF6EE]/10 md:left-12 md:right-12"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between min-h-[50vh]">
        {/* Large Typographic Prompt */}
        <div className="space-y-4 mb-16">
          <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-[#777777] uppercase block">
            05 / CONTACT
          </span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase max-w-4xl">
            LET'S BUILD SOMETHING <br />
            <span className="text-[#FAF6EE] bg-[#5C2533] px-4 py-2 inline-block mt-2">WORTH TALKING ABOUT.</span>
          </h2>
        </div>

        {/* Large Typography-Driven Links */}
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-12 border-b border-[#FAF6EE]/15 pb-16 mb-12">
          {/* Email */}
          <div className="flex flex-col items-start space-y-2">
            <span className="font-mono text-[9px] font-bold tracking-widest text-[#777777] uppercase mb-0.5">
              INQUIRIES
            </span>
            <a
              href={`mailto:${socialLinks.email}`}
              onClick={handleEmailClick}
              className="group flex items-center space-x-2 cursor-pointer"
              data-cursor="open"
              title="Click to compose email or copy address"
            >
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF6EE] group-hover:text-[#C87A53] transition-colors duration-200 inline-flex items-center space-x-2">
                <span>EMAIL ↗</span>
                {copied && (
                  <span className="text-[10px] font-mono font-bold tracking-widest bg-[#C87A53] text-[#1C1412] px-2 py-0.5 rounded uppercase">
                    COPIED!
                  </span>
                )}
              </span>
            </a>
            <div className="flex items-center space-x-3 pt-1">
              <a
                href={`mailto:${socialLinks.email}`}
                className="font-mono text-xs text-[#FAF6EE]/75 hover:text-[#C87A53] transition-colors underline underline-offset-4"
              >
                {socialLinks.email}
              </a>
              <span className="text-[#FAF6EE]/30 text-xs">•</span>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] font-semibold text-[#C87A53] hover:underline uppercase tracking-wider"
              >
                OPEN GMAIL ↗
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-start space-y-2">
            <span className="font-mono text-[9px] font-bold tracking-widest text-[#777777] uppercase mb-0.5">
              CONNECT
            </span>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start"
              data-cursor="open"
            >
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF6EE] group-hover:text-[#C87A53] transition-colors duration-200 inline-flex items-center space-x-1">
                <span>LINKEDIN ↗</span>
              </span>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#FAF6EE]/75 hover:text-[#C87A53] transition-colors pt-1"
            >
              kripa-sree-m
            </a>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-start space-y-2">
            <span className="font-mono text-[9px] font-bold tracking-widest text-[#777777] uppercase mb-0.5">
              REPOSITORIES
            </span>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start"
              data-cursor="open"
            >
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF6EE] group-hover:text-[#C87A53] transition-colors duration-200 inline-flex items-center space-x-1">
                <span>GITHUB ↗</span>
              </span>
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#FAF6EE]/75 hover:text-[#C87A53] transition-colors pt-1"
            >
              thekripaverse
            </a>
          </div>
        </div>

        {/* Footer Meta Details */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 text-[9px] font-mono font-bold tracking-widest text-[#777777] uppercase">
          <div>
            © 2026 KRIPASREE / ALL RIGHTS RESERVED
          </div>
          <div className="flex space-x-4">
            <span>AI SYSTEMS</span>
            <span>•</span>
            <span>DATA SCIENCE</span>
            <span>•</span>
            <span>BUILDER</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
