"use client"
import { IconArchive, IconBuildingSkyscraper, IconCircleX, IconFile, IconMailFilled, IconSend, IconStar, IconUser } from '@tabler/icons-react'
import { NavList } from '@primer/react'
import React from 'react'
function Sidebar() {
  return (
    <div className='h-full w-56 border-r-2'>
      <NavList >
        <NavList.Group title="Inbox" >
          <NavList.Item href="#" aria-current="page">
            <NavList.LeadingVisual>
              <IconUser />
            </NavList.LeadingVisual>
            Private
          </NavList.Item>
          <NavList.Item href="#" aria-current="page">
            <NavList.LeadingVisual>
              <IconBuildingSkyscraper />
            </NavList.LeadingVisual>
            Work
          </NavList.Item>
        </NavList.Group>
        <NavList.Group title="Foldars">
          <NavList.Item href="">
            <NavList.LeadingVisual>
              <IconSend/>
            </NavList.LeadingVisual>
            Sent
          </NavList.Item>
          <NavList.Item href="">
            <NavList.LeadingVisual>
              <IconFile/>
            </NavList.LeadingVisual>
            Drafts
          </NavList.Item>
          <NavList.Item href="">
            <NavList.LeadingVisual>
              <IconCircleX/>
            </NavList.LeadingVisual>
            Spam
          </NavList.Item>
          <NavList.Item href="">
            <NavList.LeadingVisual>
              <IconArchive/>
            </NavList.LeadingVisual>
            Archive
          </NavList.Item>
          <NavList.Item href="">
            <NavList.LeadingVisual>
              <IconStar/>
            </NavList.LeadingVisual>
            Starred
          </NavList.Item>
        </NavList.Group>
      </NavList>
    </div>
  )
}

export default Sidebar