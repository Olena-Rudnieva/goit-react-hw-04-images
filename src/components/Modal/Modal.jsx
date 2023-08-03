import { Component } from 'react';
import { Overlay, ModalPicture } from './Modal.styled';

export class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressEsc);
  }

  handlePressEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { closeModal, bigPicture } = this.props;
    return (
      <Overlay onClick={closeModal}>
        <ModalPicture>
          <img src={bigPicture} alt="" onClick={closeModal} />
        </ModalPicture>
      </Overlay>
    );
  }
}
