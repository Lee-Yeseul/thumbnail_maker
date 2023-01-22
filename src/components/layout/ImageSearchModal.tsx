import Modal from './common/Modal';

type ImageSearchModalProps = {
  onClose: () => void;
};
export default function ImageSearchModal({ onClose }: ImageSearchModalProps) {
  return <Modal onClose={onClose}>안녕하세용</Modal>;
}
