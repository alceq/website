
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/home/Footer';

export default function BlossomStudioPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
                <Link 
                    to={createPageUrl('Home')}
                    className="inline-flex items-center gap-3 group mb-12"
                >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black group-hover:bg-gray-800 transition-all">
                        <ArrowLeft className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-medium text-black group-hover:text-gray-600 transition-colors">GoBack</span>
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                {/* Hero Section with Image */}
                <div className="mb-20">
                    <div className="relative rounded-3xl overflow-hidden mb-12 border-4 border-black shadow-2xl" style={{backgroundColor: '#FFFFFF'}}>
                        <div className="aspect-[16/9] flex items-center justify-center p-8" style={{backgroundColor: '#FFFFFF'}}>
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a232a04f2bd421efac48f7/cbeedf8b7_3.png"
                                alt="Blossom Studio"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-orange-500"></div>
                    </div>
                    
                    <div className="max-w-4xl">
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black mb-6 leading-tight">
                            Blossom Studio
                        </h1>
                        <p className="text-2xl text-gray-600 leading-relaxed">
                            Nail spa — Appointment, Referral & Content Automation
                        </p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-3">
                        <div className="sticky top-8">
                            <div className="w-16 h-1 bg-orange-500 mb-6"></div>
                            <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-3">Case Study</h3>
                            <p className="text-sm text-gray-500">Appointment & Content Automation</p>
                        </div>
                    </div>

                    <div className="lg:col-span-9 space-y-16">
                        {/* Challenge */}
                        <section>
                            <div className="flex items-start gap-6 mb-6">
                                <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                                <div>
                                    <h2 className="text-4xl font-bold text-black mb-4">Challenge</h2>
                                    <div className="w-16 h-1 bg-orange-500 mb-6"></div>
                                    <p className="text-xl text-gray-700 leading-relaxed">
                                        Bookings lived in DMs and phone calls, causing double-booking, no-shows, and gaps on the calendar. Referrals were word-of-mouth without tracking or incentives. Content was inconsistent, so profile visits and new-client inquiries were sporadic.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Solution */}
                        <section>
                            <div className="flex items-start gap-6 mb-6">
                                <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                                <div>
                                    <h2 className="text-4xl font-bold text-black mb-4">Solution</h2>
                                    <div className="w-16 h-1 bg-orange-500 mb-8"></div>
                                    
                                    <div className="space-y-8">
                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h3 className="text-xl font-bold text-black mb-3">Appointment Automation</h3>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                IG DM/WhatsApp/website booking with real-time availability, deposits, and card-on-file. Auto-confirmations, reminders, and reschedule flows; waitlist fills last-minute cancellations. Tech calendars synced; aftercare messages + upsell prompts for add-ons (gel, nail art, spa).
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h3 className="text-xl font-bold text-black mb-3">Referral Engine</h3>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                Unique links/codes, QR at the front desk & on receipts, 2-sided rewards (referrer + friend). NPS-triggered asks (9–10 gets referral prompt), monthly "Bring-a-Friend" campaigns, and duo-booking slots.
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h3 className="text-xl font-bold text-black mb-3">Content System</h3>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                Weekly 90-min batch → 4 pillars: Showcase (before/after), Education (care & trends), Trust (reviews/UGC), Convert (limited offers). AI assists with scripts, captions, and hashtags; posts schedule to IG/FB and mirror to WhatsApp Status with a Book Now CTA.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Impact */}
                        <section>
                            <div className="flex items-start gap-6 mb-6">
                                <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                                <div>
                                    <h2 className="text-4xl font-bold text-black mb-4">Impact</h2>
                                    <div className="w-16 h-1 bg-orange-500 mb-8"></div>
                                    
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">No-show rate ↓ ~40–60% with deposits + reminder flows</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Calendar utilization +20–30% as waitlist auto-filled cancellations</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Referral-sourced bookings +35–60% from tracked, 2-sided incentives</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Profile visits +50–90% and steadier DM → booking conversion via consistent content</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Average ticket +10–18% from smart add-on prompts and post-care upsells</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Owner time saved ~10–15 hrs/month across scheduling, follow-ups, and content</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Takeaway */}
                        <section className="bg-black text-white rounded-3xl p-10 sm:p-14 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-1 bg-orange-500 mb-6"></div>
                                <h2 className="text-3xl font-bold mb-6">Takeaway</h2>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    By automating bookings, referrals, and content, Blossom Studio turned scattered DMs into a predictable pipeline—fewer empty slots, more loyal clients, and a smoother day for the team.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
