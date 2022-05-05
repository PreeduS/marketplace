import styled from 'styled-components';
import Typography, { Props } from 'src/commons/components/Typography';

import { coolGray } from '@carbon/colors';
import imagePath from './images/diffraction.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 3rem;
`;

export const Content = styled.div`
  padding: 2rem 3rem;
  background: white;
`;
export const IntroBanner = styled.div`
  display: flex;
  //height: 14rem;
  background: ${coolGray[20]};


  //justify-content: center;
  align-items: center;
  //margin-top: 3rem;

  //padding: 3.5rem 20rem;
  background: #161616;
  
  justify-content: space-between;
  padding: 0 3rem;
  height: 25rem;
`;
export const IntroTitle = styled(Typography)<Props>`
  font-size: 3rem;
`;
export const IntroDescription = styled(Typography)<Props>`
  font-size: 1.1rem;
  //font-weight: 300;
`;
export const IntroBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  // height: 14rem;
  height: 100%;

  //  align-items: center;

  //margin: 0 14rem;
  //padding-top: 3rem;
  color: white;
  justify-content: space-between;
  padding: 1.5rem 0;
`;
export const IntroBannerImage = styled.div`
  //position: absolute;
  //top: 2.25rem;
  //left: -13rem;

  display: flex;
  width: calc(1.35 * 25rem);
  height: 25rem;
  flex-shrink: 0;
  flex-grow: 0;

  background: url(${imagePath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`;
export const CategoryBanner = styled.div`
  display: flex;
  //flex-wrap: wrap;
  min-height: 6rem;
  background: ${coolGray[20]};  
  background: #F4F4F4;
  //justify-content: center;
  //align-items: center;
  margin-top: 2rem;
  
  padding: 1.5rem 3rem;
//  justify-content: flex-end;
  justify-content: space-between;
`;


export const CategoryBannerTitle = styled.div`
 
`
export const CategoryBannerItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
`

export const CategoryBannerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 12rem;
  //width: calc((100vw - 6rem) / 5 - 3.25rem);
  flex-shrink: 0;
  //margin: 1.25rem 1.5rem;
  cursor: pointer;
  padding: .75rem;
 
  background: white;
  width: 18vw;
  margin-left: 1px;
  height: 22vw;
`;
export const CategoryBannerItemHeader = styled.div`
  display: flex;
`
export const CategoryBannerItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
`



export const AssetTypeIconContainer = styled.div`
  margin-right: 0.5rem;
  
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
