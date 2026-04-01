"use client";

export default function SocialGrowth() {
  return (
    <section
      className="py-24 md:py-40 px-4 md:px-6 relative overflow-hidden"
      id="impact"
    >
      {/* Design Globes */}
      <div className="absolute top-1/2 -left-20 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center mb-16 md:mb-32 group relative z-10 text-center lg:text-left">
        <div className="space-y-8 md:space-y-10 order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0">
          <div className="space-y-4 md:space-y-6">
            <h2 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1]">
              Social Growth <br className="hidden md:block" /> &amp; Marketing
            </h2>
            <p className="text-white text-base md:text-xl text-slate-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Data-driven virality. We scale audiences using proprietary
              algorithms and creative psychology to turn projects into
              movements.
            </p>
          </div>

          <div className="space-y-5 md:space-y-6 px-4 md:px-0 text-left max-w-sm mx-auto lg:mx-0">
            {[
              { icon: "rocket_launch", label: "Strategic Branding & Velocity" },
              { icon: "ads_click", label: "Hyper-Targeted Ad Operations" },
              { icon: "hub", label: "Global Community Architecture" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 md:gap-6 group cursor-default"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full glass-glow flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-lg shadow-secondary/20 border border-secondary/20">
                  <span className="material-symbols-outlined text-sm md:text-base">
                    {item.icon}
                  </span>
                </div>
                <span className="font-bold uppercase tracking-widest text-[9px] md:text-sm text-white/80">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <button className="glow-button w-full sm:w-auto bg-primary text-white px-10 py-4 md:px-12 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs transition-all shadow-xl">
            Request Strategy Quote
          </button>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end px-4">
          <div className="relative w-full max-w-[720px]">
            <div className="relative mb-10">
              <div className="absolute -bottom-10 -right-10 bg-primary/20 size-64 rounded-full blur-[80px]"></div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-8 pt-12">
                <img
                  alt="Social Content 1"
                  className="rounded-2xl glass-morphism p-1 h-64 w-full object-cover"
                  src="/images/socialgrow.png"
                />
                <img
                  alt="Social Content 2"
                  className="rounded-2xl glass-morphism p-1 h-48 w-full object-cover"
                  src="/images/mobilev.png"
                />
              </div>
              <div className="space-y-8">
                <img
                  alt="Social Content 3"
                  className="rounded-2xl glass-morphism p-1 h-48 w-full object-cover"
                  src="/images/logocard.png"
                />
                <img
                  alt="Social Content 4"
                  className="rounded-2xl glass-morphism p-1 h-64 w-full object-cover"
                  src="/images/flyer.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
