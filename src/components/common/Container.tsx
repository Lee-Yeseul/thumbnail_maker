import { ReactNode } from 'react';
import styled from 'styled-components';

type ContainerProps = { children: ReactNode };

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
