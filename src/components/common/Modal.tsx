import { ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '@src/assets/icon/close.svg';
import ModalContainer from '@components/common/ModalContainer';
import useOutSideClick from '@src/hooks/useOutSideClick';

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ onClose, children }: ModalProps) {
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  useOutSideClick(modalRef, handleClose);

  useEffect(() => {
    const $body = document.querySelector('body');
    if ($body !== null) {
      const { overflow } = $body.style;
      $body.style.overflow = 'hidden';
      return () => {
        $body.style.overflow = overflow;
      };
    }
  }, []);

  return (
    <ModalContainer>
      <Overlay>
        <ModalWrapper ref={modalRef}>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <ContentsWrapper>
            <Contents>{children}</Contents>
          </ContentsWrapper>
        </ModalWrapper>
      </Overlay>
    </ModalContainer>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrapper = styled.div`
  width: 700px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`;

const ContentsWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

const Contents = styled.div`
  height: 80%;
  width: 80%;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
`;
