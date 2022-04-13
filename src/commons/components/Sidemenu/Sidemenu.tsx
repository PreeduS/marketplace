import React from 'react';
import { Wrapper, Content, Header } from './Sidemenu.styled'

import CheckboxItem from './CheckboxItem';
 

const Sidemenu = () => {

  const categories = [
    {name: 'Foundation'},
    {name: 'Algebra'},
    {name: 'ML'},
    {name: 'Optimization'},
    {name: 'Chemistry'},
  ]
  const categories2 = [
    {name: 'Applications'},
    {name: 'Learning Assets'},
    {name: 'Algorithms'},
  ]

  return(<Wrapper>
    <Content>
   
      <Header marginBottom='.5rem'>Categories</Header>
      {[...categories, ...categories2].map((category, index) => (
        <CheckboxItem 
          labelText= {category.name} 
          id = {`category_item_1_${index}`}
        />
      ))}
 
   
      <Header marginTop='1.25rem' marginBottom='.5rem'>Header</Header>
      <CheckboxItem 
        labelText='Filter 1' 
        id = 'item_1'
      />
  
      <CheckboxItem 
        labelText='Filter 2' 
        id = 'item_2'
      />
  

  
      {[1,2].map((value, index)=>{
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