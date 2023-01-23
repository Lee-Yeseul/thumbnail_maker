import { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export default function RandomButton({ children, ...props }: ButtonProps) {
  return <StyledRandomBtn {...props}>{children}</StyledRandomBtn>;
}

export const StyledRandomBtn = styled.button`
  padding: 8px 12px;
  margin: 6px 12px;
  border-radius: 4px;
  font-size: 1rem;
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  color: white;
  border: 0;
  background-image: linear-gradient(
    to right,
    #3b82f6 0%,
    #a6c1ee 51%,
    #3b82f6 100%
  );
  &:hover {
    cursor: pointer;
    background-position: right center;
  }
`;