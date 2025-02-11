import { BadgeInfo } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import GeneratedSection from "./generated-section";

export const metadata = {
    title: "Bookmark",
    description: "Bookmark your favourite links from keepslink and get quick access of your favourite websites.",
}

export default function Page() {

    return (
        <main className="relative">
            <h1 className="text-center">Bookmarks</h1>
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
