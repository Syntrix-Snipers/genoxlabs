"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
    {
        question: "What digital solutions do you offer in Sri Lanka?",
        answer: "We offer comprehensive digital solutions including hyper-performance Web3 development, enterprise web and mobile applications, smart contract auditing, and immersive decentralized identity systems tailored to your specific business needs."
    },
    {
        question: "How long does it take to develop a custom web application?",
        answer: "Our typical development cycle for a premium custom web application ranges from 4 to 12 weeks, depending on the complexity of the architecture and required integrations. We ensure a rapid yet highly optimized launch."
    },
    {
        question: "Do you provide SEO and marketing services?",
        answer: "Yes, our digital solutions encompass complete technical SEO dominance and digital marketing, ensuring your architecture is fully optimized for top Google rankings and maximum user engagement."
    },
    {
        question: "What makes Genoxlabs different from other digital agencies?",
        answer: "We don't just build websites; we engineer high-performance digital ecosystems. Our surgical precision, deep integration of Web3 mechanics, and cinematic UX/UI design place us ahead of traditional digital agencies in Sri Lanka."
    },
    {
        question: "Do you work with international clients outside Sri Lanka?",
        answer: "Absolutely. While we are proud of our Sri Lankan heritage and local presence, our digital infrastructure scales globally. We work with innovative clients across London, Tokyo, Silicon Valley, and beyond."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-16 md:py-24 px-4 md:px-6 relative" id="faq">
            {/* SEO Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Background design elements */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none opacity-40"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/15 rounded-full blur-[120px] pointer-events-none opacity-30"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center space-y-6 mb-12 md:mb-16">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden relative shadow-lg shadow-primary/25 border border-white/10 mb-2">
                        <Image src="/sqlogo.jpeg" alt="Genoxlabs Digital Solutions Logo" fill className="object-cover" />
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter shadow-sm">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Questions</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto"></div>
                    <p className="text-slate-300 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
                        Everything you need to know about our premium digital solutions, Web3 deployment protocols, and architectural engineering.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`glass-glow border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${
                                openIndex === idx ? "bg-white/5 border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]" : "hover:bg-white-[0.02]"
                            }`}
                        >
                            <button
                                onClick={() => toggleFAQ(idx)}
                                className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4"
                                aria-expanded={openIndex === idx}
                            >
                                <h3 className="text-white font-bold text-base md:text-lg uppercase tracking-tight pr-4">
                                    {faq.question}
                                </h3>
                                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-45 bg-primary/20 border-primary/50 text-white" : "text-white/50"}`}>
                                    <span className="material-symbols-outlined text-sm">add</span>
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-slate-300 text-sm md:text-base leading-relaxed font-light border-t border-white/5 mt-2">
                                    <div className="pt-4">{faq.answer}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
