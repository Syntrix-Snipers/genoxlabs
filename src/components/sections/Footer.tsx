"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-20 md:py-24 border-t border-white/5 bg-deep-space relative z-[10] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20 mb-20 text-center sm:text-left">
                    <div className="col-span-1 md:col-span-2 space-y-8 flex flex-col items-center sm:items-start">
                        <div className="flex items-center space-x-3 group animate-float">
                            <div className="w-12 h-12 rounded-2xl overflow-hidden relative shadow-lg shadow-primary/25 border border-white/10 group-hover:scale-110 transition-transform">
                                <Image src="/sqlogo.jpeg" alt="Footer Logo" fill className="object-cover" />
                            </div>
                            <span className="font-display font-black text-2xl tracking-tighter text-white">GENOXLAB</span>
                        </div>
                        <p className="text-white max-w-sm leading-relaxed font-light text-base md:text-lg">
                            Pioneering the next era of digital interaction and decentralized protocols with surgical precision.
                        </p>
                        <div className="flex space-x-6 justify-center sm:justify-start">
                            {[
                                { icon: "alternate_email", label: "Email" },
                                { icon: "public", label: "Web" },
                                { icon: "hub", label: "Community" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    className="w-12 h-12 rounded-2xl glass-glow flex items-center justify-center hover:bg-primary transition-all group border border-white/10"
                                    href="#"
                                    aria-label={social.label}
                                >
                                    <span className="material-symbols-outlined text-lg group-hover:text-white transition-colors">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h4 className="font-black text-white mb-8 uppercase tracking-[0.3em] text-[10px]">Directory</h4>
                        <ul className="space-y-4 text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500">
                            {["Core Units", "Lab Archives", "Human Resources", "Legal Dept."].map((item, idx) => (
                                <li key={idx}>
                                    <a className="hover:text-secondary transition-all flex items-center gap-2 group justify-center sm:justify-start" href="#">
                                        <span className="h-1 w-0 bg-secondary group-hover:w-4 transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h4 className="font-black text-white mb-8 uppercase tracking-[0.3em] text-[10px]">Security</h4>
                        <div className="p-6 glass-glow rounded-2xl border border-white/10 space-y-4 relative overflow-hidden group w-full max-w-[200px] mx-auto sm:mx-0">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="space-y-1 relative z-10">
                                <div className="text-[10px] text-primary font-black uppercase tracking-[0.2em] flex items-center gap-2 justify-center sm:justify-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                                    Status: Nominal
                                </div>
                                <div className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] text-center sm:text-left">Encrypted Channel Active</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-slate-600 max-w-sm md:max-w-none px-4 md:px-0">© 2026 Genoxlab Advanced Systems. Neural link established.</div>
                    <div className="flex flex-wrap justify-center gap-6 md:space-x-12 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                        {["Silicon Valley", "London", "Tokyo"].map((city, idx) => (
                            <span key={idx} className="hover:text-white/60 transition-colors cursor-default">{city}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Design Globes in footer area */}
            <div className="absolute -bottom-40 -left-60 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -top-40 -right-60 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
        </footer>
    );
}
