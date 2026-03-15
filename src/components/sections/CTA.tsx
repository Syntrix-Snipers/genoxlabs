"use client";

export default function CTA() {
    return (
        <section className="max-w-7xl mx-auto px-6 mb-40">
            <div className="relative rounded-3xl bg-primary/5 border border-primary/20 overflow-hidden px-8 py-16 md:py-24 text-center">
                {/* Background Decoration */}
                <div className="absolute -top-24 -left-24 size-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none opacity-40"></div>
                <div className="absolute -bottom-24 -right-24 size-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none opacity-40"></div>

                <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-tight">
                        Ready to start your <span className="text-secondary">next project?</span>
                    </h2>
                    <p className="text-white text-lg md:text-xl font-light leading-relaxed">
                        Join dozens of forward-thinking companies that trust us to build their digital products.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                        <button className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all shadow-lg shadow-primary/25">
                            Get in Touch
                        </button>
                        <button className="w-full sm:w-auto px-10 py-4 glass border-primary/30 hover:border-primary text-slate-100 font-black uppercase tracking-widest text-xs rounded-xl transition-all">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
