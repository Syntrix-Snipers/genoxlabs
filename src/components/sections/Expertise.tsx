"use client";

import Image from "next/image";

export default function Expertise() {
    return (
        <section className="py-12 md:py-20 px-4 md:px-6 relative" id="core">
            {/* Design Globes */}
            <div className="absolute top-20 left-4 md:left-10 w-48 md:h-64 md:w-64 h-48 bg-secondary/20 rounded-full blur-[60px] md:blur-[80px] pointer-events-none opacity-50"></div>
            <div className="absolute bottom-20 right-4 md:right-10 w-64 md:w-96 md:h-96 h-64 bg-primary/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none opacity-40"></div>

            <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 relative">
                <div className="text-center md:text-left max-w-3xl space-y-4 mx-auto md:mx-0">
                    <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter shadow-sm">Core Expertise</h2>
                    <div className="h-1 w-24 md:w-40 bg-gradient-to-r from-primary to-transparent mx-auto md:mx-0"></div>
                </div>

                {/* Web Development Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="space-y-4 order-2 lg:order-1 relative">
                        {/* Design Globe behind text on desktop */}
                        <div className="hidden lg:block absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-white/10 to-secondary/30 rounded-full shadow-2xl z-0 pointer-events-none opacity-60"
                            style={{ boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.5), 0 0 80px rgba(189,61,246,0.3)' }}></div>

                        <div className="relative z-10 space-y-3 md:space-y-4 text-center md:text-left">
                            <div className="text-secondary font-black uppercase tracking-widest text-[15px] text-white">01 / Full-Stack Ecosystems</div>
                            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] uppercase tracking-tighter">Web <br className="hidden md:block" /> Development</h3>
                            <div className="space-y-2 md:space-y-3 max-w-lg mx-auto md:mx-0">
                                {[
                                    { icon: "architecture", title: "Architecture", desc: "Headless CMS and Microservices built for infinite scale." },
                                    { icon: "speed", title: "Performance", desc: "Sub-second load times and 100/100 Lighthouse scores." },
                                    { icon: "search", title: "SEO Dominance", desc: "Technical optimization that puts you at the top of results." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 group text-left">
                                    <div className="w-10 h-10 shrink-0 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                    </div>

                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-white uppercase tracking-tight">
                                        {item.title}
                                        </h4>

                                        <p className="text-white text-xs md:text-sm leading-relaxed">
                                        {item.desc}
                                        </p>
                                    </div>
                                    </div>
                                ))}
                                </div>
                           <button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="glow-button cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-secondary font-black uppercase tracking-widest text-[10px] md:text-xs"
>
  Request Demo <span className="material-symbols-outlined text-sm">bolt</span>
</button>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 floating-element px-4 lg:px-0">
                        <div className="glass-glow p-2 rounded-[30px] md:rounded-[40px] border border-white/10 shadow-2xl overflow-hidden relative aspect-video flex items-center justify-center">
                            <Image
                                alt="Web Development"
                                className="rounded-[26px] md:rounded-[36px] w-full h-full object-contain"
                                src="/images/webdev.png"
                                fill
                                priority
                            />
                            <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply opacity-50"></div>
                        </div>
                    </div>
                </div>

                {/* App Development Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center pt-8 md:pt-16">
                    <div className="order-1 floating-element relative px-4 lg:px-0">
                        <div className="glass-glow p-3 md:p-4 rounded-[40px] md:rounded-[50px] border border-white/10 overflow-hidden relative h-[400px] md:h-[500px] w-full bg-slate-900 shadow-2xl flex items-center justify-center">
                            <Image
                                alt="App Development"
                                src="/images/mobilev.png"
                                width={320}
                                height={450}
                                className="object-contain h-full w-auto"
                                priority
                            />
                            {/* Decorative second phone on desktop */}
                            <div className="hidden lg:block absolute bottom-8 right-8 w-64 h-96 bg-deep-space rounded-[3rem] border-8 border-white/5 shadow-2xl p-6 space-y-6 opacity-30 transform translate-x-1/2 scale-90"></div>
                        </div>
                    </div>
                    <div className="space-y-8 order-2 relative text-center md:text-left">
                        {/* Design Globe behind text on desktop */}
                        <div className="hidden lg:block absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-white/10 to-primary/30 rounded-full shadow-2xl z-0 pointer-events-none opacity-60"
                            style={{ boxShadow: 'inset -30px -30px 80px rgba(0,0,0,0.6), 0 0 100px rgba(255,95,179,0.3)' }}></div>

                        <div className="relative z-10 space-y-6 md:space-y-8 max-w-lg mx-auto md:mx-0">
                            <div className="text-secondary font-black uppercase tracking-widest text-[15px] text-white">02 / Mobility</div>
                            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] uppercase tracking-tighter">App <br className="hidden md:block" /> Development</h3>
                            <div className="space-y-5 md:space-y-6">
                                {[
                                    { icon: "devices", title: "Cross-Platform", desc: "Native performance on iOS and Android with Flutter/React Native." },
                                    { icon: "psychology", title: "UX Research", desc: "User-centric design backed by cognitive psychology data." },
                                    { icon: "cloud_done", title: "Cloud Integration", desc: "Seamless real-time data syncing across all devices." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 group text-left">
                                        <div className="w-10 h-10 shrink-0 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-base md:text-lg font-bold text-white uppercase tracking-tight">{item.title}</h4>
                                            <p className="text-white text-xs md:text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                     <button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="glow-button cursor-pointer w-full sm:w-auto flex items-center justify-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-xl text-secondary font-black uppercase tracking-widest text-[10px] md:text-xs"
>
  Initiate Build <span className="material-symbols-outlined text-sm">smartphone</span>
</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
