"use client"
import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
  return (
    <div>
      <h1>Login page for Account</h1>
      <br />
      <Link href="/login">Go to login page</Link>
      <br />
      <br />
      <button onClick={()=>router.push("/login")}>Go to login page button</button>

    </div>
  )
}

export default page
