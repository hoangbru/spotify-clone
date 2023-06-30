"use client";

import React, { FC, useMemo } from "react";
import { usePathname } from "next/navigation";

import { LuHome } from 'react-icons/lu'
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

type SidebarProps = {
  children: React.ReactNode;
};

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        icon: LuHome,
        active: pathname !== "search",
        href: "/",
      },
      {
        label: "Search",
        icon: BiSearch,
        active: pathname === "search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full">
      <div
        className="hidden 
          md:flex 
          flex-col 
          gap-y-2 
          bg-black 
          h-full 
          w-[300px] 
          p-2"
      >
        <Box>
            <div className="flex flex-col gap-y-4 px-5 py-4">
                {routes.map((item) => (
                    <SidebarItem
                        key={item.label}
                        {...item}
                    />
                ))}
            </div>
        </Box>
        <Box className="overflow-y-auto h-full">
            <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
