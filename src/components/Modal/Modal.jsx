import { useEffect } from 'react';
import { Overlay, ModalPicture } from './Modal.styled';

export const Modal = ({ closeModal, bigPicture }) => {
  useEffect(() => {
    const handlePressEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handlePressEsc);
    return () => {
      window.removeEventListener('keydown', handlePressEsc);
    };
  }, [closeModal]);

  return (
    <Overlay onClick={closeModal}>
      <ModalPicture>
        <img src={bigPicture} alt="" onClick={closeModal} />
      </ModalPicture>
    </Overlay>
  );
};
