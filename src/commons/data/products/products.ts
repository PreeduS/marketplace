import { getContent } from './content';

const products = [
  {
    id: 1,
    title: 'Routing Demo',
    description: 'Vehicle Routing Optimization',
    categoryId: 6,
    tags: ['Routing', 'Quantum', 'Application'],
    boxItem: {
      details: 'IBM Quantum',
      description:
        'Routing optimization is a critical problem for many industries such as distribution, communications, electronics, automotive and aerospace.',
      tags: ['Routing', 'Quantum', 'Application'],
    },
    content: getContent({ productId: 1 }),
  },
  {
    id: 2,
    title: 'Forecasting Demo',
    description:
      'Learn about the role of quantum computing in Intelligent Workflows for demand forecasting. See how quantum and classical methods differ and how they complement each other and work together. Experience a quantum algorithm applied to a business problem so that you can envision how you might apply quantum computing.',
    categoryId: 6,
    tags: ['Forecasting', 'Quantum', 'Application'],
    boxItem: {
      details: 'IBM Quantum',
      description:
        'Learn about the role of quantum computing in Intelligent Workflows for demand forecasting',
      tags: ['Forecasting', 'Quantum', 'Application'],
    },
    content: getContent({ productId: 2 }),
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
    },
    content: getContent({ productId: -1 }),
  })),
];

export const getProducts = ({ id }: { id: number }) => {
  const result = products.find(c => c.id === id);
  return result;
};

export default products;
