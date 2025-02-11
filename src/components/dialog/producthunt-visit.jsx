"use client"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useLocalStorage } from "@/hooks/use-localstorage";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Triangle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProducthuntVisit() {
    const { producthuntVisitDialog, setProducthuntVisitDialog, handleProducthuntVisitTrue } = useLocalStorage();


    return (
        <Dialog open={producthuntVisitDialog} onOpenChange={setProducthuntVisitDialog} >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Enjoying KeepsLink?</DialogTitle>
                    <DialogDescription>
                        Help us grow by sharing KeepsLink with others and supporting us on Product Hunt!
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="justify-center sm:justify-center">
                    <Link className={cn("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 p-2 bg-primary text-primary-foreground shadow hover:bg-primary/90", "relative group/link")} href="https://www.producthunt.com/posts/keepslink" target="_blank" onClick={() => handleProducthuntVisitTrue()}>
                        <Avatar className="p-1 size-8 rounded-md">
                            <AvatarImage src="/images/common/product-hunt-logo-orange-960.png" alt="ko-fi symbol" />
                            <AvatarFallback className="rounded-5"> PH </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold"> Product Hunt </span>
                            <span className="truncate text-xs"> Support this project </span>
                        </div>
                        <Triangle className="relative size-xl animate-bounce group-hover/link:fill-white transition-all" />
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
