import { ArrowRight32 } from '@carbon/icons-react';

import {
  Wrapper,
  Content,
  IntroBanner,
  IntroBannerImage,
  IntroTitle,
  IntroDescription,
  IntroBannerContent,
  CategoryBanner,
  CategoryBannerTitle,
  CategoryBannerItemsContainer,
  CategoryBannerItem,
  CategoryBannerItemHeader,
  CategoryBannerItemFooter,
  BoxItemsInline,
  IconContainer,
  AssetTypeIconContainer,
} from './Home.styled';
import BoxItem from 'src/commons/components/BoxItem';
import Typography from 'src/commons/components/Typography';

import { useNavigate } from 'react-router-dom';

import AppHeader from 'src/commons/components/Layout/AppHeader';

import getAssetTypeIcon from 'src/pages/Home/commons/methods/getAssetTypeIcon';
import getAssetTagType from 'src/pages/Home/commons/methods/getAssetTagType';

import {
  categories,
  featuredProductsCategories,
  categories2,
} from 'src/commons/data/categories';

import { buildUrl } from 'src/commons/helpers/qs';

const Home = () => {
  const navigate = useNavigate();

  const getIcon = (assetTypeId: number) => getAssetTypeIcon({ assetTypeId });

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
        <Typography as='h5'>Spotlight</Typography>

        <BoxItemsInline>
          {featuredProductsCategories.items.map(item => {
            if (!item) {
              return null;
            }

            return (
              <BoxItem
                id={item.id || undefined}
                icon={getAssetTypeIcon({ assetTypeId: item.categoryId })}
                tagType={getAssetTagType({ assetTypeId: item.categoryId })}
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
        <CategoryBannerTitle>
          <Typography
            as='h5'
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/explore')}
          >
            Categories
          </Typography>
        </CategoryBannerTitle>
        <CategoryBannerItemsContainer>
          {[...categories].map(category => {
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
              <CategoryBannerItem
                onClick={() => navigate(url)}
                key={category.id}
              >
                <CategoryBannerItemHeader>
                  {/*category.name*/}

                  <Typography as='h3'>{category.name}</Typography>
                </CategoryBannerItemHeader>
                <CategoryBannerItemFooter>
                  <AssetTypeIconContainer>
                    {getIcon(category.id)}
                  </AssetTypeIconContainer>
                  <IconContainer>
                    {' '}
                    <ArrowRight32 />
                  </IconContainer>
                </CategoryBannerItemFooter>
              </CategoryBannerItem>
            );
          })}
        </CategoryBannerItemsContainer>
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
            <Typography
              as='h5'
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(url)}
            >
              {category.name}
            </Typography>
            <BoxItemsInline>
              {category.items.map(item => {
                return (
                  <BoxItem
                    id={item?.id || undefined}
                    icon={getAssetTypeIcon({ assetTypeId: category.id })}
                    tagType={getAssetTagType({ assetTypeId: category.id })}
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
