import { ModalContext, ModalContextType } from 'components/Modal/ModalProvider';
import { useContext } from 'react';

export const useModal = (): ModalContextType => {
  const context = useContext<ModalContextType>(ModalContext);
  return context;
};
