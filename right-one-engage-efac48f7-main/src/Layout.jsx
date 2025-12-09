
import React, { useState, useEffect } from "react";
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-orange-500/20' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
             <span className="text-2xl font-bold text-white">R1GHT <span className="text-orange-500">ONE</span></span>
          </div>
          
          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('case-studies')}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              Case studies
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </button>
          </div>

          {/* Right CTA Button */}
          <div className="flex items-center">
            <a
              href="https://cal.com/angell-alcequiez-zvrmco/growth-plan-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-orange-500 text-white font-semibold py-1.5 pl-5 pr-1.5 rounded-full hover:bg-orange-600 transition-all duration-300 text-sm group hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105"
            >
              Let's talk
              <div className="flex items-center justify-center w-7 h-7 bg-white rounded-full">
                <ArrowRight className="w-3.5 h-3.5 text-orange-500 group-hover:rotate-[-45deg] transition-transform duration-300" />
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4 flex items-center justify-center gap-6">
          <button
            onClick={() => scrollToSection('case-studies')}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
          >
            Case studies
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <Button
      size="icon"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 rounded-full bg-black hover:bg-gray-800 text-white shadow-lg transition-all duration-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
    >
      <ArrowRight className="h-5 w-5 -rotate-90"/>
    </Button>
  );
}

export default function Layout({ children }) {
  useEffect(() => {
    // Add Facebook domain verification meta tag
    if (!document.querySelector('meta[name="facebook-domain-verification"]')) {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'facebook-domain-verification');
      meta.setAttribute('content', 'wvrumielzgpsjhznwox5glqa9ltsgh');
      document.head.appendChild(meta);
    }

    // Add fb:app_id meta tag
    if (!document.querySelector('meta[property="fb:app_id"]')) {
      const fbMeta = document.createElement('meta');
      fbMeta.setAttribute('property', 'fb:app_id');
      fbMeta.setAttribute('content', '1078109477795593');
      document.head.appendChild(fbMeta);
    }

    // Meta Pixel Code
    let fbqInitScript = null;

    if (typeof window !== 'undefined' && !window.fbq) {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        
        fbqInitScript = document.createElement('script');
        fbqInitScript.innerHTML = `
          fbq('init', '1129543225811529');
          fbq('track', 'PageView');
        `;
        document.head.appendChild(fbqInitScript);
    }

    // Cleanup function to remove the tags if the layout component unmounts
    return () => {
      const metaTag = document.querySelector('meta[name="facebook-domain-verification"]');
      if (metaTag) {
        document.head.removeChild(metaTag);
      }
      const fbMetaTag = document.querySelector('meta[property="fb:app_id"]');
      if (fbMetaTag) {
        document.head.removeChild(fbMetaTag);
      }
      if (fbqInitScript && fbqInitScript.parentNode) {
        fbqInitScript.parentNode.removeChild(fbqInitScript);
      }
    };
  }, []);

  return (
    <>
      <noscript>
        <img height="1" width="1" style={{display: 'none'}}
             src="https://www.facebook.com/tr?id=1129543225811529&ev=PageView&noscript=1"
             alt=""
        />
      </noscript>
      <div className="bg-black text-white font-sans">
        <Navbar />
        <main>{children}</main>
        <BackToTopButton />
      </div>
    </>
  );
}
