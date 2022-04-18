
const products = [
  {
    id: 1,
    title: 'Routing Demo',
    categoryId: 6,
    boxItem:{
      details: 'Details',
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
      tags: []
    },
    content: {}
  },
  {
    id: 2,
    title: 'Forecasting Demo',
    categoryId: 6,
    boxItem:{
      details: 'Details',
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
      tags: []
    },
    content: {}
  },
  ...Array.from(Array(24).keys()).map((index)=> ({
    id: index + 3,
    title: 'Product Title',
    categoryId: null,
    boxItem:{
      details: 'Details',
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
      tags: []
    },
    content: {} 
  }))
  
]


export default products