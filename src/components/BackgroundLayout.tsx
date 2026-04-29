"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundLayout() {
    const planetRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    const [isLowEnd, setIsLowEnd] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Simple device check: low RAM or slow CPU (not perfect, but helps)
        const nav = navigator as any;
        if (nav.deviceMemory && nav.deviceMemory <= 4) setIsLowEnd(true);
        if (nav.hardwareConcurrency && nav.hardwareConcurrency <= 2) setIsLowEnd(true);

        const handleScroll = () => {
            if (planetRef.current) {
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;

                // Horizontal movement
                const animationProgress = (scrollPercent * 2) % 2;
                const currentTranslateX = animationProgress <= 1
                    ? -80 + (animationProgress * 110)
                    : 30 - ((animationProgress - 1) * 110);

                planetRef.current.style.transform = `translate(${currentTranslateX - 50}%, -50%)`;

                // Scroll depth for "digging" effect
                planetRef.current.style.setProperty('--scroll-depth', scrollPercent.toString());
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Reduce element counts for performance
    const STAR_COUNT = isLowEnd ? 6 : 12;
    const SATELLITE_COUNT = isLowEnd ? 1 : 2;
    const MESH_COUNT = isLowEnd ? 2 : 3;
    const FIRE_JET_COUNT = isLowEnd ? 3 : 5;
    const SHARD_COUNT = isLowEnd ? 5 : 8;

    if (isLowEnd) {
        // On very low-end devices, skip all background effects
        return null;
    }

    return (
        <>
            <div className="stars-container" aria-hidden="true">
                {/* Generative stars - Only render on client to avoid hydration mismatch */}
                {mounted && [...Array(STAR_COUNT)].map((_, i) => (
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
                {[...Array(SATELLITE_COUNT)].map((_, i) => (
                    <div
                        key={i}
                        className="satellite"
                        style={{
                            top: `${20 + i * 60}%`,
                            animationDuration: `${20 + i * 10}s`,
                            animationDelay: `${-5 * i}s`,
                        }}
                    />
                ))}
            </div>

            <div className="mesh-container" aria-hidden="true">
                {[...Array(MESH_COUNT)].map((_, i) => (
                    <div
                        key={i}
                        className="mesh-line"
                        style={{ top: `${10 + i * 30}%`, animationDelay: `${-i * 2}s` }}
                    />
                ))}
            </div>

            <div className="fireball-planet" ref={planetRef} id="main-planet" aria-hidden="true">
                <div className="smoke-cloud" />
                <div className="fire-jets">
                    {[...Array(FIRE_JET_COUNT)].map((_, i) => (
                        <div key={i} className={`fire-jet jet-${i}`} />
                    ))}
                </div>
                <div className="energy-crust" />
                <div className="fire-layer" />
                <div className="planet-core planet-explode">
                    {[...Array(SHARD_COUNT)].map((_, i) => (
                        <div key={i} className={`shard-fragment shard-${i}`} />
                    ))}
                </div>
            </div>
        </>
    );
}
