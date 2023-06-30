import React, { FC } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons";

type SidebarItemProps = {
  label: string;
  icon: IconType;
  href: string;
  active?: boolean;
};

const SidebarItem: FC<SidebarItemProps> = ({
  label,
  href,
  active,
  icon: Icon,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
            flex 
            flex-row 
            h-auto 
            items-center 
            w-full 
            gap-x-4 
            text-md 
            font-medium
            cursor-pointer
            hover:text-white
            transition
            text-neutral-400
            py-1
        `,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-100">{label}</p>
    </Link>
  );
};

export default SidebarItem;
