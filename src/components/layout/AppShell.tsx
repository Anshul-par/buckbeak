import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Outlet, useLocation } from "react-router-dom";

const LOCATION_MAP: { [key: string]: string } = {
  "/": "Home",
  "/home/our-services": "Our Services",
};

export function AppShell() {
  const isMob = useIsMobile();
  const location = useLocation();

  return (
    <SidebarProvider>
      <AppSidebar collapsible={!isMob ? "none" : "icon"} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b-2">
          <div className="flex items-center gap-2 px-4 w-full">
            {isMob ? (
              <SidebarTrigger className="-ml-1" />
            ) : (
              <p className="text-[#29283B] font-sf-pro-display text-32 font-bold leading-normal">
                {LOCATION_MAP[location.pathname]}
              </p>
            )}
          </div>
        </header>
        <div>
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
