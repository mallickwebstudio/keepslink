import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Box, Boxes, Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export async function formatData(data) {
    const formattedData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        const transformedKey = `entry.${key}`;
        formattedData.append(transformedKey, value);
    });

    return formattedData;
}

export function AddSite() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        category: "",
        subCategory: "",
        link: "",
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const emptyFields = Object.values(formData).some((field) => field.trim() === "");

            if (emptyFields) {
                toast({
                    variant: "warning",
                    title: "⚠️ Missing Information",
                    description: "Please fill in all the fields before submitting.",
                });
                return;
            }

            const data = {
                "1038517016": formData.category,
                "338912621": formData.subCategory,
                "1104489821": formData.link,
            };

            await fetch(process.env.NEXT_PUBLIC_ADD_SITE_FORM_API, {
                method: "POST",
                body: await formatData(data),
                mode: "no-cors",
            });

            toast({
                variant: "success",
                title: "🎉 Submission Successful",
                description: "Your request to add a new site has been sent successfully!",
            });

            // Clear fields and close dialog
            setFormData({
                category: "",
                subCategory: "",
                link: "",
            });
            setIsDialogOpen(false);
        } catch (error) {
            console.error("Error:", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "We couldn't process your request. Please try again later.",
            });
        }
    };

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger className={cn(buttonVariants({ variant: "outline" }))}>
                <LinkIcon className="hidden sm:block size-5 mr-1 shrink-0" />
                Add <span className="hidden sm:block"> Site</span>
                <LinkIcon className="sm:hidden size-5 mr-1 shrink-0" />
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Site</DialogTitle>
                    <DialogDescription>
                        Request to add as many sites as you want, and they&apos;ll be added if they are useful.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-5">
                    <Label className="block font-normal" htmlFor="category">
                        <span className="flex items-center">
                            <Box className="mr-2 shrink-0 size-4" />
                            Category
                        </span>
                        <Input
                            className="mt-2"
                            id="category"
                            placeholder="(New OR Existing) Category"
                            required
                            value={formData.category}
                            onChange={handleInputChange}
                        />
                    </Label>
                    <Label className="block font-normal" htmlFor="subCategory">
                        <span className="flex items-center">
                            <Boxes className="mr-2 shrink-0 size-4" />
                            Sub-category
                        </span>
                        <Input
                            className="mt-2"
                            id="subCategory"
                            placeholder="(New OR Existing) Sub-category"
                            required
                            value={formData.subCategory}
                            onChange={handleInputChange}
                        />
                    </Label>
                    <Label className="block font-normal" htmlFor="link">
                        <span className="flex items-center">
                            <LinkIcon className="mr-2 shrink-0 size-4" />
                            Link
                        </span>
                        <Input
                            className="mt-2"
                            id="link"
                            placeholder="https://..."
                            required
                            value={formData.link}
                            onChange={handleInputChange}
                        />
                    </Label>
                </div>

                <DialogFooter>
                    <Button onClick={handleSubmit}>
                        Send Request
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
