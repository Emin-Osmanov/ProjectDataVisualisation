import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ChevronDoubleLeftIcon,
} from '@heroicons/react/outline'

const Table = () => {
  const ref = useRef(null)

  const router = useRouter()
  let lastChar = router.asPath.charAt([router.asPath.length - 1])
  let digit = Number.parseFloat(lastChar)

  const [error, setError] = useState(false)

  const initViz = () => {
    new window.tableau.Viz(ref.current, url, {
      device: 'desktop',
      hideToolbar: true,
      width: '800px',
      height: '500px',
    })
  }
  useEffect(async () => {
    try {
      initViz()
    } catch (error) {
      setError(true)
    }
  })

  const url =
    'https://public.tableau.com/views/GamePrimaryandSecondarySales/Game'

  return (
    <>
      <Head>
        <script src="https://public.tableau.com/javascripts/api/tableau-2.min.js" />{' '}
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen items-center justify-evenly bg-special text-center">
        <Link replace href={'/marketDash/primary/'}>
          <ChevronDoubleLeftIcon className="fixed top-5 left-5 h-10 w-10 cursor-pointer text-green-500" />
        </Link>
        <Link replace href={`/marketDash/primary/table1`}>
          <ArrowCircleLeftIcon className=" h-10 w-10 cursor-pointer text-green-500" />
        </Link>
        <div>
          {error ? (
            <p className="text-2xl text-red-600">Please refresh the page</p>
          ) : (
            <div ref={ref}></div>
          )}
        </div>
        <Link replace href={`/marketDash/primary/table3`}>
          <ArrowCircleRightIcon className="h-10 w-10 cursor-pointer text-green-500" />
        </Link>
      </div>
    </>
  )
}

export default Table
