import React from 'react';
import { Wrapper, Label } from './ListItem.styled'
import { CheckmarkOutline16 } from "@carbon/icons-react";
 
 
type Props = {
  labelText: string
  id: string
  icon?: React.ReactNode
}

const ListItem = ({labelText, id, icon}:Props) => {

  return(<Wrapper>
      {icon !== undefined ?  icon:   <CheckmarkOutline16 color='#0066cc' />
}
      <Label>
        {labelText}
      </Label>

  </Wrapper>)
}

export default ListItem;