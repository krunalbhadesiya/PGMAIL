import React from 'react';
import { Button } from './ui/button';

interface MailSelectedData {
  mfrom: string;
  mto: string;
  mcc?: string | null; // Use "?" to indicate optional
  mbcc?: string | null; // Use "?" to indicate optional
  mtitle: string;
  mdate: string;
  mtime: string;
}

const MailMetaData = (props: MailSelectedData) => {
  return (
    <div className='p-2'>
      <div className="flex flex-row justify-between">
        <h2 className='text-xl'>{props.mtitle}</h2>
        <div className=''>
          <p className='text-xs font-extralight'>{props.mdate}</p>
          <p className='text-xs font-extralight'>{props.mtime}</p>
        </div>
      </div>
      <p className='text-xs'>from: <Button variant={'link'}>{props.mfrom}</Button> </p>
      <p className='text-xs'>to: <Button variant={'link'}>{props.mto}</Button></p>
      {props.mcc !== undefined && props.mcc !== null && (
        <p className='text-xs'>cc: <Button variant={'link'}>{props.mcc}</Button></p>
      )}
      {props.mbcc !== undefined && props.mbcc !== null && (
        <p className='text-xs'>bcc: <Button variant={'link'}>{props.mbcc}</Button></p>
      )}
    </div>
  );
}

export default MailMetaData;
