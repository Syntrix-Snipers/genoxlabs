"use client";

import Image from "next/image";

export default function TheArchitect() {
    return (
        <section className="py-24 md:py-40 px-4 md:px-6 relative overflow-hidden" id="about">
            {/* Design Globes */}
            <div className="absolute top-1/4 -right-20 w-48 md:w-80 h-48 md:h-80 bg-primary/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none opacity-40"></div>

            <div className="max-w-7xl mx-auto space-y-16 md:space-y-20 relative z-10 text-center lg:text-left">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
                    <div className="order-2 lg:order-1 relative w-full px-4 md:px-0">
                        <div className="absolute -inset-10 bg-accent/20 blur-3xl rounded-full opacity-40"></div>
                        <div className="relative glass-glow p-3 md:p-4 rounded-[40px] md:rounded-[60px] border border-white/20 overflow-hidden shadow-2xl aspect-[4/5] max-w-sm md:max-w-lg mx-auto bg-deep-space">
                            <Image
                                alt="Technical Architecture"
                                className="w-full h-full object-cover rounded-[30px] md:rounded-[50px] mix-blend-screen opacity-90"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRfpRcDPrIGwHJbzkTOyIpEq2zQchuVCm1vnZeXlqxttuuveCY_bXdxAnQM40Vg2Sah10rn6D54dyQ71VhpndmnWsrCRhcIPpt0sS-c50nKHW4QfMMVMu9W_qpB5NNdc4D9hAjNSgJngh3cPW2vluLsUHKWn1FP1_EDmxFL5ukuxqukNCWIMIQN-lmrWXqpPMfW-YrH1zYOVzEd2GnHaZUecWyuH0cqC5NZtdbHGVxwEltWRio-ICqB_vwallgDj-HTby1gVFVFA"
                                fill
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent"></div>
                        </div>

                        {/* 12+ Years badge - responsive size and position */}
                        <div className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-10 z-20 glass-glow p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-primary/20 scale-90 md:scale-110">
                            <p className="text-3xl md:text-5xl font-black text-white mb-1">12+</p>
                            <p className="text-[9px] md:text-[11px] uppercase tracking-[0.2em] text-primary font-black">Years of Innovation</p>
                        </div>
                    </div>

                    <div className="space-y-8 md:space-y-12 order-1 lg:order-2 max-w-2xl mx-auto lg:mx-0">
                        <div className="space-y-4 md:space-y-6">
                            <h2 className="text-primary font-black tracking-[0.3em] uppercase text-[9px] md:text-xs">The Visionary</h2>
                            <h3 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[1.1]">
                                The Architect Behind <br /> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-white">Genoxlab</span>
                            </h3>
                            <p className="text-base md:text-xl text-slate-400 font-light leading-relaxed">
                                &quot;In a world where digital noise is constant, true innovation lies in the synthesis of logic and emotion. At Genoxlab, we don&apos;t just build software; we craft the future infrastructure of human interaction.&quot;
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-left">
                            {[
                                { icon: "visibility", title: "Vision", desc: "Global standard for software fusion.", color: "primary" },
                                { icon: "architecture", title: "Approach", desc: "Minimalist logic, maximalist UI.", color: "secondary" },
                                { icon: "verified_user", title: "Integrity", desc: "Quality in every line of code.", color: "accent" }
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-3 group">
                                    <div className={`w-10 h-10 rounded-xl bg-${item.color}/10 flex items-center justify-center text-${item.color} group-hover:bg-${item.color} group-hover:text-white transition-all shadow-sm`}>
                                        <span className="material-symbols-outlined text-sm">{item.icon}</span>
                                    </div>
                                    <h5 className="text-white font-bold uppercase tracking-tight text-xs">{item.title}</h5>
                                    <p className="text-[9px] text-slate-500 leading-relaxed uppercase font-black tracking-[0.15em]">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 flex justify-center lg:justify-start">
                            <button className="border-b-2 border-primary text-primary font-bold pb-2 hover:text-white hover:border-white transition-all text-sm md:text-lg flex items-center gap-2 group tracking-widest uppercase">
                                Download Agency Profile <span className="material-symbols-outlined group-hover:translate-y-1 transition-all duration-300">download</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
