"use client"
import Link from "next/link";
import { datas } from "@/lib/database";
import Card from "@/components/card/item-card";
import { buttonVariants } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/use-localstorage";
import { BadgeInfo } from "lucide-react";

export default function GeneratedSection() {
    const { items } = useLocalStorage();

    const filterCards = (data) => {
        return data.map((asset) => {
            const filteredCategories = asset.category.map((category) => {
                const filteredCards = category.cards.filter(card =>
                    items.includes(card.id)
                );
                return {
                    ...category,
                    cards: filteredCards,
                };
            }).filter(category => category.cards.length > 0);

            return {
                ...asset,
                category: filteredCategories,
            };
        }).filter(asset => asset.category.length > 0);
    };

    const filteredItems = filterCards(datas);
    return (
        <section id="bookmark">
            {filteredItems.length === 0
                ? (
                    <div className="mt-3 size-full flex-center flex-col gap-2 p-4 border rounded-md text-destructive bg-destructive/5">
                        <BadgeInfo className="size-6" />
                        <h2 className="m-0 font-medium text-lg">No Bookmark found</h2>
                        <Link className={buttonVariants({ size: "sm" })} href="/resources">Start Adding</Link>
                    </div>
                )
                : (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
                        {filteredItems.map(asset =>
                            asset.category.map(category =>
                                category.cards.map(item => (
                                    <Card data={item} key={item.id + "BookmarkCard"} />
                                ))
                            )
                        )}
                    </div>
                )}
        </section>
    )
}
