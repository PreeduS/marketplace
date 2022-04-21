import styled from 'styled-components'

import { coolGray } from '@carbon/colors';


export const Wrapper = styled.div`
  display: inline-flex;
  min-width: 8rem;
  max-width: 20rem;
  height: 4rem;
 
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
 
  padding: 1rem 1rem;

  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
 
  border: 1px solid ${coolGray[20]};
  cursor: pointer;

 
  
`;
 


export const IconContainer = styled.div`
  margin-left: .75rem; 

  
`;
 