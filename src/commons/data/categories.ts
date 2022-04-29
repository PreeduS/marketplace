import products, { getProducts } from './products';

import {assetType, tag} from 'src/commons/data/constants'


export const categories = [
  assetType.algorithms,
  assetType.application,
  assetType.educationCourses,
  assetType.thirdPartyAssets,
].map(category => ({id: category.id, name: category.label}))

/*[
  { id: 1, name: 'Foundation' },
  { id: 2, name: 'Algebra' },
  { id: 3, name: 'Machine Learning' },
  { id: 4, name: 'Optimization' },
  { id: 5, name: 'Chemistry' },
  { id: 6, name: 'Quantum solutions' },
  { id: 7, name: 'Education' },
];*/

export const featuredProductsCategories = {
  id: null,
  name: 'Spotlight',
  items: [
    ...[1, 2, 3, 4,5,6]
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
      /*
    ...Array.from(Array(2).keys()).map(() => ({
      id: null,
      title: 'Product',
      details: 'IBM Quantum',
      description:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
      disabled: true,
      tags:[]
    })),
    */
  ],
};

export const categories2 = [
  {
    //id: 50,
    id: assetType.application.id,
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
/*
      ...Array.from(Array(4).keys()).map(() => ({
        id: null,
        title: 'Product',
        details: 'IBM Quantum',
        description:
          'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
        disabled: true,
        tags:[]
      })),
      */
    ],
  },



  {
    //id: 51,
    id: assetType.educationCourses.id,
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
/*
      ...Array.from(Array(4).keys()).map(() => ({
        id: null,
        title: 'Product',
        details: 'IBM Quantum',
        description:
          'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
        disabled: true,
        tags:[]
      })),
      */
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
 
    id: assetType.algorithms.id,
 
    name: assetType.algorithms.label,
    items: [

      ...products.filter(product => product.categoryId === assetType.algorithms.id)
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
/*
      ...Array.from(Array(6).keys()).map(() => ({
      id: null,
      title: 'Product',
      details: 'IBM Quantum',
      description:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
      disabled: true,
      tags:[]
    }))
    */
    ],
  },


  {
  
    id: assetType.thirdPartyAssets.id,
   
    name: assetType.thirdPartyAssets.label,
    items: [
      
      ...Array.from(Array(3).keys()).map((index) => ({
      id: index,
      title: `Product ${index + 1}`,
      details: 'IBM Quantum',
      description:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
      disabled: true,
      tags:[]
    }))
  ],
  },
  
];
