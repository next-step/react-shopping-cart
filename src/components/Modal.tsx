import { useEffect } from 'react';
import styled from 'styled-components';

interface ModalProps {
  handleToggleModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ handleToggleModal, children }: ModalProps) => {
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <ModalContainer>
      <ModalBackground onClick={handleToggleModal}></ModalBackground>
      <ModalBody
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <ModalCloseButton type={'button'} onClick={handleToggleModal}>
          ✖
        </ModalCloseButton>
        {children}
      </ModalBody>
    </ModalContainer>
  );
};

export default Modal;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: 'flex';
  justify-content: center;
`;

export const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  width: max-content;
  min-width: 400px;
  height: max-content;
  min-height: 100px;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  transform: translateX(-50%) translateY(-50%);
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
