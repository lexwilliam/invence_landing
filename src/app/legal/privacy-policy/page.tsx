export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                    <strong>Last updated:</strong>{' '}
                    {new Date().toLocaleDateString()}
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        1. Introduction
                    </h2>
                    <p className="mb-4">
                        This Privacy Policy describes how Invence ("we," "our,"
                        or "us") collects, uses, and protects your personal
                        information when you use our mobile application for
                        inventory management, point-of-sale (POS), transaction
                        processing, and profit/expense analytics.
                    </p>
                    <p className="mb-4">
                        By using our mobile application, you agree to the
                        collection and use of information in accordance with
                        this Privacy Policy.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        2. Information We Collect
                    </h2>
                    <h3 className="text-xl font-medium mb-3">
                        2.1 Personal Information
                    </h3>
                    <p className="mb-4">
                        We collect the following personal information when you
                        create an account:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Email address</li>
                        <li>Full name</li>
                    </ul>

                    <h3 className="text-xl font-medium mb-3">
                        2.2 Business Data
                    </h3>
                    <p className="mb-4">
                        The following business-related data is stored in your
                        account:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Inventory information</li>
                        <li>Order and transaction records</li>
                        <li>Point-of-sale data</li>
                        <li>Profit and expense analytics</li>
                        <li>User-generated content within the application</li>
                    </ul>

                    <h3 className="text-xl font-medium mb-3">
                        2.3 Information We Do NOT Collect
                    </h3>
                    <p className="mb-4">We do not collect or track:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Cookies or tracking technologies</li>
                        <li>Device location data</li>
                        <li>Browsing history or app usage analytics</li>
                        <li>
                            Payment information (handled by Google Pay/Apple
                            Pay)
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        3. How We Use Your Information
                    </h2>
                    <p className="mb-4">
                        We use your personal information solely for:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Account management and authentication</li>
                        <li>
                            Providing access to our inventory management
                            services
                        </li>
                        <li>
                            Enabling POS and transaction processing features
                        </li>
                        <li>Generating profit and expense analytics</li>
                        <li>Customer support and communication</li>
                    </ul>
                    <p className="mb-4">
                        We do not use your personal information for marketing,
                        advertising, or sharing with third parties.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        4. Data Storage and Security
                    </h2>
                    <p className="mb-4">
                        Your data is stored securely using Google Firebase
                        Firestore, located in the Southeast Asia region
                        (Southeast-2). We utilize Firebase's built-in security
                        measures, including:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>End-to-end encryption for data transmission</li>
                        <li>Secure authentication protocols</li>
                        <li>Regular security updates and monitoring</li>
                        <li>Access controls and user permissions</li>
                    </ul>
                    <p className="mb-4">
                        We retain your data indefinitely to provide continuous
                        service, unless you request deletion.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        5. Payment Processing
                    </h2>
                    <p className="mb-4">
                        Payment processing is handled entirely by third-party
                        services:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Google Pay (currently supported)</li>
                        <li>Apple Pay (planned for future implementation)</li>
                    </ul>
                    <p className="mb-4">
                        We do not store, process, or have access to your payment
                        information. All payment data is handled securely by the
                        respective payment providers.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        6. Your Rights and Controls
                    </h2>
                    <p className="mb-4">
                        You have the following rights regarding your data:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>
                            <strong>Access:</strong> View all your personal and
                            business data
                        </li>
                        <li>
                            <strong>Update:</strong> Modify your account
                            information and business data
                        </li>
                        <li>
                            <strong>Delete:</strong> Remove specific records or
                            your entire account
                        </li>
                        <li>
                            <strong>Control:</strong> Manage permissions for
                            different features
                        </li>
                    </ul>
                    <p className="mb-4">
                        Note: Some features may be restricted to account owners
                        and administrators for security purposes.
                    </p>
                    <p className="mb-4">
                        <strong>Data Export:</strong> We are currently
                        developing a data export feature that will be available
                        soon, allowing you to download your business data.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        7. Data Sharing
                    </h2>
                    <p className="mb-4">
                        We do not share, sell, or rent your personal information
                        to third parties. Your data remains private and is only
                        accessible to:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>You (the account holder)</li>
                        <li>Authorized administrators of your account</li>
                        <li>
                            Our technical support team (only when necessary for
                            troubleshooting)
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        8. Legal Compliance
                    </h2>
                    <p className="mb-4">
                        This privacy policy is designed to comply with:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>
                            Indonesian Personal Data Protection Law (UU No. 27
                            Tahun 2022)
                        </li>
                        <li>Google Play Store privacy requirements</li>
                        <li>General data protection best practices</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        9. Children's Privacy
                    </h2>
                    <p className="mb-4">
                        Our service is not intended for children under 13 years
                        of age. We do not knowingly collect personal information
                        from children under 13.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        10. Changes to This Privacy Policy
                    </h2>
                    <p className="mb-4">
                        We may update this Privacy Policy from time to time. We
                        will notify you of any changes by posting the new
                        Privacy Policy in the app and updating the "Last
                        updated" date.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        11. Contact Information
                    </h2>
                    <p className="mb-4">
                        If you have any questions about this Privacy Policy or
                        your data, please contact us through the app's support
                        feature or at the contact information provided in the
                        app.
                    </p>
                </section>

                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                        This Privacy Policy is effective as of the date listed
                        above and will remain in effect except with respect to
                        any changes in its provisions in the future, which will
                        be in effect immediately after being posted in the app.
                    </p>
                </div>
            </div>
        </div>
    );
}
