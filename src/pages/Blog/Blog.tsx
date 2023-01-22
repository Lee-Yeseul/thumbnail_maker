import BackgroundPicker from '@src/components/layout/BackgroundPicker';
import Container from '@src/components/layout/common/Container';
import TextInput from '@src/components/layout/TextInput';
import TextColorPicker from '@src/components/layout/TextColorPicker';
import { useState } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import Title from '@src/components/layout/common/Title';
import Button from '@src/components/layout/common/Button';

export default function Blog() {
  const [selectedTextColor, setSelectedTextColor] = useState<string>('white');
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState<
    string[]
  >(['black']);

  const [inputText, setInputText] = useState<string>(
    'Please enter your title.'
  );
  const [subtitle, setSubtitle] = useState<string>(
    'Please enter your subtitle.'
  );

  const [backgroundImg, setBackgroundImg] = useState<string>('');

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

  const handleReset = () => {
    setSelectedTextColor('white');
    setSelectedBackgroundColor(['black']);
    setInputText('Please enter your title.');
    setSubtitle('Please enter your subtitle.');
    setBackgroundImg('');
  };

  return (
    <Container>
      <Header>Thumbnail Maker!</Header>
      <PreviewPalette
        id="capture"
        textColor={selectedTextColor}
        backgroundColor={selectedBackgroundColor}
        backgroundImage={backgroundImg}
      >
        <Title variant="title">{inputText}</Title>
        <Title variant="subtitle">{subtitle}</Title>
      </PreviewPalette>
      <div>
        <BackgroundPicker
          setBackgroundImg={(url: string) => setBackgroundImg(url)}
          setSelectedColor={(type: string, color1: string, color2?: string) => {
            if (type === 'color') {
              setSelectedBackgroundColor([color1]);
            }
            if (type === 'gradient') {
              setSelectedBackgroundColor([color1, color2!]);
            }
          }}
        />
        <TextColorPicker
          setSelectedColor={(color: string) => setSelectedTextColor(color)}
        />
        <TextInput
          setInputText={(text: string) => setInputText(text)}
          setSubtitle={(text: string) => setSubtitle(text)}
        />
      </div>
      <div>
        <Button onClick={handleReset} variant="blue">
          Reset
        </Button>
        <Button onClick={handleSaveImg} variant={'blue'}>
          Image download
        </Button>
      </div>
    </Container>
  );
}

type PreviewPaletteProps = {
  readonly backgroundColor: string[];
  readonly backgroundImage: string;
  gradientColor?: string[];
  textColor: string;
  fontWeight?: string;
  fontSize?: string;
  fontStyle?: string;
};

const PreviewPalette = styled.div<PreviewPaletteProps>`
  width: 640px;
  height: 360px;
  margin: 30px;
  background-color: ${(props) => props.backgroundColor[0]};
  background-image: url(${(props) => props.backgroundImage});
  background: linear-gradient(
    to bottom right,
    ${(props) =>
      props.backgroundColor?.length === 2 ? props.backgroundColor[0] : null},
    ${(props) =>
      props.backgroundColor?.length === 2 ? props.backgroundColor[1] : null}
  );

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
  font-weight: 700;
  text-shadow: 0px 1px 1.5px rgba(0, 0, 0, 0.2);
`;
