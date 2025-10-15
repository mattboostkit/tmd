import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Taylor Made Dreams',
  description: 'How Taylor Made Dreams collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <Link href="/" className="text-teal-600 hover:text-teal-700 mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

          <p className="text-sm text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Taylor Made Dreams ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
            </p>
            <p>
              <strong>Charity Information:</strong><br />
              Registered Charity Number: 1158178<br />
              Address: Office 60, Basepoint, Pine Grove, Crowborough, East Sussex TN6 1DH<br />
              Email: hello@taylormadedreams.org.uk
            </p>

            <h2>2. Information We Collect</h2>

            <h3>2.1 Personal Information You Provide</h3>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul>
              <li>Name and contact details (email, phone, postal address)</li>
              <li>Payment information for donations</li>
              <li>Information in correspondence with us</li>
              <li>Gift Aid declarations and tax information</li>
              <li>Volunteer application details</li>
              <li>Family support application information</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process donations and issue tax receipts</li>
              <li>Provide family support services</li>
              <li>Communicate about our work and upcoming events</li>
              <li>Send newsletters (if you've subscribed)</li>
              <li>Respond to inquiries and support requests</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Process volunteer applications</li>
              <li>Maintain donor records for Charity Commission requirements</li>
            </ul>

            <h2>4. Legal Basis for Processing (GDPR)</h2>
            <p>Under UK GDPR, we process your personal data based on:</p>
            <ul>
              <li><strong>Consent:</strong> When you sign up for newsletters or communications</li>
              <li><strong>Contract:</strong> When processing donations or volunteer agreements</li>
              <li><strong>Legal Obligation:</strong> For Gift Aid claims and charity compliance</li>
              <li><strong>Legitimate Interests:</strong> To operate and improve our charitable services</li>
            </ul>

            <h2>5. Sharing Your Information</h2>
            <p>We may share your information with:</p>

            <h3>5.1 Service Providers</h3>
            <ul>
              <li><strong>Payment Processors:</strong> Stripe (for secure payment processing)</li>
              <li><strong>Email Services:</strong> Mailchimp/EmailOctopus (for newsletters)</li>
              <li><strong>Form Services:</strong> Formspree (for contact forms)</li>
              <li><strong>Analytics:</strong> Google Analytics (anonymised data)</li>
              <li><strong>CMS:</strong> Sanity.io (for content management)</li>
            </ul>

            <h3>5.2 Legal Requirements</h3>
            <p>
              We may disclose your information if required by law, court order, or to protect the rights,
              property, or safety of Taylor Made Dreams, our beneficiaries, or others.
            </p>

            <h3>5.3 Partner Organisations</h3>
            <p>
              With your consent, we may share information with NHS Trusts, hospices, or partner charities
              to coordinate family support services.
            </p>

            <h2>6. Data Retention</h2>
            <p>We retain your personal data for as long as necessary to:</p>
            <ul>
              <li><strong>Donation Records:</strong> 7 years (HMRC and Charity Commission requirements)</li>
              <li><strong>Newsletter Subscriptions:</strong> Until you unsubscribe</li>
              <li><strong>Family Support Records:</strong> As required by safeguarding policies</li>
              <li><strong>General Inquiries:</strong> 2 years after last contact</li>
              <li><strong>Website Analytics:</strong> 26 months (Google Analytics default)</li>
            </ul>

            <h2>7. Your Rights Under UK GDPR</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
              <li><strong>Restriction:</strong> Limit how we process your data</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Withdraw Consent:</strong> Unsubscribe from communications at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:hello@taylormadedreams.org.uk">hello@taylormadedreams.org.uk</a>
            </p>

            <h2>8. Cookies</h2>
            <p>
              We use cookies to improve your experience on our website. See our{' '}
              <Link href="/legal/cookies" className="text-teal-600 hover:text-teal-700">Cookie Policy</Link>{' '}
              for detailed information about the cookies we use and how to manage them.
            </p>

            <h2>9. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data, including:
            </p>
            <ul>
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure payment processing through PCI-compliant providers</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Staff training on data protection</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
            </p>

            <h2>10. Children's Privacy</h2>
            <p>
              While we provide services to children, we do not knowingly collect personal information from children
              under 13 through our website without parental consent. Family support applications require parent/guardian
              consent and are handled in accordance with our Safeguarding Policy.
            </p>

            <h2>11. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices
              of these external sites. Please review their privacy policies separately.
            </p>

            <h2>12. International Transfers</h2>
            <p>
              Some of our service providers (e.g., analytics, cloud storage) may process data outside the UK.
              We ensure appropriate safeguards are in place through standard contractual clauses or adequacy decisions.
            </p>

            <h2>13. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by
              posting the new policy on this page with an updated "Last updated" date.
            </p>

            <h2>14. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul>
              <li><strong>Email:</strong> hello@taylormadedreams.org.uk</li>
              <li><strong>Phone:</strong> 01892 956 460</li>
              <li>
                <strong>Post:</strong> Data Protection Officer, Taylor Made Dreams, Office 60, Basepoint,
                Pine Grove, Crowborough, East Sussex TN6 1DH
              </li>
            </ul>

            <h2>15. Complaints</h2>
            <p>
              If you believe we have not handled your personal data correctly, you have the right to lodge a complaint
              with the Information Commissioner's Office (ICO):
            </p>
            <ul>
              <li><strong>Website:</strong> <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a></li>
              <li><strong>Phone:</strong> 0303 123 1113</li>
              <li><strong>Post:</strong> Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF</li>
            </ul>

            <div className="mt-12 p-6 bg-teal-50 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Your Privacy Matters</h3>
              <p className="text-gray-700">
                At Taylor Made Dreams, we are committed to protecting your privacy and being transparent about how
                we use your information. If you have any concerns, please don't hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
