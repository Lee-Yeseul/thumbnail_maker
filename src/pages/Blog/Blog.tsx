import BackgroundPicker from '@src/components/layout/BackgroundPicker';
import Container from '@src/components/layout/common/Container';
import TextInput from '@src/components/layout/TextInput';
import TextColorPicker from '@src/components/layout/TextColorPicker';
import { FontSize, FontStyle, FontWeight } from '@src/types';
import { useState } from 'react';
import styled from 'styled-components';

/**
 * @todo
 * html2canvas
 * drag and drop
 * unsplash img download
 *
 */

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
      <Header>Thumbnail Maker!</Header>
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
      <TextColorPicker
        setSelectedColor={(color: string) => setSelectedTextColor(color)}
        setSelectedFontWeight={(weight: FontWeight) =>
          setSelectedFontWeight(weight)
        }
        setSelectedFontStyle={(style: FontStyle) => setSelectedFontStyle(style)}
        setSelectedFontSize={(size: FontSize) => setSelectedFontSize(size)}
      />
      <TextInput setInputText={(text: string) => setInputText(text)} />
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
  width: 640px;
  height: 360px;
  margin: 30px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  font-style: ${(props) => props.fontStyle};
`;

const Header = styled.h1`
  font-size: 32px;
  margin-top: 30px;
`;
