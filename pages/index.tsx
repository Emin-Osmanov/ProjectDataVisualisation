import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Art from '../components/Art'
import Artist from '../components/Artist'

const Market = dynamic(() => import('../components/Market'), { ssr: false })

import { useEffect } from 'react'

const Home: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-special ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-3 gap-16 xl:gap-40">
        <Market />
        <Art />
        <Artist />
      </main>
    </div>
  )
}

export default Home
