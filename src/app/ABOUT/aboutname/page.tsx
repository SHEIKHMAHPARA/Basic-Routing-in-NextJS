"use client"

import React from 'react'
import Link from "next/link";
import {useRouter} from "next/navigation"

const page = () => {
      const router = useRouter();
    
  return (
    <div>
      <h1>About page for Name</h1>
      <br />
      <br />
      <Link href="/ABOUT/aboutname">Go to aboutname Page</Link>
      <br />
      <br />
      <br />
      <button onClick={()=>router.push("/ABOUT")}>Go to About page button</button>
    </div>
  )
}

export default page
