import React from 'react'
import { useEffect, useRef, useState } from 'react'
import {
  ChevronDoubleLeftIcon,
  PlayIcon,
  XIcon,
} from '@heroicons/react/outline'
import Head from 'next/head'
import Link from 'next/link'

const Table = () => {
  const ref = useRef(null)
  const [video, setVideo] = useState(false)

  const videoHandler = () => {
    setVideo(true)
  }

  const closeHandler = () => {
    setVideo(false)
  }

  const initViz = () => {
    try {
      new window.tableau.Viz(ref.current, url, {
        device: 'desktop',
        hideToolbar: true,
        width: '800px',
        height: '500px',
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(async () => {
    initViz()
  })

  const url =
    'https://public.tableau.com/views/Treemaps_16479953292280/Artpiecespricelikes?:language=en-US&:display_count=n&:origin=viz_share_link'

  return (
    <>
      <Head>
        <script src="https://public.tableau.com/javascripts/api/tableau-2.min.js" />

        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen  items-center justify-evenly  bg-special">
        <Link replace href={'/art'}>
          <ChevronDoubleLeftIcon className="fixed top-5 left-5 h-10 w-10 cursor-pointer text-green-500" />
        </Link>
        <div>
          <>
            <div className="flex cursor-pointer items-center justify-center ">
              <PlayIcon
                onClick={videoHandler}
                className="h-32 w-32 animate-pulse py-6  text-green-500"
              />
            </div>

            <div ref={ref}></div>
            {video ? (
              <div className="fixed top-0 right-0 left-0 z-50 flex h-screen  items-center justify-center bg-modal">
                <div>
                  <video
                    width={'800px'}
                    height={'400px'}
                    controls
                    autoPlay
                    typeof="video/mp4"
                    src="../img/nft.MP4"
                  ></video>
                </div>
                <div>
                  <XIcon
                    onClick={closeHandler}
                    className=" h-14 w-14 cursor-pointer pl-4 text-green-500"
                  />
                </div>
              </div>
            ) : (
              ''
            )}
          </>
        </div>
      </div>
    </>
  )
}

export default Table
