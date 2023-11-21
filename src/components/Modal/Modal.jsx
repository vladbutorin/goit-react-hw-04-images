import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';

const Modal = ({ largeImageURL, tags, onClose }) => {
  const el = document.createElement('div');

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    const handleBackdropClick = event => {
      onClose();
    };

    document.body.appendChild(el);
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    el.addEventListener('click', handleBackdropClick);

    return () => {
      document.body.removeChild(el);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
      el.removeEventListener('click', handleBackdropClick);
    };
  }, [el, onClose]);

  return createPortal(
    <Overlay>
      <ModalWindow>
        <img src={largeImageURL} alt={tags} />
      </ModalWindow>
    </Overlay>,
    el
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;