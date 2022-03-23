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
      <div className="flex h-screen items-center justify-center bg-special px-10">
        <Link replace href={'/'}>
          <ChevronDoubleLeftIcon className="fixed top-5 left-5 h-10 w-10 cursor-pointer text-green-500" />
        </Link>

        <div className="grid grid-cols-3 gap-8 xl:gap-20">
          <Link replace href="/marketDash/sales">
            <div className="btn-5 cursor-pointer rounded-2xl px-10 py-20 ">
              <p className="text-xl text-green-500">Sales USD</p>
              <p className=" pt-5 text-white">
                Most of the sales of NFT are done with Ethereum and a
                cryptocurrency wallet is necessary to participate. Three popular
                NFT marketplace are OpenSea, SuperRare, and Nifty. Two common
                cryptocurrency wallet options are Coinbase Wallet and MetaMask.
              </p>
            </div>
          </Link>
          <Link replace href="/marketDash/primary">
            <div className="  btn-5 rounded-2xl px-10 py-20 ">
              <p className="text-xl text-green-500">Primary & Secondary</p>
              <p className="pt-5 text-white">
                The primary market refers to the first sale of an artwork, while
                the secondary market includes all subsequent resales of the
                work.
              </p>
            </div>
          </Link>
          <Link replace href="/marketDash/active">
            <div className=" btn-5 rounded-2xl px-10 py-20 ">
              <p className="text-xl text-green-500">Active Market Wallets</p>
              <p className="pt-5 text-white">
                Active Market Wallets: To invest in / trade non-fungible tokens,
                you'll need an NFT wallet. An NFT wallet is a cryptocurrency
                wallet that supports the blockchain protocol NFTs are built on.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Index
