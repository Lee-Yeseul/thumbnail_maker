import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ModalContainerProps = { children: ReactNode };

function ModalContainer({ children }: ModalContainerProps) {
  return createPortal(<>{children}</>, document.getElementById('modal-root')!);
}

export default ModalContainer;
