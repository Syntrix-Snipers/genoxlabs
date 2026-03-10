"use client";

import Image from "next/image";

export default function WhoWeAre() {
    return (
        <section className="py-24 md:py-40 px-4 md:px-6 relative overflow-hidden" id="origins">
            {/* Design Globes */}
            <div className="absolute top-1/2 -right-20 md:-right-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-secondary/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none opacity-50 scale-125"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center relative z-10 group text-center lg:text-left">
                <div className="space-y-8 md:space-y-12 max-w-2xl mx-auto lg:mx-0">
                    <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[1.1]">Who <br className="hidden md:block" /> We Are</h2>
                    <div className="space-y-6 md:space-y-8 text-slate-300 leading-relaxed text-base md:text-2xl font-light px-4 md:px-0">
                        <p>Genoxlab is an elite collective of cryptographers, designers, and systems architects dedicated to the advancement of decentralized digital space.</p>

                        <div className="grid grid-cols-1 gap-8 md:gap-12 pt-4 md:pt-8 text-left max-w-sm mx-auto lg:mx-0 font-medium">
                            <div className="flex items-start gap-6 md:gap-8 group/item">
                                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl glass-glow flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-white transition-all shadow-xl shadow-secondary/20 border border-secondary/20">
                                    <span className="material-symbols-outlined text-2xl md:text-3xl">public</span>
                                </div>
                                <div>
                                    <h5 className="text-white font-black uppercase tracking-widest text-xs md:text-sm mb-1">Global Collective</h5>
                                    <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed uppercase font-black tracking-widest">Distributed team in major tech hubs.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 md:gap-8 group/item">
                                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl glass-glow flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-white transition-all shadow-xl shadow-secondary/20 border border-secondary/20">
                                    <span className="material-symbols-outlined text-2xl md:text-3xl">shield_person</span>
                                </div>
                                <div>
                                    <h5 className="text-white font-black uppercase tracking-widest text-xs md:text-sm mb-1">Trusted Partners</h5>
                                    <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed uppercase font-black tracking-widest">Partner to 50+ protocols and labs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center relative px-8">
                    <div className="relative p-6 md:p-8 scale-90 sm:scale-100 lg:scale-110">
                        {/* Design Globe behind portrait */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-[80px] md:blur-[100px] opacity-30 group-hover:opacity-60 transition duration-1000 scale-125"></div>

                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl glass-glow p-3 md:p-4 z-10 aspect-square transition-transform duration-1000 hover:rotate-3">
                            <Image
                                alt="Genoxlab Founder"
                                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-110"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrE0rtR4-goMQRwl5WOuCgs8b4ZGrG_rofZ6By3HxOQBEZZnS7a0NP9ec-PCOgHTg8-01K1mDENy4vXsk8wj4qigkQEbT1EHNzeG1wN5fBP3mUodCxrw8ltiS6GabGuAQ7P5ohJzkrL33E5xUV2kPJLLQ01MsIlaMUQSdMIvb4ZivgA10xlFS3UR0GtPFZy-W1k998FOhxPZNjdKTDG6ldJ3MH9ch__vDCUrNvxblNRbUva-aoVs0Sw9laoQRG_9jGGyHANqZDVw"
                                fill
                            />
                            <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply opacity-40 hover:opacity-0 transition-opacity duration-700"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
