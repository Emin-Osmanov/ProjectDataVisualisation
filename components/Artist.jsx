import Link from 'next/link'

const Artist = () => {
  return (
    <Link replace href="/artist">
      <div className="btn-5 flex items-center justify-center rounded-2xl  py-14 px-10 xl:px-10 xl:py-20 ">
        <p className="text-xl text-green-500 xl:text-2xl">Artist Overview</p>
      </div>
    </Link>
  )
}

export default Artist
