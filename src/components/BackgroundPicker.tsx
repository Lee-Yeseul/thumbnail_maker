import { useState } from 'react';
import styled from 'styled-components';
import { colorPaletteValue } from '@src/assets/colorPalette';
import Button from '@components/common/Button';
import RandomButton from '@components/common/RandomButton';
import ImageSearchModal from '@components/ImageSearchModal';
import { ColorPalette } from '@src/types';
import { randomRGB } from '@src/utils';

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
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };

  const handleChangeColor = (c: string) => {
    setSelectedColor('color', c);
  };

  const handleChangeGradient = (c1: string, c2: string) => {
    setSelectedColor('gradient', c1, c2);
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
      <Button variant={'blue'} onClick={() => handleChangeColor(randomRGB())}>
        random
      </Button>
      <RandomButton
        onClick={() => handleChangeGradient(randomRGB(), randomRGB())}
      >
        random gradient
      </RandomButton>
      <Button variant="blue" onClick={onClickButton}>
        Search Image
      </Button>
      {isOpen && (
        <ImageSearchModal
          onClose={() => setIsOpen(false)}
          setBackgroundImg={(url: string) => setBackgroundImg(url)}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 20px;
`;
