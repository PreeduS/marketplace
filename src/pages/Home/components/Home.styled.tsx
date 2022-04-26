import styled from 'styled-components';

import { coolGray } from '@carbon/colors';
import imagePath from './images/1200px-Qiskit-Logo.svg.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 3rem;
`;

export const Content = styled.div`
  padding: 2rem 3rem;
`;
export const IntroBanner = styled.div`
  display: flex;
  flex-direction: column;
  height: 14rem;
  background: ${coolGray[20]};
  //justify-content: center;
  align-items: center;
  margin-top: 3rem;

  //padding: 3.5rem 20rem;
`;
export const IntroBannerContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 14rem;
  background: ${coolGray[20]};
  align-items: center;

  margin: 0 14rem;
  padding-top: 3rem;
`;
export const IntroBannerImage = styled.div`
  position: absolute;
  top: 2.25rem;
  left: -13rem;
  opacity: 1;
  display: flex;
  width: 9rem;
  height: 9rem;
  flex-shrink: 0;
  flex-grow: 0;

  background: url(${imagePath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`;
export const CategoryBanner = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 6rem;
  background: ${coolGray[20]};
  //justify-content: center;
  align-items: center;
  margin-top: 2rem;

  padding: 1.5rem 3rem;
`;

export const CategoryBannerItem = styled.div`
  display: flex;
  min-width: 12rem;
  width: calc((100vw - 6rem) / 5 - 3.25rem);
  flex-shrink: 0;
  margin: 1.25rem 1.5rem;
  cursor: pointer;
 
`;

export const IconContainer = styled.div`
  margin-right: 0.5rem;
  color: #0066cc;
`;

export const Description = styled.p`
  display: flex;
  margin: 1rem 0;
`;
export const BoxItemsInline = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 2rem;
`;
