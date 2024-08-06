import { DelegateTokenForm } from '@/app/token/delegate/DelegateTokenForm'
import React from 'react'

function DelegatePage() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-10'>
        <h1 className='font-bold text-4xl'>Delegate</h1>
        <DelegateTokenForm/>
    </div>
  )
}

export default DelegatePage