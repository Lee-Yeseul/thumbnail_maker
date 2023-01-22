import BackgroundPicker from '@src/components/layout/BackgroundPicker';
import Container from '@src/components/layout/common/Container';
import TextInput from '@src/components/layout/TextInput';
import TextColorPicker from '@src/components/layout/TextColorPicker';
import { FontSize, FontStyle, FontWeight } from '@src/types';
import { useState } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import Title from '@src/components/layout/common/Title';
import ImageSearch from '@src/components/layout/ImageSearch';

/**
 * @todo
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

  const [inputText, setInputText] = useState<string>(
    'Please enter your title.'
  );
  const [subtitle, setSubtitle] = useState<string>(
    'Please enter your subtitle.'
  );

  const handleSaveImg = () => {
    const capture: HTMLElement | null = document.querySelector('#capture');
    if (capture !== null) {
      html2canvas(capture).then((canvas) =>
        saveCaptureImg(canvas.toDataURL('image/jpg'), '이미지.jpg')
      );
    }
  };

  const saveCaptureImg = (uri: string, filename: string) => {
    let link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  };

  return (
    <Container>
      <Header>Thumbnail Maker!</Header>
      <PreviewPalette
        id="capture"
        textColor={selectedTextColor}
        backgroundColor={selectedBackgroundColor}
        fontWeight={selectedFontWeight}
        fontStyle={selectedFontStyle}
        fontSize={selectedFontSize}
      >
        <Title variant="title">{inputText}</Title>
        <Title variant="subTitle">{subtitle}</Title>
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
      <TextInput
        setInputText={(text: string) => setInputText(text)}
        setSubtitle={(text: string) => setSubtitle(text)}
      />
      <button onClick={handleSaveImg}>캡쳐!</button>
      <ImageSearch />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 32px;
  margin-top: 30px;
`;
