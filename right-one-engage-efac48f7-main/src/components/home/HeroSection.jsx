
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes float {
            0%, 100% {
                transform: translateY(0px) translateX(0px);
            }
            33% {
                transform: translateY(-20px) translateX(10px);
            }
            66% {
                transform: translateY(10px) translateX(-10px);
            }
        }
        @keyframes float-slow {
            0%, 100% {
                transform: translateY(0px) translateX(0px);
            }
            50% {
                transform: translateY(-30px) translateX(-15px);
            }
        }
        @keyframes float-reverse {
            0%, 100% {
                transform: translateY(0px) translateX(0px);
            }
            50% {
                transform: translateY(25px) translateX(15px);
            }
        }
        .floating-circle {
            animation: float 8s ease-in-out infinite;
        }
        .floating-circle-slow {
            animation: float-slow 12s ease-in-out infinite;
        }
        .floating-circle-reverse {
            animation: float-reverse 10s ease-in-out infinite;
        }
      `}</style>
      <section className="relative min-h-screen flex items-center justify-start bg-black overflow-hidden pt-32 pb-12">
        {/* Floating Circles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large circles */}
          <div className="floating-circle absolute top-20 right-1/4 w-64 h-64 border-2 border-orange-500/40 rounded-full" style={{animationDelay: '0s'}}></div>
          <div className="floating-circle-slow absolute bottom-32 right-1/3 w-48 h-48 border-2 border-orange-500/35 rounded-full" style={{animationDelay: '-2s'}}></div>
          <div className="floating-circle-reverse absolute top-1/2 right-20 w-32 h-32 border-2 border-orange-500/50 rounded-full" style={{animationDelay: '-4s'}}></div>
          
          {/* Medium circles */}
          <div className="floating-circle absolute top-40 right-1/2 w-24 h-24 bg-orange-500/15 rounded-full blur-sm" style={{animationDelay: '-1s'}}></div>
          <div className="floating-circle-slow absolute bottom-1/4 right-1/4 w-20 h-20 bg-orange-500/20 rounded-full blur-sm" style={{animationDelay: '-3s'}}></div>
          
          {/* Small circles */}
          <div className="floating-circle-reverse absolute top-1/3 right-1/3 w-16 h-16 border-2 border-orange-500/60 rounded-full" style={{animationDelay: '-5s'}}></div>
          <div className="floating-circle absolute bottom-40 right-1/2 w-12 h-12 bg-orange-500/18 rounded-full blur-sm" style={{animationDelay: '-6s'}}></div>
          <div className="floating-circle-slow absolute top-1/4 right-1/5 w-10 h-10 border border-orange-500/45 rounded-full" style={{animationDelay: '-7s'}}></div>
          
          {/* Additional circles for more visibility */}
          <div className="floating-circle absolute top-60 right-10 w-40 h-40 border border-orange-500/30 rounded-full" style={{animationDelay: '-8s'}}></div>
          <div className="floating-circle-slow absolute bottom-60 right-40 w-28 h-28 bg-orange-500/12 rounded-full blur-sm" style={{animationDelay: '-9s'}}></div>
          <div className="floating-circle-reverse absolute top-3/4 right-1/5 w-20 h-20 border border-orange-500/40 rounded-full" style={{animationDelay: '-10s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
              The AI Growth Partner{' '}
              <span className="block mt-2">
                modern B2B teams trust{' '}
                <span className="text-orange-500">to grow.</span>
              </span>
            </h1>
            
            <div className="mt-12">
              <a
                href="https://cal.com/angell-alcequiez-zvrmco/growth-plan-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-orange-500 text-white font-semibold py-2 pl-6 pr-2 rounded-full hover:bg-orange-600 transition-all duration-300 text-base group hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105"
              >
                Let's talk
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                  <ArrowRight className="w-4 h-4 text-orange-500 group-hover:rotate-[-45deg] transition-transform duration-300" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
