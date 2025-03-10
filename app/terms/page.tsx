"use client"
import { FadeInSection } from "@/components/FadeInSection"

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-rich-black-100 dark:to-rich-black-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="h-28"></div>

      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Terms and{" "}
            <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Conditions</span>
          </h1>
          <p className="text-center text-lg mb-16 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our services.
          </p>
        </FadeInSection>

        <div className="max-w-4xl mx-auto bg-white dark:bg-rich-black-200/70 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-rich-black-300">
          <FadeInSection>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300">
                Elysian Innovations ("we," "us," or "our") provides IT services and technology solutions. By accessing
                or using our website (the "Site") and our services, you ("you" or "user") agree to comply with and be
                bound by the following terms and conditions.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
              <p className="text-gray-700 dark:text-gray-300">
                By using this Site and our services, you acknowledge that you have read, understood, and agree to be
                bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use
                our Site or services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">2. Services Provided</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We offer a range of IT services and technology solutions, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mt-4 mb-6 text-gray-700 dark:text-gray-300">
                <li>Software development</li>
                <li>Web development</li>
                <li>Mobile app development</li>
                <li>IT consulting</li>
                <li>Network solutions</li>
                <li>Cybersecurity services</li>
                <li>Cloud computing services</li>
                <li>Data management</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                The specific services provided will be outlined in individual service agreements or proposals.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">3. User Obligations</h2>
              <p className="text-gray-700 dark:text-gray-300">You agree to:</p>
              <ul className="list-disc pl-6 mt-4 mb-6 text-gray-700 dark:text-gray-300">
                <li>Provide accurate and complete information when using our Site or requesting services.</li>
                <li>Use our Site and services in compliance with all applicable laws and regulations.</li>
                <li>
                  Not engage in any activity that may disrupt or interfere with the operation of our Site or services.
                </li>
                <li>Not use our Site or services for any illegal or unauthorized purpose.</li>
                <li>Respect all intellectual property.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                4. Intellectual Property
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                All content on this Site, including text, graphics, logos, and software, is the property of Elysian
                Innovations or its licensors and is protected by intellectual property laws.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                You may not reproduce, distribute, or modify any content from this Site without our prior written
                consent.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Any software, or code that is produced for a client, will have the intellectual property rights
                transferred as agreed upon in the contract.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">5. Payment Terms</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Payment terms for our services will be outlined in individual service agreements or proposals.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                You agree to pay all fees and charges associated with the services you request.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">Late payments may be subject to interest charges.</p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                All prices are in Pakistani Rupees unless stated otherwise.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising
                from your use of our Site or services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Our liability is limited to the fees paid by you for the services provided.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We make every effort to keep our systems secure, but are not liable for breaches that are beyond our
                reasonable control.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                7. Disclaimer of Warranties
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our Site and services are provided on an "as is" and "as available" basis.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We make no warranties, express or implied, regarding the accuracy, reliability, or availability of our
                Site or services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We do not warrant that our services will be error-free or uninterrupted.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">8. Termination</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may terminate your access to our Site or services at any time, without notice, for any reason,
                including but not limited to violation of these Terms and Conditions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                You may terminate your service agreement according to the terms of that agreement.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">9. Governing Law</h2>
              <p className="text-gray-700 dark:text-gray-300">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of Pakistan.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Any disputes arising from these Terms and Conditions shall be subject to the exclusive jurisdiction of
                the courts in Pakistan.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                10. Changes to Terms and Conditions
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update these Terms and Conditions from time to time.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We will notify you of any changes by posting the new Terms and Conditions on this page.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Your continued use of the site after changes are posted constitutes your acceptance of those changes.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">11. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions or concerns about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-gray-50 dark:bg-rich-black-300/50 rounded-lg border border-gray-100 dark:border-rich-black-300">
                <p className="text-gray-700 dark:text-gray-300">Elysian Innovations</p>
                <p className="text-gray-700 dark:text-gray-300">info@elysian-innovations.com</p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-rich-black-300">
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">Last updated: March 10, 2025</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-2 mb-6">
                  These Terms and Conditions are provided for informational purposes only and do not constitute legal
                  advice. You should consult with a qualified legal professional to ensure that your terms and
                  conditions comply with all applicable laws and regulations.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </main>
    </div>
  )
}

