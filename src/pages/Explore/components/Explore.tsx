import React from 'react';
import Sidemenu from 'src/commons/components/Sidemenu';

import { Wrapper, Content, Description, BoxItems } from './Explore.styled';
import BoxItem from 'src/commons/components/BoxItem';

import AppHeader from 'src/commons/components/Layout/AppHeader';

import { buildUrl, getQueryString } from 'src/commons/helpers/qs';
import { useLocation, useNavigate } from 'react-router-dom';

import products from 'src/commons/data/products';

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

  const onFilterChangeHandler = (checked: boolean, id: string) => {
    const filterOptions = {
      ...(filter.filter as any),
      [id]: checked,
    };

    if (filterOptions[id] !== true) {
      delete filterOptions[id];
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
              />
            );
          })}
        </BoxItems>
      </Content>
    </Wrapper>
  );
};

export default Explore;
