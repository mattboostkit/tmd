import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | Taylor Made Dreams',
  description: 'Information about how Taylor Made Dreams uses cookies and similar tracking technologies.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <Link href="/" className="text-teal-600 hover:text-teal-700 mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">Cookie Policy</h1>

          <p className="text-sm text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They help websites
              remember your preferences and improve your browsing experience.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              Taylor Made Dreams uses cookies to:
            </p>
            <ul>
              <li>Ensure our website functions properly</li>
              <li>Improve website performance and user experience</li>
              <li>Understand how visitors use our website</li>
              <li>Remember your preferences and settings</li>
              <li>Measure the effectiveness of our campaigns</li>
            </ul>

            <h2>3. Types of Cookies We Use</h2>

            <h3>3.1 Strictly Necessary Cookies</h3>
            <p><strong>Purpose:</strong> Essential for the website to function</p>
            <p><strong>Duration:</strong> Session or up to 1 year</p>
            <p><strong>Can be disabled:</strong> No (required for basic functionality)</p>

            <table className="min-w-full divide-y divide-gray-200 my-6">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold">Cookie Name</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">Purpose</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-sm">__cf_bm</td>
                  <td className="px-4 py-2 text-sm">Security and bot management</td>
                  <td className="px-4 py-2 text-sm">30 minutes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm">cookie_consent</td>
                  <td className="px-4 py-2 text-sm">Remember your cookie preferences</td>
                  <td className="px-4 py-2 text-sm">1 year</td>
                </tr>
              </tbody>
            </table>

            <h3>3.2 Analytics Cookies</h3>
            <p><strong>Purpose:</strong> Understand how visitors interact with our website</p>
            <p><strong>Duration:</strong> Up to 26 months</p>
            <p><strong>Can be disabled:</strong> Yes</p>

            <table className="min-w-full divide-y divide-gray-200 my-6">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold">Cookie Name</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">Provider</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">Purpose</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-sm">_ga</td>
                  <td className="px-4 py-2 text-sm">Google Analytics</td>
                  <td className="px-4 py-2 text-sm">Distinguish users</td>
                  <td className="px-4 py-2 text-sm">2 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm">_ga_*</td>
                  <td className="px-4 py-2 text-sm">Google Analytics</td>
                  <td className="px-4 py-2 text-sm">Store session state</td>
                  <td className="px-4 py-2 text-sm">2 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm">_gid</td>
                  <td className="px-4 py-2 text-sm">Google Analytics</td>
                  <td className="px-4 py-2 text-sm">Distinguish users</td>
                  <td className="px-4 py-2 text-sm">24 hours</td>
                </tr>
              </tbody>
            </table>

            <p className="text-sm text-gray-600">
              Google Analytics data is anonymised and aggregated. We cannot identify you personally from this data.
              Learn more: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-600">Google Privacy Policy</a>
            </p>

            <h3>3.3 Functional Cookies</h3>
            <p><strong>Purpose:</strong> Remember your preferences and settings</p>
            <p><strong>Duration:</strong> Up to 1 year</p>
            <p><strong>Can be disabled:</strong> Yes (but may affect functionality)</p>

            <table className="min-w-full divide-y divide-gray-200 my-6">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold">Cookie Name</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">Purpose</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-sm">preferences</td>
                  <td className="px-4 py-2 text-sm">Remember user preferences</td>
                  <td className="px-4 py-2 text-sm">1 year</td>
                </tr>
              </tbody>
            </table>

            <h2>4. Third-Party Cookies</h2>
            <p>
              Some cookies are set by third-party services that appear on our pages:
            </p>

            <h3>YouTube (Video Content)</h3>
            <ul>
              <li><strong>Cookies:</strong> VISITOR_INFO1_LIVE, YSC, CONSENT</li>
              <li><strong>Purpose:</strong> Video playback and preferences</li>
              <li><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-600">Google Privacy Policy</a></li>
            </ul>

            <h3>Stripe (Payment Processing)</h3>
            <ul>
              <li><strong>Cookies:</strong> __stripe_mid, __stripe_sid</li>
              <li><strong>Purpose:</strong> Fraud detection and secure payments</li>
              <li><strong>Privacy Policy:</strong> <a href="https://stripe.com/gb/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-600">Stripe Privacy Policy</a></li>
            </ul>

            <h2>5. Managing Cookies</h2>

            <h3>5.1 Cookie Consent Tool</h3>
            <p>
              When you first visit our website, you'll see a cookie consent banner allowing you to accept or reject
              non-essential cookies. You can change your preferences at any time using our cookie management tool.
            </p>

            <div className="my-6 p-4 bg-teal-50 rounded-lg">
              <button className="btn btn-primary">
                Manage Cookie Preferences
              </button>
            </div>

            <h3>5.2 Browser Settings</h3>
            <p>
              You can control and delete cookies through your browser settings:
            </p>
            <ul>
              <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>

            <p className="text-sm text-gray-600 mt-4">
              Note: Blocking all cookies may prevent some features of our website from functioning properly.
            </p>

            <h3>5.3 Opt-Out Tools</h3>
            <p>You can opt out of specific tracking:</p>
            <ul>
              <li>
                <strong>Google Analytics:</strong>{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-teal-600">
                  Google Analytics Opt-out Browser Add-on
                </a>
              </li>
              <li>
                <strong>Your Online Choices:</strong>{' '}
                <a href="https://www.youronlinechoices.com/uk/" target="_blank" rel="noopener noreferrer" className="text-teal-600">
                  Manage advertising cookies
                </a>
              </li>
            </ul>

            <h2>6. Web Beacons and Pixel Tags</h2>
            <p>
              We may use web beacons (small transparent images) to understand email engagement. These help us know
              if you've opened our newsletter and which links you've clicked.
            </p>

            <h2>7. Local Storage</h2>
            <p>
              We may use local storage (similar to cookies) to store user preferences locally on your device.
              This data does not expire but can be cleared through your browser settings.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy to reflect changes in technology or legal requirements. We will
              notify you of significant changes by updating the "Last updated" date above.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us:
            </p>
            <ul>
              <li><strong>Email:</strong> hello@taylormadedreams.org.uk</li>
              <li><strong>Phone:</strong> 01892 956 460</li>
            </ul>

            <div className="mt-12 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Your Control</h3>
              <p className="text-gray-700">
                You always have control over the cookies placed on your device. Use the tools above to manage
                your preferences or contact us if you need assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
