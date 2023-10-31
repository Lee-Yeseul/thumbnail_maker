import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import { encodeFileToBase64 } from '@src/utils';

const Input = styled.input`
  display: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgPreview = styled.label`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: lightgray;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    background: gray;
    transition: 0.5s;
  }
`;

type ImageSearchModalProps = {
  onClose: () => void;
  setBackgroundImg: (url: string) => void;
};

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
    <Modal onClose={onClose} width="420px">
      <Container>
        <ImgPreview htmlFor="img-picker">
          <Input
            id="img-picker"
            type="file"
            accept="image/*"
            onChange={(e) => handleImgUpload(e)}
          />
          {previewImg ? (
            <img src={previewImg} width="300" />
          ) : (
            <div>choose your image</div>
          )}
        </ImgPreview>
        <Button
          type="submit"
          onClick={handleSubmit}
          variant="yellow"
          width="300px"
        >
          update
        </Button>
      </Container>
    </Modal>
  );
}
