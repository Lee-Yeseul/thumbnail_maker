import { colorPaletteValue } from '@src/assets/colorPalette';
import { ColorPalette } from '@src/types';
import { randomRGB } from '@src/utils';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from './common/Button';
import RandomButton from './common/RandomButton';
import ImageSearchModal from './ImageSearchModal';

type BackgroundPickerProps = {
  setSelectedColor: (type: string, color1: string, color2?: string) => void;
  setBackgroundImg: (url: string) => void;
};

const colorPalette: ColorPalette[] = ['black', 'white'];

/**
 * @todo
 * gradient
 * color picker
 *
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
