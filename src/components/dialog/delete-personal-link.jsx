"use client"
import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react";
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocalStorage } from "@/hooks/use-localstorage";

export default function DeletePersonalLink({itemId}) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { removePersonalItem } = useLocalStorage();

    return (
        <>
            <div className={cn(
                "absolute top-2 right-2 size-8 bg-background flex-center hidden group-hover:flex rounded-full border border-foreground group/trash cursor-pointer"
            )} onClick={() => setIsDialogOpen(true)}>
                <Trash2 className={cn("size-4 group-hover/trash:fill-red-500 touch-none")} />
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Delete Site</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete this item from your personal links.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">

                    </div>
                    <DialogFooter>
                        <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                        <Button variant="destructive" onClick={() => { removePersonalItem(itemId); setIsDialogOpen(false) }}>
                            Yes Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
