import React from 'react';

export default function RefundsPage() {
    return (
        <div className="bg-black text-gray-300 min-h-screen py-24 sm:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-invert prose-headings:text-orange-400 max-w-none">
                    <h1>Refunds & Cancellations Policy</h1>

                    <h2>Scope</h2>
                    <p>This policy applies to our consulting, implementation, and subscription services.</p>

                    <h2>Meeting Bookings</h2>
                    <ul>
                        <li><strong>Rescheduling:</strong> No fee if you reschedule up to 24 hours before the appointment.</li>
                        <li><strong>Cancellation:</strong> Full refund if you cancel within 24 hours of payment and before any service begins. Please contact us to initiate a cancellation.</li>
                    </ul>

                    <h2>Subscriptions/Retainers</h2>
                    <p>You may cancel your subscription to avoid future charges by providing at least 1 day's notice before your next billing cycle begins. Charges that have already been processed are non-refundable, except in the case of a duplicate billing error on our part.</p>
                </div>
            </div>
        </div>
    );
}