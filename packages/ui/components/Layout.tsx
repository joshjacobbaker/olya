import * as React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

type Props = {
  children: JSX.Element
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center py-2 ">{children}</main>
      <Footer />
    </>
  )
}
