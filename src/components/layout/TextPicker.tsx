import { colorPaletteValue } from '@src/assets/colorPalette';
import { ColorPalette } from '@src/types';
import { useRef } from 'react';
import Button from './common/Button';

type BackgroundPickerProps = {
  setSelectedColor: (color: string) => void;
  setInputText: (text: string) => void;
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

export default function TextPicker({
  setSelectedColor,
  setInputText,
}: BackgroundPickerProps) {
  const textInputRef = useRef<HTMLInputElement>(null);
  const colorBrightnessInputRef = useRef<HTMLInputElement>(null);

  const handleChangeColor = (color: string) => {
    setSelectedColor(color);
  };
  const handleChangeColorBrightness = () => {
    console.log(colorBrightnessInputRef.current?.value);
  };

  const handleChangeTextInput = () => {
    setInputText(textInputRef.current?.value!);
  };

  return (
    <div>
      <div>글씨색</div>
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
      <div>
        <input ref={textInputRef} onChange={handleChangeTextInput} />
      </div>
    </div>
  );
}
