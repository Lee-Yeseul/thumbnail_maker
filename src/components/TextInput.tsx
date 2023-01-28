import { useRef } from 'react';
import styled from 'styled-components';

type TextInputProps = {
  setTitle: (text: string) => void;
  setSubtitle: (text: string) => void;
};
export default function TextInput({ setTitle, setSubtitle }: TextInputProps) {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const subtitleInputRef = useRef<HTMLInputElement>(null);

  const handleChangeTextInput = () => {
    setTitle(titleInputRef.current?.value!);
  };

  const handleChangesubTitleInput = () => {
    setSubtitle(subtitleInputRef.current?.value!);
  };
  return (
    <Container>
      <StyledInput
        ref={titleInputRef}
        onChange={handleChangeTextInput}
        id="title"
        placeholder="Please enter your title."
      />
      <StyledInput
        ref={subtitleInputRef}
        onChange={handleChangesubTitleInput}
        id="subtitle"
        placeholder="Please enter your subtitle."
      />
    </Container>
  );
}

const StyledInput = styled.input`
  width: 200px;
  height: 32px;
  margin: 4px 12px 4px 0;
  font-size: 15px;
  border: 0;
  border-radius: 4px;
  outline: none;
  padding-left: 10px;
  background-color: #ede9fe;
`;

const Container = styled.div`
  margin-bottom: 20px;
`;
