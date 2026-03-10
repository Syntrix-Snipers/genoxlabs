"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "glass border-b border-white/5 py-2 md:py-3" : "bg-transparent py-4 md:py-6"}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 md:space-x-3 group relative z-[101]">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl overflow-hidden shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform cursor-pointer relative bg-deep-space">
                        <Image
                            src="/sqlogo.jpeg"
                            alt="Genoxlab Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-display font-black text-lg md:text-2xl tracking-tighter text-white">GENOXLAB</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
                    {["Nexus", "Core", "Impact", "Origins"].map((item, idx) => (
                        <a
                            key={idx}
                            className="text-[10px] lg:text-xs font-black uppercase tracking-[0.25em] hover:text-secondary transition-colors text-white/70"
                            href={`#${item.toLowerCase()}`}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <button className="hidden sm:block glow-button bg-primary text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all">
                        Initiate
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 z-[101]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-deep-space/95 backdrop-blur-2xl z-[100] transition-all duration-500 overflow-hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-10 px-6 text-center">
                    {["Nexus", "Core", "Impact", "Origins"].map((item, idx) => (
                        <a
                            key={idx}
                            className="text-4xl font-display font-black text-white uppercase tracking-tighter hover:text-secondary transition-colors"
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="glow-button bg-primary text-white w-full max-w-xs py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs">
                        Initiate Protocol
                    </button>
                </div>
            </div>
        </nav>
    );
}
