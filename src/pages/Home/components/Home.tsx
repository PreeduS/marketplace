import React from 'react';
import {
  Carbon16,
  IbmCloud16,
  Cube16,
  Bee16,
  IbmSecurity16,
} from '@carbon/icons-react';

import {
  Wrapper,
  Content,
  IntroBanner,
  IntroBannerImage,
  IntroBannerContent,
  CategoryBanner,
  CategoryBannerItem,
  Description,
  BoxItemsInline,
  IconContainer,
} from './Home.styled';
import BoxItem from 'src/commons/components/BoxItem';
import Typography from 'src/commons/components/Typography';

import { useNavigate } from 'react-router-dom';

import AppHeader from 'src/commons/components/Layout/AppHeader';

import {
  categories,
  featuredProductsCategories,
  categories2,
} from 'src/commons/data/categories';

import { buildUrl } from 'src/commons/helpers/qs';

const Home = () => {
  const navigate = useNavigate();

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

  return (
    <Wrapper>
      <AppHeader />

      <IntroBanner>
        <IntroBannerContent>
          <IntroBannerImage />
          <Typography as='h2' marginBottom='1rem'>
            QITS Asset Library
          </Typography>
          <Typography as='h4'>
            Quantum computing enabled solutions, applications and proprietary
            algorithm libraries
          </Typography>
        </IntroBannerContent>
      </IntroBanner>

      <Content>
        <h4>Featured products </h4>
        <BoxItemsInline>
          {featuredProductsCategories.items.map(item => {
            return (
              <BoxItem
                id={item?.id || undefined}
                title={item?.title}
                details={item?.details}
                description={item?.description}
                disabled={item?.disabled}
              />
            );
          })}
        </BoxItemsInline>
      </Content>

      <CategoryBanner>
        {[...categories, ...categories2].map(category => {
          const itemId = `category_${category.id}`;
          const filter = {
            [itemId]: true,
          };
          const url = buildUrl(
            'explore',
            { filter },
            {
              encodeValuesOnly: false,
            }
          );

          return (
            <CategoryBannerItem onClick={() => navigate(url)}>
              <IconContainer>{getIcon(0)}</IconContainer>
              {category.name}
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
        const itemId = `category_${category.id}`;
        const filter = {
          [itemId]: true,
        };
        const url = buildUrl(
          'explore',
          { filter },
          {
            encodeValuesOnly: false,
          }
        );

        return (
          <Content>
            <h4 style={{ cursor: 'pointer' }} onClick={() => navigate(url)}>
              {category.name}
            </h4>
            <BoxItemsInline>
              {category.items.map(item => {
                return (
                  <BoxItem
                    id={item?.id || undefined}
                    title={item?.title}
                    details={item?.details}
                    description={item?.description}
                    disabled={item?.disabled}
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
