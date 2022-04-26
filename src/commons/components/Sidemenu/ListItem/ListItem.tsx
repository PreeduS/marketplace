import React from 'react';
import { Wrapper } from './ListItem.styled';
import {
  ChevronDown16,
  ChevronUp16,
  CheckmarkOutline32,
} from '@carbon/icons-react';
import {
  Checkbox,
  CheckboxOnChangeDataVariant,
  CheckboxOnChangeDefaultVariant,
} from 'carbon-components-react';

type ChangeHandlerEvent = {
  evt: React.ChangeEvent<HTMLInputElement>;
  data: { checked: boolean; id: string };
}; // |
//{checked: boolean, id: string, event: React.ChangeEvent<HTMLInputElement>}

const ListItem = () => {
  const changeHandler: CheckboxOnChangeDefaultVariant = (
    checked: boolean,
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(checked, id, event);
  };
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
