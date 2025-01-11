"use client"

import React from 'react'
import Link from "next/link";
import {useRouter} from "next/navigation"

const page = () => {
  const router = useRouter();

  return (
    <div>
      <h1>ABOUT PAGE</h1>
      <Link href="/">Go to Home Page</Link>
      <br />
      <br />
      <Link href="/ABOUT/aboutcompany">Go to aboutcompany Page</Link>
      <br />
      <br />
      <Link href="/ABOUT/aboutname">Go to aboutname Page</Link>
      <br />
      <br />
      <br />
      <button onClick={()=>router.push("/")}>Go to Home page button</button>  
      <br />
      <br />
      <br />    
      <button onClick={()=>router.push("/ABOUT/aboutcompany")}>Go to aboutcompany page button</button>      
      <br />
      <br />
      <br />
      <button onClick={()=>router.push("/ABOUT/aboutname")}>Go to aboutname page button</button>      

 

    </div>
  )
}

export default page
