"use client"

import * as React from "react"
import logo from "@/assets/pgmaillogo.png"
import Image from 'next/image'
import { IconBellFilled, IconSearch, IconUserCircle, IconUserPlus } from '@tabler/icons-react'
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Avatar, Button, IconButton, TextInput } from '@primer/react'


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
        <TextInput
          leadingVisual={IconSearch}
          aria-label="SerachBar"
          name="SerachBar"
          placeholder="Search"
          autoComplete="SerachBar"
        />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <IconButton aria-label="Notification" variant="invisible" size="medium" icon={IconBellFilled} />
        <Avatar size={28} src="https://avatars.githubusercontent.com/primer" />
      </div>
    </div>
  )
}

export default Navbar
