import { colorPaletteValue } from '@src/assets/colorPalette';
import { ColorPalette } from '@src/types';
import { useRef } from 'react';
import Button from './common/Button';

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
      <input
        type="range"
        min="100"
        max="900"
        step="100"
        ref={colorBrightnessInputRef}
        onChange={handleChangeColorBrightness}
      />
      <label>밝기</label>
    </div>
  );
}
