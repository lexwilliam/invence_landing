export default function TermsOfService() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

            <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                    <strong>Last updated:</strong>{' '}
                    {new Date().toLocaleDateString()}
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        1. Acceptance of Terms
                    </h2>
                    <p className="mb-4">
                        By accessing and using the Invence mobile application
                        ("App"), you accept and agree to be bound by the terms
                        and provision of this agreement. If you do not agree to
                        abide by the above, please do not use this service.
                    </p>
                    <p className="mb-4">
                        These Terms of Service ("Terms") govern your use of our
                        inventory management, point-of-sale (POS), transaction
                        processing, and profit/expense analytics application
                        provided by Invence.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        2. Description of Service
                    </h2>
                    <p className="mb-4">
                        Invence is a mobile application that provides:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Inventory management and tracking</li>
                        <li>Point-of-sale (POS) functionality</li>
                        <li>Transaction processing and recording</li>
                        <li>Profit and expense analytics</li>
                        <li>Order management and processing</li>
                        <li>Business data storage and management</li>
                    </ul>
                    <p className="mb-4">
                        The service is available in both free and paid tiers,
                        with different features and limitations for each tier.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        3. User Accounts and Registration
                    </h2>
                    <p className="mb-4">To use our service, you must:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Create an account with accurate information</li>
                        <li>Provide a valid email address and full name</li>
                        <li>
                            Be at least 18 years old or have parental consent
                        </li>
                        <li>
                            Maintain the security of your account credentials
                        </li>
                        <li>Notify us immediately of any unauthorized use</li>
                    </ul>
                    <p className="mb-4">
                        You are responsible for all activities that occur under
                        your account. We reserve the right to suspend or
                        terminate accounts that violate these terms.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        4. Acceptable Use Policy
                    </h2>
                    <p className="mb-4">You agree not to use the service to:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Violate any applicable laws or regulations</li>
                        <li>
                            Transmit or store malicious code, viruses, or
                            harmful content
                        </li>
                        <li>
                            Attempt to gain unauthorized access to our systems
                        </li>
                        <li>
                            Use the service for any illegal or unauthorized
                            purpose
                        </li>
                        <li>
                            Interfere with or disrupt the service or servers
                        </li>
                        <li>Share your account credentials with others</li>
                        <li>
                            Use automated systems to access the service without
                            permission
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        5. Payment Terms and Billing
                    </h2>
                    <h3 className="text-xl font-medium mb-3">
                        5.1 Free and Paid Plans
                    </h3>
                    <p className="mb-4">
                        We offer both free and paid subscription plans. Free
                        plans have limited features and usage restrictions. Paid
                        plans provide access to additional features and higher
                        usage limits.
                    </p>

                    <h3 className="text-xl font-medium mb-3">
                        5.2 Payment Processing
                    </h3>
                    <p className="mb-4">
                        Payments are processed through third-party services:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Google Pay (currently supported)</li>
                        <li>Apple Pay (planned for future implementation)</li>
                    </ul>
                    <p className="mb-4">
                        All payment transactions are handled securely by the
                        respective payment providers. We do not store your
                        payment information.
                    </p>

                    <h3 className="text-xl font-medium mb-3">
                        5.3 Billing and Renewals
                    </h3>
                    <p className="mb-4">
                        Paid subscriptions are billed in advance on a recurring
                        basis. You will be charged automatically unless you
                        cancel your subscription before the next billing cycle.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        6. Data and Content Ownership
                    </h2>
                    <p className="mb-4">
                        You retain ownership of all data and content you upload
                        to or create within the Invence application, including:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Inventory information and product data</li>
                        <li>Transaction records and sales data</li>
                        <li>Customer information and contact details</li>
                        <li>Business analytics and reports</li>
                        <li>Any other content you create or upload</li>
                    </ul>
                    <p className="mb-4">
                        By using our service, you grant us a limited license to
                        store, process, and display your data solely for the
                        purpose of providing our services to you.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        7. Privacy and Data Protection
                    </h2>
                    <p className="mb-4">
                        Your privacy is important to us. Our collection and use
                        of personal information is governed by our Privacy
                        Policy, which is incorporated into these Terms by
                        reference. Please review our Privacy Policy to
                        understand our practices.
                    </p>
                    <p className="mb-4">
                        We implement appropriate security measures to protect
                        your data, including encryption and secure data storage
                        using Google Firebase Firestore.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        8. Service Availability and Modifications
                    </h2>
                    <p className="mb-4">
                        We strive to maintain high service availability but do
                        not guarantee uninterrupted access. The service may be
                        temporarily unavailable due to:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Scheduled maintenance and updates</li>
                        <li>Technical difficulties or system failures</li>
                        <li>Third-party service disruptions</li>
                        <li>Force majeure events</li>
                    </ul>
                    <p className="mb-4">
                        We reserve the right to modify, suspend, or discontinue
                        the service at any time with reasonable notice.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        9. Intellectual Property Rights
                    </h2>
                    <p className="mb-4">
                        The Invence application, including its design, features,
                        and functionality, is protected by intellectual property
                        laws. You may not:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Copy, modify, or distribute the application</li>
                        <li>Reverse engineer or decompile the software</li>
                        <li>Create derivative works based on our service</li>
                        <li>Remove or alter any proprietary notices</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        10. Limitation of Liability
                    </h2>
                    <p className="mb-4">
                        To the maximum extent permitted by law, Invence shall
                        not be liable for any indirect, incidental, special,
                        consequential, or punitive damages, including but not
                        limited to loss of profits, data, or business
                        opportunities.
                    </p>
                    <p className="mb-4">
                        Our total liability for any claims arising from these
                        Terms or your use of the service shall not exceed the
                        amount you paid for the service in the 12 months
                        preceding the claim.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        11. Indemnification
                    </h2>
                    <p className="mb-4">
                        You agree to indemnify and hold harmless Invence from
                        any claims, damages, or expenses arising from:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Your use of the service</li>
                        <li>Your violation of these Terms</li>
                        <li>Your violation of any third-party rights</li>
                        <li>Content you upload or create in the service</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        12. Termination
                    </h2>
                    <p className="mb-4">
                        Either party may terminate this agreement at any time:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>
                            You may cancel your account through the app settings
                        </li>
                        <li>
                            We may suspend or terminate accounts that violate
                            these Terms
                        </li>
                        <li>
                            We may discontinue the service with reasonable
                            notice
                        </li>
                    </ul>
                    <p className="mb-4">
                        Upon termination, your access to the service will cease,
                        but your data will be retained according to our data
                        retention policies unless you request deletion.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        13. Governing Law and Dispute Resolution
                    </h2>
                    <p className="mb-4">
                        These Terms are governed by the laws of Indonesia. Any
                        disputes arising from these Terms or your use of the
                        service shall be resolved through:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Good faith negotiation</li>
                        <li>Mediation if negotiation fails</li>
                        <li>
                            Binding arbitration in Indonesia if mediation fails
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        14. Changes to Terms
                    </h2>
                    <p className="mb-4">
                        We may update these Terms from time to time. We will
                        notify you of any material changes by:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Posting the updated Terms in the app</li>
                        <li>Sending notification through the app or email</li>
                        <li>Updating the "Last updated" date</li>
                    </ul>
                    <p className="mb-4">
                        Your continued use of the service after changes become
                        effective constitutes acceptance of the new Terms.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        15. Contact Information
                    </h2>
                    <p className="mb-4">
                        If you have any questions about these Terms of Service,
                        please contact us through the app's support feature or
                        at the contact information provided in the app.
                    </p>
                </section>

                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                        These Terms of Service are effective as of the date
                        listed above and will remain in effect until modified or
                        terminated in accordance with these Terms.
                    </p>
                </div>
            </div>
        </div>
    );
}
