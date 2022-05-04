import React from 'react';
import { Wrapper, Content, Header } from './Sidemenu.styled';

import CheckboxItem from './CheckboxItem';
import { categories, categories2 } from 'src/commons/data/categories';
import { assetType, tag, filters } from 'src/commons/data/constants';

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
        {
          //[...categories/*, ...categories2*/]

          filters.assetType.map((category, index) => {
            //const itemId = `category_${category.name.toLowerCase()}_${index}`
            const itemId = `assetType_${category.id}`;

            return (
              <CheckboxItem
                key={`assetType_${category.id}`}
                labelText={category.label}
                //id = {`category_item_1_${index}`}
                //id={itemId}
                id={`assetType_${category.id}`}
                onClick={
                  (checked, id) => onFilterChange('assetType', checked, id)
                  //filterChangeHandler('assetType')
                }
                checked={filter.filter['assetType']?.[itemId] === 'true'}
              />
            );
          })
        }

        <Header marginTop='1.5rem' marginBottom='.5rem'>
          Tags
        </Header>
        {filters.tag.map((category, index) => {
          //const itemId = `category_${category.name.toLowerCase()}_${index}`
          const itemId = `tag_${category.id}`;

          return (
            <CheckboxItem
              key={`tag_${category.id}`}
              labelText={category.label}
              //id = {`category_item_1_${index}`}
              //id={itemId}
              id={`tag_${category.id}`}
              onClick={
                //filterChangeHandler('tag')
                (checked, id) => onFilterChange('tag', checked, id)
              }
              checked={filter.filter['tag']?.[itemId] === 'true'}
            />
          );
        })}

        {/*
        <Header marginTop='1.25rem' marginBottom='.5rem'>Header</Header>
        <CheckboxItem 
          labelText='Filter 1' 
          id = 'item_1'
        />
    
        <CheckboxItem 
          labelText='Filter 2' 
          id = 'item_2'
        />
        */}

        {false &&
          [1, 2].map((value, index) => {
            return (
              <>
                <Header marginTop='1.25rem' marginBottom='.5rem'>
                  Header
                </Header>
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
