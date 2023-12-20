import React from 'react'

function MailMetaData() {
  return (
    <div className='p-2'>
      <div className="flex flex-row justify-between">
        <h2 className='text-xl'>Title</h2>
        <div className=''>
          <h3 className='text-xs font-extralight'>16/05/2023</h3>
          <h3 className='text-xs font-extralight'>12.30</h3>
        </div>
      </div>
      <h3 className='text-xs'>From</h3>
      <h3 className='text-xs'>To</h3>
      <h3 className='text-xs'>cc</h3>
      <h3 className='text-xs'>bcc</h3>
    </div>
  )
}

export default MailMetaData