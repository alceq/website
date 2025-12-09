import React from 'react';
import { createPageUrl } from '@/utils';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
    return (
        <div className="bg-black text-gray-300 min-h-screen py-24 sm:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-invert prose-headings:text-orange-400 prose-a:text-orange-400 hover:prose-a:text-orange-500 max-w-none">
                    <h1>Privacy Policy</h1>
                    
                    <p><strong>Controller:</strong> R1GHT ONE LLC</p>
                    <p><strong>Contact email:</strong> <a href="mailto:angell@rightoneai.com">angell@rightoneai.com</a></p>

                    <h2>Data We Collect</h2>
                    <ul>
                        <li><strong>Identifiers:</strong> name, email, phone, company.</li>
                        <li><strong>Usage data:</strong> pages visited, IP, device (via cookies/analytics).</li>
                        <li><strong>Communications data:</strong> messages sent via forms, WhatsApp, or email, and meeting notes.</li>
                        <li><strong>Billing:</strong> where applicable, information needed to process payments (handled by third parties such as Stripe).</li>
                    </ul>

                    <h2>Purposes</h2>
                    <ul>
                        <li>Provide and improve our services.</li>
                        <li>Manage bookings, support, and post-appointment follow-up.</li>
                        <li>Send transactional communications and, with your consent, marketing communications.</li>
                        <li>Comply with legal and security obligations.</li>
                    </ul>

                    <h2>Legal Bases (EU/UK if applicable)</h2>
                    <p>Consent; performance of a contract; legitimate interest; legal obligation.</p>

                    <h2>Retention</h2>
                    <p>We retain data for as long as necessary for the purposes described and to meet legal obligations.</p>

                    <h2>Recipients</h2>
                    <p>Service providers acting as processors (e.g., GoHighLevel/LeadConnector, Meta/WhatsApp Business, Google, Stripe). Data processing agreements are in place where required.</p>

                    <h2>International Transfers</h2>
                    <p>May occur. We implement appropriate safeguards (e.g., Standard Contractual Clauses).</p>

                    <h2>Your Rights</h2>
                    <p>Access, rectification, erasure, objection, restriction, and portability. Request these at <a href="mailto:angell@rightoneai.com">angell@rightoneai.com</a>. You may withdraw consent at any time.</p>

                    <h2>Cookies</h2>
                    <p>See our <Link to={createPageUrl('Cookies')}>Cookies Policy</Link> for details on cookies and similar technologies.</p>

                    <h2>WhatsApp Consent Notice</h2>
                    <p>For forms on our site that collect your contact information for bookings or inquiries, we may ask for your consent with the following notice:</p>
                    <div className="border-l-4 border-orange-500 pl-4 italic my-4">
                        <strong>WhatsApp Consent:</strong> I agree to receive transactional and customer-service messages via WhatsApp related to my bookings, reminders, rescheduling, and service follow-up. I understand I can reply STOP to opt out.
                    </div>
                </div>
            </div>
        </div>
    );
}