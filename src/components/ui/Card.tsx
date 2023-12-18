import { IconChevronRight } from '@tabler/icons-react'
import React from 'react'

function Card() {
    return (
        <div className="p-2 shadow-lg flex flex-row items-center justify-between hover:bg-slate-900 hover:border-2">
            <div className=" flex flex-col">
                <div className="font-bold text-xs mb-1">Sender Name</div>
                <div className="font-bold text-base mb-1">Title</div>
                <div className="font-light text-[10px]">Description</div>
            </div>
            <div className='flex flex-col items-end gap-2'>
                <div className='font-thin text-xs flex flex-col'>
                    <div className='text-[12px]'>16/05/2023</div>
                    <div className='text-[12px]'>12:30pm</div>
                </div>
                <IconChevronRight />
            </div>
        </div>
    )
}

export default Card