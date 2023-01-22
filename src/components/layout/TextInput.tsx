import { useRef } from 'react';

type TextInputProps = {
  setInputText: (text: string) => void;
};
export default function TextInput({ setInputText }: TextInputProps) {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleChangeTextInput = () => {
    setInputText(textInputRef.current?.value!);
  };
  return (
    <div>
      <input ref={textInputRef} onChange={handleChangeTextInput} />
    </div>
  );
}
