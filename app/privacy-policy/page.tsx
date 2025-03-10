"use client"
import { FadeInSection } from "@/components/FadeInSection"

export default function PrivacyPolicyPage() {
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
            Privacy{" "}
            <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-center text-lg mb-16 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </p>
        </FadeInSection>

        <div className="max-w-4xl mx-auto bg-white dark:bg-rich-black-200/70 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-rich-black-300">
          <FadeInSection>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300">
                Elysian Innovations ("we," "us," or "our") is committed to protecting the privacy of your information.
                This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when
                you visit our website (the "Site") and utilize our IT services and technology solutions.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 dark:text-gray-300">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-4 mb-6 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Personal Information:</strong> This includes information that can identify you, such as your
                  name, email address, phone number, company name, and job title, when you voluntarily provide it to us
                  through forms, contact requests, or during communication.
                </li>
                <li>
                  <strong>Usage Information:</strong> We may collect information about how you interact with our Site,
                  including your IP address, browser type, operating system, pages visited, and the time and date of
                  your visit.
                </li>
                <li>
                  <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies
                  to enhance your browsing experience and collect information about your preferences. You can manage
                  your cookie preferences through your browser settings.
                </li>
                <li>
                  <strong>Information Provided for Services:</strong> If you engage our services, we may collect
                  additional information related to your projects, business needs, and technical requirements.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-4 mb-6 text-gray-700 dark:text-gray-300">
                <li>To provide and improve our IT services and technology solutions.</li>
                <li>To respond to your inquiries and provide customer support.</li>
                <li>To personalize your experience on our Site.</li>
                <li>To send you marketing communications and promotional materials (with your consent).</li>
                <li>To analyze website usage and trends.</li>
                <li>To comply with legal obligations and protect our rights.</li>
                <li>To fulfill contractual obligations.</li>
                <li>To keep our website secure.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                3. Sharing Your Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300">We may share your information with:</p>
              <ul className="list-disc pl-6 mt-4 mb-6 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Service Providers:</strong> We may share your information with third-party service providers
                  who assist us in operating our Site and providing our services (e.g., hosting providers, marketing
                  platforms).
                </li>
                <li>
                  <strong>Business Partners:</strong> We may share your information with business partners who
                  collaborate with us on projects and initiatives.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> We may disclose your information to comply with legal obligations,
                  enforce our policies, or protect our rights.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your
                  information may be transferred to the acquiring entity.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">4. Data Security</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We implement reasonable security measures to protect your information from unauthorized access,
                disclosure, or alteration. However, no method of transmission over the Internet or electronic storage is
                completely secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">5. Data Retention</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We will retain your information for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">6. Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300">
                You may have the following rights regarding your personal information, depending on applicable law:
              </p>
              <ul className="list-disc pl-6 mt-4 mb-6 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Access:</strong> You can request access to the personal information we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> You can request to correct any inaccuracies in your personal information.
                </li>
                <li>
                  <strong>Deletion:</strong> You can request to delete your personal information.
                </li>
                <li>
                  <strong>Objection:</strong> You can object to the processing of your personal information.
                </li>
                <li>
                  <strong>Withdrawal of Consent:</strong> If we rely on your consent to process your information, you
                  can withdraw your consent at any time.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">7. Third-Party Links</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our Site may contain links to third-party websites. We are not responsible for the privacy practices or
                content of these websites. We encourage you to review the privacy policies of any third-party websites
                you visit.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">8. Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our Site and services are not intended for children under the age of 13. We do not knowingly collect
                personal information from children under 13. If you believe we have collected information from a child
                under 13, please contact us immediately.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                9. Changes to this Privacy Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">10. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-gray-50 dark:bg-rich-black-300/50 rounded-lg border border-gray-100 dark:border-rich-black-300">
                <p className="text-gray-700 dark:text-gray-300">Elysian Innovations</p>
                <p className="text-gray-700 dark:text-gray-300">info@elysian-innovations.com</p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-rich-black-300">
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">Last updated: March 10, 2025</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-2 mb-6">
                  This Privacy Policy is provided for informational purposes only and does not constitute legal advice.
                  You should consult with a qualified legal professional to ensure that your privacy practices comply
                  with all applicable laws and regulations.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </main>
    </div>
  )
}

