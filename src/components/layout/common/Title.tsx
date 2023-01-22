import { ReactNode } from 'react';
import styled from 'styled-components';

type TitleProps = { children: ReactNode; variant: 'title' | 'subtitle' };

export default function Title({ children, ...props }: TitleProps) {
  return <StyledTitle {...props}>{children}</StyledTitle>;
}

type StyledTitleProps = {
  variant: 'title' | 'subtitle';
};
const StyledTitle = styled.div<StyledTitleProps>`
  margin: 12px;
  font-size: ${(props) => (props.variant === 'title' ? '36px' : '18px')};
`;
