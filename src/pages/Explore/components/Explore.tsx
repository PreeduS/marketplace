import React from 'react';
import Sidemenu from 'src/commons/components/Sidemenu';

import { Wrapper, Content, Description, BoxItems } from './Explore.styled';
import BoxItem from 'src/commons/components/BoxItem';

import AppHeader from 'src/commons/components/Layout/AppHeader';

import { buildUrl, getQueryString } from 'src/commons/helpers/qs';
import { useLocation, useNavigate } from 'react-router-dom';

import products from 'src/commons/data/products';

import {assetType, tag, } from 'src/commons/data/constants'
import { intersection } from 'lodash'


type Filter = {
  filter: any;
};
const Explore = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const filter: Filter = React.useMemo(() => {
    const qs = getQueryString(location.search);
    return {
      filter: qs.filter || {},
    };
  }, [location.search]);
 

  const setFilter = (updatedFilter: any) => {
    
    const url = buildUrl(location.pathname, updatedFilter, {
      encodeValuesOnly: false,
    });

    navigate(url);
  };

  const onFilterChangeHandler = (section: string, checked: boolean, id: string | number) => {
 
    const filterOptions = {
      ...(filter.filter as any),
      [section]:{
        ...filter.filter[section],
        [id]: checked,
      }
     
    };

    if (filterOptions[section][id] !== true) {
      delete filterOptions[section][id];
    }

 
    const updatedFilter = {
      ...filter,
      filter: {
        ...filterOptions,
      },
    };
 
    setFilter(updatedFilter);
  };




  const filteredProducts = React.useMemo(() => {

    const selectedCategories = Object.keys(filter.filter).reduce((acc: string[], key: string) => {
      const value = filter.filter[key]
      const isSelected = value === 'true'
      if(isSelected){
        return [...acc, key]
      }
      return [...acc]
    },[])
    console.log('filter.filter ', filter.filter, products)

    let filteredProduct = products;
    if(filter.filter['assetType']){
      const selectedIds = Object.keys(filter.filter['assetType']).filter(key => filter.filter['assetType'][key] === 'true').map(key => Number(key.split('_')[1]))
      console.log('selectedIds ',selectedIds)

      filteredProduct = filteredProduct.filter(p => p.categoryId !== null && selectedIds.includes(p.categoryId ))

      
    }
    if(filter.filter['tag']){
      const selectedIds = Object.keys(filter.filter['tag']).filter(key => filter.filter['tag'][key] === 'true').map(key => Number(key.split('_')[1]))
    

      filteredProduct = filteredProduct.filter(p => p.tags !== null && intersection(p.tags.map(x => x.id), selectedIds).length > 0 )


    }
    
   // console.log('filter.filter selectedCategories' , selectedCategories)
/*

    if (filter.filter['category_50'] === 'true') {
      return products.filter(product => product.categoryId === 50);
    } else if (filter.filter['category_3'] === 'true') {
      return products.filter(product => product.categoryId === 3);
    } else if (filter.filter['category_5'] === 'true') {
      return products.filter(product => product.categoryId === 5);
    } else if (Object.keys(filter.filter).length > 0) {
      return products
        .filter(product => product.categoryId === null)
        .slice(0, 5);
    }

    return products;
    */
    return filteredProduct;


  }, [filter.filter]);

  return (
    <Wrapper>
      <AppHeader />
      <Sidemenu onFilterChange={onFilterChangeHandler} filter={filter} />
      <Content>
        <h3>Products </h3>
        <Description>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident
        </Description>

        <BoxItems>
          {filteredProducts.map(product => {
            return (
              <BoxItem
                id={product.id}
                title={product.title}
                details={product.boxItem.details}
                description={product.boxItem.description}
                disabled={product.categoryId === null}
                tags = {product.boxItem.tags}
              />
            );
          })}
        </BoxItems>
      </Content>
    </Wrapper>
  );
};

export default Explore;
