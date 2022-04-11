import styled from 'styled-components'
import { coolGray } from '@carbon/colors';
import imagePath from './images/intro.jpeg'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32rem;
  height: 17rem;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  border: 1px solid ${coolGray[20]};

  background: url(${imagePath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;

  cursor: pointer;
  color: white;
  //box-shadow: inset 0 0 20px ${coolGray[10]};
  //border-radius: 10px;
`