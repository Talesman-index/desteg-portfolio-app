"use client";

const items = [
  "Branding",
  "Direction Artistique",
  "Identité Visuelle",
  "Packaging Design",
  "Campagnes Print",
  "Édition & Typographie"
];

export default function Marquee() {
  return (
    <div 
      className="py-5 bg-[#0D0D0D] border-y border-white/10 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="marquee-track hover:[animation-play-state:paused] cursor-default flex items-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-8 whitespace-nowrap">
                {/* Logo Mark DA */}
                <div className="w-5 h-5 rounded-full bg-[#FF4422] flex items-center justify-center font-[var(--font-syne)] font-black text-[9px] text-white">
                  DA
                </div>
                <span className="text-[13px] sm:text-[14px] uppercase tracking-[0.25em] font-[var(--font-space-mono)] font-bold text-white/90">
                  {item}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
