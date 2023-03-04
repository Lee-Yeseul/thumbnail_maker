import { useState } from 'react';
import styled from 'styled-components';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';

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

type ImageSearchModalProps = {
  onClose: () => void;
  setBackgroundImg: (url: string) => void;
};
/**
 * @todo
 * open image가 아닐 경우 html2canvas로 다운로드가 안됨
 * 해당 부분 에러 처리하기
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
    </Modal>
  );
}
