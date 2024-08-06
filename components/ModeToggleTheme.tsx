"use client";

import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuItem } from "./ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";

export function ModeToggleTheme() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
        <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  );
}