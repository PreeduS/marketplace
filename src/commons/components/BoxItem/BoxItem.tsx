import React from 'react';
import { Wrapper, IconContainer, Details, Content, Description, TagsContainer } from './BoxItem.styled'
import Typography from 'src/commons/components/Typography';
import { Carbon32 } from '@carbon/icons-react';
import { Tag } from "carbon-components-react";
 
import { useNavigate } from "react-router-dom";

type Props = {
  id?: number
  title: React.ReactNode
  details: React.ReactNode
  description: React.ReactNode
  disabled?: boolean
} 

const BoxItem = ({id, title, details, description, disabled}: Props) => {
  const navigate = useNavigate();

  const clickHandler =  React.useMemo(()=>{
    if(disabled){
      return undefined;
    }
    return () => {
      if(id !== undefined){

        navigate(`/product/${id}`)
      }
    }

  }, [id, disabled, navigate])

  return(<Wrapper disabled = {disabled}>
    <IconContainer>
      <Carbon32 />
    </IconContainer>        
 

    <Typography as = 'h5' marginBottom='.25rem' onClick = {clickHandler}>{title}</Typography>
    <Details>
        {details}
    </Details>
    <Content>
      <Description>
          {description}
      </Description>
      <TagsContainer>
        <Tag
          type="cool-gray"
          size="sm"
        >
          Quantum
        </Tag>
        <Tag
          type="cool-gray"
          size="sm"
        >
          Tag
        </Tag>
  
  
      </TagsContainer>
    </Content>
   
  </Wrapper>)
}

export default BoxItem;