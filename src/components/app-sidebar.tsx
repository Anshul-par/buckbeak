import * as React from "react";
import {
  Codesandbox,
  GalleryVerticalEnd,
  Headset,
  HomeIcon,
  MessageCircleQuestion,
  SquareLibrary,
  User,
  Users,
  Wrench,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "EPEN Ltd.",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "EPEN Ltd",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Home",
      icon: HomeIcon,
      isActive: true,
      items: [
        {
          title: "Our Services",
          url: "/home/our-services",
        },
        {
          title: "Our Client",
          url: "/home/our-clients",
        },
      ],
      url: "/",
    },
    {
      title: "Products",
      url: "#",
      icon: SquareLibrary,
    },
    {
      title: "Customers",
      url: "#",
      icon: User,
    },
    {
      title: "Orders",
      url: "#",
      icon: Codesandbox,
    },
    {
      title: "Services",
      url: "#",
      icon: Wrench,
    },
    {
      title: "Clients",
      url: "#",
      icon: Users,
    },
    {
      title: "FAQs",
      url: "#",
      icon: MessageCircleQuestion,
    },
    {
      title: "Contact Us",
      url: "#",
      icon: Headset,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
