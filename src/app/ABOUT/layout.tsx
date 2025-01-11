"use client";

import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'

const layout = ({children}: { children: React.ReactNode}) => {
const pathName = usePathname();
console.log(pathName); 
  return (
    <div>
      {/* conditional layout */}
      {
        pathName !== "/ABOUT/aboutcompany/aboutproject" ?
        <>
          <h1>Common Layout for Login Screen</h1>
    <br />
    <br />
    <Link href="/ABOUT/aboutcompany">About Company</Link>
     </>
     :<Link href="/ABOUT/aboutcompany">About Company</Link>
    //  :or null
      }
    
    {
        children
    }
    </div>
  )
}

export default layout
