import styled from 'styled-components'

import { coolGray } from '@carbon/colors';


export const Wrapper = styled.div`
  position: relative;
  width: 17rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  border-right: 1px solid ${coolGray[20]};
`;
export const Content = styled.div`
  //position:sticky;
  //top: 4rem;
 
`;


export const Header = styled.h4<{marginTop?: string}>`
  margin-top: ${props => props.marginTop || 0};
`