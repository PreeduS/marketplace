import React from 'react';
import Sidemenu from './Sidemenu';
import { Header, HeaderName, Tag,/* Tabs, Tab*/ } from "carbon-components-react";
//import { Button } from 'carbon-components-react';
import { Wrapper, Content, Description, TabsWrapper, /*TabList, TabPanels, TabPanel */ BoxItems, AssetWrapper, AssetContent  } from './Product.styled'
import BoxItem from 'src/commons/components/BoxItem';

import { Tabs,   Tab, TabContent,   Button } from 'carbon-components-react';
import { useParams } from 'react-router-dom'
import Typography from 'src/commons/components/Typography';
import Asset from './Asset';
 
import AppHeader from 'src/commons/components/Layout/AppHeader';

import products from 'src/commons/data/products'

const Product = () => {
  const { id } = useParams();


  const product = React.useMemo(()=> products.find(product => product.id === Number(id)), [id])
 
  return(<Wrapper>
  <AppHeader />
  <Sidemenu />
    <Content>

      <Typography as = 'h2'>{product?.title}</Typography>
      <Description>
        {product?.description}
       </Description>

      {product?.tags.map((value)=> 
          <Tag
            key = {value}
            type="cool-gray"
            size="sm"
            
          >
            {value}
          </Tag>
      )}
      <TabsWrapper>
        <Tabs >
          <Tab label = 'Overview'>
            {product?.content?.tabs.overview.primaryDescription}
          
          {!!product?.content?.tabs.overview.asset && 
          
            <AssetWrapper>
              <AssetContent>
                {product?.content?.tabs.overview.asset.description}
              </AssetContent>

              <Asset 
                imageUrl = {product?.content?.tabs.overview.asset.imageUrl} 
                link = {product?.content?.tabs.overview.asset.link} 
                title = {product?.content?.tabs.overview.asset.title} 
              />

            </AssetWrapper>
          }
            {product?.content?.tabs.overview.secondaryDescription}
           
          </Tab>
          <Tab label = 'Docs'>

          {product?.content?.tabs.docs.description}

          </Tab>
          <Tab label = 'Info'>
          {product?.content?.tabs.info.description}
          </Tab>
        </Tabs>
      </TabsWrapper>




    </Content>
  </Wrapper>)
}

export default Product;

 