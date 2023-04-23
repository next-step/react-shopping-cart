import { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  onClose: () => void;
};

const Backdrop = ({ onClose }: Props) => {
  return <div className="backdrop" onClick={onClose}></div>;
};

const ModalOverlay = ({ children }: PropsWithChildren) => {
  return <div className="modal">{children}</div>;
};

const portalElement = document.getElementById('overlay') as HTMLElement;

const Modal = ({ children, onClose }: PropsWithChildren<Props>) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
