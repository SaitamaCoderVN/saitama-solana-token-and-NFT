import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 py-10'>
      <h1 className='text-5xl font-bold text-black mb-10'>Welcome to Solana World</h1>
      <div className='flex flex-row items-center gap-5'>
        <Button variant="default" size="lg" className='bg-black text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform'>
          <Link href="/token/create-token">
            <span className="text-lg">Explore Tokens</span>
          </Link>
        </Button>
        <span className="text-2xl">😊</span>
        <Button variant="default" size="lg" className='bg-black text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform'>
          <Link href="/nft">
            <span className="text-lg">Discover NFTs</span>
          </Link>
        </Button>
      </div>
      <div className='mt-10 text-black text-center'>
        <p className='text-xl'>My second assignment at Solana Summer Fellowship 2024</p>
      </div>
    </div>
  )
}