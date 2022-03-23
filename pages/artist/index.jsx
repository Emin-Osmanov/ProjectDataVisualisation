import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import { ChevronDoubleLeftIcon } from '@heroicons/react/outline'

const Index = () => {
  return (
    <>
      <Head>
        <script src="https://public.tableau.com/javascripts/api/tableau-2.min.js" />{' '}
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex h-screen items-center justify-center  bg-special px-10">
        <Link replace href={'/'}>
          <ChevronDoubleLeftIcon className="fixed top-5 left-5 h-10 w-10 cursor-pointer text-green-500" />
        </Link>
        <div className="grid grid-cols-3 gap-10">
          <Link replace href="/artist/top">
            <div className="btn-5 cursor-pointer rounded-2xl px-10 py-20 ">
              <p className="text-center text-xl text-green-500">
                Top 50 Artists based on Price
              </p>
            </div>
          </Link>
          <Link replace href="/artist/relation">
            <div className="btn-5  cursor-pointer rounded-2xl px-10 py-20 ">
              <p className="text-center text-xl text-green-500">
                Relationship between Prices & Likes for Creators by Art Type
              </p>
            </div>
          </Link>
          <Link replace href="/artist/metrics">
            <div className="btn-5  cursor-pointer rounded-2xl px-10 py-20 ">
              <p className="text-center text-xl text-green-500">
                Performance Metrics of Artists
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Index
