import React, { useContext, useState } from "react"

// import ModalComponent from "./Modal"
import ModalFromScratch from "./ModalFromScratch"
import { Search, Menu, Logo } from "ui"
import MyThemeContext from "../context/myThemeContext"
import { FaSun, FaMoon } from "react-icons/fa"

type Props = {}

function Header({}: Props) {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext)
  const [modalIsOpen, setIsOpen] = useState(false)

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler()
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <header>
      <nav
        className="flex top-0 h-20 w-full text-2xl 
      text-slate-800 bg-blue-400 dark:bg-blue-800 justify-between">
        <div
          className="flex flex-1 justify-between 
        items-center ml-10 mr-10">
          <Logo />
          <Search />
          <button
            type="button"
            className="bg-zinc-800 text-white dark:bg-zinc-200 
          dark:text-black rounded py-4 px-8"
            onClick={toggleThemeHandler}>
            {themeCtx.isDarkTheme ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={openModal}>
            <Menu />
          </button>
        </div>
      </nav>
      <ModalFromScratch modalIsOpen={modalIsOpen} closeModal={closeModal} contentLabel={"Example Modal"}></ModalFromScratch>
      {/* <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal} contentLabel={"Example Modal"} /> */}
    </header>
  )
}

export default Header