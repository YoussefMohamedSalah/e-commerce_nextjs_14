"use client" 

import React from 'react'
import { signOut } from "next-auth/react"

export default function SignOutBtn() {
  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}
