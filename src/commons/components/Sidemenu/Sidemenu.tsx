import React from 'react';
import { Wrapper, Content, Header } from './Sidemenu.styled';

import CheckboxItem from './CheckboxItem';

import { filters } from 'src/commons/data/constants';

type Props = {
  onFilterChange: (
    section: string,
    checked: boolean,
    id: string | number
  ) => void;
  filter: any;
};

const Sidemenu = ({ onFilterChange, filter }: Props) => {
  return (
    <Wrapper>
      <Content>
        <Header marginBottom='.5rem'>Categories</Header>
        {filters.assetType.map((category, index) => {
          const itemId = `assetType_${category.id}`;

          return (
            <CheckboxItem
              key={`assetType_${category.id}`}
              labelText={category.label}
              id={`assetType_${category.id}`}
              onClick={(checked, id) =>
                onFilterChange('assetType', checked, id)
              }
              checked={filter.filter['assetType']?.[itemId] === 'true'}
            />
          );
        })}

        <Header marginTop='1.5rem' marginBottom='.5rem'>
          Tags
        </Header>
        {filters.tag.map((category, index) => {
          const itemId = `tag_${category.id}`;

          return (
            <CheckboxItem
              key={`tag_${category.id}`}
              labelText={category.label}
              id={`tag_${category.id}`}
              onClick={(checked, id) => onFilterChange('tag', checked, id)}
              checked={filter.filter['tag']?.[itemId] === 'true'}
            />
          );
        })}
      </Content>
    </Wrapper>
  );
};

export default Sidemenu;
