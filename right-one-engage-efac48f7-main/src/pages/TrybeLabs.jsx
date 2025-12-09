
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/home/Footer';

export default function TrybeLabsPage() {
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
                    <div className="relative rounded-3xl overflow-hidden mb-12 border-4 border-black shadow-2xl bg-white">
                        <div className="aspect-[16/9] flex items-center justify-center p-8">
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a232a04f2bd421efac48f7/6cf1a99a2_16299843-trybe-labs-logo-2550x18001.jpg"
                                alt="Trybe Labs"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-orange-500"></div>
                    </div>
                    
                    <div className="max-w-4xl">
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black mb-6 leading-tight">
                            Trybe Labs
                        </h1>
                        <p className="text-2xl text-gray-600 leading-relaxed">
                            DTC hormone testing — AI Lead Engine + Holiday SMS Playbooks + Automated Newsletter
                        </p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-3">
                        <div className="sticky top-8">
                            <div className="w-16 h-1 bg-orange-500 mb-6"></div>
                            <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-3">Case Study</h3>
                            <p className="text-sm text-gray-500">Lead Engine + SMS Automation</p>
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
                                        Lead flow was inconsistent and overly dependent on ads. Seasonal demand spikes (e.g., New Year resets, Father's Day, BFCM) weren't captured. SMS blasts were manual and generic. The newsletter went out irregularly, so list growth and repeat purchases lagged.
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
                                            <h3 className="text-xl font-bold text-black mb-3">Personalized Holiday SMS</h3>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                Playbooks for New Year, Father's Day, BFCM, and "Check-In" months. Dynamic copy (goal, quiz result, last action), unique codes, and A/B hooks. Time-zone quiet hours, compliant opt-in/STOP handling, and reply-to-buy flows.
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h3 className="text-xl font-bold text-black mb-3">Warm-Up & Follow-Through</h3>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                Pre-holiday drips (education + soft CTA), 3-touch campaign day cadences (announce → social proof → last call), then 7-day post-holiday win-backs and cross-sells.
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h3 className="text-xl font-bold text-black mb-3">Automated Newsletter</h3>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                Weekly "Test-Coach" format—education, case snippets, and offer tile—auto-assembled from content blocks. Behavior-based sends (opened, clicked, viewed cart), deliverability guardrails (list hygiene, domain auth).
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h3 className="text-xl font-bold text-black mb-3">Ops & Reporting</h3>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                Single dashboard for list growth, opt-in sources, reply rates, revenue per send, and cohort LTV; alerts for list decay or underperforming hooks.
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
                                            <p className="text-lg text-gray-700">Holiday SMS CTR ~20–35% with reply rates 8–12%; best days delivered record single-day revenue</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Cost per lead ↓ ~25–40% via better attribution and segmentation</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Newsletter consistency → 3–5% weekly list growth and steady pipeline</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Repeat purchases trended up with post-holiday cross-sells</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Owner time saved ~10–15 hrs/month on campaign management</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Campaigns now run from templates instead of one-off scrambles</p>
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
                                    Pairing a performance lead engine with seasonal, personalized SMS—and a consistent, automated newsletter—turned sporadic interest into a predictable revenue calendar for Trybe Labs.
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
