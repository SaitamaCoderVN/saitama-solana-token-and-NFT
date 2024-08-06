import { ModeToggleTheme } from "../ModeToggleTheme";

import React from "react";
import { WalletMenuButton } from "./WalletMenuButton";
import Link from "next/link";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar";

export default function Header() {
    return (
        <div className="w-full flex items-center justify-end p-3 gap-4">
            <Menubar className="bg-black text-white">
                <MenubarMenu>
                    <MenubarTrigger>
                        <span>Token</span>
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            <Link href="/token/create-token">
                                <span>Create</span>
                            </Link>
                        </MenubarItem>
                        <MenubarItem>
                            <Link href="/token/transfer">
                                <span>Transfer</span>
                            </Link>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <Link href="/token/burn">
                                <span>Burn</span>
                            </Link>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <Link href="/token/delegate">
                                <span>Delegate</span>
                            </Link>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <span>NFT</span>
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            <Link href="/nft">
                                <span>NFT</span>
                            </Link>
                        </MenubarItem>
                        {/* <MenubarItem>
                            <Link href="/nft/transfer">
                                <span>Transfer</span>
                            </Link>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <Link href="/nft/burn">
                                <span>Burn</span>
                            </Link>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <Link href="/nft/delegate">
                                <span>Delegate</span>
                            </Link>
                        </MenubarItem> */}
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
            <WalletMenuButton />
            <ModeToggleTheme />
        </div>
    )
}


