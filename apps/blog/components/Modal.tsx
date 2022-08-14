import Modal from "react-modal"
import Link from "next/link"

Modal.setAppElement("#__next")

type Props = {
  modalIsOpen: boolean
  closeModal: () => void
  contentLabel: string
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: "auto auto",
    height: "60%",
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
  },
}

const ModalComponent = (props: Props) => {
  const { modalIsOpen, closeModal, contentLabel } = props
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
      <ul className="h-3/4 w-3/4 bg-slate-300 text-center">
        <li>
          <Link href="/">Home Page</Link>
        </li>
        <li>
          <Link href="/practicepage">Practice Page</Link>
        </li>
        <li>
          <Link href="/masongrid">MasonGrid Page</Link>
        </li>
        <li>
          <Link href="/video">Video Page</Link>
        </li>
      </ul>
    </Modal>
  )
}

export default ModalComponent
