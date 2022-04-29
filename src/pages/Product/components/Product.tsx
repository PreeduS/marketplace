import React from 'react';
import Sidemenu from './Sidemenu';
import {
  Header,
  HeaderName,
  Tag /* Tabs, Tab*/,
} from 'carbon-components-react';
//import { Button } from 'carbon-components-react';
import {
  Wrapper,
  Content,
  Description,
  TabsWrapper,
  /*TabList, TabPanels, TabPanel */ BoxItems,
  AssetWrapper,
  AssetContent,
  TabContent,
  HeaderContainer,
  HeaderDetails,
  HeaderButton,
  ButtonContainer,
} from './Product.styled';
import BoxItem from 'src/commons/components/BoxItem';
import { Button } from 'carbon-components-react';

import { Tabs, Tab } from 'carbon-components-react';
import { useParams } from 'react-router-dom';
import Typography from 'src/commons/components/Typography';
import Asset from './Asset';

import AppHeader from 'src/commons/components/Layout/AppHeader';

import products from 'src/commons/data/products';

const Product = () => {
  const { id } = useParams();

  const product = React.useMemo(
    () => products.find(product => product.id === Number(id)),
    [id]
  );

  return (
    <Wrapper>
      <AppHeader />
      <Sidemenu />
      <Content>
        <HeaderContainer>
          <HeaderDetails>
           <Typography as='h2'>{product?.title}</Typography>
            <Description>{product?.description}</Description>
          </HeaderDetails>
          {
            product?.headerButton && 
            <HeaderButton>
            <ButtonContainer>
                <Button onClick = {()=>  window.open(product?.headerButton.link, '_blank') }>{product?.headerButton?.label}</Button>
            </ButtonContainer>
          </HeaderButton>
       
          }

        </HeaderContainer>

          <div>

        {product?.tags.map(value => (
          <Tag key={value.id} type='cool-gray' size='sm'>
            {value.label}
          </Tag>
        ))}
          </div>
        <TabsWrapper>
          <Tabs>
            {!!product?.content?.tabs.overview && (
              <Tab label='Overview'>
                <TabContent>
                  {product?.content?.tabs.overview.primaryDescription}
                  {!!product?.content?.tabs.overview.asset && (
                    <AssetWrapper>
                      <AssetContent>
                        {product?.content?.tabs.overview.asset.description}
                      </AssetContent>

                      <Asset
                        imageUrl={
                          product?.content?.tabs.overview.asset.imageUrl
                        }
                        link={product?.content?.tabs.overview.asset.link}
                        title={product?.content?.tabs.overview.asset.title}
                      />
                    </AssetWrapper>
                  )}
                  {product?.content?.tabs.overview.secondaryDescription}
                </TabContent>
              </Tab>
            )}

            {!!product?.content?.tabs.docs && (
              <Tab label='Documentation'>
                <TabContent>
                  {product?.content?.tabs.docs.description}
                </TabContent>
              </Tab>
            )}

            {!!product?.content?.tabs.instructions && (
              <Tab label='Instructions'>
                <TabContent>
                  {product?.content?.tabs.instructions.description}
                </TabContent>
              </Tab>
            )}
            {/*!!product?.content?.tabs.info && (
              <Tab label='Info'>
                <TabContent>
                  {product?.content?.tabs.info.description}
                </TabContent>
              </Tab>
            )*/}
            {!!product?.content?.tabs.pricing && (
              <Tab label='Entitlement'>
                <TabContent>
                  {product?.content?.tabs.pricing.description}
                </TabContent>
              </Tab>
            )}
          </Tabs>
        </TabsWrapper>
      </Content>
    </Wrapper>
  );
};

export default Product;
