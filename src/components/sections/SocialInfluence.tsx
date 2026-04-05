"use client";

import Image from "next/image";

export default function SocialInfluence() {
    const cards = [
        {
            title: "Flyer Creation",
            desc: "Cinematic event assets designed for maximum digital impact.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrE0rtR4-goMQRwl5WOuCgs8b4ZGrG_rofZ6By3HxOQBEZZnS7a0NP9ec-PCOgHTg8-01K1mDENy4vXsk8wj4qigkQEbT1EHNzeG1wN5fBP3mUodCxrw8ltiS6GabGuAQ7P5ohJzkrL33E5xUV2kPJLLQ01MsIlaMUQSdMIvb4ZivgA10xlFS3UR0GtPFZy-W1k998FOhxPZNjdKTDG6ldJ3MH9ch__vDCUrNvxblNRbUva-aoVs0Sw9laoQRG_9jGGyHANqZDVw",
            color: "primary"
        },
        {
            title: "Post Design",
            desc: "Strategic social graphics that define your brand identity.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRfpRcDPrIGwHJbzkTOyIpEq2zQchuVCm1vnZeXlqxttuuveCY_bXdxAnQM40Vg2Sah10rn6D54dyQ71VhpndmnWsrCRhcIPpt0sS-c50nKHW4QfMMVMu9W_qpB5NNdc4D9hAjNSgJngh3cPW2vluLsUHKWn1FP1_EDmxFL5ukuxqukNCWIMIQN-lmrWXqpPMfW-YrH1zYOVzEd2GnHaZUecWyuH0cqC5NZtdbHGVxwEltWRio-ICqB_vwallgDj-HTby1gVFVFA",
            color: "secondary"
        },
        {
            title: "Viral Content",
            desc: "High-energy motion and video for global trend dominance.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYX3r4_bHmkooFgonmABYr4puuJIjjgsrEzFSb5lfzG5LLPUQoBKr7U9oGprLm8B5rLuOweCIddnlRC_ib4P7aTKiFUxkv17phMxqmuPZv9aedpwHc5lUI5_0ppZ6FrPGP-GfJE73a2O82opxIKROpW9BsaQhneZcGyjlO7zB0s89ktKk0IgDQrv92kcY7p6-3Ieki--8AkBE1atl40obnb-k7wMsEAAcsaLofAGCLqIhm1tidEcSyIVaLaKn2l7Ue-9hr8ZjPOw",
            color: "accent"
        }
    ];

    return (
        <section className="py-20 px-6" id="impact">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="font-display text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">Social Influence</h2>
                    <p className="text-white font-light text-xl max-w-2xl mx-auto leading-relaxed">Command the digital landscape with high-fidelity creative assets.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, idx) => (
                        <div key={idx} className="glass-glow rounded-[40px] overflow-hidden group tech-card p-4 relative">
                            <div className="h-80 rounded-[30px] overflow-hidden relative mb-6">
                                <Image
                                    alt={card.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
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
