import { colorPaletteValue } from '@src/assets/colorPalette';
import { ColorPalette } from '@src/types';
import { randomRGB } from '@src/utils';
import { useRef } from 'react';
import Button from './common/Button';
import RandomButton from './common/RandomButton';

type BackgroundPickerProps = {
  setSelectedColor: (color: string) => void;
};

const colorPalette: ColorPalette[] = [
  'red',
  'blue',
  'yellow',
  'pink',
  'gray',
  'black',
  'white',
];

/**
 * @todo
 * gradient
 * color picker
 *
 */

export default function BackgroundPicker({
  setSelectedColor,
}: BackgroundPickerProps) {
  const colorBrightnessInputRef = useRef<HTMLInputElement>(null);

  const handleChangeColor = (c: string) => {
    setSelectedColor(c);
  };
  const handleChangeColorBrightness = () => {
    console.log(colorBrightnessInputRef.current?.value);
  };

  return (
    <div>
      <div>배경색</div>
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
      <RandomButton onClick={() => handleChangeColor(randomRGB())}>
        random
      </RandomButton>
    </div>
  );
}
