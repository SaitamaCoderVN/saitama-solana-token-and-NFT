import { TransferTokenForm } from '@/app/token/transfer/TransferTokenForm'
import React from 'react'

export default function TransferToken() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 py-10 '>
        <h1 className='text-4xl font-bold'>Transfer Token</h1>
        <TransferTokenForm/>
    </div>
  )
}