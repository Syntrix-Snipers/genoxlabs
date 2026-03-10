"use client";

export default function TechDNA() {
    const techs = [
        { name: "React", icon: "terminal", color: "primary" },
        { name: "Next.js", icon: "layers", color: "secondary" },
        { name: "GraphQL", icon: "database", color: "accent" },
        { name: "Solidity", icon: "security", color: "primary" },
        { name: "AWS", icon: "cloud_done", color: "secondary" },
        { name: "Ethers.js", icon: "token", color: "accent" }
    ];

    return (
        <section className="py-40 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 space-y-6">
                    <h2 className="font-display text-5xl font-black text-white uppercase tracking-tighter">Technological DNA</h2>
                    <p className="text-slate-400 uppercase tracking-widest text-xs md:text-sm">Built on the world&apos;s most robust frameworks</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {techs.map((tech, idx) => (
                        <div key={idx} className="glass tech-card p-10 rounded-[32px] text-center space-y-4 group">
                            <div className={`w-12 h-12 bg-${tech.color}/10 rounded-xl flex items-center justify-center mx-auto text-${tech.color} group-hover:bg-${tech.color} group-hover:text-white transition-all`}>
                                <span className="material-symbols-outlined text-3xl">{tech.icon}</span>
                            </div>
                            <p className="font-black text-[10px] md:text-xs uppercase tracking-widest text-white">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
