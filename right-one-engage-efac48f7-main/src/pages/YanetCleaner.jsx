
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/home/Footer';

export default function YanetCleanerPage() {
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
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a232a04f2bd421efac48f7/10008d592_Disenosintitulo1.png"
                                alt="Yanet Cleaner"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-orange-500"></div>
                    </div>
                    
                    <div className="max-w-4xl">
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black mb-6 leading-tight">
                            Yanet Cleaner
                        </h1>
                        <p className="text-2xl text-gray-600 leading-relaxed">
                            Domestic-services agency — Ops Automation Program (Application, Follow-Up & Collections Systems)
                        </p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-3">
                        <div className="sticky top-8">
                            <div className="w-16 h-1 bg-orange-500 mb-6"></div>
                            <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-3">Case Study</h3>
                            <p className="text-sm text-gray-500">Ops Automation</p>
                        </div>
                    </div>

                    <div className="lg:col-span-9 space-y-16">
                        <section>
                            <div className="flex items-start gap-6 mb-6">
                                <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                                <div>
                                    <h2 className="text-4xl font-bold text-black mb-4">Challenge</h2>
                                    <div className="w-16 h-1 bg-orange-500 mb-6"></div>
                                    <p className="text-xl text-gray-700 leading-relaxed">
                                        Communication lived across WhatsApp, Instagram, and phone—making it easy to miss leads, delay replies, and duplicate work. Creating worker profiles was manual and inconsistent. Follow-ups slipped through the cracks. Late payments and ad-hoc reminders created cash-flow friction.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-start gap-6 mb-6">
                                <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                                <div>
                                    <h2 className="text-4xl font-bold text-black mb-4">Solution</h2>
                                    <div className="w-16 h-1 bg-orange-500 mb-8"></div>
                                    
                                    <div className="space-y-8">
                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h3 className="text-xl font-bold text-black mb-3">Application Systems</h3>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                WhatsApp + web intake that auto-creates candidate/client profiles, collects IDs/references, assigns tags (city, availability, role), and routes to a hiring pipeline with interview slots.
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h3 className="text-xl font-bold text-black mb-3">Follow-Up Systems</h3>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                Multi-channel sequences (WhatsApp/SMS/email) for lead nurture, interview reminders, trial/placement scheduling, rescheduling, and post-placement check-ins. SLA timers + "stuck" alerts keep ops on pace.
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h3 className="text-xl font-bold text-black mb-3">Collections Systems</h3>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                Auto-invoices with payment links, smart dunning (gentle → firm cadence), receipt logging, and reconciliation dashboards.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-start gap-6 mb-6">
                                <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                                <div>
                                    <h2 className="text-4xl font-bold text-black mb-4">Impact</h2>
                                    <div className="w-16 h-1 bg-orange-500 mb-8"></div>
                                    
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Sub-5-minute average first response time (down from hours)</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Lead-to-booking up ~25–35% from consistent nurture</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">No-shows cut below ~10% with automated confirmations</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Profile creation time ↓ ~70% via auto-capture</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Overdue invoices down ~50% with smart reminders</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-xl border-2 border-black hover:border-orange-500 transition-colors">
                                            <p className="text-lg text-gray-700">Handle 2× placements with same headcount</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-black text-white rounded-3xl p-10 sm:p-14 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-1 bg-orange-500 mb-6"></div>
                                <h2 className="text-3xl font-bold mb-6">Takeaway</h2>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    End-to-end communication, follow-up, and collections automation turned a high-touch service into a predictable, scalable operation—freeing the team to focus on quality placements rather than chasing messages and payments.
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
