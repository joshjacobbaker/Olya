import Modal from "react-modal"
import Link from "next/link"

Modal.setAppElement("#__next")

type Props = {
  modalIsOpen: boolean
  closeModal: () => void
  customStyles: Object
  contentLabel: string
}

const ModalComponent = (props: Props) => {
  const { modalIsOpen, closeModal, customStyles, contentLabel } = props
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
      <ul>
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
