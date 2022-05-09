import React from 'react';
import { Wrapper } from './ListItem.styled';
import { CheckmarkOutline32 } from '@carbon/icons-react';
import {
  Checkbox,
  CheckboxOnChangeDefaultVariant,
} from 'carbon-components-react';

const ListItem = () => {
  const changeHandler: CheckboxOnChangeDefaultVariant = (
    checked: boolean,
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {};
  return (
    <Wrapper>
      <CheckmarkOutline32 />
      <Checkbox labelText={`Checkbox label`} id='checkbox-label-1' />
      <Checkbox
        labelText={`Quantity`}
        id='quantity'
        checked={false}
        onChange={changeHandler}
      />
      ListItem
    </Wrapper>
  );
};

export default ListItem;
