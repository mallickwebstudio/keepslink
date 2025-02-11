"use client"

import * as React from "react"

import { SidebarNav } from "@/components/layouts/sidebar/sidebar-nav"
import { SidebarBottom } from "@/components/layouts/sidebar/sidebar-bottom"
import { SidebarTop } from "@/components/layouts/sidebar/sidebar-top"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { datas } from "@/lib/database"

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarTop />
      </SidebarHeader>

      <SidebarContent>
          <SidebarNav items={datas} />
      </SidebarContent>

      <SidebarFooter>
        <SidebarBottom user={{
          name: "shadcn",
          email: "m@example.com",
          avatar: "/avatars/shadcn.jpg",
        }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
