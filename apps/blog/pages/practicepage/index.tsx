import type { ReactElement } from "react"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import Link from "next/link"

export default function Page() {
  return (
    <main>
      <Head>
        <title>practicepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>practicepage</p>
      <Link href="/">Click this and go back home</Link>
    </main>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <>{page}</>
    </>
  )
}
