"use client";

import Image from "next/image";

export default function SocialInfluence() {
    const cards = [
        {
            title: "Flyer Creation",
            desc: "Cinematic event assets designed for maximum digital impact.",
            img: "/images/flyer.png",
            color: "primary"
        },
        {
            title: "Post Design",
            desc: "Strategic social graphics that define your brand identity.",
            img: "/images/post.png",
        },
        {
            title: "Viral Content",
            desc: "High-energy motion and video for global trend dominance.",
            img: "/images/graphicDesign.png",
            color: "accent"
        }
    ];

    return (
        <section className="py-40 px-6" id="impact">
            <div className="max-w-7xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <h2 className="font-display text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">Social Influence</h2>
                    <p className="text-white font-light text-xl max-w-2xl mx-auto leading-relaxed">Command the digital landscape with high-fidelity creative assets.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {cards.map((card, idx) => (
                        <div key={idx} className="glass-glow rounded-[40px] overflow-hidden group tech-card p-4 relative">
                            <div className="h-80 rounded-[30px] overflow-hidden relative mb-6">
                                <Image
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-all duration-700"
                                    src={card.img}
                                    fill
                                />
                                <div className={`absolute inset-0 bg-${card.color}/20 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                            </div>
                            <div className="p-4 space-y-4 text-center">
                                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{card.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                                <button className={`glow-button w-full bg-${card.color} text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs`}>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
