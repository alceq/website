import React, { useState } from 'react';

const ServiceCard = ({ title, services, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative h-[400px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Image */}
            <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Black Background */}
            <div
                className={`absolute inset-0 bg-black border-2 border-orange-500/30 transition-opacity duration-500 ${
                    isHovered ? 'opacity-0' : 'opacity-100'
                }`}
            ></div>

            {/* Content */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                <h3
                    className={`text-3xl font-bold transition-colors duration-500 ${
                        isHovered ? 'text-white' : 'text-white'
                    }`}
                >
                    {title}
                </h3>

                <div className="flex flex-wrap gap-3">
                    {services.map((service, index) => (
                        <span
                            key={index}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                                isHovered
                                    ? 'bg-white/20 text-white border border-white/30 backdrop-blur-sm'
                                    : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                            }`}
                        >
                            {service}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const DifferenceSection = () => {
    const categories = [
        {
            title: 'Voice AI',
            services: ['AI receptionist', 'Lead qualification', 'Outbound caller'],
            image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a232a04f2bd421efac48f7/3c373845c_GeneratedImageOctober252025-12_46AM.png'
        },
        {
            title: 'Lead Generation',
            services: ['AI cold Outreach Systems', 'Content generation systems', 'Personalized outreach systems'],
            image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a232a04f2bd421efac48f7/7d182829e_GeneratedImageOctober252025-1_00AM.png'
        },
        {
            title: 'Sales',
            services: ['Sales Agent Systems', 'Nurture Systems', 'Proposal systems'],
            image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        },
        {
            title: 'Customer Experience',
            services: ['Email systems', 'AI follow-up systems', 'Customer fulfillment systems'],
            image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        }
    ];

    return (
        <section id="difference" className="py-20 sm:py-32 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 bg-gray-800/50 text-white px-4 py-2 rounded-full text-sm font-medium border border-gray-700/50 mb-8">
                        <span className="flex items-center justify-center w-5 h-5 bg-orange-500/20 text-orange-400 rounded-full text-xs font-bold border border-orange-500/30">4</span>
                        Our Services
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                        What we specialize in.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((category, index) => (
                        <ServiceCard
                            key={index}
                            title={category.title}
                            services={category.services}
                            image={category.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DifferenceSection;