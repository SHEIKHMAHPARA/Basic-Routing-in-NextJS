"use client"

import React from 'react'
import Link from "next/link";
import {useRouter} from "next/navigation"

const page = () => {
      const router = useRouter();
    
  return (
    <div>
      <h1>About page for company</h1>
      <br />
      <br />
      <Link href="/ABOUT/aboutcompany/aboutproject">Go to aboutproject Page</Link>
      <br />
      <br />
      <Link href="/ABOUT">Go to ABOUT Page</Link>
      <br />
      <br />
      <br />    
      <button onClick={()=>router.push("/ABOUT/aboutcompany/aboutproject")}>Go to aboutproject page button</button>      
      <br />
      <br />
      <br />
      <button onClick={()=>router.push("/ABOUT")}>Go to About page button</button> 

    </div>
  )
}

export default page
