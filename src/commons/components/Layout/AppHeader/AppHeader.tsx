import { Header, HeaderName } from 'carbon-components-react';
import { Wrapper } from './AppHeader.styled';
import { useNavigate } from 'react-router-dom';

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <Header>
      <Wrapper onClick={() => navigate(`/`)}>
        <HeaderName prefix='IBM'>Quantum</HeaderName>
      </Wrapper>
    </Header>
  );
};

export default AppHeader;
