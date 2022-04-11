import styled from 'styled-components'

import { coolGray } from '@carbon/colors';


export const Wrapper = styled.div`
  width: 14rem;
  min-height: 12.5rem;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  padding: 1rem .75rem;

  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
 
  border: 1px solid ${coolGray[20]};
  
`;

export const IconContainer = styled.div`
  margin-bottom: .75rem;
`;
export const Details = styled.div`
  margin-bottom: 1.25rem;
`;
export const Description = styled.div`
  margin-bottom: 1rem;
  text-overflow: ellipsis; 
  overflow: hidden;
  line-height: 1.2rem ;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
 

`;
export const TagsContainer = styled.div`
  
 

`;