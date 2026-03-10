"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundLayout() {
    const planetRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            if (planetRef.current) {
                const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
                const animationProgress = (scrollPercent * 2) % 2;
                const currentTranslateX = animationProgress <= 1
                    ? -80 + (animationProgress * 110)
                    : 30 - ((animationProgress - 1) * 110);

                planetRef.current.style.transform = `translate(${currentTranslateX - 50}%, -50%)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="stars-container" aria-hidden="true">
                {/* Generative stars - Only render on client to avoid hydration mismatch */}
                {mounted && [...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={`star w-${i % 2 === 0 ? "0.5" : "1"} h-${i % 2 === 0 ? "0.5" : "1"}`}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    />
                ))}
                <div className="satellite" style={{ top: "20%", animationDuration: "25s" }} />
                <div className="satellite" style={{ top: "50%", animationDuration: "35s", animationDelay: "-10s" }} />
                <div className="satellite" style={{ top: "80%", animationDuration: "20s", animationDelay: "-5s" }} />
            </div>

            <div className="mesh-container" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="mesh-line"
                        style={{ top: `${10 + i * 20}%`, animationDelay: `${-i * 2}s` }}
                    />
                ))}
            </div>

            <div className="fireball-planet" ref={planetRef} id="main-planet" aria-hidden="true" />
        </>
    );
}
