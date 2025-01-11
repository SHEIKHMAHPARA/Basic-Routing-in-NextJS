"use client"
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation"

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>BASIC ROUTING</h1>
    
      <Link href="/login">Go to Login Page</Link>
      <br />
      <br />
      <Link href="/ABOUT">Go to About Page</Link>
      <br />
      <br />
      <br />
      <button onClick={()=>router.push("/login")}>Go to login page button</button>
      <br />
      <br />
      <button onClick={()=>router.push("/ABOUT")}>Go to About page button</button>



</div>
  );
}
