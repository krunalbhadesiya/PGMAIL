"use client";
import React from 'react';
import Card from './ui/Card';

function Maillist() {
  const mailData = [
    { msender: 'user 1', mtitle: 'How to send mail using PG Mail',  mdate: '16/01/2023', mtime: '01:05pm' },
    { msender: 'user 2', mtitle: 'How to send mail using PG Mail',  mdate: '25/02/2023', mtime: '02:08pm' },
    { msender: 'user 3', mtitle: 'How to send mail using PG Mail',  mdate: '21/03/2023', mtime: '03:58pm' },
    { msender: 'user 4', mtitle: 'How to send mail using PG Mail',  mdate: '06/04/2023', mtime: '04:48pm' },
    { msender: 'user 5', mtitle: 'How to send mail using PG Mail',  mdate: '05/1/2023', mtime: '05:25pm' },
    { msender: 'user 6', mtitle: 'How to send mail using PG Mail',  mdate: '01/1/2023', mtime: '06:15pm' },
    { msender: 'user 7', mtitle: 'How to send mail using PG Mail',  mdate: '11/1/2023', mtime: '07:30pm' },
    { msender: 'user 8', mtitle: 'How to send mail using PG Mail',  mdate: '14/1/2023', mtime: '08:30pm' },
    { msender: 'user 9', mtitle: 'How to send mail using PG Mail',  mdate: '16/1/2023', mtime: '09:51pm' },
    { msender: 'user 10', mtitle: 'How to send mail using PG Mail',  mdate: '17/10/2023', mtime: '10:40pm' },
    { msender: 'user 11', mtitle: 'How to send mail using PG Mail',  mdate: '18/11/2023', mtime: '11:45pm' },
    // Add other mail data items here
  ];

  return (
    <div className='h-full w-[420px] border-r-2 overflow-scroll grid grid-cols-1 divide-y scrollbar-thin scrollbar-thumb-slate-800 scrollbar-thumb-rounded-md'>
      {mailData.map((mail, index) => (
        <Card key={index} {...mail} />
      ))}
    </div>
  );
}

export default Maillist;
