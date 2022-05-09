import products, { getProducts } from './products';

import { assetType } from 'src/commons/data/constants';

import prototypeQuantumKernelTraining from 'src/commons/data/products/content/PrototypeQuantumKernelTraining';
import prototypeEntanglementForging from 'src/commons/data/products/content/PrototypeEntanglementForging';
import quantumComputingPrototypes from 'src/commons/data/products/content/QuantumComputingPrototypes';

export const categories = [
  assetType.application,
  assetType.educationCourses,
  assetType.algorithms,
  assetType.thirdPartyAssets,
].map(category => ({ id: category.id, name: category.label }));

export const featuredProductsCategories = {
  id: null,
  name: 'Spotlight',
  items: [
    ...[
      prototypeQuantumKernelTraining.productId,
      prototypeEntanglementForging.productId,
      quantumComputingPrototypes.productId,
      2,
      1,
      3,
      4,
      5,
      6,
    ]
      .map(id => {
        const product = getProducts({ id });
        if (product) {
          return {
            id,
            title: product.title,
            categoryId: product.categoryId,
            details: product.boxItem.details,
            description: product.boxItem.description,
            disabled: false,
            tags: product.boxItem.tags,
          };
        }
        return null;
      })
      .filter(product => product !== null),
  ],
};

export const categories2 = [
  {
    id: assetType.application.id,

    name: assetType.application.label,
    items: [
      ...products
        .filter(product => product.categoryId === assetType.application.id)
        .map(({ id }) => {
          const product = getProducts({ id });
          if (product) {
            return {
              id,
              title: product.title,
              details: product.boxItem.details,
              description: product.boxItem.description,
              disabled: false,
              tags: product.boxItem.tags,
            };
          }
          return null;
        })
        .filter(product => product !== null),
    ],
  },

  {
    id: assetType.educationCourses.id,
    name: assetType.educationCourses.label,
    items: [
      ...products
        .filter(product => product.categoryId === assetType.educationCourses.id)
        .map(({ id }) => {
          const product = getProducts({ id });
          if (product) {
            return {
              id,
              title: product.title,
              details: product.boxItem.details,
              description: product.boxItem.description,
              disabled: false,
              tags: product.boxItem.tags,
            };
          }
          return null;
        })
        .filter(product => product !== null),
    ],
  },

  {
    id: assetType.algorithms.id,

    name: assetType.algorithms.label,
    items: [
      ...products
        .filter(product => product.categoryId === assetType.algorithms.id)
        .map(({ id }) => {
          const product = getProducts({ id });
          if (product) {
            return {
              id,
              title: product.title,
              details: product.boxItem.details,
              description: product.boxItem.description,
              disabled: false,
              tags: product.boxItem.tags,
            };
          }
          return null;
        })
        .filter(product => product !== null),
    ],
  },

  {
    id: assetType.thirdPartyAssets.id,

    name: assetType.thirdPartyAssets.label,
    items: [
      ...Array.from(Array(3).keys()).map(index => ({
        id: index,
        title: `Product ${index + 1}`,
        details: 'IBM Quantum',
        description:
          'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
        disabled: true,
        tags: [],
      })),
    ],
  },
];
