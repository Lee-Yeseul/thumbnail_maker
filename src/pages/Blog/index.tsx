import { useState } from 'react';
import html2canvas from 'html2canvas';
import styled from 'styled-components';
import BackgroundPicker from '@components/BackgroundPicker';
import Container from '@components/common/Container';
import TextInput from '@components/TextInput';
import TextColorPicker from '@components/TextColorPicker';
import Title from '@components/common/Title';
import Button from '@components/common/Button';
import ViewTypePicker from '@src/components/ViewTypePicker';
import { ViewType } from '@src/types';

const INITIAL_TITLE = 'Please enter your title.';
const INITIAL_SUBTITLE = 'Please enter your subtitle.';
const INITIAL_BACKGROUND_COLOR = 'black';
const INITIAL_TEXT_COLOR = 'white';

export default function Blog() {
  const [selectedTextColor, setSelectedTextColor] =
    useState(INITIAL_TEXT_COLOR);
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState([
    INITIAL_BACKGROUND_COLOR,
  ]);
  const [title, setTitle] = useState(INITIAL_TITLE);
  const [subtitle, setSubtitle] = useState(INITIAL_SUBTITLE);
  const [backgroundImg, setBackgroundImg] = useState<string>('');
  const [viewType, setViewType] = useState<ViewType>('notion');

  const handleSaveImg = () => {
    const capture: HTMLElement | null = document.querySelector('#capture');
    if (capture !== null) {
      html2canvas(capture).then((canvas) =>
        saveCaptureImg(canvas.toDataURL('image/jpg'), '이미지.jpg')
      );
    }
  };

  const saveCaptureImg = (uri: string, filename: string) => {
    const link = document.createElement('a');
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
    setSelectedTextColor(INITIAL_TEXT_COLOR);
    setSelectedBackgroundColor([INITIAL_BACKGROUND_COLOR]);
    setTitle(INITIAL_TITLE);
    setSubtitle(INITIAL_SUBTITLE);
    setBackgroundImg('');
  };

  return (
    <Container>
      <H1>Thumbnail Maker!</H1>
      <PreviewPalette
        id="capture"
        viewType={viewType}
        textColor={selectedTextColor}
        backgroundColor={selectedBackgroundColor}
        backgroundImage={backgroundImg}
      >
        <Title variant="title">{title}</Title>
        <Title variant="subtitle">{subtitle}</Title>
      </PreviewPalette>
      <div>
        <ViewTypePicker
          viewType={viewType}
          setViewType={(type: ViewType) => setViewType(type)}
        />
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
          setTitle={(text: string) => setTitle(text)}
          setSubtitle={(text: string) => setSubtitle(text)}
        />
      </div>
      <div>
        <Button onClick={handleReset} variant="light">
          Reset
        </Button>
        <Button onClick={handleSaveImg} variant="dark">
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
  viewType: ViewType;
};

const PreviewPalette = styled.div<PreviewPaletteProps>`
  /* width: 640px; */
  width: ${(props) => (props.viewType === 'blog' ? '640px' : '1000px')};
  height: 360px;
  margin-bottom: 15px;
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

const H1 = styled.h1`
  font-size: 32px;
  margin: 30px 0 15px 0;
  font-weight: 700;
  text-shadow: 2px 2px 4px #fef08a;
  color: #8b5cf6;
`;
