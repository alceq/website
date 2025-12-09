import React from 'react';

export default function CookiesPage() {
    return (
        <div className="bg-black text-gray-300 min-h-screen py-24 sm:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-invert prose-headings:text-orange-400 max-w-none">
                    <h1>Cookies Policy</h1>
                    <p>This site uses first-party and third-party cookies to (i) measure audience, (ii) remember preferences, (iii) improve site performance, and (iv) enhance security. You can manage or withdraw your consent at any time from the cookie banner or your browser settings.</p>

                    <h2>Types of cookies:</h2>
                    <ul>
                        <li>Essential</li>
                        <li>Analytics</li>
                        <li>Functional</li>
                        <li>Advertising</li>
                    </ul>

                    <h2>Common third parties:</h2>
                    <ul>
                        <li>Google Analytics/Tag Manager</li>
                        <li>Meta Pixel</li>
                        <li>GoHighLevel</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}