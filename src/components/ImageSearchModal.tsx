import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';

const { VITE_UNSPLASH_ACCESS_KEY } = import.meta.env;

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

type ImageSearchModalProps = {
  onClose: () => void;
  setBackgroundImg: (url: string) => void;
};

type ImageValue = {
  id: string;
  urls: {
    thumb: string;
    regular: string;
  };
  alt_description: string;
};

type UnsplashResponse = {
  results: any[];
  total_pages: number;
};
/**
 * @todo
 * fetch error boundary 추가하기
 * searchResults 배열이 비었을 때 보여줄 내용 추가하기
 *
 */
export default function ImageSearchModal({
  onClose,
  setBackgroundImg,
}: ImageSearchModalProps) {
  const imgRef = useRef<HTMLInputElement>(null);
  const [searchResults, setsearchResults] = useState<any[]>([]);
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    totalPage: 1,
  });

  const [loading, isLoading] = useState(false);
  const [target, setTarget] = useState<Element | null>(null);

  const fetchImage = async () => {
    isLoading(true);
    try {
      if (!imgRef.current || !imgRef.current.value) return;

      const response: UnsplashResponse = await (
        await fetch(
          `https://api.unsplash.com/search/photos?query=${imgRef.current.value}&client_id=${VITE_UNSPLASH_ACCESS_KEY}&page=${pageInfo.page}&per_page=20`
        )
      ).json();
      const { results, total_pages: totalPage } = response;
      setsearchResults((prev) => [...prev, ...results]);
      setPageInfo((prev) => ({
        ...prev,
        totalPage,
      }));
    } catch (err) {
      console.log(err);
    } finally {
      isLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchImage();
  };

  const handleClickImg = (imgUrl: string) => {
    setBackgroundImg(imgUrl);
    onClose();
  };

  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setPageInfo((prev) => {
          if (prev.totalPage > prev.page) {
            return {
              ...prev,
              page: prev.page + 1,
            };
          }
          return prev;
        });
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5,
      root: document.getElementById('scrollRoot'),
    });
    if (target) observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersect, target]);

  useEffect(() => {
    fetchImage();
  }, [pageInfo.page]);

  return (
    <Modal onClose={onClose}>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <StyledInput
            type="text"
            ref={imgRef}
            placeholder="Search your Background Image"
          />
          <Button type="submit" variant="yellow">
            Search
          </Button>
        </form>
        <ImageContainer>
          {searchResults
            ? searchResults.map((val: ImageValue, i) => {
                return (
                  <Image
                    key={val.id}
                    src={val.urls.thumb}
                    alt={val.alt_description}
                    onClick={() => handleClickImg(val.urls.regular)}
                    ref={searchResults.length - 1 === i ? setTarget : null}
                  />
                );
              })
            : 'No Result'}
          {loading && 'Loading...'}
        </ImageContainer>
      </div>
    </Modal>
  );
}
