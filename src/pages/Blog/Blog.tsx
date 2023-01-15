import BackgroundPicker from '@src/components/layout/BackgroundPicker';
import Container from '@src/components/layout/common/Container';
import TextPicker from '@src/components/layout/TextPicker';
import { FontSize, FontStyle, FontWeight } from '@src/types';
import { useState } from 'react';
import styled from 'styled-components';

export default function Blog() {
  const [selectedTextColor, setSelectedTextColor] = useState<string>('black');
  const [selectedBackgroundColor, setSelectedBackgroundColor] =
    useState<string>('white');
  const [selectedFontWeight, setSelectedFontWeight] =
    useState<FontWeight>('normal');
  const [selectedFontStyle, setSelectedFontStyle] =
    useState<FontStyle>('normal');
  const [selectedFontSize, setSelectedFontSize] = useState<FontSize>('18px');

  const [inputText, setInputText] = useState<string>('안녕하세요');

  return (
    <Container>
      <div>Blog!</div>
      <PreviewPalette
        textColor={selectedTextColor}
        backgroundColor={selectedBackgroundColor}
        fontWeight={selectedFontWeight}
        fontStyle={selectedFontStyle}
        fontSize={selectedFontSize}
      >
        {inputText}
      </PreviewPalette>
      <BackgroundPicker
        setSelectedColor={(color: string) => setSelectedBackgroundColor(color)}
      />
      <TextPicker
        setSelectedColor={(color: string) => setSelectedTextColor(color)}
        setInputText={(text: string) => setInputText(text)}
      />
    </Container>
  );
}

type PreviewPaletteProps = {
  readonly backgroundColor: string;
  textColor: string;
  fontWeight?: string;
  fontSize?: string;
  fontStyle?: string;
};

const PreviewPalette = styled.div<PreviewPaletteProps>`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  font-style: ${(props) => props.fontStyle};
`;
