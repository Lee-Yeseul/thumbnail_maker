import styled from 'styled-components';
import { ViewType } from '@src/types';
import Button from './common/Button';

const Container = styled.div`
  margin-bottom: 20px;
`;

type ViewTypePickerParams = {
  viewType: ViewType;
  setViewType: (viewType: ViewType) => void;
};
export default function ViewTypePicker({
  viewType,
  setViewType,
}: ViewTypePickerParams) {
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
