import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "@/components/ui/dialog"
import { Button } from "../ui/button";


export default function RemoveBookmark({ isDialogOpen, setIsDialogOpen, removeItem, data: { id, name } }) {
    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Remove from bookmark</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to remove {name} from bookmarks
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                    </Button>
                    <Button variant="destructive" onClick={() => { removeItem(id); setIsDialogOpen(false) }}>
                        Yes Remove
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
