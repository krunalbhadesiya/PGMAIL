"use client";
import React from 'react';
import { Button } from "./ui/button"
import { ArchiveBox, Building, CloseCircle, Document, Send2, Star1, User } from 'iconsax-react';

// Create a mapping function for icons
const iconMap = {
  User: <User size="16" color="#d9e3f0" variant="TwoTone" />,
  IconBuildingSkyscraper: <Building size="16" color="#d9e3f0" variant="TwoTone"/>,
  IconSend: <Send2 size="16" color="#d9e3f0" variant="TwoTone"/>,
  IconFile: <Document size="16" color="#d9e3f0" variant="TwoTone"/>,
  IconCircleX: <CloseCircle size="16" color="#d9e3f0" variant="TwoTone"/>,
  IconArchive: <ArchiveBox size="16" color="#d9e3f0" variant="TwoTone"/>,
  IconStar: <Star1 size="16" color="#d9e3f0" variant="TwoTone"/>,
};

const functionList = [
  { name: 'Private', icon: 'User' },
  { name: 'Work', icon: 'IconBuildingSkyscraper' },
];

const folderList = [
  { name: 'Sent', icon: 'IconSend' },
  { name: 'Drafts', icon: 'IconFile' },
  { name: 'Spam', icon: 'IconCircleX' },
  { name: 'Archive', icon: 'IconArchive' },
  { name: 'Starred', icon: 'IconStar' },
];

function Sidebar() {
  return (
    <div className='h-full w-48 border-r-2 p-3 '>
      <div className="">
        <h2 className='text-[10px] font-bold mb-1'>Functions</h2>
        {functionList.map((item, index) => (
          <Button key={index} variant={'icon'}>
            {iconMap[item.icon]}
            <span className='ml-2'>{item.name}</span>
          </Button>
        ))}
      </div>
      <div className="">
        <h2 className='text-[10px] font-bold mb-1'>Folders</h2>
        {folderList.map((item, index) => (
          <Button key={index} variant={'icon'}>
            {iconMap[item.icon]}
            <span className='ml-2'>{item.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;