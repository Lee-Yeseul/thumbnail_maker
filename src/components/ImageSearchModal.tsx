import { useState } from 'react';
import styled from 'styled-components';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';

const { VITE_UNSPLASH_ACCESS_KEY } = import.meta.env;

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
export default function ImageSearchModal({
  onClose,
  setBackgroundImg,
}: ImageSearchModalProps) {
  const [img, setImg] = useState('');
  const [searchResults, setsearchResults] = useState([]);

  const url = `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${VITE_UNSPLASH_ACCESS_KEY}&orientation=landscape&per_page=20`;
  const fetchRequest = async () => {
    const response = await (await fetch(url)).json();
    const result = response.results;
    setsearchResults(result);
  };

  const handleSubmit = () => {
    fetchRequest();
  };

  const handleClickImg = (url: string) => {
    setBackgroundImg(url);
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
            placeholder="Searching your Background Image"
          />
          <Button type="submit" onClick={handleSubmit} variant="yellow">
            Search
          </Button>
        </div>
        <ImageContainer>
          {searchResults.map((val: any) => {
            return (
              <Image
                key={val.id}
                src={val.urls.thumb}
                alt={val.alt_description}
                onClick={() => handleClickImg(val.urls.regular)}
              />
            );
          })}
        </ImageContainer>
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

const ImageContainer = styled.div`
  margin: 12px 4px;
`;

const Image = styled.img`
  padding: 4px;
`;
