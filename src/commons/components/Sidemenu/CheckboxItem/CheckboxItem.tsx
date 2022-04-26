import React from 'react';
import { Wrapper } from './CheckboxItem.styled';
import {
  Checkbox,
  CheckboxOnChangeDefaultVariant,
} from 'carbon-components-react';

type Props = {
  labelText: string;
  id: string;
  onClick?: (checked: boolean, id: string) => void;
  checked?: boolean;
  disabled?: boolean;
};

const CheckboxItem = ({
  labelText,
  id,
  onClick,
  checked = false,
  disabled,
}: Props) => {
  const changeHandler: CheckboxOnChangeDefaultVariant = (
    checked: boolean,
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (onClick) {
      onClick(checked, id);
    }
  };
  return (
    <Wrapper>
      <Checkbox
        labelText={labelText}
        id={id}
        checked={checked}
        onChange={changeHandler}
        disabled={disabled}
      />
    </Wrapper>
  );
};

export default CheckboxItem;
