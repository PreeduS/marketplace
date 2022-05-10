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

  background: ${coolGray[20]};

  align-items: center;

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
`;
export const IntroBannerContent = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  color: white;
  justify-content: space-between;
  padding: 1.5rem 0;
`;
export const IntroBannerImage = styled.div`
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

  min-height: 6rem;
  background: ${coolGray[20]};
  background: #f4f4f4;

  margin-top: 2rem;

  padding: 1.5rem 3rem;

  justify-content: space-between;
`;

export const CategoryBannerTitle = styled.div``;
export const CategoryBannerItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
`;

export const CategoryBannerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 12rem;

  flex-shrink: 0;

  cursor: pointer;
  padding: 0.75rem;

  background: white;
  width: 18vw;
  margin-left: 1px;
  height: 22vw;
`;
export const CategoryBannerItemHeader = styled.div`
  display: flex;
`;
export const CategoryBannerItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AssetTypeIconContainer = styled.div`
  margin-right: 0.5rem;
`;
export const IconContainer = styled.div`
  margin-right: 0.5rem;
  color: #0066cc;
`;

export const BoxItemsInline = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 2rem;
`;
