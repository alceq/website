
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const CaseStudiesSection = () => {
    const caseStudies = [
        {
            title: "Yanet Cleaner",
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a232a04f2bd421efac48f7/10008d592_Disenosintitulo1.png",
            size: "small",
            hasWhiteBg: true,
            link: createPageUrl('YanetCleaner')
        },
        {
            title: "Blume Cosmetics",
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a232a04f2bd421efac48f7/cbb2d3d5b_73c24b36-ab00-4348-b24a-2aad194677d0.jpg",
            size: "large",
            link: createPageUrl('BlumeCosmetics')
        },
        {
            title: "Trybe Labs",
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a232a04f2bd421efac48f7/6cf1a99a2_16299843-trybe-labs-logo-2550x18001.jpg",
            size: "medium",
            link: createPageUrl('TrybeLabs')
        },
        {
            title: "Blossom Studio",
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a232a04f2bd421efac48f7/cbeedf8b7_3.png",
            size: "medium",
            hasWhiteBg: true, // Added this line as per the request
            link: createPageUrl('BlossomStudio')
        }
    ];

    const sizeClasses = {
        small: "w-32 h-32 sm:w-36 sm:h-36",
        medium: "w-52 h-52 sm:w-56 sm:h-56",
        large: "w-72 h-72 sm:w-80 sm:h-80"
    };

    return (
        <section id="case-studies" className="py-20 sm:py-32 bg-black relative overflow-hidden">
            <style>{`
                @keyframes float-1 {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-20px) translateX(10px); }
                }
                @keyframes float-2 {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-25px) translateX(-15px); }
                }
                @keyframes float-3 {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-18px) translateX(12px); }
                }
                @keyframes float-4 {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-22px) translateX(-8px); }
                }
            `}</style>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 bg-gray-800/50 text-white px-4 py-2 rounded-full text-sm font-medium border border-gray-700/50 mb-8">
                        <span className="flex items-center justify-center w-5 h-5 bg-orange-500/20 text-orange-400 rounded-full text-xs font-bold border border-orange-500/30">2</span>
                        Case Studies
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                        Our work <span className="text-orange-500">speaks for us.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto place-items-center">
                    {caseStudies.map((study, index) => (
                        <div 
                            key={index}
                            className="flex flex-col items-center gap-6"
                            style={{
                                animation: `float-${index + 1} ${6 + index * 0.5}s ease-in-out infinite`,
                                animationDelay: `${index * 0.3}s`
                            }}
                        >
                            {/* Bubble */}
                            <Link to={study.link} className={`group relative ${sizeClasses[study.size]} cursor-pointer block`}>
                                <div className={`relative w-full h-full rounded-full overflow-hidden border-4 border-orange-500/30 group-hover:border-orange-500 transition-all duration-500 group-hover:scale-110 shadow-2xl shadow-orange-500/20 group-hover:shadow-orange-500/50 ${study.hasWhiteBg ? 'bg-white' : ''}`}>
                                    <img 
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    
                                    {/* Subtle overlay - only for non-white background bubbles */}
                                    {!study.hasWhiteBg && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                    )}
                                </div>

                                {/* Glow effect */}
                                <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                                
                                {/* Inner glow ring */}
                                <div className="absolute inset-2 rounded-full border-2 border-orange-400/0 group-hover:border-orange-400/40 transition-all duration-500"></div>
                            </Link>

                            {/* Company Name */}
                            <h3 className="text-white font-bold text-lg sm:text-xl text-center group-hover:text-orange-400 transition-colors duration-300 whitespace-nowrap">
                                {study.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSection;
