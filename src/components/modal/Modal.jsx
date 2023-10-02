import React, { useEffect } from 'react';
import { Overlay, ModalStyled } from './Modal.styled';

export const Modal = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    // const handleOverlayClick = (evt) => {
    //   if (evt.target) {
    //     onClose();
    //   }
    // };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <Overlay>
      <div className="Overlay" onClick={onClose}>
        <ModalStyled>
          <div className="Modal">
            <img src={src} alt={alt} className="img-modal" />
          </div>
        </ModalStyled>
      </div>
    </Overlay>
  );
};

 
