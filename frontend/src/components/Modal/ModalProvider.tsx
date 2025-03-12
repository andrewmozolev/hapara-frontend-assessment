import { createContext, useCallback, useState } from 'react'
import ModalWrapper from './ModalWrapper'

type ModalStack = React.ReactNode[]

export interface ModalContextType {
  currentModal?: React.ReactNode
  modalStack: ModalStack
  openModal: (config: React.ReactNode) => void
  closeModal: () => void
  closeAllModals: () => void
}

interface Props extends React.PropsWithChildren<{}> {}

export const ModalContext = createContext<ModalContextType>({
  currentModal: undefined,
  modalStack: [],
  openModal: () => {},
  closeModal: () => {},
  closeAllModals: () => {},
})

export default function ModalProvider({ children }: Props) {
  const [modalStack, setModalStack] = useState<ModalStack>([])
  const currentModal = modalStack.length > 0 ? modalStack[modalStack.length - 1] : null

  const openModal = useCallback(
    (modal: React.ReactNode) => {
      setModalStack((prevStack) => [...prevStack, modal])
    },
    [modalStack]
  )

  const closeModal = useCallback(() => {
    setModalStack((prevStack) => prevStack.slice(0, -1))
  }, [modalStack])

  const closeAllModals = useCallback(() => {
    setModalStack([])
  }, [])

  return (
    <ModalContext.Provider
      value={{
        currentModal,
        modalStack,
        openModal,
        closeModal,
        closeAllModals,
      }}
    >
      {children}
      {currentModal && <ModalWrapper>{currentModal}</ModalWrapper>}
    </ModalContext.Provider>
  )
}
