import React from 'react';
import {
  Wrapper,
  Content,
  Type,
  Title,
  Price,
  Description,
  ButtonContainer,
} from './Pricing.styled';

import { Button } from 'carbon-components-react';
import Typography from 'src/commons/components/Typography';

type Props = {
  type: string;
  title: string;
  price: string | null;
};

const Pricing = ({ type, title, price }: Props) => {
  return (
    <Wrapper>
      <Content>
        <Type>
          <Typography as='h5'>{type}</Typography>
        </Type>
        <Title>
          <Typography as='h5'>{title}</Typography>
        </Title>

        <Price>
          <Typography as='h5'>
            {' '}
            {price === null ? 'Free' : <>{price} &#36;</>}
          </Typography>
        </Price>
        <Description>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis
          voluptas assumenda est, omnis dolor repellendus. Temporibus autem
          quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates
        </Description>
      </Content>

      <ButtonContainer>
        <Button kind='tertiary'>Select</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Pricing;
