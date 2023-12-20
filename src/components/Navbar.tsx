"use client"

import * as React from "react"
import logo from "@/assets/pgmaillogo.png"
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Add, AddSquare, Notification, SearchNormal } from "iconsax-react"


function Navbar() {
  return (
    <nav className='p-2 w-full border-b-2 flex flex-row items-center justify-between '>
      <div className='flex flex-row gap-1 items-center'>
        <Image src={logo} width={32} height={32} alt='logo' />
        <text>PGMail</text>
      </div>
      <div className='flex w-full max-w-sm items-center space-x-2'>
        <Input
          aria-label="SerachBar"
          name="SerachBar"
          placeholder="Search"
          autoComplete="SerachBar"
        />
        <Button variant={"icon"}>
          <SearchNormal size="24" color="#d9e3f0" variant="TwoTone" />
        </Button>


      </div>
      <div className="flex flex-row gap-2 items-center">
        <Button aria-label="Notification" variant="icon">
        <AddSquare size="24" color="#d9e3f0" variant="TwoTone"/>
        </Button>
        <Button aria-label="Notification" variant="icon">
          <Notification size="24" color="#d9e3f0" variant="TwoTone" />
        </Button>
        <Avatar>
          <AvatarImage src="./user 1.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

      </div>
    </nav>
  )
}

export default Navbar
