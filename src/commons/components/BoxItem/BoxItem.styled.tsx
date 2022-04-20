import styled from 'styled-components'

import { coolGray } from '@carbon/colors';


export const Wrapper = styled.div<{disabled?: boolean}>`
  width: 14.5rem;
  min-height: 12.5rem;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  padding: 1rem .75rem;

  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
 
  border: 1px solid ${coolGray[20]};

  ${props => props.disabled && `
    opacity: .7;
    cursor: default;
  `}
  
`;

export const IconContainer = styled.div`
  margin-bottom: .75rem;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex:1;
`;

export const Details = styled.div`
  margin-bottom: 1rem;
  font-size: .9rem;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  white-space: nowrap;
  min-height:1.25rem;

 
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
