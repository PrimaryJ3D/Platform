import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal-layout";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/hoc-terms")({
  head: () => pageHead({ title: "House of Collaboration · Terms & Policy", description: "Booking conditions, code of conduct, and event-specific policies for all HoC programmes.", path: "/hoc-terms" }),
  component: () => (
    <LegalLayout eyebrow="Legal · Events" title="House of Collaboration Terms & Policy" intro="Last updated: May 2026 — These terms apply to all House of Collaboration events operated by J3D.AI Labs OÜ including HoC Davos, Estonian Leap, and Deep Tech Castle.">
      <h2>1. Booking & Registration</h2>
      <p>All delegate registrations are subject to review and approval by J3D.AI Labs OÜ. Submission of an application does not guarantee a delegate pass. Successful applicants will receive written confirmation within 5 business days.</p>
      <h2>2. Payment Terms</h2>
      <p>Full payment is required within 14 days of invoice issuance. Delegate passes are non-transferable unless written consent is provided by J3D.AI. VAT will be applied where applicable under Estonian and EU tax law.</p>
      <h2>3. Cancellation & Refund Policy</h2>
      <ul>
        <li>More than 60 days before the event: 100% refund minus a 10% administration fee.</li>
        <li>31–60 days before the event: 50% refund.</li>
        <li>30 days or fewer before the event: No refund. Transfer to a future edition may be offered at J3D.AI's discretion.</li>
        <li>Event cancellation by J3D.AI: Full refund of amounts paid.</li>
      </ul>
      <h2>4. Code of Conduct</h2>
      <p>All delegates, speakers, sponsors, and staff are required to maintain the highest standards of professional conduct. J3D.AI events operate under the Chatham House Rule unless explicitly stated otherwise.</p>
      <p>All sessions are off-the-record unless the relevant speaker or session leader explicitly grants permission for attribution. Photography and video recording are subject to session-specific rules communicated on-site.</p>
      <h2>5. Programme Changes</h2>
      <p>J3D.AI reserves the right to modify the programme, venue, speakers, or format at any time. Delegate fees are not refundable due to speaker or session changes.</p>
      <h2>6. Liability</h2>
      <p>J3D.AI Labs OÜ accepts no liability for loss of property, personal injury, or consequential losses arising from attendance at or travel to any J3D.AI event. Delegates are responsible for arranging appropriate travel and health insurance.</p>
      <h2>7. Data Protection</h2>
      <p>Delegate registration data is processed in accordance with our Privacy Policy. By registering, delegates consent to their name and organisation being listed in the delegate directory shared with other confirmed delegates, unless they opt out at the time of registration.</p>
      <h2>8. Governing Law</h2>
      <p>These terms are governed by Estonian law. Any disputes shall be subject to the exclusive jurisdiction of the Estonian courts.</p>
      <h2>Contact</h2>
      <p>For all event-related enquiries: <a href="mailto:primary@j3d.ai">primary@j3d.ai</a></p>
    </LegalLayout>
  ),
});
