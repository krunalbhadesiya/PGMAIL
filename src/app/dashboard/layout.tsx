"use client"
import Maildata from "@/components/Maildata"
import Maillist from "@/components/Maillist"
import Navbar from "@/components/Navbar"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

  return (
    <section className="w-full h-screen overflow-hidden" >
      {children}
    </section>
  )
}