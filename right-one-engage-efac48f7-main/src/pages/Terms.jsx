import React from 'react';
import { createPageUrl } from '@/utils';
import { Link } from 'react-router-dom';

export default function TermsPage() {
    return (
        <div className="bg-black text-gray-300 min-h-screen py-24 sm:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-invert prose-headings:text-orange-400 prose-a:text-orange-400 hover:prose-a:text-orange-500 max-w-none">
                    <h1>Terms and Conditions of Service</h1>
                    <p>Last updated: Aug/28/2025</p>

                    <h2>Site Owner / Service Provider</h2>
                    <ul>
                        <li><strong>Legal name:</strong> R1GHT ONE LLC</li>
                        <li><strong>Trade name (if applicable):</strong> R1GHT ONE</li>
                        <li><strong>Verified domain:</strong> <a href="https://rightoneai.com" target="_blank" rel="noopener noreferrer">https://rightoneai.com</a></li>
                        <li><strong>Address:</strong> 57 Sayre Street, Newark, New Jersey</li>
                        <li><strong>Email:</strong> <a href="mailto:angell@rightoneai.com">angell@rightoneai.com</a></li>
                        <li><strong>Phone:</strong> +1 908 446 4967</li>
                    </ul>

                    <h3>1. Purpose</h3>
                    <p>This site offers professional services in automation, voice AI, growth partner services, and marketing consulting. We do not sell physical goods or regulated products.</p>

                    <h3>2. Accounts and Bookings</h3>
                    <p>Meetings are managed through our Discovery Call calendar. By booking, you agree to these terms. Confirmations, reschedules, and reminders may be sent via WhatsApp and/or email with your prior consent.</p>

                    <h3>3. Pricing and Payments</h3>
                    <p>Fees and plans will be stated in proposals/contracts or on specific pages. Payments may be processed via Stripe. Applicable taxes are calculated based on your jurisdiction.</p>

                    <h3>4. Cancellations and Refunds</h3>
                    <p>Our Refunds & Cancellations Policy applies (see the <Link to={createPageUrl('Refunds')}>Refunds & Cancellations Policy</Link>).</p>

                    <h3>5. Permitted Use</h3>
                    <p>You may not use our services for illegal activities, spam, or content that violates Meta/WhatsApp policies or applicable laws.</p>

                    <h3>6. Results</h3>
                    <p>We strive to deliver excellent service but do not guarantee specific financial results. Outcomes depend on variables beyond our control (market conditions, execution, creativity, budget, etc.).</p>

                    <h3>7. Intellectual Property</h3>
                    <p>Unless otherwise agreed in writing, delivered materials (prompts, workflows, creative assets) are for the client’s use under the applicable contract.</p>

                    <h3>8. Limitation of Liability</h3>
                    <p>To the extent permitted by law, our total liability is limited to the amount actually paid in the last 12 months for the relevant service.</p>

                    <h3>9. Changes</h3>
                    <p>We may update these terms; the “last updated” date will be posted. Continued use after changes constitutes acceptance.</p>

                    <h3>10. Contact</h3>
                    <p>For questions about these terms, email <a href="mailto:angell@rightoneai.com">angell@rightoneai.com</a>.</p>
                </div>
            </div>
        </div>
    );
}