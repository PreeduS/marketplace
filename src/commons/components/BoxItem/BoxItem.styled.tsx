import styled from 'styled-components';

import { coolGray } from '@carbon/colors';

export const Wrapper = styled.div<{ disabled?: boolean }>`
  //width: 14.5rem;
  width: 17rem;
  min-height: 12.5rem;
  min-height: 19.5rem;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  padding: 1rem 0.75rem;

  margin-right: 1.5rem;
  margin-bottom: 1.5rem;

  //border: 1px solid ${coolGray[20]};
  background: #f4f4f4;

  ${props =>
    props.disabled &&
    `
    opacity: .7;
    cursor: default;
  `}
`;

export const IconContainer = styled.div`
  margin-bottom: 0.75rem;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`;

export const Details = styled.div`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  white-space: nowrap;
  min-height: 1.25rem;
`;
export const Description = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.2rem;
  display: -webkit-box;
  line-clamp: 4;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
export const TagsContainer = styled.div`
  height: 4rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
`;
