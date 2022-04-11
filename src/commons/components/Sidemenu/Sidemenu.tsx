import React from 'react';
import { Wrapper, Content, Header } from './Sidemenu.styled'

import CheckboxItem from './CheckboxItem';
 

const Sidemenu = () => {
  return(<Wrapper>
    <Content>
   
      <Header>Header</Header>
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
          <Header marginTop='1rem'>Header</Header>
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