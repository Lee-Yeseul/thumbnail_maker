import { ReactNode } from 'react';
import styled from 'styled-components';

type ContainerProps = { children: ReactNode };

export default function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
