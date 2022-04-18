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
            <Typography as = 'h5'  marginTop='2rem'  marginBottom='1rem'>Title</Typography>
            <Typography as = 'p' marginBottom='2.5rem'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt          
            </Typography>
            <AssetWrapper>
              <AssetContent>
                <Typography as = 'h5' marginBottom='1rem'>Title</Typography>
                <Typography as = 'p'>
                  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus
                </Typography>
                <Typography as = 'p' marginTop='1rem'>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.              
                </Typography>
              </AssetContent>

              <Asset />

            </AssetWrapper>
            <Typography as = 'h5' marginTop='2.5rem' marginBottom='1rem'>Title</Typography>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
            </p>
            <BoxItems>

              <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
              <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
              <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
            </BoxItems>
            <Typography as = 'h5' marginTop='2.5rem' marginBottom='1rem'>Title</Typography>
            <p>
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.            
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
            </p>
          
          </Tab>
          <Tab label = 'Docs'>

          <Typography as = 'h5' marginTop='2rem' marginBottom='1rem'>Title</Typography>
          
          <Typography as = 'p' marginBottom='1rem'>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus
            </Typography>
            <Typography as = 'p'>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </Typography>

          </Tab>
          <Tab label = 'Info'>
          <Typography as = 'h5' marginTop='2rem' marginBottom='1rem'>Title</Typography>

            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
            </p>
          <BoxItems>

            <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
            <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
            <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
            <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
            <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
            <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
            
          </BoxItems>

          </Tab>
        </Tabs>
      </TabsWrapper>




    </Content>
  </Wrapper>)
}

export default Product;

 