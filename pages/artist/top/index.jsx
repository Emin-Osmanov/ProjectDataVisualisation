import React, { useState } from 'react'
import { ChevronDoubleLeftIcon } from '@heroicons/react/outline'

import Link from 'next/link'

const Index = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-top">
        <Link replace href={'/artist'}>
          <ChevronDoubleLeftIcon className="fixed top-5 left-5 h-10 w-10 cursor-pointer text-green-500" />
        </Link>

        <img
          className="h-[45rem] w-[45rem] cursor-pointer rounded-lg border-2 border-green-500 object-fill p-3 "
          src="../img/top50.jpg"
          alt="top50"
        />
      </div>
    </>
  )
}

export default Index
