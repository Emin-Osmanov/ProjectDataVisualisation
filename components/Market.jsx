import Link from 'next/link'

const Market = () => {
  return (
    <Link replace href="/marketDash">
      <div className="btn-5 flex items-center justify-center rounded-2xl  py-14 px-10 xl:px-10 xl:py-20 ">
        <p className="text-xl text-green-500 xl:text-2xl">Market Overview</p>
      </div>
    </Link>
  )
}

export default Market
