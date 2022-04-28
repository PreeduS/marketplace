import {assetType, tag} from 'src/commons/data/constants'

import { getContent } from './content';

const products = [
  {
    id: 1,
    title: 'Routing Demo',
    description: 'Vehicle Routing Optimization',
    categoryId: assetType.application.id,
    //tags: ['Routing', 'Quantum', 'Application'],
    tags: [tag.optimization],
    boxItem: {
      details: 'IBM Quantum',
      description:
        'Routing optimization is a critical problem for many industries such as distribution, communications, electronics, automotive and aerospace.',
      //tags: ['Routing', 'Quantum', 'Application'],
      tags: [tag.optimization],
    },
    content: getContent({ productId: 1 }),
  },
  {
    id: 2,
    title: 'Forecasting Demo',
    description:
      'Learn about the role of quantum computing in Intelligent Workflows for demand forecasting. See how quantum and classical methods differ and how they complement each other and work together. Experience a quantum algorithm applied to a business problem so that you can envision how you might apply quantum computing.',
    categoryId: assetType.application.id,
    //tags: ['Forecasting', 'Quantum', 'Application'],
    tags: [tag.quantumMachineLearning, tag.optimization],
    boxItem: {
      details: 'IBM Quantum',
      description:
        'Learn about the role of quantum computing in Intelligent Workflows for demand forecasting',
      //tags: ['Forecasting', 'Quantum', 'Application'],
      tags: [tag.quantumMachineLearning, tag.optimization],
    },
    content: getContent({ productId: 2 }),
  },
  {
    id: 3,
    title: 'Chemistry',
    description:
      'An advanced course that focuses on the Variational Quantum Eigensolver algorithm, and how to apply it to quantum chemistry problems.',
    categoryId: assetType.educationCourses.id,
    //tags: ['Chemistry', 'Quantum'],
    tags: [tag.chemistry],
    boxItem: {
      details: 'IBM Quantum',
      description:
        'An advanced course that focuses on the Variational Quantum Eigensolver algorithm, and how to apply it to quantum chemistry problems.',
      //tags: ['Chemistry', 'Quantum'],
      tags: [tag.chemistry],
    },
    content: getContent({ productId: 3 }),
  },
  {
    id: 4,
    title: 'Quantum machine learning',
    description:
      'An advanced course that takes a deep look at algorithms, and how to apply hybrid quantum-classical models to specific machine learning problems.',
    categoryId: assetType.educationCourses.id,
    //tags: ['Machine Learning', 'Quantum'],
    tags: [tag.quantumMachineLearning],
    boxItem: {
      details: 'IBM Quantum',
      description:
        'An advanced course that takes a deep look at algorithms, and how to apply hybrid quantum-classical models to specific machine learning problems.',
     // tags: ['Machine Learning', 'Quantum'],
      tags: [tag.quantumMachineLearning],

    },
    content: getContent({ productId: 4 }),
  },
  ...Array.from(Array(24).keys()).map(index => ({
    id: index + 3,
    title: 'Product Title',
    description: null,
    categoryId: null,
    tags: [],
    boxItem: {
      details: 'IBM Quantum',
      description:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
      tags: []
    },
    content: getContent({ productId: -1 }),
  })),
];

export const getProducts = ({ id }: { id: number }) => {
  const result = products.find(c => c.id === id);
  return result;
};

export default products;
