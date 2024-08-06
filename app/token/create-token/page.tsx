import { CreateTokenForm } from '@/app/token/create-token/CreateTokenForm'
import React from 'react'

export default function CreateToken() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-10'>
        <h1 className='font-bold text-4xl'>CreateToken</h1>
        <CreateTokenForm/>
    </div>
  )
}