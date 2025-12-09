
import React from 'react';
import { ArrowRight } from 'lucide-react';

const FaqSection = () => {
    return (
        <section id="cta" className="py-20 sm:py-32 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl">
                    <p className="text-gray-400 text-lg mb-4">Work with us</p>
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
                        Let's work
                    </h2>
                    <p className="text-2xl text-gray-300 mb-12">
                        Start with a free, thirty minute growth call.
                    </p>
                    <a
                        href="https://cal.com/angell-alcequiez-zvrmco/growth-plan-call"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-orange-500 text-white font-semibold py-3 pl-8 pr-3 rounded-full hover:bg-orange-600 transition-all duration-300 text-lg group hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
                    >
                        Let's talk
                        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                            <ArrowRight className="w-5 h-5 text-orange-500 group-hover:rotate-[-45deg] transition-transform duration-300" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
