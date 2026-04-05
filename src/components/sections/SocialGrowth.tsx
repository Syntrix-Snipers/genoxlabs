"use client";

import Image from "next/image";

export default function SocialGrowth() {
    return (
        <section className="py-12 md:py-20 px-4 md:px-6 relative overflow-hidden" id="impact">
            {/* Design Globes */}
            <div className="absolute top-1/2 -left-20 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none opacity-40"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-16 group relative z-10 text-center lg:text-left">
                <div className="space-y-4 md:space-y-5 order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0">
                    <div className="space-y-2 md:space-y-3">
                        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[1.1]">
                            Social Growth &<br className="hidden md:block" /> Marketing
                        </h2>
                        <p className="text-white text-base md:text-xl text-slate-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Data-driven virality. We scale audiences using proprietary algorithms and creative psychology to turn projects into movements.
                        </p>
                    </div>

                    <div className="space-y-2 md:space-y-3 px-2 md:px-0 text-left max-w-sm mx-auto lg:mx-0">
                        {[
                            { icon: "rocket_launch", label: "Strategic Branding & Velocity" },
                            { icon: "ads_click", label: "Hyper-Targeted Ad Operations" },
                            { icon: "hub", label: "Global Community Architecture" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 md:gap-6 group cursor-default">
                                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full glass-glow flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-lg shadow-secondary/20 border border-secondary/20">
                                    <span className="material-symbols-outlined text-sm md:text-base">{item.icon}</span>
                                </div>
                                <span className="font-bold uppercase tracking-widest text-[9px] md:text-sm text-white/80">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <button className="glow-button w-full sm:w-auto bg-primary text-white px-10 py-4 md:px-12 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs transition-all shadow-xl">
                        Request Strategy Quote
                    </button>
                </div>

                <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end px-4">
                    <div className="relative w-full max-w-2xl md:max-w-[72rem] aspect-square scale-90 md:scale-100">
                        {/* Mobile App View with floating elements */}
                        <div className="absolute inset-0 flex items-center justify-center p-2 md:p-4">
                            <div className="relative w-full h-full max-w-[42rem]">
                                <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-secondary/20 blur-2xl opacity-70"></div>
                                <div className="relative w-full h-full">
                                <div className="absolute left-1 top-2 md:left-2 md:top-3 w-[52%] h-[60%] md:w-[54%] md:h-[62%] rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 shadow-2xl glass-glow -rotate-6 hover:rotate-0 transition-all duration-500">
                                    <Image src="/social-media.webp" alt="Social Media Presence" fill className="object-cover" />
                                </div>

                                <div className="absolute right-0 top-0 md:right-1 md:top-1 w-[46%] h-[32%] md:w-[44%] md:h-[34%] rounded-xl md:rounded-2xl overflow-hidden border border-white/20 shadow-xl glass-glow rotate-3 hover:rotate-0 transition-all duration-500">
                                    <Image src="/logocard_result.webp" alt="Logo Design" fill className="object-cover" />
                                </div>

                                <div className="absolute right-1 bottom-6 md:right-2 md:bottom-10 w-[54%] h-[45%] md:w-[53%] md:h-[46%] rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 shadow-2xl glass-glow rotate-6 hover:rotate-0 transition-all duration-500">
                                    <Image src="/socialgrow_result.webp" alt="Mobile Experience" fill className="object-cover" />
                                </div>

                                <div className="absolute left-4 bottom-0 md:left-7 md:bottom-2 w-[36%] h-[30%] md:w-[37%] md:h-[31%] rounded-xl md:rounded-2xl overflow-hidden border border-white/20 shadow-xl glass-glow -rotate-3 hover:rotate-0 transition-all duration-500">
                                    <Image src="/mobilev_result.webp" alt="Growth Strategy" fill className="object-cover" />
                                </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating "A" badge - repositioned for mobile safety */}
                        <div className="absolute top-4 right-4 md:top-0 md:right-10 w-14 h-14 md:w-20 md:h-20 glass-glow rounded-2xl md:rounded-3xl border border-white/20 flex items-center justify-center shadow-2xl floating-element z-20">
                            <span className="text-xl md:text-3xl font-black text-white/50">A</span>
                        </div>

                        {/* Design Globe behind mobile */}
                        <div className="absolute bottom-10 -right-10 w-48 md:w-64 h-48 md:h-64 bg-secondary/30 rounded-full blur-[60px] md:blur-[80px] pointer-events-none opacity-60"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
