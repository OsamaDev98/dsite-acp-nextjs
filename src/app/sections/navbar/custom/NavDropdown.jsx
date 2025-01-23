"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, Key, LogOut } from "lucide-react";
import { Link } from "@/i18n/routing";
import DefaultUser from "@/app/img/user-default.png";

export default function NavDropdown() {
  const dropdownData = [
    {
      id: 1,
      title: "Profile",
      href: "/profile",
      icon: <User className="mr-2 h-4 w-4" />,
    },
    {
      id: 2,
      title: "Change password",
      href: "/change_password",
      icon: <Key className="mr-2 h-4 w-4" />,
    },
    {
      id: 3,
      title: "Settings",
      href: "/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
    {
      id: 4,
      title: "Sign out",
      href: "/",
      icon: <LogOut className="mr-2 h-4 w-4" />,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-11 w-11 rounded-full">
          <Avatar className="h-11 w-11">
            <AvatarImage src={DefaultUser} alt="@User" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 dark:bg-mainDark-900"
        align="end"
        forceMount
      >
        {dropdownData?.map((item) => {
          return (
            <Link href={item.href} key={item.id}>
              {item.title == "Sign out" ? (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => setOpen(false)}
                    className="text-red-600 cursor-pointer"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </DropdownMenuItem>
                </>
              ) : (
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </DropdownMenuItem>
              )}
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
