"use client"
import { IconArchive, IconArrowBackUp, IconArrowForwardUp, IconClockHour3, IconDots, IconPin, IconTrash, IconUpload } from '@tabler/icons-react'
import React from 'react'
import { Button } from './ui/button'
import { Icon } from 'iconsax-react'
import MailMetaData from './MailMetaData'
import ReplayCard from './ui/ReplayCard'

function Maildata() {
  return (
    <div className='px-3 py-2 h-full w-full overflow-scroll  divide-y-2  scrollbar-thin scrollbar-thumb-slate-800 scrollbar-thumb-rounded-md '>
      <div className="mb-2 flex flex-row divide-x-2">
        <div className="">
          <Button aria-label="" variant="icon" >
            <IconClockHour3 />
          </Button>
          <Button aria-label="" variant="icon" >
            <IconPin />
          </Button>
        </div>
        <div className="">
          <Button aria-label="" variant="icon" >
            <IconUpload />
          </Button>
          <Button aria-label="" variant="icon" >
            <IconArchive />
          </Button>
          <Button aria-label="" variant="icon" >
            <IconTrash />
          </Button>
        </div>
        <div className="">
          <Button aria-label="" variant="icon" >
            <IconDots />
          </Button>
        </div>




      </div>
      <div className="">
        <MailMetaData />
      </div>
      <div className="font-normal text-sm p-2 text-justify ">
        <p className="break-words leading-relaxed" >
          Dear Clients<br/><br/>
          Sending an email using the PG Mail App is a straightforward process, ensuring a seamless and efficient communication experience. Follow these basic steps to compose and send your email:
          <br/><b>1.Login to PG Mail App:</b>
          Begin by opening the PG Mail App and logging in with your credentials. This step ensures that your account is securely accessed, allowing you to send emails from your designated account.
          <br/><b>2. Navigate to Compose Email:</b>
          Once logged in, locate the Compose or New Email button within the apps user interface. This action directs you to the email composition screen, where you can start crafting your message.
          <br/><b>3. Enter Recipients Email Address:</b>
          In the recipient field, input the email address of the person or group you want to send the email to. PG Mail App makes it easy to add multiple recipients, ensuring your message reaches the intended audience.
          <br/><b>4. Compose Your Email:</b>
          Craft your message by entering the subject and body of the email. Utilize formatting options, such as bold and italic, to enhance the appearance of your text. Attach files or images directly from your device using the apps intuitive interface.
          <br/><b>5. Review and Edit: </b>
          Before sending, take a moment to review your email for any errors or omissions. PG Mail App allows you to edit your content easily, ensuring that your message is accurate and well-crafted.
          <br/><b>6. Click Send: </b>
          Once satisfied with your email, click the Send button to dispatch it. The PG Mail App ensures swift delivery of your message, providing a reliable platform for your communication needs.
          By following these simple steps, the PG Mail App empowers users to send emails efficiently and effectively, promoting seamless communication within a user-friendly environment.
          <br/><br/>Best regards,
          <br/>PG Mail Team
        </p>
        <div className="">
          <Button variant={'icon'}>
            <IconArrowBackUp />
          </Button>
          <Button variant={'icon'}>
            <IconArrowForwardUp />
          </Button>
        </div>
      </div>
      <div className="p-3">
        <ReplayCard/>
        <ReplayCard/>
        <ReplayCard/>
        <ReplayCard/>
      </div>
    </div>
  )
}

export default Maildata