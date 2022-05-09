import { assetType, tag } from 'src/commons/data/constants';

import { getContent } from './content';

const getMockAlgorithm = ({ id, title }: { id: number; title: string }) => {
  return {
    id,
    title,
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
    categoryId: assetType.algorithms.id,

    tags: [tag.algebra],
    headerButton: {
      link: null,
      label: 'Download',
    },
    boxItem: {
      details: 'IBM Quantum',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
      tags: [tag.algebra],
    },
    content: getContent({ productId: -1 }),
  };
};

const products = [
  {
    id: 2,
    title: 'Time series forecasting',
    description:
      'Learn about the role of quantum computing in Intelligent Workflows for demand forecasting. See how quantum and classical methods differ and how they complement each other and work together. Experience a quantum algorithm applied to a business problem so that you can envision how you might apply quantum computing.',
    categoryId: assetType.application.id,
    //tags: ['Forecasting', 'Quantum', 'Application'],
    tags: [tag.quantumMachineLearning, tag.optimization],
    headerButton: [
      {
        link: 'http://forecasting-demo.hs7svmevr5p.us-south.codeengine.appdomain.cloud/',
        label: 'Launch',
      },
      {
        link: `${window.location.origin}/download/TimeSeriesForecastingCodebase.zip`,
        label: 'Download',
      },
    ],
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
    id: 1,
    title: 'Vehicle Routing',
    description: 'Vehicle Routing Optimization',
    categoryId: assetType.application.id,
    //tags: ['Routing', 'Quantum', 'Application'],
    tags: [tag.optimization],
    headerButton: {
      link: 'https://vrp-demo-ny.hs7svmevr5p.us-south.codeengine.appdomain.cloud',
      label: 'Launch',
    },
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
    id: 3,
    title: 'Chemistry',
    description:
      'An advanced course that focuses on the Variational Quantum Eigensolver algorithm, and how to apply it to quantum chemistry problems.',
    categoryId: assetType.educationCourses.id,
    //tags: ['Chemistry', 'Quantum'],
    tags: [tag.chemistry],
    headerButton: {
      link: 'https://quantum-accelerator.edunext.io/courses/course-v1:quantum-acc+QA-Chem01+2021_Q3/about',
      label: 'Launch',
    },
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
    headerButton: {
      link: 'https://quantum-accelerator.edunext.io/courses/course-v1:quantum-acc+QA-QEML01+2021_Q3/about',
      label: 'Launch',
    },
    boxItem: {
      details: 'IBM Quantum',
      description:
        'An advanced course that takes a deep look at algorithms, and how to apply hybrid quantum-classical models to specific machine learning problems.',
      // tags: ['Machine Learning', 'Quantum'],
      tags: [tag.quantumMachineLearning],
    },
    content: getContent({ productId: 4 }),
  },
  {
    id: 5,
    title: 'Quantum business foundations',
    description:
      'This course is for all business and technical professionals that would like to build a foundational knowledge of quantum computing technology and applications for business.',
    categoryId: assetType.educationCourses.id,

    tags: [],
    headerButton: {
      link: 'https://quantum-accelerator.edunext.io/courses/course-v1:quantum-acc+2021QA2+2021-Q3/about',
      label: 'Launch',
    },
    boxItem: {
      details: 'IBM Quantum',
      description:
        'This course is for all business and technical professionals that would like to build a foundational knowledge of quantum computing technology and applications for business.',

      tags: [],
    },
    content: getContent({ productId: 5 }),
  },
  {
    id: 6,
    title: 'Quantum technical foundations',
    description:
      'Designed for technical professionals, this class explores the building blocks of applying quantum to many types of problems.',
    categoryId: assetType.educationCourses.id,

    tags: [],
    headerButton: {
      link: 'https://quantum-accelerator.edunext.io/courses/course-v1:quantum-acc+2021QA1+2021-Q3/about',
      label: 'Launch',
    },
    boxItem: {
      details: 'IBM Quantum',
      description:
        'Designed for technical professionals, this class explores the building blocks of applying quantum to many types of problems.',
      tags: [],
    },
    content: getContent({ productId: 6 }),
  },
  {
    id: 7,
    title: 'VQLS',
    description:
      'The Variational Quantum Linear Solver, or the VQLS, is a quantum algorithm that uses a variational scheme to solve systems of linear equations.',
    categoryId: assetType.algorithms.id,

    tags: [tag.algebra],
    headerButton: {
      link: `${window.location.origin}/download/VQLS.zip`,
      label: 'Download',
    },
    boxItem: {
      details: 'IBM Quantum',
      description:
        'The Variational Quantum Linear Solver, or the VQLS, is a quantum algorithm that uses a variational scheme to solve systems of linear equations.',
      tags: [tag.algebra],
    },
    content: getContent({ productId: 7 }),
  },
  {
    id: 8,
    title: 'Quantum Kernel Training Toolkit',
    description:
      'Toolkit for training quantum kernels in machine learning applications.',
    categoryId: assetType.algorithms.id,

    tags: [tag.quantumMachineLearning],
    headerButton: [
      {
        link: `https://github.com/qiskit-community/prototype-quantum-kernel-training`,
        label: 'Launch',
      },
    ],
    boxItem: {
      details: null,
      description:
        'Toolkit for training quantum kernels in machine learning applications.',
      tags: [tag.quantumMachineLearning],
    },
    content: getContent({ productId: 8 }),
  },
  {
    id: 9,
    title: 'Entanglement Forging',
    description:
      'A module for simulating chemical and physical systems using a Variational Quantum Eigensolver (VQE) enhanced by Entanglement Forging.',
    categoryId: assetType.algorithms.id,

    tags: [tag.chemistry],
    headerButton: [
      {
        link: `https://github.com/qiskit-community/prototype-entanglement-forging`,
        label: 'Launch',
      },
    ],
    boxItem: {
      details: null,
      description:
        'A module for simulating chemical and physical systems using a Variational Quantum Eigensolver (VQE) enhanced by Entanglement Forging.',
      tags: [tag.chemistry],
    },
    content: getContent({ productId: 9 }),
  },
  {
    id: 10,
    title: 'Quantum Computing With Prototypes',
    description:
      'Prototypes is a collaboration between developers and researchers that will give users access to prototypes from cutting-edge research in areas like quantum simulation and machine learning.',
    categoryId: assetType.algorithms.id,

    tags: [],
    headerButton: [
      {
        link: `https://medium.com/qiskit/try-out-the-latest-advances-in-quantum-computing-with-ibm-quantum-prototypes-11f51124cb61`,
        label: 'Launch',
      },
    ],
    boxItem: {
      details: null,
      description:
        'Prototypes is a collaboration between developers and researchers that will give users access to prototypes from cutting-edge research in areas like quantum simulation and machine learning.',

      tags: [],
    },
    content: getContent({ productId: 10 }),
  },

  getMockAlgorithm({ id: 100, title: 'QSVT' }),
  getMockAlgorithm({ id: 101, title: 'Hybrid-HHL' }),
  getMockAlgorithm({ id: 102, title: 'Amplitude estimation without QPE' }),
  getMockAlgorithm({ id: 103, title: 'QML' }),
  getMockAlgorithm({ id: 104, title: 'Quantum kernel selector' }),
  getMockAlgorithm({ id: 105, title: 'Quantum kernel ensemble' }),
  getMockAlgorithm({ id: 106, title: 'QLSTM' }),
  getMockAlgorithm({ id: 107, title: 'QCS' }),
  getMockAlgorithm({ id: 108, title: 'Hidden Markov' }),

  /*
  ...Array.from(Array(24).keys()).map(index => ({
    id: index + 100,
    title: 'Product Title',
    description: null,
    categoryId: null,
    tags: [],
    headerButton: null,
    boxItem: {
      details: 'IBM Quantum',
      description:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
      tags: []
    },
    content: getContent({ productId: -1 }),
  })),
  */
];

export const getProducts = ({ id }: { id: number }) => {
  const result = products.find(c => c.id === id);
  return result;
};

export default products;
