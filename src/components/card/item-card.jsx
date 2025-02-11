"use client"
import Image from "next/image";
import { BadgeInfo, Bookmark, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useLocalStorage } from "@/hooks/use-localstorage";
import { useState } from "react";
import { useSiteState } from "@/hooks/site-provider";
import RemoveBookmark from "../dialog/remove-bookmark";


export default function ItemCard({ data }) {
    const {
        id,
        thumbnail = "/images/common/image.png",
        name = null,
        description = null,
        href = "#",
        tag = null,
    } = data;
    const { free } = useSiteState();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { addItem, removeItem, items, handleLinkClick } = useLocalStorage();

    const isTagFree = /^free$/i.test(tag?.trim());
    if (free && !isTagFree) {
        return null;
    }

    const handleToggleBookmark = () => {
        if (items.includes(id)) {
            setIsDialogOpen(true)
        } else {
            addItem(id); // Add item to bookmark
        }
    };

    return (
        <>
            <div className={cn("relative flex flex-col bg-card border rounded overflow-hidden transition-all hover:shadow-md group/card")} itemScope itemType="https://schema.org/Thing">

                <div className={cn(
                    "absolute top-2 right-2 size-8 bg-background flex-center flex md:hidden group-hover/card:flex rounded-full border border-foreground group/heart cursor-pointer z-10",
                    (items.includes(id) && "md:flex"))} onClick={() => handleToggleBookmark()}>
                    <Bookmark className={cn("size-4 group-hover/heart:fill-red-500 touch-none", (items.includes(id) && "fill-red-600 group-hover/heart:fill-red-600"))} />
                </div>

                <div className="flex-center overflow-hidden">
                    <Image
                        className="aspect-video size-full object-cover object-center md:group-hover/card:scale-125 transition-all"
                        src={thumbnail}
                        width={160}
                        height={90} loading="lazy"
                        alt={name}
                        itemProp="image"
                    />
                </div>

                <div className="p-2 w-full flex flex-col gap-1 flex-1">
                    <div className="font-medium line-clamp-2 capitalize" itemProp="name">{name}</div>

                    <p className="text-sm text-muted-foreground line-clamp-3 flex-1 capitalize" itemProp="description">{description}</p>

                    <div className="pt-1 flex-between gap-2 justify-self-end flex-wrap">
                        <Badge className="capitalize" variant="secondary">{tag}</Badge>
                        <Link
                            className={cn(
                                buttonVariants({ variant: "outline", size: "sm", }), "px-2 h-8 hover:text-primary focus:text-primary"
                            )}
                            href={href} target="_blank" itemProp="url"
                            onClick={() => handleLinkClick()}
                        >
                            Open <ExternalLink className="h-4" />
                        </Link>
                    </div>
                </div>
            </div>
            <RemoveBookmark
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                removeItem={removeItem}
                data={data}
            />
        </>
    )
}