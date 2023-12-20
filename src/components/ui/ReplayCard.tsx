import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface  ReplayList{
    avtar:string;
    rdate:string;
    rtime:string;
    rmesaage:string;
}

const ReplayCard = (props:ReplayList) => {
    return (
        <div className="flex flex-row m-2 p-2 rounded-lg border-2 gap-4 bg-accent w-72">
            <div className="">
                <Avatar>
                    <AvatarImage src={props.avtar} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-col">
                <div className=" flex flex-row gap-2">
                    <div className='text-[10px]'>{props.rdate}</div>
                    <div className='text-[10px]'>{props.rtime}</div>
                </div>
                <div className="text-[12px]">{props.rmesaage}</div>
            </div>
        </div>

    )
}

export default ReplayCard