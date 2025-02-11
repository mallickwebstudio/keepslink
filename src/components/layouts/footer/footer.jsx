"use client"
import { toast } from "@/hooks/use-toast";
import { siteConfig } from "@/lib/metadata";
import { Share2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const handleCopyToClipboard = () => {
        const websiteUrl = siteConfig.baseUrl;
        navigator.clipboard.writeText(websiteUrl)
            .then(() => {
                toast({
                    title: "🎉 Link copied to clipboard!",
                    description: "Don't leave the crew hanging—share the goodies now! 🚀"
                });
            })
            .catch((err) => {
                console.error("Failed to copy link: ", err);
                toast({
                    variant: "destructive",
                    title: "🚨 Oops! Something went wrong.",
                    description: "Couldn't copy the link. Please grab it directly from the URL bar and share it with your crew 💪!"
                });
            });
    };

    return (
        <footer className="px-4 py-6 border-t md:flex space-y-2 md:space-y-0 gap-4 items-center justify-between flex-wrap text-muted-foreground text-sm italic">
            <div>
                <span className="not-italic">Built By </span>
                <Link className="hover:underline hover:text-primary" href="https://www.mallickwebstudio.com/" target="_blank">
                    Mallick Web Studio
                </Link>
            </div>

            <div
                className="flex items-center gap-1 hover:text-primary group/github"
                role="button"
                onClick={() => handleCopyToClipboard()}
            >
                <Share2 className="size-4 shrink-0" />
                <span className="md:group-hover/github:underline">
                    Share with Your Crew
                </span>
            </div>

            <Link className="block hover:underline hover:text-primary" href="/about-us">About Us</Link>

            <Link className="block hover:underline hover:text-primary" href="/privacy-policy">Privacy Policy</Link>
        </footer>
    );
}
