import { BadgeInfo } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import GeneratedSection from "./generated-section";
import { siteConfig } from "@/lib/metadata";

export const metadata = {
    title: "Personal Links",
    description: "Create your own list of your favourite websites which will saved in your localstorage.",
    alternates: {
        canonical: siteConfig.baseUrl + "/personal"
    },
}

export default function Page() {

    return (
        <main className="relative">
            <h1 className="text-center">Personal Sites</h1>
            <div className="absolute top-0 left-0">
                <Popover>
                    <PopoverTrigger asChild>
                        <BadgeInfo className="size-4 text-muted-foreground hover:text-yellow-500" />
                    </PopoverTrigger>
                    <PopoverContent align="start">
                        Your data is securely stored in your browser&apos;s local storage. Please note that it will only be available on this browser and device. Switching browsers, clearing storage, or updating the app may result in data loss.
                    </PopoverContent>
                </Popover>
            </div>
            <GeneratedSection />
        </main>
    );
}
