import { colorPaletteValue } from '@src/assets/colorPalette';
import { ColorPalette, FontSize, FontStyle, FontWeight } from '@src/types';
import { randomRGB } from '@src/utils';
import { useRef } from 'react';
import styled from 'styled-components';
import Button from './common/Button';

type BackgroundPickerProps = {
  setSelectedColor: (color: string) => void;
};

const colorPalette: ColorPalette[] = ['black', 'white'];

/**
 * @todo
 * - FontStyle
 * - FontWeight
 * - FontSize
 * - 위치
 *
 */

export default function TextColorPicker({
  setSelectedColor,
}: BackgroundPickerProps) {
  const handleChangeColor = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <Container>
      <div>Choose Your Text Color</div>
      <div>
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
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 20px;
`;
