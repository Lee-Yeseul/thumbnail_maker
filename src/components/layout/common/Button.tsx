import { ColorPalette } from '@src/types';
import { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
  variant: ColorPalette;
  onClick: () => void;
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
  pink: '#ec4899',
  gray: '#6b7280',
  black: '#27272a',
  white: '#ffffff',
};
const hoverBackgroundColor = {
  red: '#b91c1c',
  blue: '#1d4ed8',
  yellow: '#eab308',
  pink: '#be185d',
  gray: '#374151',
  black: '#000000',
  white: '#f4f4f5',
};
const StyleBtn = styled.button<StyledBtnProps>`
  padding: 6px 12px;
  margin: 6px 12px;
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
