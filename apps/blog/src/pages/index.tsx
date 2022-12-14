import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
// import Link from "next/link"
import { Button } from "ui"
import { useSession } from "next-auth/react"

const Home: NextPage = () => {
  const { data: session } = useSession()
  return (
    <>
      <Head>
        <title>Olya&apos;s Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-w-full flex grow flex-col justify-around items-center bg-zinc-100 dark:bg-zinc-800">
        <div className="flex flex-col w-1/2 justify-between">
          <Link href="/practicepage">
            <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg mb-4">Practice Page?</a>
          </Link>
          <Link href="/masongrid">
            <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg mb-4">checkout the Mason Grid?</a>
          </Link>
          <Link href="/writingBlog">
            <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg mb-4">Writing Blog</a>
          </Link>
          <Link href="/reacthookform">
            <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg mb-4">React Hook Form</a>
          </Link>
          <Link href="/search">
            <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg mb-4">Search</a>
          </Link>
          <Link href="/users">
            <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg mb-4">Users</a>
          </Link>
          <Link href="/shoppingcart">
            <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg mb-4">Shopping Cart</a>
          </Link>
          <Link href="/mongodb">
            <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg mb-4">MongoDB</a>
          </Link>
          <Link href="/stripe">
            <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg mb-4">Stripe</a>
          </Link>
          <Link href="/nextauth">
            <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg mb-4">Next Auth</a>
          </Link>
        </div>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />{" "}
      </div>
    </>
  )
}

export default Home
