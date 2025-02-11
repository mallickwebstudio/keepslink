"use client"
import { cn } from "@/lib/utils";
import { Pen } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link as LinkIcon, Tag, CaseSensitive, Text } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/use-localstorage";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function EditPersonalLink({ itemId }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { personalItems, editPersonalItem } = useLocalStorage();
    const [itemData, setItemData] = useState({
        name: "",
        description: "",
        href: "",
        tag: "",
    });
    
    useEffect(() => {
        const filterItem = personalItems?.length > 0 && personalItems.find(item => item.id == itemId)
        setItemData(filterItem)
    }, [itemId, personalItems])

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setItemData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async () => {
        const { name, description, href, tag } = itemData;

        if (!name || !href) {
            toast({
                variant: "warning",
                title: "😑Oopsie Daisy!",
                description: "Looks like you missed a spot! Fill out Name and Link the field to add your site.",
            });
            return;
        }

        try {
            // Add the personal item using the context function
            editPersonalItem(itemId, name, description, href, tag);

            // Close the dialog
            setIsDialogOpen(false);

            toast({
                variant: "success",
                title: "Boom! It's Done! 🎉",
                description: "Your shiny new site has been edited to the list.",
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
        <>
            <div className={cn(
                "absolute top-2 right-[3rem] size-8 bg-background flex-center hidden group-hover:flex rounded-full border border-foreground group/trash cursor-pointer"
            )}
                onClick={() => setIsDialogOpen(true)}
            >
                <Pen className={cn("size-4 group-hover/trash:fill-green-500 touch-none")} />
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle><Pen className="inline -mt-1 mr-2 size-5 content-center" />Edit Site</DialogTitle>
                        <DialogDescription>
                            Edit details for the existing site.
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
                        <Button onClick={handleSubmit}>Update</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
