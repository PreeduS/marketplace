import styled from 'styled-components';

export const Wrapper = styled.div<{
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
}>`
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || 0};
  margin-left: ${props => props.marginLeft || 0};

  ${props => props.onClick !== undefined && 'cursor: pointer;'}
`;
