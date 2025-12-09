
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/home/Footer';

export default function BlumecosmeticsPage() {
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
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a232a04f2bd421efac48f7/cbb2d3d5b_73c24b36-ab00-4348-b24a-2aad194677d0.jpg"
                                alt="Blume Cosmetics"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-orange-500"></div>
                    </div>
                    
                    <div className="max-w-4xl">
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black mb-6 leading-tight">
                            Blume Cosmetics
                        </h1>
                        <p className="text-2xl text-gray-600 leading-relaxed">
                            Artisan e-commerce — AI Content Engine + WhatsApp Commerce Automation
                        </p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-3">
                        <div className="sticky top-8">
                            <div className="w-16 h-1 bg-orange-500 mb-6"></div>
                            <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-3">Case Study</h3>
                            <p className="text-sm text-gray-500">Content + Commerce Automation</p>
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
                                        Content output was inconsistent, causing flat traffic and low DM intent. Orders arrived via WhatsApp but were handled manually—leading to missed messages, slow replies, and copy-paste invoicing. Post-purchase emails were ad-hoc, so repeat sales lagged.
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
                                            <h3 className="text-xl font-bold text-black mb-3">Content System</h3>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                Brand-trained AI generated content constantly; UGC prompts + review requests kept a steady stream of authentic content.
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h3 className="text-xl font-bold text-black mb-3">WhatsApp Order Assistant</h3>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                Catalog browser (SKUs, variants, bundles), guided checkout (address, delivery window), and secure payment handoff.
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h3 className="text-xl font-bold text-black mb-3">Invoicing & Receipts</h3>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                One-click invoices with payment links; automatic receipts + tax/summary PDFs saved to the customer profile.
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h3 className="text-xl font-bold text-black mb-3">Lifecycle Email/WhatsApp Flows</h3>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                Abandoned chat/cart nudges, order/shipping updates, refill reminders for consumables, and win-back sequences synchronized with inventory.
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h3 className="text-xl font-bold text-black mb-3">Support Automations</h3>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                FAQ/self-serve returns, warranty lookups, and smart routing for human takeover; daily digest of exceptions for the owner.
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
                                            <p className="text-lg text-gray-700">4–6× posting cadence with consistent brand voice and visuals</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">+20–35% lift in DM→Order conversion via guided WhatsApp checkout</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Order handling time ↓ to ~2–3 min (from ~8–10 min) with auto-invoicing</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Missed/forgotten DMs ↓ ~80% thanks to unified inbox + SLA timers</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Repeat purchase rate +15–25% driven by refill and win-back flows</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Owner time saved ~20–30 hrs/month across content, billing, and support</p>
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
                                    Pairing an AI content engine with WhatsApp-native ordering transformed Blume from "manual DM sales" into a responsive, on-brand storefront—faster checkouts, fewer mistakes, and more repeat buyers.
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
