"use client"
import { IconArchive, IconArrowBackUp, IconArrowForwardUp, IconClockHour3, IconDots, IconPin, IconTrash, IconUpload } from '@tabler/icons-react'
import React from 'react'
import { Button } from './ui/button'
import { ArchiveBox, ArrowForward, Back, Clock, DocumentUpload, Icon, More, SaveAdd, Trash } from 'iconsax-react'
import MailMetaData from './MailMetaData'
import ReplayCard from './ui/ReplayCard'

const IconButton = ({ icon, color = "#d9e3f0" }) => (
  <Button aria-label="" variant="icon">
    {React.createElement(icon, { size: 16, color, variant: "TwoTone" })}
  </Button>
);

function Maildata() {
  return (
    <>
      <div className='px-3 mt-2 h-full w-full overflow-scroll divide-y-2 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-thumb-rounded-md'>
        <div className="mb-2 flex flex-row divide-x-2">
          <div>
            <IconButton icon={Clock} />
            <IconButton icon={SaveAdd} />
          </div>
          <div>
            <IconButton icon={DocumentUpload} />
            <IconButton icon={ArchiveBox} />
            <IconButton icon={Trash} />
          </div>
          <div>
            <IconButton icon={More} />
          </div>
        </div>
        <div>
          <MailMetaData mtitle='How to send mail using PG Mail' mfrom='user1@mail.com' mto='user2@mail.com' mdate='16/01/23' mtime='01:05pm' />
        </div>
        <div className="font-normal text-sm p-2 text-justify">
          <p className="break-words leading-relaxed" >
            Dear Clients<br /><br />
            Sending an email using the PG Mail App is a straightforward process, ensuring a seamless and efficient communication experience. Follow these basic steps to compose and send your email:
            <br /><b>1.Login to PG Mail App:</b>
            Begin by opening the PG Mail App and logging in with your credentials. This step ensures that your account is securely accessed, allowing you to send emails from your designated account.
            <br /><b>2. Navigate to Compose Email:</b>
            Once logged in, locate the Compose or New Email button within the apps user interface. This action directs you to the email composition screen, where you can start crafting your message.
            <br /><b>3. Enter Recipients Email Address:</b>
            In the recipient field, input the email address of the person or group you want to send the email to. PG Mail App makes it easy to add multiple recipients, ensuring your message reaches the intended audience.
            <br /><b>4. Compose Your Email:</b>
            Craft your message by entering the subject and body of the email. Utilize formatting options, such as bold and italic, to enhance the appearance of your text. Attach files or images directly from your device using the apps intuitive interface.
            <br /><b>5. Review and Edit: </b>
            Before sending, take a moment to review your email for any errors or omissions. PG Mail App allows you to edit your content easily, ensuring that your message is accurate and well-crafted.
            <br /><b>6. Click Send: </b>
            Once satisfied with your email, click the Send button to dispatch it. The PG Mail App ensures swift delivery of your message, providing a reliable platform for your communication needs.
            By following these simple steps, the PG Mail App empowers users to send emails efficiently and effectively, promoting seamless communication within a user-friendly environment.
            <br /><br />Best regards,
            <br />PG Mail Team
          </p>
          <div>
            <IconButton icon={Back} />
            <IconButton icon={ArrowForward} />
          </div>
        </div>
        <div className="p-3">
          <ReplayCard avtar='./user 2.png' rdate='16/01/2023' rtime='02:19pm' rmesaage='I Understand This Step' />
          <ReplayCard avtar='./user 2.png' rdate='16/01/2023' rtime='02:20pm' rmesaage='Thank Your For Informaiton' />
          <ReplayCard avtar='./user 1.png' rdate='16/01/2023' rtime='02:50pm' rmesaage='Welcome' />
        </div>
      </div>
    </>
  );
}

export default Maildata