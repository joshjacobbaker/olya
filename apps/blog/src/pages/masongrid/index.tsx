import Link from "next/link"
import React from "react"

type Props = {}

function MasonGrid({}: Props) {
  return (
    <>
      <div className="w-3/4 grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        <div className="video flex flex-grow rounded-lg bg-blue-300 h-36 sm:col-span-2 md:col-span-3">1</div>
        <div className="video flex flex-grow rounded-lg bg-red-200 h-36 md:col-span-2">Blog Thumbnail</div>
        <div className="video flex flex-grow rounded-lg bg-green-400 h-36">Blog Thumbnail</div>
        <div className="video flex flex-grow rounded-lg bg-yellow-400 h-36 sm:col-span-2">Blog Thumbnail</div>
        <div className="video flex flex-grow rounded-lg bg-pink-400 h-36 sm:col-span-2">Blog Thumbnail</div>
        <div className="video flex flex-grow rounded-lg bg-blue-400 h-36">Blog Thumbnail</div>
        <div className="video flex flex-grow rounded-lg bg-green-400 h-36">Blog Thumbnail</div>
        <div className="video flex flex-grow rounded-lg bg-orange-400 h-36 sm:col-span-2">Blog Thumbnail</div>
      </div>
      <div>
        <Link href="/" className="">
          <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg mt-4">Go Back to Home Page?</a>
        </Link>
      </div>
    </>
  )
}

export default MasonGrid
