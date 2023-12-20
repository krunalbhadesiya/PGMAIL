"use client";
import React from 'react';
import { Button } from "./ui/button"
import { IconArchive, IconBuildingSkyscraper, IconCircleX, IconFile, IconSend, IconStar, IconUser } from '@tabler/icons-react';

const functionList = [
  { name: 'Private', icon: IconUser },
  { name: 'Work', icon: IconBuildingSkyscraper },
];

const folderList = [
  { name: 'Sent', icon: IconSend },
  { name: 'Drafts', icon: IconFile },
  { name: 'Spam', icon: IconCircleX },
  { name: 'Archive', icon: IconArchive }, // Assuming you have an IconArchive in your icon library
  { name: 'Starred', icon: IconStar },
];

function Sidebar() {
  return (
    <div className='h-full w-56 border-r-2 p-3 '>
      <div className="">
        <h2 className='text-[10px] mb-1'>Folders</h2>
        {functionList.map((item, index) => (
          <Button key={index} variant={'icon'}>
            <item.icon />
            <span className='ml-2'>{item.name}</span>
          </Button>
        ))}
      </div>
      <div className="">
        <h2 className='text-[10px] mb-1'>Folders</h2>
        {folderList.map((item, index) => (
          <Button key={index} variant={'icon'}>
            <item.icon />
            <span className='ml-2'>{item.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
