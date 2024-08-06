"use client";

import { endpoint } from "@/utils/helper";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { ReactNode, useMemo } from "react";
import { SOL_NETWORK } from "./env.config";


export default function SolWalletProvider({
  children,
}: {
  children: ReactNode;
}) {
  const network = SOL_NETWORK === 'DEVNET' ? WalletAdapterNetwork.Devnet : SOL_NETWORK === 'TESTNET' ? WalletAdapterNetwork.Testnet : WalletAdapterNetwork.Mainnet;

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}