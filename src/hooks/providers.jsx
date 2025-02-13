import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./theme-provider";
import { LocalStorageProvider } from "./use-localstorage";
import { SiteProvider } from "./site-provider";
import ProducthuntVisit from "@/components/dialog/producthunt-visit";
import Analytics from "@/components/other/analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next"

export default function Providers({ children }) {
    return (
        <LocalStorageProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <SiteProvider>
                    {children}
                </SiteProvider>
                <Toaster />
                <ProducthuntVisit />
                <Analytics />
                <VercelAnalytics/>
            </ThemeProvider>
        </LocalStorageProvider>
    )
}
