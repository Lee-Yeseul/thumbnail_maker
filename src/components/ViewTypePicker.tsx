import styled from 'styled-components';
import Button from './common/Button';
import { ViewType } from '@src/types';

type ViewTypePicker = {
  viewType: ViewType;
  setViewType: (viewType: ViewType) => void;
};
export default function ViewTypePicker({
  viewType,
  setViewType,
}: ViewTypePicker) {
  const handleChangeViewType = () => {
    if (viewType === 'notion') {
      setViewType('blog');
    }
    if (viewType === 'blog') {
      setViewType('notion');
    }
  };
  return (
    <Container>
      <Button variant="yellow" onClick={handleChangeViewType}>
        {`For ${viewType === 'blog' ? 'notion' : 'blog'}`}
      </Button>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 20px;
`;
