import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function ReplayCard() {
    return (
        <div className="flex flex-row m-2 p-2 rounded-lg border-2 gap-3 bg-card w-fit">
            <div className="">
                <Avatar>
                    <AvatarImage src="./2c7d99fe281ecd3bcd65ab915bac6dd5.jpeg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-col">
                <div className=" flex flex-row gap-2">
                    <div className='text-[10px]'>16/05/2023</div>
                    <div className='text-[10px]'>12:30pm</div>
                </div>
                <div className="text-[12px]">Mesaage</div>
            </div>
        </div>

    )
}

export default ReplayCard