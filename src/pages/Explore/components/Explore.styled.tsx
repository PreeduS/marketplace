import styled from 'styled-components';

import { coolGray } from '@carbon/colors';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding-top: 3rem;

  //border-right: 1px solid ${coolGray[20]};
`;

export const Content = styled.div`
  padding: 2rem 3rem;
`;

export const Description = styled.p`
  display: flex;
  margin: 1rem 0;
`;
export const BoxItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;
