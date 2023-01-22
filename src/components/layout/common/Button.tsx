import { ColorPalette } from '@src/types';
import { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
  variant: ColorPalette;
  onClick: () => void;
  type?: 'submit' | 'button' | 'reset';
};
export default function Button({ children, ...props }: ButtonProps) {
  return <StyleBtn {...props}>{children}</StyleBtn>;
}

type StyledBtnProps = {
  readonly variant: ColorPalette;
};
const backgroundColor = {
  red: '#ef4444',
  blue: '#3b82f6',
  yellow: '#fde047',
  pink: '#f472b6',
  gray: '#6b7280',
  black: '#27272a',
  white: '#ffffff',
};
const hoverBackgroundColor = {
  red: '#b91c1c',
  blue: '#1d4ed8',
  yellow: '#eab308',
  pink: '#ec4899',
  gray: '#374151',
  black: '#000000',
  white: '#f4f4f5',
};
const StyleBtn = styled.button<StyledBtnProps>`
  padding: 8px 12px;
  margin: 6px 12px 6px 0;
  border-radius: 4px;
  font-size: 1rem;
  text-transform: uppercase;
  border: ${(props) => (props.variant === 'white' ? 'solid' : 'none')};
  color: ${(props) => (props.variant === 'white' ? 'black' : 'white')};
  background-color: ${(props) => backgroundColor[props.variant]};
  &:hover {
    cursor: pointer;
    color: ${(props) => (props.variant === 'white' ? 'black' : 'white')};
    background-color: ${(props) => hoverBackgroundColor[props.variant]};
  }
`;
