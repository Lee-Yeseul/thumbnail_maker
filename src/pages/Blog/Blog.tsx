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
import Button from '@src/components/layout/common/Button';
import ImageSearchModal from '@src/components/layout/ImageSearchModal';

/**
 * @todo
 * drag and drop
 * unsplash img download
 * => potal로 modal 만들어서 그 안에서 unsplash img 검색하고 선택한 이미지 url을 background image로 적용하기
 * color picker로 바꾸기
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
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

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
        <Title variant="subtitle">{subtitle}</Title>
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
      <Button variant="blue" onClick={onClickButton}>
        Click Me !
      </Button>
      {isOpen && <ImageSearchModal onClose={() => setIsOpen(false)} />}
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
