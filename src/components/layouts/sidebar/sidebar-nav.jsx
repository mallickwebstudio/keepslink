"use client"
import { Bookmark, ChevronRight, Lock } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function SidebarNav({ items = [] }) {
  const path = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Bookmarks" asChild>
            <Link className={cn("flex items-center", path.includes("/bookmarks") && "text-primary bg-secondary/50")} href="/bookmarks">
              <Bookmark className="mr-1 size-4" />
              Bookmarks
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Bookmarks" asChild>
            <Link className={cn("flex items-center", path.includes("/personal") && "text-primary bg-secondary/50")} href="/personal">
              <Lock className="mr-1 size-4" />
              Personal
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <Collapsible
              defaultOpen={item.isActive || path.includes(item.href)}
              className="group/collapsible"
            >
              <CollapsibleTrigger className="group/trigger" asChild>
                <SidebarMenuButton className="group" tooltip={item.title} asChild>
                  <Link className={cn(path.includes(item.href) && "text-primary hover:text-primary group-hover:text-primary group-hover/trigger:text-primary bg-secondary/50")} href={`/resources/${item.href}`}>
                    {item.title}
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </Link>
                </SidebarMenuButton>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.category?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link href={`/resources/${item.href + "/#" + subItem.href}`}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
