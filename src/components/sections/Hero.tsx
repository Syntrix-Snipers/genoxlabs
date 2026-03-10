"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-32 pb-16 md:pb-24 px-4 md:px-6 relative overflow-hidden" id="nexus">
            {/* Design Globes for Hero */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] pointer-events-none opacity-40"></div>
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] pointer-events-none opacity-30"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                <div className="space-y-6 md:space-y-10 text-center lg:text-left z-10 order-2 lg:order-1">
                    <div className="inline-flex items-center space-x-3 glass-glow px-4 md:px-6 py-2 rounded-full border border-secondary/30 mx-auto lg:mx-0">
                        <span className="flex h-2 w-2 rounded-full bg-secondary animate-ping"></span>
                        <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.3em] text-secondary">Web3 Architectural Lab</span>
                    </div>
                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-white uppercase tracking-tighter shadow-sm">
                        Crafting the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-white">Future</span>
                    </h1>
                    <p className="text-base md:text-xl text-slate-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                        Deploying hyper-performance decentralized systems and immersive digital identities for the next generation of the internet.
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 pt-4 justify-center lg:justify-start">
                        <button className="glow-button bg-primary text-white w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-sm">
                            Launch Protocol
                        </button>
                        <button className="glass px-10 md:px-12 py-4 md:py-5 w-full sm:w-auto rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-sm hover:bg-white/10 transition-all border border-white/10">
                            Archive
                        </button>
                    </div>
                </div>

                <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 px-4">
                    <div className="relative w-full max-w-sm md:max-w-lg floating-element">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 blur-3xl rounded-full opacity-50"></div>
                        <div className="relative glass-glow p-3 md:p-4 rounded-[30px] md:rounded-[40px] border border-white/20 shadow-2xl overflow-hidden aspect-video md:aspect-square">
                            {/* Use bannerlogo.jpeg as requested for the first visual */}
                            <Image
                                alt="Genoxlab Tech Visual"
                                className="w-full h-full object-cover rounded-[20px] md:rounded-[30px] opacity-100"
                                src="/hero_abstract.png"
                                fill
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-space/40 via-transparent to-transparent"></div>

                            {/* Design Overlay elements like in the design image */}
                            <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-[30px] pointer-events-none"></div>
                            <div className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 glass-glow rounded-xl border border-white/20 flex items-center justify-center">
                                <span className="text-white/30 font-black text-xl md:text-3xl">G</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
