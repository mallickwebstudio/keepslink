import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/metadata";
import { Mail } from "lucide-react";
import Link from "next/link";


export const metadata = {
    title: "About",
    description: "Know more about keeps-link. What is this, how it benefits you, how you can contact us.",
    alternates: {
        canonical: siteConfig.baseUrl + "/about-us"
    },
}

export default function page() {
    return (
        <section className='m-4'>
            <h1 className="text-center w-full md:w-1/2 mx-auto">Welcome to KeepsLink: Your Go-To Resource Hub</h1>

            <div className="mt-16">
                <h2 className="text-primary">What is KeepsLink?</h2>
                <p className="mt-2 w-full md:w-1/2 text-muted-foreground">KeepsLink is your ultimate platform for discovering a wide range of resources, all neatly organized and easily accessible. Whether you&apos;re an agency or a freelancer, KeepsLink helps you find the tools, tutorials, and inspiration you need to kickstart your projects seamlessly.</p>
            </div>

            <div className="mt-16 w-full flex-between gap-6 flex-col md:flex-row">
                <div className="md:w-1/2">
                    <h2 className="text-primary">How Does KeepsLink Work?</h2>
                    <ol className="mt-2 w-full list-decimal text-muted-foreground">
                        <li><span className="text-secondary-foreground font-medium">Explore Categories:</span> Use our sidebar to navigate through intuitive category buttons, making it easy to find topics that interest you.</li>
                        <li><span className="text-secondary-foreground font-medium">Dive Into Sub-Categories:</span> Each category contains detailed sub-categories to help you discover resources tailored to your specific needs.</li>
                        <li><span className="text-secondary-foreground font-medium">Discover Resource Cards:</span> Browse through curated resource cards, each containing valuable URLs that might be exactly what you’re looking for.</li>
                    </ol>
                </div>
                {/* <div className="w-full ">
                    <video width="1600" height="900" preload="none" loop autoPlay muted>
                        <source src="/video/demo.mp4" type="video/mp4" />
                    </video>
                </div> */}
            </div>

            <div className="mt-16">
                <h2 className="text-primary">Stay Connected</h2>
                <p className="mt-2 w-full md:w-1/2 text-muted-foreground">
                    Got questions, feedback, or ideas? We’d love to hear from you! Connect with us on social media or send us a message. Let’s work together to make KeepsLink even better.
                </p>

                <div className="mt-4 flex gap-4 flex-wrap items-center">
                    <Link className="p-2 hover:bg-secondary flex gap-2 items-center rounded-md" href="https://ko-fi.com/mallickwebstudio" target="_blank">
                        <Avatar className="p-1 size-8 rounded-md bg-primary">
                            <AvatarImage src="/images/common/kofi-symbol.png" alt="ko-fi symbol" />
                            <AvatarFallback className="rounded-5">KO-FI</AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-3 leading-tight">
                            <span className="truncate font-semibold"> Ko-fi </span>
                            <span className="truncate text-xs"> Support this project </span>
                        </div>
                    </Link>
                    <Link className={buttonVariants({ variant: "outline" })} href="mailto:salman@mallickwebstudio.com" variant="outline">
                        <Mail className="size-4" /> Get in Touch
                    </Link>
                </div>
            </div>

            <div className="mt-16 text-center">
                Thank you for choosing KeepsLink. Let’s create amazing things together!
            </div>
        </section>
    )
}
