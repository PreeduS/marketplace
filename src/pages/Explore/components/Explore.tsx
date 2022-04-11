import React from 'react';
import Sidemenu from 'src/commons/components/Sidemenu';

import { Wrapper, Content, Description, BoxItems } from './Explore.styled'
import BoxItem from 'src/commons/components/BoxItem';

import AppHeader from 'src/commons/components/Layout/AppHeader';

const Explore = () => {


  return(<Wrapper>
  <AppHeader />
  <Sidemenu />
    <Content>
  
      <h3>Header </h3>
      <Description>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
      </Description>
      <BoxItems>
      <BoxItem title = 'Routing Demo' details = 'Details' description = 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates'/>
      <BoxItem title = 'Forecasting Demo' details = 'Details' description = 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates'/>

        {Array.from(Array(24).keys()).map(()=> 
          <BoxItem title = 'Title' details = 'Details' description = 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates'/>
        )}
        
      </BoxItems>
    </Content>
  </Wrapper>)
}

export default Explore;