import styled from 'styled-components';

import { coolGray } from '@carbon/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 21rem;

  flex-shrink: 0;
  align-items: center;

  padding: 1.25rem 1.5rem;

  margin-right: 1.5rem;
  margin-bottom: 1.5rem;

  border: 1px solid ${coolGray[20]};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const Type = styled.div`
  color: #0066cc;
`;
export const Title = styled.div`
  margin-top: 0.75rem;
`;

export const Price = styled.div`
  margin-top: 0.75rem;
  color: #0066cc;
`;

export const Description = styled.p`
  margin-top: 1.25rem;
  margin-bottom: 1.75rem;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.2rem;
  display: -webkit-box;
  line-clamp: 5;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;

  button {
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
`;
