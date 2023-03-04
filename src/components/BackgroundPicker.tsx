import { useState } from 'react';
import styled from 'styled-components';
import { colorPaletteValue } from '@src/assets/colorPalette';
import { ReactComponent as SearchIcon } from '@src/assets/icon/search.svg';
import { ReactComponent as AddIcon } from '@src/assets/icon/add.svg';

import Button from '@components/common/Button';
import RandomButton from '@components/common/RandomButton';
import ImageSearchModal from '@components/ImageSearchModal';
import AddCustomImageModal from '@components/AddCustomImageModal';
import { ColorPalette } from '@src/types';
import randomRGB from '@src/utils';

const Container = styled.div`
  margin-bottom: 20px;
`;

type BackgroundType = 'color' | 'gradient';

type BackgroundPickerProps = {
  setSelectedColor: (
    type: BackgroundType,
    color1: string,
    color2?: string
  ) => void;
  setBackgroundImg: (url: string) => void;
};

const colorPalette: ColorPalette[] = ['black', 'white'];

/**
 * @todo
 * color picker
 */

export default function BackgroundPicker({
  setSelectedColor,
  setBackgroundImg,
}: BackgroundPickerProps) {
  const [isImageSearchModalOpen, setIsImageSearchModalOpen] = useState(false);
  const [isAddCustomImageModalOpen, setIsAddCustomImageModalOpen] =
    useState(false);

  const handleChangeColor = (c: string) => {
    setSelectedColor('color', c);
    setBackgroundImg('');
  };

  const handleChangeGradient = (c1: string, c2: string) => {
    setSelectedColor('gradient', c1, c2);
    setBackgroundImg('');
  };

  const handleClickSearchImg = () => {
    setIsImageSearchModalOpen(true);
  };

  const handleClickAddCustomImg = () => {
    setIsAddCustomImageModalOpen(true);
  };

  return (
    <Container>
      <div>Choose Your Background Image</div>
      {colorPalette.map((v) => {
        return (
          <Button
            variant={v}
            key={v}
            onClick={() => handleChangeColor(colorPaletteValue[v])}
          >
            {v}
          </Button>
        );
      })}
      <Button variant="primary" onClick={() => handleChangeColor(randomRGB())}>
        random
      </Button>
      <RandomButton
        onClick={() => handleChangeGradient(randomRGB(), randomRGB())}
      >
        random gradient
      </RandomButton>
      <Button variant="yellow" onClick={handleClickAddCustomImg}>
        <AddIcon width="18px" height="18px" fill="white" />
      </Button>
      {isAddCustomImageModalOpen && (
        <AddCustomImageModal
          onClose={() => setIsAddCustomImageModalOpen(false)}
          setBackgroundImg={(url: string) => setBackgroundImg(url)}
        />
      )}
      <Button variant="yellow" onClick={handleClickSearchImg}>
        <SearchIcon width="24px" height="18px" />
      </Button>
      {isImageSearchModalOpen && (
        <ImageSearchModal
          onClose={() => setIsImageSearchModalOpen(false)}
          setBackgroundImg={(url: string) => setBackgroundImg(url)}
        />
      )}
    </Container>
  );
}
