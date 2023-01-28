import { useState } from 'react';
import styled from 'styled-components';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';

type ImageSearchModalProps = {
  onClose: () => void;
  setBackgroundImg: (url: string) => void;
};
/**
 * @todo
 * fetch error boundary 추가하기
 * searchResults 배열이 비었을 때 보여줄 내용 추가하기
 * enter 클릭시 search 되도록
 * search debounce 추가하기
 *
 */
export default function AddCustomImageModal({
  onClose,
  setBackgroundImg,
}: ImageSearchModalProps) {
  const [img, setImg] = useState('');

  const handleSubmit = () => {
    setBackgroundImg(img);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <>
        <div>
          <StyledInput
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="Please enter a background image."
          />
          <Button type="submit" onClick={handleSubmit} variant="yellow">
            Search
          </Button>
        </div>
      </>
    </Modal>
  );
}

const StyledInput = styled.input`
  width: 400px;
  height: 32px;
  margin: 4px;
  font-size: 15px;
  border: 0;
  border-radius: 4px;
  outline: none;
  padding-left: 10px;
  background-color: #fef9c3;
`;
