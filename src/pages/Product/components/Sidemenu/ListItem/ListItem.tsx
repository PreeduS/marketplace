import React from 'react';
import { Wrapper, Label } from './ListItem.styled'
import { ChevronDown16, ChevronUp16, CheckmarkOutline32, CheckmarkOutline20, CheckmarkOutline16 } from "@carbon/icons-react";
import { Checkbox, CheckboxOnChangeDataVariant, CheckboxOnChangeDefaultVariant } from "carbon-components-react";

type ChangeHandlerEvent = 
{evt: React.ChangeEvent<HTMLInputElement>, data: { checked: boolean, id: string }}// | 
//{checked: boolean, id: string, event: React.ChangeEvent<HTMLInputElement>}


type Props = {
  labelText: string
  id: string
}

const ListItem = ({labelText, id}:Props) => {
  const changeHandler: CheckboxOnChangeDefaultVariant   = (checked: boolean, id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(checked, id, event)
  }
  return(<Wrapper>
      <CheckmarkOutline16 color='#0066cc' />
      <Label>
        ListItem
      </Label>

  </Wrapper>)
}

export default ListItem;