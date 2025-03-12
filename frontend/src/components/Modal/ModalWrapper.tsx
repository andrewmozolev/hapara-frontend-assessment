import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModal } from 'helpers/hooks/useModal';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Props extends React.PropsWithChildren<{}> {}

function ModalWrapper({ children }: Props) {
  const { closeModal } = useModal();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeModal]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <div
      className={'fixed top-0 right-0 bottom-0 left-0 z-10 flex items-center justify-center bg-gray-500/75'}
      onClick={handleBackdropClick}
    >
      <div
        className={
          'elative absolute flex max-h-screen w-[780px] max-w-full transform flex-col overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:data-closed:translate-y-0 sm:data-closed:scale-95'
        }
        style={{ boxShadow: '-15px 4px 28px 0px rgba(0, 0, 0, 0.08)' }}
      >
        <div
          className="absolute top-2 right-2 cursor-pointer text-2xl text-gray-900 hover:text-violet-700"
          onClick={closeModal}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal')!
  );
}

export default ModalWrapper;
