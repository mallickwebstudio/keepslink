import { siteConfig } from "@/lib/metadata";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Review the privacy policy of keepslink, detailing our commitment to safeguarding your personal information.",
  alternates: {
    canonical: siteConfig.baseUrl + "/privacy-policy"
  },
}

export default function page() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="m-4">
      <h1 className="text-center">Privacy Policy</h1>

      <h2 className="text-left">Who We Are</h2>
      <p>I am Mohammad Salman Mallick from India.</p>
      <p>Our website address is: {siteConfig.url}.</p>

      <h2 className="text-left">Personal Information Collection</h2>
      <p>We do not personally collect any personal information from you unless you voluntarily provide it through the forms or any other way.</p>

      <h2 className="text-left">Who We Share Your Data With</h2>
      <p>
        This website is built with Next.js (React framework) and deployed on <Link className="text-link" href="https://vercel.com/legal/privacy-policy" target="_blank">vercel.com</Link>.
        We use <Link className="text-link" href="https://search.google.com" target="_blank">Google Search Console</Link> , <Link className="text-link" href="https://analytics.google.com" target="_blank">Google Analytics</Link> and <Link className="text-link" href="https://vercel.com/docs/analytics/package" target="_blank">Vercel Analytics</Link> to monitor and analyze our website&apos;s performance in Google search results.
      </p>

      <h2 className="text-left">Third-Party Resources</h2>
      <p>
        The links, names, images, and other details provided on this website belong to their respective owners.
        We do not claim ownership of these resources, nor do we have control over their content or availability.
        Additionally, while we strive to provide accurate information, the tags (e.g., &quot;paid&quot; or &quot;free&quot; or others) associated with the resources may not always reflect the current status of the resource. We recommend verifying the details on the respective owner&apos;s website.
      </p>


      <h2 className="text-left">Copyright Notice</h2>
      <p>&copy;{currentYear} {siteConfig.name}. All rights reserved.</p>
    </section>
  );
}
