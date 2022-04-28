import products, { getProducts } from './products';

import {assetType, tag} from 'src/commons/data/constants'


export const categories = [
  { id: 1, name: 'Foundation' },
  { id: 2, name: 'Algebra' },
  { id: 3, name: 'Machine Learning' },
  { id: 4, name: 'Optimization' },
  { id: 5, name: 'Chemistry' },
  { id: 6, name: 'Quantum solutions' },
  { id: 7, name: 'Education' },
];

export const featuredProductsCategories = {
  id: null,
  name: 'Featured products',
  items: [
    ...[1, 2, 3, 4]
      .map(id => {
        const product = getProducts({ id });
        if (product) {
          return {
            id,
            title: product.title,
            details: product.boxItem.details,
            description: product.boxItem.description,
            disabled: false,
            tags: product.boxItem.tags
          };
        }
        return null;
      })
      .filter(product => product !== null),
    ...Array.from(Array(2).keys()).map(() => ({
      id: null,
      title: 'Product',
      details: 'IBM Quantum',
      description:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
      disabled: true,
      tags:[]
    })),
  ],
};

export const categories2 = [
  {
    id: 50,
    //name: 'Applications',
    name: assetType.application.label,
    items: [
      //...[1, 2]
      ...products.filter(product => product.categoryId === assetType.application.id)
        .map(({id}) => {
          const product = getProducts({ id });
          if (product) {
            return {
              id,
              title: product.title,
              details: product.boxItem.details,
              description: product.boxItem.description,
              disabled: false,
              tags:product.boxItem.tags
            };
          }
          return null;
        })
        .filter(product => product !== null),

      ...Array.from(Array(4).keys()).map(() => ({
        id: null,
        title: 'Product',
        details: 'IBM Quantum',
        description:
          'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
        disabled: true,
        tags:[]
      })),
    ],
  },



  {
    id: 51,
    name: assetType.educationCourses.label,
    items: [
      //...[1, 2]
      ...products.filter(product => product.categoryId === assetType.educationCourses.id)
        .map(({id}) => {
          const product = getProducts({ id });
          if (product) {
            return {
              id,
              title: product.title,
              details: product.boxItem.details,
              description: product.boxItem.description,
              disabled: false,
              tags:product.boxItem.tags
            };
          }
          return null;
        })
        .filter(product => product !== null),

      ...Array.from(Array(4).keys()).map(() => ({
        id: null,
        title: 'Product',
        details: 'IBM Quantum',
        description:
          'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
        disabled: true,
        tags:[]
      })),
    ],
  },

/*
  {
    id: 51,
    name: 'Learning Assets',
    items: Array.from(Array(6).keys()).map(() => ({
      id: null,
      title: 'Product',
      details: 'IBM Quantum',
      description:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
      disabled: true,
      tags:[]
    })),
  },
  */
 
  {
    id: 52,
    //name: 'Algorithms',
    name: assetType.algorithms.label,
    items: Array.from(Array(6).keys()).map(() => ({
      id: null,
      title: 'Product',
      details: 'IBM Quantum',
      description:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
      disabled: true,
      tags:[]
    })),
  },
  
];
