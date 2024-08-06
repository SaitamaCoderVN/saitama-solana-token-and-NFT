"use client";

import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { sliceAddressWallet } from "@/utils/helper";
import * as React from "react";

import { Button } from "@/components/ui/button";

import { LogOut } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export function WalletMenuButton() {
    const { setVisible: setModalVisible } = useWalletModal();
    const {publicKey, onDisconnect} = useWalletMultiButton(
        {
            onSelectWallet: () => {
                setModalVisible(true);
            },
        }
    );

    const [copied, setCopied] = React.useState(false);

    return (
        <div className="relative">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    {publicKey ? (
                        <Button variant="outline">
                            {" "}
                            {sliceAddressWallet(publicKey)}
                        </Button>
                    ) : (
                        <Button variant="outline" onClick={() => setModalVisible(true)}>
                            {" "}
                            Connect Wallet
                        </Button>
                    )}
                </DropdownMenuTrigger>
                {publicKey && (
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuItem className="cursor-pointer" onClick={
                            async () => {
                                if (publicKey) {
                                    await navigator.clipboard.writeText(publicKey.toBase58());
                                    setCopied(true);
                                    setTimeout(() => {
                                        setCopied(false);
                                    }, 400);
                                }
                            }
                        }>
                            <span className="text-sm text-gray-500">{copied ? "Copied" : "Copy Address"}</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer" onClick={() => {
                            setModalVisible(true);
                        }}>
                            <span> Change Wallet</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer" onClick={onDisconnect}>
                            <LogOut className="w-4 h-4 mr-2" />
                            <span>Log out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                )}
            </DropdownMenu>
        </div>
    );
}



