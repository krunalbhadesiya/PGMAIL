import { IconChevronRight } from '@tabler/icons-react'
import { ArrowRight2 } from 'iconsax-react';
import React from 'react'

interface MailListData{
    msender: string;
    mtitle: string;
    mdate: string;
    mtime: string;
}

const Card = (props:MailListData) => {
    return (
        <div className="p-2 shadow-lg flex flex-row items-start justify-between gap-2 hover:bg-accent hover:border-2">
            <div className=" flex flex-col">
                <div className="font-bold text-xs mb-1">{props.msender}</div>
                <div className="font-bold text-base mb-1">{props.mtitle}</div>
            </div>
            <div className='flex flex-col items-end justify-items-stretch gap-2'>
                <div className='font-thin text-xs flex flex-col '>
                    <div className='text-xs'>{props.mdate}</div>
                    <div className='text-xs'>{props.mtime}</div>
                </div>
                <ArrowRight2 color="#d9e3f0" variant="TwoTone"/>
            </div>
        </div>
    )
}

export default Card