import React, { useState } from 'react'
import { ChevronDoubleLeftIcon } from '@heroicons/react/outline'
import Head from 'next/head'

import Link from 'next/link'

const Index = () => {
  return (
    <>
      <Head>
        <script src="https://public.tableau.com/javascripts/api/tableau-2.min.js" />{' '}
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-special ">
        <Link replace href={'/marketDash'}>
          <ChevronDoubleLeftIcon className="fixed top-5 left-5 h-10 w-10 cursor-pointer text-green-500" />
        </Link>

        <div className="flex flex-col items-center px-16">
          <p className="py-5 text-2xl text-white">
            The Number of Primary and Secondary Sales
          </p>
          <div className="mb-5 flex space-x-5">
            <Link replace href={`/marketDash/primary/table1`}>
              <img
                className="h-[350px] w-[450px] cursor-pointer rounded-2xl border-2 border-green-500 object-fill p-3 xl:h-[400px] xl:w-[650px]"
                src="../img/Primary1.png"
                alt="primary1"
              />
            </Link>

            <Link replace href={`/marketDash/primary/table2`}>
              <img
                className="h-[350px] w-[450px] cursor-pointer rounded-2xl border-2 border-green-500 object-fill p-3 xl:h-[400px] xl:w-[650px]"
                src="../img/Primary2.png"
                alt="primary2"
              />
            </Link>
          </div>
          <div className="mb-5 flex space-x-5">
            <Link replace href={`/marketDash/primary/table3`}>
              <img
                className="h-[350px] w-[450px] cursor-pointer rounded-2xl border-2 border-green-500 object-fill p-3 xl:h-[400px] xl:w-[650px]"
                src="../img/Primary3.png"
                alt="primary3"
              />
            </Link>
            <Link replace href={`/marketDash/primary/table4`}>
              <img
                className="h-[350px] w-[450px] cursor-pointer rounded-2xl border-2 border-green-500 object-fill p-3 xl:h-[400px] xl:w-[650px]"
                src="../img/Primary4.png"
                alt="primary4"
              />
            </Link>
          </div>
          <div className="mb-5 flex space-x-5">
            <Link replace href={`/marketDash/primary/table5`}>
              <img
                className="h-[350px] w-[450px] cursor-pointer rounded-2xl border-2 border-green-500 object-fill p-3 xl:h-[400px] xl:w-[650px]"
                src="../img/Primary5.png"
                alt="primary5"
              />
            </Link>
            <Link replace href={`/marketDash/primary/table6`}>
              <img
                className="h-[350px] w-[450px] cursor-pointer rounded-2xl border-2 border-green-500 object-fill p-3 xl:h-[400px] xl:w-[650px]"
                src="../img/Primary6.png"
                alt="primary6"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
