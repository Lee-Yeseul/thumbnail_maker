import { colorPaletteValue } from '@src/assets/colorPalette';
import { ColorPalette, FontSize, FontStyle, FontWeight } from '@src/types';
import { randomRGB } from '@src/utils';
import { useRef } from 'react';
import Button from './common/Button';

type BackgroundPickerProps = {
  setSelectedColor: (color: string) => void;
  setSelectedFontWeight: (weight: FontWeight) => void;
  setSelectedFontStyle: (style: FontStyle) => void;
  setSelectedFontSize: (size: FontSize) => void;
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
 * - FontStyle
 * - FontWeight
 * - FontSize
 * - 위치
 *
 */

export default function TextColorPicker({
  setSelectedColor,
  setSelectedFontWeight,
  setSelectedFontStyle,
  setSelectedFontSize,
}: BackgroundPickerProps) {
  const colorBrightnessInputRef = useRef<HTMLInputElement>(null);

  const handleChangeColor = (color: string) => {
    setSelectedColor(color);
  };
  const handleChangeColorBrightness = () => {
    console.log(colorBrightnessInputRef.current?.value);
  };

  return (
    <div>
      <div>글씨색</div>
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
        <Button
          variant={'black'}
          onClick={() => handleChangeColor(randomRGB())}
        >
          random
        </Button>
      </div>
    </div>
  );
}
