"use client"

import React from 'react'
import Link from "next/link";
import {useRouter} from "next/navigation"

const page = () => {
  const router = useRouter();

  return (
    <div>
      <h1>login page</h1>
      <Link href="/">Go to Home Page</Link>
      <br />
      <br />
      <br />
      <button onClick={()=>router.push("/")}>Go to Home page button</button>
      <br />
      <br />
      <button onClick={()=>router.push("/login/loginaccount")}>Go to login Account page button</button>

    </div>
  )
}

export default page
