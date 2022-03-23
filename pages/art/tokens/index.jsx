import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { ChevronDoubleLeftIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Link from 'next/link'

const Table = () => {
  const ref = useRef(null)

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
    ' https://public.tableau.com/views/RelationshipbetweenLikesandTokensforArtPieces/Sheet192?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link'

  return (
    <>
      <Head>
        <script src="https://public.tableau.com/javascripts/api/tableau-2.min.js" />
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen items-center justify-evenly bg-special ">
        <Link replace href={'/art'}>
          <ChevronDoubleLeftIcon className="fixed top-5 left-5 h-10 w-10 cursor-pointer text-green-500" />
        </Link>
        <div>
          {error ? (
            <p className="text-2xl text-red-600">Please refresh the page</p>
          ) : (
            <div ref={ref}></div>
          )}
        </div>
      </div>
    </>
  )
}

export default Table
