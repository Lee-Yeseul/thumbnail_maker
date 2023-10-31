import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import { encodeFileToBase64 } from '@src/utils';

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
  const [previewImg, setPreviewImg] = useState('');

  const handleImgUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const imgURL = await encodeFileToBase64(e.target.files[0]);
    setPreviewImg(imgURL);
  };

  const handleSubmit = () => {
    setBackgroundImg(previewImg);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div>
        <StyledInput
          type="file"
          accept="image/*"
          onChange={(e) => handleImgUpload(e)}
          placeholder="Please enter a background image."
        />
        <Button type="submit" onClick={handleSubmit} variant="yellow">
          Search
        </Button>
      </div>
      <div>
        <img src={previewImg} />
      </div>
    </Modal>
  );
}
