import styled from 'styled-components';

import { coolGray } from '@carbon/colors';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding-top: 3rem;

  

  //border-right: 1px solid ${coolGray[20]};
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
 
  
`;
export const HeaderDetails = styled.div`
    display: flex;
    flex-direction: column;
`;
export const HeaderButton = styled.div`
    margin-top:3.5rem;
    margin-left: 5rem;
    margin-right: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  min-width: 10rem;
  
 
  button {
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
`;

export const Content = styled.div`
  padding: 2rem 3rem;
 
display: flex;
flex-direction: column;
flex: 1;
`;

export const Description = styled.p`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
`;
export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  .bx--tabs--scrollable__nav-link:active,
  .bx--tabs--scrollable__nav-link:focus {
    outline-color: transparent;
  }
  // .bx--tabs--scrollable .bx--tabs--scrollable__nav-link:focus, .bx--tabs--scrollable .bx--tabs--scrollable__nav-link:active
`;

// TabList, TabPanels, TabPanel

export const TabList = styled.div``;
export const TabPanels = styled.div``;
export const TabPanel = styled.div``;

export const BoxItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const AssetWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const AssetContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 2rem;
`;
export const TabContent = styled.div`
  margin-top: 1rem;
`;

