"use client"
import React from 'react'
import Card from './ui/Card'
import { Heading } from '@primer/react'

function Maillist() {
  return (
    <div className='h-full w-96 border-r-2 overflow-scroll py-5 px-2 grid grid-cols-1 divide-y scrollbar-thin scrollbar-thumb-slate-800 '>
      <Heading  sx={{fontSize: 1, mb: 1}}> Maillist </Heading>
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