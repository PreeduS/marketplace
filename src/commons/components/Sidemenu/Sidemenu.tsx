import React from 'react';
import { Wrapper, Content, Header } from './Sidemenu.styled'

import CheckboxItem from './CheckboxItem';
import {categories, categories2} from 'src/commons/data/categories'

type Props = {
  onFilterChange:  (checked: boolean, id: string) => void
  filter: any
}


const Sidemenu = ({onFilterChange, filter}: Props) => {

 
  return(<Wrapper>
    <Content>
   
      <Header marginBottom='.5rem'>Categories</Header>
      {[...categories, ...categories2].map((category, index) => {
        //const itemId = `category_${category.name.toLowerCase()}_${index}`
        const itemId = `category_${category.id}`
        
        return (
          <CheckboxItem 
            labelText= {category.name} 
            //id = {`category_item_1_${index}`}
            id = {itemId}
            onClick = {onFilterChange}
            checked = {filter.filter[itemId] === 'true'}
          />
        )
      })}
 
      {
        /*
        <Header marginTop='1.25rem' marginBottom='.5rem'>Header</Header>
        <CheckboxItem 
          labelText='Filter 1' 
          id = 'item_1'
        />
    
        <CheckboxItem 
          labelText='Filter 2' 
          id = 'item_2'
        />
        */
      }
  

  
      {false && [1,2].map((value, index)=>{
        return <>
          <Header marginTop='1.25rem' marginBottom='.5rem'>Header</Header>
              <CheckboxItem 
                labelText='Filter 1' 
                id = {`item_${value}_${index}_1`}
              />
          
              <CheckboxItem 
                labelText='Filter 2' 
                id = {`item_${value}_${index}_2`}
              />
          
              <CheckboxItem 
                labelText='Filter 3' 
                id = {`item_${value}_${index}_3`}
              />
          
              <CheckboxItem 
                labelText='Filter 4' 
                id = {`item_${value}_${index}_4`}
              />
          
              <CheckboxItem 
                labelText='Filter 5' 
                id = {`item_${value}_${index}_5`}
              />
              <CheckboxItem 
                labelText='Filter 6' 
                id = {`item_${value}_${index}_6`}
              />
          </>
      })}
  
    </Content>
 
  </Wrapper>)
}

export default Sidemenu;