import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal-layout";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead({ title: "Privacy Policy", description: "GDPR-compliant disclosure of how J3D.AI Labs OÜ collects, processes, and stores personal data.", path: "/privacy" }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" intro="Last updated: May 2026 — Compliant with EU GDPR (EU) 2016/679 and the Estonian Personal Data Protection Act.">
      <h2>1. Data Controller</h2>
      <p>J3D.AI Labs OÜ · Tallinn, Estonia · Email: <a href="mailto:primary@j3d.ai">primary@j3d.ai</a></p>
      <h2>2. Data We Collect</h2>
      <h3>2.1 Data you provide directly</h3>
      <ul>
        <li>Contact data submitted via forms (name, email, organisation, message content)</li>
        <li>Calendar booking data submitted through Calendly</li>
        <li>Event applications and delegate registration data</li>
        <li>Email correspondence with our team</li>
      </ul>
      <h3>2.2 Data collected automatically</h3>
      <ul>
        <li>Server logs (IP address, browser, referrer, pages visited, timestamps)</li>
        <li>Analytics data (anonymised page views, session duration, navigation flow)</li>
        <li>Cookies as described in section 4</li>
      </ul>
      <h2>3. Legal Basis for Processing</h2>
      <ul>
        <li>Consent (Art. 6(1)(a)) — for marketing communications, optional cookies, newsletter sign-ups</li>
        <li>Contractual necessity (Art. 6(1)(b)) — for event participation, advisory engagements, service delivery</li>
        <li>Legitimate interests (Art. 6(1)(f)) — for security logging, fraud prevention, improvement of our services</li>
        <li>Legal obligation (Art. 6(1)(c)) — for invoicing, tax records, statutory retention</li>
      </ul>
      <h2>4. Cookies & Tracking</h2>
      <ul>
        <li>Strictly necessary — session management, security, form submission. No consent required.</li>
        <li>Analytics — Google Analytics 4 in IP-anonymised mode with Consent Mode v2. Loaded only after consent.</li>
        <li>Marketing — HubSpot tracking pixel for lead attribution. Loaded only after consent.</li>
      </ul>
      <h2>5. Third-Party Processors</h2>
      <ul>
        <li>Vercel Inc. — web hosting and edge delivery</li>
        <li>HubSpot Ireland Limited — CRM, forms, marketing automation</li>
        <li>Calendly LLC — meeting booking</li>
        <li>Google LLC — Workspace email and analytics</li>
        <li>Microsoft Azure — legacy hosting for davos.j3d.ai archive</li>
      </ul>
      <h2>6. Your Rights</h2>
      <ul>
        <li>Right of access (Art. 15) — obtain a copy of your data</li>
        <li>Right to rectification (Art. 16)</li>
        <li>Right to erasure (Art. 17)</li>
        <li>Right to restriction (Art. 18)</li>
        <li>Right to data portability (Art. 20)</li>
        <li>Right to object (Art. 21)</li>
        <li>Right to withdraw consent at any time</li>
        <li>Right to lodge a complaint with a supervisory authority</li>
      </ul>
      <p>To exercise any of these rights, email <a href="mailto:primary@j3d.ai">primary@j3d.ai</a>. We respond within 30 days.</p>
      <h2>7. Data Retention</h2>
      <ul>
        <li>Contact form submissions: 24 months from last interaction</li>
        <li>Event registration data: 36 months post-event</li>
        <li>Invoicing and accounting records: 7 years (Estonian statutory requirement)</li>
        <li>Server logs: 90 days</li>
        <li>Marketing consent records: until withdrawn or 24 months of inactivity</li>
      </ul>
      <h2>8. International Transfers</h2>
      <p>Where personal data is transferred outside the EEA, we rely on EU Standard Contractual Clauses (SCCs) and verify supplementary measures where required by the Schrems II decision.</p>
      <h2>9. Children</h2>
      <p>Our services are not directed to individuals under the age of 18.</p>
      <h2>10. Changes & Complaints</h2>
      <p>We may update this policy to reflect operational, legal, or regulatory changes. If you have a concern that we have not resolved, you have the right to lodge a complaint with the Estonian Data Protection Inspectorate (<a href="https://www.aki.ee">www.aki.ee</a>) or your local EU supervisory authority.</p>
    </LegalLayout>
  ),
});
