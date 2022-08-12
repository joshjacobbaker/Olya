import React, { useContext, useState } from "react"
import Modal from "react-modal"
import { Search, Menu, Logo } from "ui"
import MyThemeContext from "../store/myThemeContext"
import { FaSun, FaMoon } from "react-icons/fa"

type Props = {}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

Modal.setAppElement("#__next")

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
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal"></Modal>
    </header>
  )
}

export default Header
