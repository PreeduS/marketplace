import React from 'react';
import { Carbon16, IbmCloud16, Cube16, Bee16, IbmSecurity16 } from '@carbon/icons-react';
 
import { Wrapper, Content, IntroBanner, IntroBannerImage, CategoryBanner, CategoryBannerItem,  Description, BoxItemsInline, IconContainer } from './Home.styled'
import BoxItem from 'src/commons/components/BoxItem';
import Typography from 'src/commons/components/Typography';

import { useNavigate } from "react-router-dom";

import AppHeader from 'src/commons/components/Layout/AppHeader';

const Home = () => {
  const navigate = useNavigate();

  const getIcon = (index: number) => {
    const Icon = {
      0: <Carbon16 />,
      1: <IbmCloud16 />,
      2: <Cube16 />,
      3: <Bee16 />,
      4: <IbmSecurity16 />,
    }[index % 5]

    return Icon
  }

  const categories = [
    {name: 'Foundation'},
    {name: 'Algebra'},
    {name: 'ML'},
    {name: 'Optimization'},
    {name: 'Chemistry'},
  ]
  const categories2 = [
    {
      name: 'Applications',
      items: [
        {
          title: 'Routing Demo',
          details: 'Details',
          description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
          disabled: false,
        },
        {
          title: 'Forecasting Demo',
          details: 'Details',
          description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
          disabled: false,
        },
        ...Array.from(Array(4).keys()).map(() => ({
          title: 'Title',
          details: 'Details',
          description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
          disabled: true,
        }))
      ]

    },
    {
      name: 'Learning Assets',
      items: Array.from(Array(6).keys()).map(() => ({
        title: 'Title',
        details: 'Details',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
        disabled: true,
      }))
    },
    {
      name: 'Algorithms',
      items: Array.from(Array(6).keys()).map(() => ({
        title: 'Title',
        details: 'Details',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
        disabled: true,
      }))
    },
  ]

  return(<Wrapper>
  <AppHeader />
 
    <IntroBanner>
      <IntroBannerImage />
      <Typography as = 'h2' marginBottom='1rem'>
        Et harum quidem rerum facilis est et expedita distinctio.
      </Typography>
      <Typography as = 'h4'  >
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.
        
      </Typography>

    </IntroBanner>

    <Content>
      <h4>Featured products </h4>
      <BoxItemsInline>
        <BoxItem title = 'Routing Demo' details = 'Details' description = 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates'/>
        <BoxItem title = 'Forecasting Demo' details = 'Details' description = 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates'/>

        {Array.from(Array(4).keys()).map(()=> 
          <BoxItem 
            title = 'Title' 
            details = 'Details' 
            description = 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates'
            disabled
          />
        )}
        
      </BoxItemsInline>
    </Content>

    <CategoryBanner>
    {[...categories, ...categories2].map(category => (
      <CategoryBannerItem onClick = {() =>  navigate(`/explore`)}> 
        <IconContainer>
          {getIcon(0)}
      </IconContainer>   
        {category.name}
      </CategoryBannerItem>
    ))}


      {Array.from(Array(13).keys()).map((index)=> 
        <CategoryBannerItem onClick = {() =>  navigate(`/explore`)}> 
          <IconContainer>
            {getIcon(index)}
        </IconContainer>   
          Category Item
        </CategoryBannerItem>
      )}
    </CategoryBanner>

    {categories2.map(category => (
         <Content>
         <h4 style = {{cursor: 'pointer'}} onClick = {() =>  navigate(`/explore`)}>{category.name}</h4>
         <BoxItemsInline>
         

          {category.items.map(item => {
            return <BoxItem 
            title = {item.title} 
            details = {item.details}
            description = {item.description}
            disabled = {item.disabled}
         />
          })}

           {/*Array.from(Array(6).keys()).map(()=> 
             <BoxItem 
                title = 'Title' 
                details = 'Details' 
                description = 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates'
                disabled
             />
          )*/}
           
         </BoxItemsInline>
       </Content> 
    ))}

   

  </Wrapper>)
}

export default Home;