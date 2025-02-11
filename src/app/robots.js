import { siteConfig } from "@/lib/metadata";

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            }
        ],
        sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
    }
}