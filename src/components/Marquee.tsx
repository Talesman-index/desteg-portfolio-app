"use client";

const items = [
  "Identité visuelle",
  "Direction artistique",
  "Print & Digital",
  "Packaging",
  "Management créatif"
];

export default function Marquee() {
  return (
    <div className="py-6 bg-mid border-y border-paper/5 overflow-hidden">
      <div className="marquee-track">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-10 px-5">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-10 whitespace-nowrap">
                <span className="text-[14px] uppercase tracking-[0.2em] font-[var(--font-space-mono)] text-paper/25">
                  {item}
                </span>
                <span className="text-acid text-[10px]">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
