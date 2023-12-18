"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
 
  useEffect(()=>{
    setTimeout(() => {
      router.push('/dashboard', { scroll: false })
    }, 500);
  },[])
  return (
   <div className="grid">
    {/* <Image src={}/> */}
   </div>
  )
}
