import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
import React from 'react'

export default function NftPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 py-10'>
      <h1 className='text-4xl font-bold'>Coming Soon with Solana NFT</h1>
      <div className='flex flex-row items-center gap-5'>
        {/* <Button variant="default" size="lg" className='bg-black text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform'>
          <Link href="/token/create-token">
            <span className="text-lg" style={{ fontFamily: 'Brush Script MT, cursive' }}>Create Token</span>
          </Link>
        </Button>
        <Button variant="default" size="lg" className='bg-black text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform'>
          <Link href="/token/transfer">
            <span className="text-lg" style={{ fontFamily: 'Brush Script MT, cursive' }}>Transfer Token</span>
          </Link>
        </Button>
        <Button variant="default" size="lg" className='bg-black text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform'>
          <Link href="/token/burn">
            <span className="text-lg" style={{ fontFamily: 'Brush Script MT, cursive' }}>Burn Token</span>
          </Link>
        </Button>
        <Button variant="default" size="lg" className='bg-black text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform'>
          <Link href="/token/delegate">
            <span className="text-lg" style={{ fontFamily: 'Brush Script MT, cursive' }}>Delegate Token</span>
          </Link>
        </Button> */}

      </div>
    </div>
  )
}