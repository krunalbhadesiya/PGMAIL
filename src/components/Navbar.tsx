"use client"

import * as React from "react"
import logo from "@/assets/pgmaillogo.png"
import Image from 'next/image'
import { IconBellFilled, IconPlus, IconSearch, IconUserCircle, IconUserPlus } from '@tabler/icons-react'
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const user = [
  {
    value: "User 1",
    label: "User 1",
  },
  {
    value: "User 2",
    label: "User 2",
  },
  {
    value: "+ Add User",
    label: "+ Add User",
  },
]

function Navbar() {
  const [position, setPosition] = React.useState("User 1")
  return (
    <div className='p-3 w-full border-b-2 flex flex-row items-center justify-between '>
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
          <IconSearch />
        </Button>


      </div>
      <div className="flex flex-row gap-2 items-center">
        <Button aria-label="Notification" variant="icon">
          <IconPlus />
        </Button>
        <Button aria-label="Notification" variant="icon">
          <IconBellFilled />
        </Button>
        <Avatar>
          <AvatarImage src="./2c7d99fe281ecd3bcd65ab915bac6dd5.jpeg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

      </div>
    </div>
  )
}

export default Navbar
