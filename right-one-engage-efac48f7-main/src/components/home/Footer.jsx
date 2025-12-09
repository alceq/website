import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    {/* Left side - Links */}
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                        <Link to={createPageUrl('Privacy')} className="hover:text-orange-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to={createPageUrl('Cookies')} className="hover:text-orange-400 transition-colors">
                            Cookie preferences
                        </Link>
                    </div>
                    
                    {/* Right side - Copyright */}
                    <div className="text-sm text-gray-400">
                        © Copyright 2025, R1GHT ONE LLC
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;