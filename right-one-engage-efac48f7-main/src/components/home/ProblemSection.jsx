
import React from 'react';
import { ArrowRight, TrendingUp, Zap, Target, BarChart3, Brain } from 'lucide-react';

const ProblemSection = () => {
    return (
        <section id="problem" className="py-20 sm:py-32 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 bg-gray-800/50 text-white px-4 py-2 rounded-full text-sm font-medium border border-gray-700/50">
                        <span className="flex items-center justify-center w-5 h-5 bg-orange-500/20 text-orange-400 rounded-full text-xs font-bold border border-orange-500/30">1</span>
                        Introducing R1GHT ONE
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                            Your AI Growth Partner{' '}
                            <span className="block">for <span className="text-orange-500">predictable growth.</span></span>
                        </h2>
                        
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            Angell here. We partner with fast-moving B2B teams to turn AI into revenue. Deep diagnostic &gt; targeted fixes &gt; shipped systems. Practical improvements you feel in weeks, not quarters.
                        </p>

                        <a
                            href="https://cal.com/angell-alcequiez-zvrmco/growth-plan-call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 bg-orange-500 text-white font-semibold py-2 pl-6 pr-2 rounded-full hover:bg-orange-600 transition-all duration-300 text-base group hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105"
                        >
                            Let's talk
                            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                                <ArrowRight className="w-4 h-4 text-orange-500 group-hover:rotate-[-45deg] transition-transform duration-300" />
                            </div>
                        </a>
                    </div>

                    <div className="relative h-[400px]">
                        <style>{`
                            @keyframes float-up {
                                0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
                                50% { transform: translateY(-30px) translateX(10px); opacity: 1; }
                            }
                            @keyframes float-diagonal {
                                0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.6; }
                                50% { transform: translateY(-40px) translateX(-20px) rotate(10deg); opacity: 1; }
                            }
                            @keyframes pulse-glow {
                                0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
                                50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.6); }
                            }
                            @keyframes orbit {
                                from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
                                to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
                            }
                        `}</style>

                        {/* Central AI Brain */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center" style={{animation: 'pulse-glow 3s ease-in-out infinite'}}>
                            <Brain className="w-16 h-16 text-white" />
                        </div>

                        {/* Orbiting Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{animation: 'orbit 10s linear infinite'}}>
                            <div className="w-16 h-16 bg-gray-900 border-2 border-orange-500/50 rounded-xl flex items-center justify-center">
                                <TrendingUp className="w-8 h-8 text-orange-400" />
                            </div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{animation: 'orbit 12s linear infinite', animationDelay: '-3s'}}>
                            <div className="w-16 h-16 bg-gray-900 border-2 border-orange-500/50 rounded-xl flex items-center justify-center">
                                <Target className="w-8 h-8 text-orange-400" />
                            </div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{animation: 'orbit 14s linear infinite', animationDelay: '-6s'}}>
                            <div className="w-16 h-16 bg-gray-900 border-2 border-orange-500/50 rounded-xl flex items-center justify-center">
                                <BarChart3 className="w-8 h-8 text-orange-400" />
                            </div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{animation: 'orbit 16s linear infinite', animationDelay: '-9s'}}>
                            <div className="w-16 h-16 bg-gray-900 border-2 border-orange-500/50 rounded-xl flex items-center justify-center">
                                <Zap className="w-8 h-8 text-orange-400" />
                            </div>
                        </div>

                        {/* Floating Background Elements */}
                        <div className="absolute top-10 right-10 w-3 h-3 bg-orange-500 rounded-full" style={{animation: 'float-up 4s ease-in-out infinite'}}></div>
                        <div className="absolute bottom-20 left-10 w-2 h-2 bg-orange-400 rounded-full" style={{animation: 'float-diagonal 5s ease-in-out infinite', animationDelay: '-2s'}}></div>
                        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-orange-500 rounded-full" style={{animation: 'float-up 6s ease-in-out infinite', animationDelay: '-3s'}}></div>
                        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-orange-400 rounded-full" style={{animation: 'float-diagonal 7s ease-in-out infinite', animationDelay: '-1s'}}></div>

                        {/* Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full opacity-20">
                            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5">
                                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                            </line>
                            <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5">
                                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.5s" repeatCount="indefinite" />
                            </line>
                            <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5">
                                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
                            </line>
                            <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5">
                                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.2s" repeatCount="indefinite" />
                            </line>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
