"use client"
import {
  Triangle,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function SidebarBottom() {

  return (
    <div className="relative">
      <div className="absolute h-6 w-full bottom-full left-0 right-0 bg-gradient-to-t from-background to-transparent" />
      <SidebarMenu className="relative">
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            variant="outline"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground bg-secondary text-secondary-foreground hover:bg-secondary/80"
            asChild
          >
            <Link className="relative group/link" href="https://www.producthunt.com/posts/keepslink" target="_blank">
              <Avatar className="p-1 size-8 rounded-md">
                <AvatarImage src="/images/common/product-hunt-logo-orange-960.png" alt="ko-fi symbol" />
                <AvatarFallback className="rounded-lg"> PH </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold"> Product Hunt </span>
                <span className="truncate text-xs"> Support this project </span>
              </div>
              <Triangle className="relative -bottom-1 size-6 animate-bounce group-hover/link:fill-white transition-all" />
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            variant="outline"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            asChild
          >
            <Link href="https://ko-fi.com/mallickwebstudio" target="_blank">
              <Avatar className="p-1 size-8 rounded-md">
                <AvatarImage src="/images/common/kofi-symbol.png" alt="ko-fi symbol" />
                <AvatarFallback className="rounded-lg"> K </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold"> Ko-fi </span>
                <span className="truncate text-xs"> Support this project </span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </div>
  )
}
