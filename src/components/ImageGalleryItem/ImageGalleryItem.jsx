import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { GalleryItem, GalleryItemPicture } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallPicture, bigPicture }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPicture = () => {
    setIsOpen(true);
  };

  const closePicture = () => {
    setIsOpen(false);
  };

  return (
    <GalleryItem>
      <GalleryItemPicture src={smallPicture} alt="" onClick={openPicture} />
      {isOpen && <Modal bigPicture={bigPicture} closeModal={closePicture} />}
    </GalleryItem>
  );
};
