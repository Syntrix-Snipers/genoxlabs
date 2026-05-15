"use client";

import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    // Auto hide toast
    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('loading');

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setStatus('success');
            setToast({ 
                type: 'success', 
                message: "Transmission received successfully. We'll make contact soon." 
            });
            formRef.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setToast({ 
                type: 'error', 
                message: "Transmission failed. Please try again." 
            });
        } finally {
            setStatus('idle');
        }
    };

    return (
        <section className="py-12 md:py-20 px-4 md:px-6 relative overflow-hidden" id="contact">
            {/* Design Globes */}
            <div className="absolute top-1/4 -left-20 w-64 md:w-80 h-64 md:h-80 bg-primary/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none opacity-40"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10 text-center lg:text-left">
                
                {/* Left Side - Original Design Unchanged */}
                <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
                    <div className="space-y-3 md:space-y-4 relative z-10">
                        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[1.1]">
                            Let&apos;s Synthesize <br />
                            The <span className="text-secondary">Next Big</span> Thing
                        </h2>
                        <p className="text-white text-base md:text-xl text-slate-400 font-light max-w-lg leading-relaxed mx-auto lg:mx-0">
                            Our intake sensors are ready. Tell us about your objective and let&apos;s calculate the trajectory.
                        </p>
                    </div>

                    <div className="space-y-3 md:space-y-4 relative z-10 px-2 md:px-0">
                        <div className="flex items-center gap-2 md:gap-3 group cursor-default justify-center lg:justify-start">
                            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full glass-glow flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-lg shadow-secondary/20">
                                <span className="material-symbols-outlined text-sm md:text-base">rocket_launch</span>
                            </div>
                            <span className="font-bold uppercase tracking-widest text-[10px] md:text-xs text-white/70">Strategic Guidance</span>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3 group cursor-default justify-center lg:justify-start">
                            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full glass-glow flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-lg shadow-secondary/20">
                                <span className="material-symbols-outlined text-sm md:text-base">hub</span>
                            </div>
                            <span className="font-bold uppercase tracking-widest text-[10px] md:text-xs text-white/70">Network Integration</span>
                        </div>
                    </div>

                <div className="relative group max-w-sm md:max-w-md mx-auto lg:mx-0 scale-95 md:scale-100">
    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[30px] md:rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
    
    <div className="relative glass-glow p-4 md:p-6 rounded-[30px] md:rounded-[40px] border border-white/10 overflow-hidden flex flex-col items-center justify-center space-y-3 md:space-y-4 min-h-[120px] md:min-h-[180px] shadow-2xl">
        
        <div className="grid grid-cols-3 gap-3 md:gap-4">
            
            {/* Email */}
            <a 
                href="#formname" 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-2 cursor-pointer"
                aria-label="Send email"
            >
                <span className="material-symbols-outlined text-xl md:text-2xl">mail</span>
            </a>

            {/* Call */}
            <a 
                href="tel:+94727703159" 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-2 cursor-pointer"
                aria-label="Call us"
            >
                <span className="material-symbols-outlined text-xl md:text-2xl">call</span>
            </a>

            {/* Location - Colombo */}
            <a 
                href="https://www.google.com/maps/place/Colombo,+Sri+Lanka" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-accent hover:text-white transition-all transform hover:-translate-y-2 cursor-pointer"
                aria-label="View location on Google Maps"
            >
                <span className="material-symbols-outlined text-xl md:text-2xl">location_on</span>
            </a>

        </div>

        <h4 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter text-center">CONTACT US</h4>
    </div>
</div>
                </div>

                {/* Form Side */}
                <div className="relative z-10 px-4 md:px-0"  id='formname'>
                    <div className="glass-glow p-6 md:p-12 rounded-[30px] md:rounded-[50px] border border-white/10 shadow-2xl relative overflow-hidden bg-deep-space/30">
                        <div className="hidden lg:block absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-white/10 to-primary/30 rounded-full shadow-2xl z-0 pointer-events-none opacity-60"
                            style={{ boxShadow: 'inset -30px -30px 80px rgba(0,0,0,0.6), 0 0 100px rgba(255,95,179,0.3)' }}></div>

                        <form 
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="relative z-10 space-y-6 md:space-y-8 text-left"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                <div className="space-y-2 md:space-y-3">
                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 ml-1">Entity Name</label>
                                    <input name="user_name" required className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-8 py-3.5 md:py-5 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-white font-medium placeholder-white/40 text-sm md:text-base outline-none" placeholder="IDENTIFY YOURSELF" type="text" />
                                </div>
                                <div className="space-y-2 md:space-y-3">
                                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 ml-1">Secure Email</label>
                                    <input name="user_email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-8 py-3.5 md:py-5 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-white font-medium placeholder-white/40 text-sm md:text-base outline-none" placeholder="EMAIL@DOMAIN.COM" />
                                </div>
                            </div>

                            <div className="space-y-2 md:space-y-3">
                                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 ml-1">Project Protocol</label>
                                <div className="relative">
                                    <select name="service" required className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-8 py-3.5 md:py-5 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-white font-medium appearance-none outline-none text-sm md:text-base hover:bg-white/10">
                                        <option value="" className="bg-deep-space text-white/60">SELECT PROTOCOL</option>
                                        <option value="System Infrastructure (Web)" className="bg-deep-space text-white">System Infrastructure (Web)</option>
                                        <option value="Mobile Unit (App)" className="bg-deep-space text-white">Mobile Unit (App)</option>
                                        <option value="Social Expansion (Marketing)" className="bg-deep-space text-white">Social Expansion (Marketing)</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 md:space-y-3">
                                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 ml-1">Manifesto</label>
                                <textarea name="message" required className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-8 py-3.5 md:py-5 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-white resize-none font-medium placeholder-white/40 text-sm md:text-base outline-none" placeholder="DESCRIBE YOUR VISION..." rows={4}></textarea>
                            </div>

                            <button 
                                type="submit"
                                disabled={status === 'loading'}
                                className="glow-button w-full bg-primary text-white py-4 md:py-6 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.25em] text-[10px] md:text-xs flex items-center justify-center gap-4 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'TRANSMITTING SIGNAL...' : 'Deploy Transmission'}
                                <span className="material-symbols-outlined text-sm md:text-base">send</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Modern Top Toast - FIXED with higher z-index */}
            {toast && (
                <div className={`fixed top-25 left-1/2 -translate-x-1/2 z-[9999] min-w-[320px] max-w-md px-6 py-4 rounded-2xl 
                    flex items-center gap-4 shadow-2xl border backdrop-blur-xl transition-all duration-500
                    ${toast.type === 'success' 
                        ? 'bg-gradient-to-r from-green-500/95 to-emerald-500/95 border-green-400/50' 
                        : 'bg-gradient-to-r from-red-500/95 to-rose-500/95 border-red-400/50'}`}
                >
                    <span className="material-symbols-outlined text-2xl">
                        {toast.type === 'success' ? 'check_circle' : 'error'}
                    </span>
                    <div className="flex-1">
                        <p className="font-medium text-white leading-tight">{toast.message}</p>
                    </div>
                    <button 
                        onClick={() => setToast(null)}
                        className="ml-auto text-white/70 hover:text-white transition-colors p-1"
                    >
                        <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                </div>
            )}
        </section>
    );
}