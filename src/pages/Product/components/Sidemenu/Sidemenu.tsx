import React from 'react';
import { Wrapper, Content, Header } from './Sidemenu.styled';

import CheckboxItem from './ListItem';
import { Cube16 } from '@carbon/icons-react';

type Props = {
  assetType?: {
    id: number;
    label: string;
  };
};

const Sidemenu = ({ assetType }: Props) => {
  return (
    <Wrapper>
      <Content>
        <Header>Status</Header>
        <CheckboxItem labelText='Active' id='item_1' />

        <Header marginTop='2rem'>Categories</Header>

        {assetType?.label && (
          <CheckboxItem
            labelText={assetType?.label || ''}
            id='item_1'
            icon={<Cube16 color='#0066cc' />}
          />
        )}

        {false &&
          [1, 2].map((value, index) => {
            return (
              <>
                <Header marginTop='1rem'>Header</Header>
                <CheckboxItem
                  labelText='Filter 1'
                  id={`item_${value}_${index}_1`}
                />

                <CheckboxItem
                  labelText='Filter 2'
                  id={`item_${value}_${index}_2`}
                />

                <CheckboxItem
                  labelText='Filter 3'
                  id={`item_${value}_${index}_3`}
                />

                <CheckboxItem
                  labelText='Filter 4'
                  id={`item_${value}_${index}_4`}
                />

                <CheckboxItem
                  labelText='Filter 5'
                  id={`item_${value}_${index}_5`}
                />
                <CheckboxItem
                  labelText='Filter 6'
                  id={`item_${value}_${index}_6`}
                />
              </>
            );
          })}
      </Content>
    </Wrapper>
  );
};

export default Sidemenu;
