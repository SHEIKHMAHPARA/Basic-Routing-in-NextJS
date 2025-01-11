"use client"

import React from 'react'
import Link from "next/link";
import {useRouter} from "next/navigation"

const page = () => {
      const router = useRouter();
    
  return (
    <div>
      <h1>About page for Project</h1>
      <br />
      <br />
      <Link href="/ABOUT/aboutcompany">Go to aboutcompany Page</Link>

    </div>
  )
}

export default page
