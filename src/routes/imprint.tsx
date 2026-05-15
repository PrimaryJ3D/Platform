import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal-layout";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/imprint")({
  head: () => pageHead({ title: "Imprint", description: "Legal information for J3D.AI Labs OÜ.", path: "/imprint" }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Imprint" intro="Last updated: May 2026 — This imprint complies with applicable Estonian, German, and EU information disclosure requirements.">
      <h2>Information per §5 TMG & Estonian Commercial Code</h2>
      <p><strong>J3D.AI Labs OÜ</strong><br/>Registered office: Tallinn, Estonia<br/>Estonian Commercial Register code: 16585284<br/>Legal form: Osaühing (Private Limited Company)</p>
      <h3>Authorised Representatives</h3>
      <p>Yip Thy-Diep Ta — Co-founder & Chief Executive Officer<br/>Kevin Varend — Co-founder & Managing Director</p>
      <h3>Contact</h3>
      <p>Email: <a href="mailto:primary@j3d.ai">primary@j3d.ai</a><br/>Press: <a href="mailto:primary@j3d.ai">primary@j3d.ai</a></p>
      <h3>VAT Identification</h3>
      <p>VAT registration: subject to Estonian Tax and Customs Board (Maksu- ja Tolliamet). VAT number disclosed upon contractual engagement where required by EU intra-community supply rules.</p>
      <h3>Operating Locations</h3>
      <p>Tallinn (registered HQ) · Munich (DACH operations) · Dubai (Gulf advisory) · Mumbai (South Asia operations). Additional active corridors in Vietnam and China.</p>
      <h2>Editorial Responsibility</h2>
      <p>Responsible for content per §18 Abs. 2 MStV: Kevin Varend, J3D.AI Labs OÜ, address as above.</p>
      <h2>EU Online Dispute Resolution</h2>
      <p>The European Commission provides a platform for online dispute resolution: <a href="https://ec.europa.eu/consumers/odr">ec.europa.eu/consumers/odr</a>. We are not obliged or willing to participate in dispute resolution proceedings before a consumer arbitration board.</p>
      <h2>Disclaimer</h2>
      <h3>Liability for Content</h3>
      <p>The contents of our pages have been created with the greatest possible care. However, we cannot guarantee the accuracy, completeness, or timeliness of the contents.</p>
      <h3>Liability for Links</h3>
      <p>Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this external content.</p>
      <h3>Copyright</h3>
      <p>The content and works on these pages created by the site operators are subject to applicable copyright law.</p>
      <h3>Trademarks</h3>
      <p>VAY Score™ is a trademark of J3D.AI Labs OÜ. House of Collaboration™, Estonian Leap™, and Deep Tech Castle™ are programme names operated by J3D.AI Labs OÜ.</p>
    </LegalLayout>
  ),
});
