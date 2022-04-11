import React from 'react';
import { Wrapper, IconContainer, Details, Description, TagsContainer } from './BoxItem.styled'
import Typography from 'src/commons/components/Typography';
import { Carbon32 } from '@carbon/icons-react';
import { Tag } from "carbon-components-react";
 
import { useNavigate } from "react-router-dom";

type Props = {
  title: React.ReactNode
  details: React.ReactNode
  description: React.ReactNode
} 

const BoxItem = ({title, details, description}: Props) => {
  let navigate = useNavigate();

  return(<Wrapper>
    <IconContainer>
      <Carbon32 />
    </IconContainer>        
 

    <Typography as = 'h5' marginBottom='.25rem' onClick = {() =>  navigate(`/product`)}>{title}</Typography>
    <Details>
        {details}
    </Details>
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
   
  </Wrapper>)
}

export default BoxItem;