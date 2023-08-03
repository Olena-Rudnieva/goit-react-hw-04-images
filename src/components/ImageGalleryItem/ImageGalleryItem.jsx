import { Component } from 'react';
import { Modal } from '../Modal/Modal';
import { GalleryItem, GalleryItemPicture } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  openPicture = () => {
    this.setState({ isOpen: true });
  };

  closePicture = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { smallPicture, bigPicture } = this.props;
    return (
      <GalleryItem>
        <GalleryItemPicture
          src={smallPicture}
          alt=""
          onClick={this.openPicture}
        />
        {this.state.isOpen && (
          <Modal bigPicture={bigPicture} closeModal={this.closePicture} />
        )}
      </GalleryItem>
    );
  }
}
