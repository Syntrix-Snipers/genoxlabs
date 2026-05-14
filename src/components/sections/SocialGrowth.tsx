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

                    {/* <button className="glow-button w-full sm:w-auto bg-primary text-white px-10 py-4 md:px-12 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs transition-all shadow-xl">
                        Request Strategy Quote
                    </button> */}
                </div>

                <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end px-4">
                    <div className="relative w-full max-w-sm md:max-w-lg aspect-square scale-90 md:scale-100">
                        {/* Mobile App View with floating elements */}
                        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                            <div className="relative w-56 h-[400px] md:w-64 md:h-[500px] bg-deep-space rounded-[2.5rem] md:rounded-[3rem] border-4 md:border-8 border-white/5 shadow-2xl overflow-hidden glass-glow">
                                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10"></div>
                                <div className="p-6 md:p-8 space-y-4 md:space-y-6">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/30 rounded-xl md:rounded-2xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-lg">hub</span>
                                    </div>
                                    <div className="h-3 md:h-4 w-3/4 bg-white/10 rounded"></div>
                                    <div className="h-3 md:h-4 w-1/2 bg-white/10 rounded"></div>
                                    <div className="grid grid-cols-1 gap-3 md:gap-4 pt-6 md:pt-10">
                                        <div className="h-24 md:h-32 bg-white/5 rounded-xl md:rounded-2xl relative overflow-hidden">
                                            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDgH5MrOe5-Sghkoe1XugovjWnJuBnD0iADgkHyShihhjo8cBWELQiZx6KmHZrnYvRtLI9S7nsDHiY-Nix1Kc7ZX-4KY2qHA0kpmTI-PG98akoMbQHQ6jKLYTNNFJMpb8xhot_9czEJb6HklWUDOg17H4MZRHKn4Z4XPc8HIHNs7mrQuCnqzhXczP1g8nYPGJuRYtu-TMsBjkTn3SuYB1s4Nj_q5iX3AA6HrX7g4x9uhWydY7S5Qnfp6VpOEzvBQnAhJlGyxGTA96m"
                                                alt="Campaign" fill className="object-cover opacity-50" />
                                        </div>
                                        <div className="h-16 md:h-20 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center">
                                            <p className="text-[8px] md:text-[10px] font-black uppercase text-primary tracking-[0.2em] animate-pulse text-center">Live Campaign</p>
                                        </div>
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
