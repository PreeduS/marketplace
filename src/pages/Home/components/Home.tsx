import React from 'react';
import {
  Carbon16,
  IbmCloud16,
  Cube16,
  Bee16,
  IbmSecurity16,
  ArrowRight32
} from '@carbon/icons-react';

import {
  Wrapper,
  Content,
  IntroBanner,
  IntroBannerImage,
  IntroTitle,
  IntroDescription,
  IntroBannerContent,
  CategoryBanner,
  CategoryBannerItem,
  CategoryBannerItemHeader,
  CategoryBannerItemFooter,
  Description,
  BoxItemsInline,
  IconContainer,
  AssetTypeIconContainer,
} from './Home.styled';
import BoxItem from 'src/commons/components/BoxItem';
import Typography from 'src/commons/components/Typography';

import { useNavigate } from 'react-router-dom';

import AppHeader from 'src/commons/components/Layout/AppHeader';

import getAssetTypeIcon from 'src/pages/Home/commons/methods/getAssetTypeIcon'

import {
  categories,
  featuredProductsCategories,
  categories2,
} from 'src/commons/data/categories';

import { buildUrl } from 'src/commons/helpers/qs';

const Home = () => {
  const navigate = useNavigate();
/*
  const getIcon = (index: number) => {
    const Icon = {
      0: <Carbon16 />,
      1: <IbmCloud16 />,
      2: <Cube16 />,
      3: <Bee16 />,
      4: <IbmSecurity16 />,
    }[index % 5];

    return Icon;
  };
 */
  const getIcon = (assetTypeId: number)=> getAssetTypeIcon({assetTypeId})

  return (
    <Wrapper>
      <AppHeader />

      <IntroBanner>
        <IntroBannerContent>
          <IntroTitle as='h1' marginBottom='1rem'>
            Quantum Accelerator Library
          </IntroTitle>
          <IntroDescription as='p'>
            Quantum computing enabled solutions, <br />
            applications and proprietary algorithm libraries
          </IntroDescription>
        </IntroBannerContent>
        <IntroBannerImage />
      </IntroBanner>

      <Content>
        <h4>Spotlight </h4>
        <BoxItemsInline>
          {featuredProductsCategories.items.map(item => {
            if(!item){
              return null;
            }
           

            return (
              <BoxItem
                id={item.id || undefined}
                icon = {getAssetTypeIcon({assetTypeId: item.categoryId})}
                key={item.id}
                title={item.title}
                details={item.details}
                description={item.description}
                disabled={item.disabled}
                tags={item.tags}
              />
            );
          })}
        </BoxItemsInline>
      </Content>

      <CategoryBanner>
        {[...categories /*, ...categories2*/].map(category => {
          const itemId = `assetType_${category.id}`;
          const filter = {
            assetType: {
              [itemId]: true,
            },
          };
          const url = buildUrl(
            'explore',
            { filter },
            {
              encodeValuesOnly: false,
            }
          );
          return (
            <CategoryBannerItem onClick={() => navigate(url)} key={category.id}>
              <CategoryBannerItemHeader>
              {/*category.name*/}

      <Typography as='h3'>
      {category.name}
      </Typography>

              </CategoryBannerItemHeader>
              <CategoryBannerItemFooter>
              <AssetTypeIconContainer>{getIcon(category.id)}</AssetTypeIconContainer>
              <IconContainer> <ArrowRight32 /></IconContainer>
           
              </CategoryBannerItemFooter>
            </CategoryBannerItem>
          );
        })}

        {/*Array.from(Array(13).keys()).map(index => (
          <CategoryBannerItem onClick={() => navigate(`/explore`)}>
            <IconContainer>{getIcon(index)}</IconContainer>
            Category Item
          </CategoryBannerItem>
        ))*/}
      </CategoryBanner>

      {categories2.map(category => {
        const itemId = `assetType_${category.id}`;
        const filter = {
          assetType: {
            [itemId]: true,
          },
        };
        const url = buildUrl(
          'explore',
          { filter },
          {
            encodeValuesOnly: false,
          }
        );

        return (
          <Content key={category.id}>
            <h4 style={{ cursor: 'pointer' }} onClick={() => navigate(url)}>
              {category.name}
            </h4>
            <BoxItemsInline>
              {category.items.map(item => {
                return (
                  <BoxItem
                    id={item?.id || undefined}
                    icon = {getAssetTypeIcon({assetTypeId: category.id})}
                    key={item?.id}
                    title={item?.title}
                    details={item?.details}
                    description={item?.description}
                    disabled={item?.disabled}
                    tags={item?.tags}
                  />
                );
              })}
            </BoxItemsInline>
          </Content>
        );
      })}
    </Wrapper>
  );
};

export default Home;
