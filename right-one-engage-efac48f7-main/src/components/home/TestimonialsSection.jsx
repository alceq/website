import React from 'react';

const TestimonialsSection = () => {
    return (
        <section id="about" className="py-20 sm:py-32 bg-black relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-20 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
                <div className="absolute bottom-20 left-20 w-2 h-2 bg-orange-500 rounded-full animate-ping" style={{animationDelay: '-1s'}}></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 bg-gray-800/50 text-white px-4 py-2 rounded-full text-sm font-medium border border-gray-700/50 mb-8">
                        <span className="flex items-center justify-center w-5 h-5 bg-orange-500/20 text-orange-400 rounded-full text-xs font-bold border border-orange-500/30">3</span>
                        About us
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Angell, <span className="text-orange-500">on your team</span>
                    </h2>
                    
                    <p className="text-xl text-gray-300 max-w-3xl">
                        One point of contact. One clear plan. One accountable owner for your AI roadmap.
                    </p>
                </div>

                <div className="mt-16 max-w-4xl">
                    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 sm:p-12 rounded-3xl border border-orange-500/20 shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-500">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Photo */}
                            <div className="flex-shrink-0">
                                <div className="relative">
                                    <div className="w-56 h-72 sm:w-64 sm:h-80 rounded-3xl overflow-hidden border-4 border-orange-500/40 shadow-xl">
                                        <img 
                                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a232a04f2bd421efac48f7/fcc8f2e6d_Screenshot2025-10-25at121804AM.png"
                                            alt="Angell Alcequiez"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-orange-500/20 blur-xl -z-10"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                    Angell Alcequiez
                                </h3>
                                <p className="text-orange-400 font-semibold text-lg mb-6">
                                    Founder / Solopreneur
                                </p>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    I translate goals into systems—lead capture → nurture → booking, knowledge → answers → support, ideas → drafts → published. This year I specialized in agent orchestration, automation, and team enablement so you keep results after I'm gone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;