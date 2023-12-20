"use client"
import React from 'react'
import Card from './ui/Card'

function Maillist() {
  return (
    <div className='h-full w-96 border-r-2 overflow-scroll py-3 px-2 grid grid-cols-1 divide-y scrollbar-thin scrollbar-thumb-slate-800 scrollbar-thumb-rounded-md '>
      <h2 className='text-[10px] mb-1'  >Maillist </h2>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Maillist