"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card as CardUi } from "@/components/ui/card";
import { Link as LinkIcon, Tag, SquarePlus, CaseSensitive, Text } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useLocalStorage } from "@/hooks/use-localstorage";

export default function AddPersonalLink() {
    const { addPersonalItem } = useLocalStorage();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [itemData, setItemData] = useState({
        name: "",
        description: "",
        href: "",
        tag: "",
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setItemData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async () => {
        const { name, description, href, tag } = itemData;

        if (!name || !href ) {
            toast({
                variant: "warning",
                title: "😑Oopsie Daisy!",
                description: "Looks like you missed a spot! Fill out Name and Link the field to add your site.",
            });
            return;
        }

        try {
            // Add the personal item using the context function
            addPersonalItem(name, description, href, tag);

            // Reset the form and close the dialog
            setItemData({ name: "", description: "", href: "", tag: "" });
            setIsDialogOpen(false);

            toast({
                variant: "success",
                title: "Boom! It's Done! 🎉",
                description: "Your shiny new site has been added to the list. Keep 'em coming!",
            });
        } catch (error) {
            console.error("Error:", error);
            toast({
                variant: "destructive",
                title: "😬 Yikes! Something Broke",
                description: "Uh-oh! We hit a snag. Try again and let's hope it works this time.",
            });
        }
    };


    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <CardUi className="flex-center flex-col gap-2 p-4 group hover:bg-secondary text-muted-foreground hover:text-foreground cursor-pointer font-medium">
                        <SquarePlus className="size-8" />
                        <span>Add Personal Site</span>
                </CardUi>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle><SquarePlus className="inline -mt-1 mr-2 size-5 content-center"/>Add New Site</DialogTitle>
                    <DialogDescription>
                        Add details for the site you want to add.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-5">
                    <Label className="block font-normal" htmlFor="name">
                        <span className="flex items-center">
                            <CaseSensitive className="mr-2 shrink-0 size-4" />
                            Name
                        </span>
                        <Input
                            className="mt-2"
                            id="name"
                            placeholder="Site Name"
                            required
                            value={itemData.name}
                            onChange={handleInputChange}
                        />
                    </Label>
                    <Label className="block font-normal" htmlFor="description">
                        <span className="flex items-center">
                            <Text className="mr-2 shrink-0 size-4" />
                            Description (opt)
                        </span>
                        <Input
                            className="mt-2"
                            id="description"
                            placeholder="Brief description of the site"
                            required
                            value={itemData.description}
                            onChange={handleInputChange}
                        />
                    </Label>
                    <Label className="block font-normal" htmlFor="tag">
                        <span className="flex items-center">
                            <Tag className="mr-2 shrink-0 size-4" />
                            Tag (opt)
                        </span>
                        <Input
                            className="mt-2"
                            id="tag"
                            placeholder="Tag for the site"
                            required
                            value={itemData.tag}
                            onChange={handleInputChange}
                        />
                    </Label>
                    <Label className="block font-normal" htmlFor="href">
                        <span className="flex items-center">
                            <LinkIcon className="mr-2 shrink-0 size-4" />
                            Link
                        </span>
                        <Input
                            className="mt-2"
                            id="href"
                            placeholder="https://..."
                            required
                            value={itemData.href}
                            onChange={handleInputChange}
                        />
                    </Label>
                </div>

                <DialogFooter>
                    <Button onClick={handleSubmit}>Add Site</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
