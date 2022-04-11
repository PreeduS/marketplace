import React from 'react';
import { Wrapper } from './CheckboxItem.styled'
import { Checkbox,  CheckboxOnChangeDefaultVariant } from "carbon-components-react";

type Props = {
  labelText: string
  id: string
}

const CheckboxItem = ({labelText, id}: Props) => {
  const changeHandler: CheckboxOnChangeDefaultVariant   = (checked: boolean, id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(checked, id, event)
  }
  return(<Wrapper>
 
      <Checkbox
            labelText={labelText}
            id= {id}
            checked={false}
            onChange={changeHandler}
          />


  </Wrapper>)
}

export default CheckboxItem;
