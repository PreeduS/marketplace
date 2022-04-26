import React from 'react';
import { Wrapper, IconContainer } from './BoxLink.styled';
import { Link20 } from '@carbon/icons-react';

type Props = {
  url: string;
  label: React.ReactNode;
};

const BoxLink = ({ url, label }: Props) => {
  const clickHandler = () => {
    window.open(url, '_blank');
  };

  return (
    <Wrapper onClick={clickHandler}>
      {label}
      <IconContainer>
        <Link20 />
      </IconContainer>
    </Wrapper>
  );
};

export default BoxLink;
