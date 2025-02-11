"use client"
import { AddSite } from "@/components/dialog/add-site"
import { ModeToggle } from "@/components/other/mode-toggle"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import KeepslinkLogo from "@/components/other/svg"
import Link from "next/link"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { datas } from "@/lib/database"
import { cn } from "@/lib/utils"

export function CommandMenu() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            <Button variant="outline" className="hidden md:flex bg-secondary/50 text-muted-foreground text-sm font-normal" onClick={() => setOpen(true)}>
                Search name or description...
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search name or description..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    {datas.map(item => (
                        <CommandGroup heading={item.title} key={item.title + "Command"}>
                            {item.category.map(category => (
                                <div key={category.title + "Command"}>
                                    <Link className="focus:outline-none cursor-pointer" href={item.href + "#" + category.href} onClick={() => setOpen(false)}>
                                        <CommandItem className="block text-muted-foreground group/item cursor-pointer">
                                            <span className="capitalize group-hover/item:underline underline-offset-2">
                                                /{item.title}/{category.title}
                                            </span>
                                        </CommandItem>
                                    </Link>

                                    {category.cards.map(({ name, description, href }, i) => (
                                        <Link className="focus:outline-none cursor-pointer" href={href} target="_blank" key={name + i}>
                                            <CommandItem className="block ml-4 group/item cursor-pointer">
                                                <span className="capitalize group-hover/item:underline underline-offset-2">{name}</span>
                                                <p className="text-xs text-muted-foreground capitalize">{description}</p>
                                            </CommandItem>
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </CommandGroup>
                    ))}
                </CommandList>
            </CommandDialog>
        </>
    )
}


export default function Navbar() {
    const { open, isMobile } = useSidebar()

    return (
        <header className="px-4 flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b">
            <div className="flex items-center gap-2 transition-all">
                <SidebarTrigger className={cn(open
                    ? isMobile
                        ? "w-8 ml-0"
                        : "w-0 -ml-2"
                    : "w-8 ml-0", "overflow-hidden")} />
                <Link className="flex items-center text-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 rounded-md" href="/">
                    <KeepslinkLogo className="size-10" />
                    <span className="h-fit block text-4 font-semibold leading-4">Keeps Link</span>
                </Link>
            </div>

            <div className="flex gap-2">
                <CommandMenu />
                <AddSite />
                <ModeToggle />
            </div>
        </header>
    )
}
