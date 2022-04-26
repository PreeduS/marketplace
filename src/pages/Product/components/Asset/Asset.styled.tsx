import styled from 'styled-components';
import { coolGray } from '@carbon/colors';

type Props = {
  imageUrl?: string;
};

export const Wrapper = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32rem;
  height: 17rem;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  border: 1px solid ${coolGray[20]};

  background-color: ${coolGray[90]};
  ${props => props.imageUrl && `background: url(${props.imageUrl});`}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;

  cursor: pointer;
  color: white;
  //box-shadow: inset 0 0 20px ${coolGray[10]};
  //border-radius: 10px;
`;
