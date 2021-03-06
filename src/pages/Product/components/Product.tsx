import React from 'react';
import Sidemenu from './Sidemenu';
import { Tag } from 'carbon-components-react';

import {
  Wrapper,
  Content,
  Description,
  TabsWrapper,
  AssetWrapper,
  AssetContent,
  TabContent,
  HeaderContainer,
  HeaderDetails,
  HeaderButton,
  ButtonContainer,
} from './Product.styled';

import { Button } from 'carbon-components-react';

import { Tabs, Tab } from 'carbon-components-react';
import { useParams } from 'react-router-dom';
import Typography from 'src/commons/components/Typography';
import Asset from './Asset';

import AppHeader from 'src/commons/components/Layout/AppHeader';

import products from 'src/commons/data/products';

import { assetType, AssetTypeKeys } from 'src/commons/data/constants';
import getAssetTagType from 'src/pages/Home/commons/methods/getAssetTagType';

const Product = () => {
  const { id } = useParams();

  const product = React.useMemo(
    () => products.find(product => product.id === Number(id)),
    [id]
  );

  const getAssetType = () => {
    const key = product?.categoryId
      ? (Object.keys(assetType) as AssetTypeKeys[]).find(
          key => assetType[key]?.id === product?.categoryId
        )
      : null;

    if (key) {
      return assetType[key];
    }
  };

  const getButtons = () => {
    if (product?.headerButton) {
      if (Array.isArray(product.headerButton)) {
        return product.headerButton.map(p => (
          <Button
            disabled={!p?.link}
            onClick={() => p?.link && window.open(p?.link, '_blank')}
          >
            {p?.label}
          </Button>
        ));
      }
      return (
        <Button
          disabled={!product?.headerButton.link}
          onClick={() =>
            (product?.headerButton as any).link &&
            window.open((product?.headerButton as any).link, '_blank')
          }
        >
          {product?.headerButton?.label}
        </Button>
      );
    }

    return null;
  };

  return (
    <Wrapper>
      <AppHeader />
      <Sidemenu assetType={getAssetType()} />
      <Content>
        <HeaderContainer>
          <HeaderDetails>
            <Typography as='h2'>{product?.title}</Typography>
            <Description>{product?.description}</Description>
          </HeaderDetails>
          {product?.headerButton && (
            <HeaderButton>
              <ButtonContainer>{getButtons()}</ButtonContainer>
            </HeaderButton>
          )}
        </HeaderContainer>

        <div>
          {product?.tags.map(value => (
            <Tag
              key={value.id}
              type={getAssetTagType({ assetTypeId: product?.categoryId })}
              size='sm'
            >
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
