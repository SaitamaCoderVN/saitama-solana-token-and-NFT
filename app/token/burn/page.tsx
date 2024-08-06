import { BurnTokenForm } from '@/app/token/burn/BurnTokenForm'
import React from 'react'

export default function BurnTokenPage() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-10'>
        <h1 className='font-bold text-4xl'>Burn Token</h1>
        <BurnTokenForm/>
    </div>
  )
}