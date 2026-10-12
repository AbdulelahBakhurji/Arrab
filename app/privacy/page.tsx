import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalDocument } from '@/components/legal/LegalDocument';

export const metadata: Metadata = {
  title: 'Privacy Policy · Arrab',
  description: 'Arrab Privacy Policy — how we collect, use, and protect personal data.',
};

const toc = [
  { id: 'scope', label: '1. Scope' },
  { id: 'collect', label: '2. Data we collect' },
  { id: 'use', label: '3. How we use data' },
  { id: 'legal-bases', label: '4. Legal bases' },
  { id: 'sharing', label: '5. Sharing' },
  { id: 'processors', label: '6. Processors' },
  { id: 'retention', label: '7. Retention' },
  { id: 'security', label: '8. Security' },
  { id: 'transfers', label: '9. International transfers' },
  { id: 'rights', label: '10. Your rights' },
  { id: 'children', label: '11. Children' },
  { id: 'cookies', label: '12. Cookies' },
  { id: 'ai-privacy', label: '13. AI processing' },
  { id: 'changes', label: '14. Changes' },
  { id: 'contact', label: '15. Contact' },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy · Arrab"
      description="Arrab Privacy Policy — how we collect, use, and protect personal data."
      active="privacy"
      toc={toc}
    >
      <p className="eyebrow">Legal</p>
      <h1>Privacy Policy</h1>
      <p className="meta">Effective: 14 September 2026 · Last updated: 14 September 2026</p>
      <p className="lead">
        This Privacy Policy explains how Arrab (“Arrab”, “we”, “us”) collects, uses, discloses, and
        protects personal data when you use our websites, authentication, APIs, applications, and
        related services (the “Services”).
      </p>

      <div className="note">
        By using the Services, you acknowledge this Policy. For how you may use Arrab, see our{' '}
        <Link href="/terms">Terms of Use</Link>.
      </div>

      <h2 id="scope">1. Scope and controller</h2>
      <p>
        Arrab is the controller of personal data processed in connection with account registration,
        authentication, billing, and product administration, unless a written agreement states
        otherwise (for example, when we process Customer Content solely as a processor for an
        organization customer).
      </p>
      <p>
        This Policy covers arrabai.com, auth.arrabai.com, api.arrabai.com, studio.arrabai.com, and
        related Arrab properties.
      </p>

      <h2 id="collect">2. Personal data we collect</h2>
      <h3>2.1 Data you provide</h3>
      <ul>
        <li>Account details (name, email address, password)</li>
        <li>Profile and workspace settings</li>
        <li>
          Billing and payment-related information (processed by our payment provider; we do not
          store full card PAN/CVV)
        </li>
        <li>Support requests and correspondence</li>
        <li>
          Content you submit to the Services (prompts, files, configurations) (“Customer Content”)
        </li>
      </ul>
      <h3>2.2 Data collected automatically</h3>
      <ul>
        <li>Device and browser information, IP address, approximate location derived from IP</li>
        <li>Log data (timestamps, request paths, status codes, performance metrics)</li>
        <li>Authentication and session metadata (including device-linking state identifiers)</li>
        <li>Usage metrics related to plans, quotas, and features</li>
      </ul>
      <h3>2.3 Data from third parties</h3>
      <p>
        If you connect third-party services, we may receive account labels, tokens, or metadata
        necessary to operate the integration, according to your permissions with that provider.
      </p>

      <h2 id="use">3. How we use personal data</h2>
      <p>We use personal data to:</p>
      <ul>
        <li>Provide, operate, secure, and improve the Services</li>
        <li>Authenticate users and maintain sessions</li>
        <li>Process subscriptions, invoices, and entitlements</li>
        <li>Provide customer support and service notices</li>
        <li>Monitor abuse, fraud, and security incidents</li>
        <li>Comply with law and enforce our Terms</li>
        <li>Analyze aggregate product usage to improve reliability and experience</li>
      </ul>
      <p>We do not sell personal data.</p>

      <h2 id="legal-bases">4. Legal bases (where applicable)</h2>
      <p>Depending on your location, we rely on one or more of the following:</p>
      <ul>
        <li>
          <strong>Contract</strong> — to provide the Services you request
        </li>
        <li>
          <strong>Legitimate interests</strong> — security, product improvement, fraud prevention
          (balanced against your rights)
        </li>
        <li>
          <strong>Consent</strong> — where required (for example certain cookies or marketing)
        </li>
        <li>
          <strong>Legal obligation</strong> — tax, accounting, and compliance requirements
        </li>
      </ul>

      <h2 id="sharing">5. When we share data</h2>
      <p>We may share personal data with:</p>
      <ul>
        <li>
          Service providers who process data on our instructions (hosting, email, analytics,
          payments, AI providers)
        </li>
        <li>Professional advisers (legal, accounting) under confidentiality</li>
        <li>Authorities when required by law or to protect rights, safety, and security</li>
        <li>
          A successor entity in connection with a merger, acquisition, or asset transfer, subject to
          appropriate safeguards
        </li>
      </ul>
      <p>We require processors to protect data and use it only for contracted purposes.</p>

      <h2 id="processors">6. Key categories of processors</h2>
      <ul>
        <li>
          <strong>Infrastructure &amp; hosting</strong> — servers and databases that run Arrab
        </li>
        <li>
          <strong>Payments</strong> — Moyasar (or successors) for checkout; card data is handled by
          the processor
        </li>
        <li>
          <strong>AI model providers</strong> — to generate responses and run model features you
          invoke (for example Bedrock or OpenRouter)
        </li>
        <li>
          <strong>Security &amp; operations tooling</strong> — logging, monitoring, and abuse
          detection
        </li>
      </ul>

      <h2 id="retention">7. Retention</h2>
      <p>We retain personal data only as long as needed for the purposes described above, including:</p>
      <ul>
        <li>Account data — while your account is active and for a reasonable period afterward</li>
        <li>Billing records — as required for tax and accounting</li>
        <li>Security logs — for a limited period for investigation and hardening</li>
        <li>
          Customer Content — according to product settings and your deletion requests, subject to
          legal holds
        </li>
      </ul>
      <p>When data is no longer required, we delete or irreversibly anonymize it.</p>

      <h2 id="security">8. Security</h2>
      <p>
        We implement administrative, technical, and organizational measures designed to protect
        personal data, including encryption in transit, access controls, hashed credentials, and
        least-privilege practices. No method of transmission or storage is 100% secure; you are
        responsible for safeguarding your account credentials.
      </p>
      <p>
        Passwords and provider API keys are designed to remain on Arrab’s server-side systems and
        are not exposed to client applications.
      </p>

      <h2 id="transfers">9. International transfers</h2>
      <p>
        We may process and store data in countries other than where you live. Where required, we use
        appropriate safeguards for cross-border transfers (such as contractual clauses or equivalent
        mechanisms).
      </p>

      <h2 id="rights">10. Your rights and choices</h2>
      <p>Depending on applicable law, you may have rights to:</p>
      <ul>
        <li>Access, correct, or delete personal data</li>
        <li>Object to or restrict certain processing</li>
        <li>Data portability</li>
        <li>Withdraw consent where processing is consent-based</li>
        <li>Lodge a complaint with a supervisory authority</li>
      </ul>
      <p>
        To exercise rights, contact <a href="mailto:privacy@arrabai.com">privacy@arrabai.com</a>. We
        may need to verify your identity before fulfilling a request.
      </p>

      <h2 id="children">11. Children</h2>
      <p>
        The Services are not directed to children under 18. We do not knowingly collect personal data
        from children. If you believe a child has provided personal data, contact us and we will take
        appropriate steps to delete it.
      </p>

      <h2 id="cookies">12. Cookies and similar technologies</h2>
      <p>
        We use essential cookies and local/session storage for authentication, security, and core
        functionality. We may use limited analytics cookies or similar technologies to understand
        product usage. Where required by law, we will request consent for non-essential cookies.
      </p>
      <p>
        You can control cookies through your browser settings; disabling essential storage may break
        sign-in.
      </p>

      <h2 id="ai-privacy">13. AI processing</h2>
      <p>
        When you use AI features, prompts and relevant context may be sent to model providers to
        generate responses. Do not submit sensitive personal data unless necessary. We configure
        providers according to our agreements and product settings; provider-specific data handling
        may also apply.
      </p>
      <p>
        We use technical and organizational controls to reduce unnecessary retention of sensitive
        content in logs where feasible.
      </p>

      <h2 id="changes">14. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the updated version at this
        URL and revise the “Last updated” date. Material changes may be communicated through the
        Services or by email when appropriate.
      </p>

      <h2 id="contact">15. Contact</h2>
      <p>Privacy questions or requests:</p>
      <ul>
        <li>
          Email: <a href="mailto:privacy@arrabai.com">privacy@arrabai.com</a>
        </li>
        <li>
          Legal: <a href="mailto:legal@arrabai.com">legal@arrabai.com</a>
        </li>
        <li>
          Web: <a href="https://arrabai.com/privacy">arrabai.com/privacy</a>
        </li>
      </ul>

      <p className="footer">
        © 2026 Arrab. All rights reserved. Related: <Link href="/terms">Terms of Use</Link>.
      </p>
    </LegalDocument>
  );
}
