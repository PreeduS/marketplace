
/*
export const categories = [
  {name: 'Foundation'},
  {name: 'Algebra'},
  {name: 'ML'},
  {name: 'Optimization'},
  {name: 'Chemistry'},
]
export const categories2 = [
  {name: 'Applications'},
  {name: 'Learning Assets'},
  {name: 'Algorithms'},
]
*/


export const categories = [
  {id: 1, name: 'Foundation'},
  {id: 2, name: 'Algebra'},
  {id: 3, name: 'ML'},
  {id: 4, name: 'Optimization'},
  {id: 5, name: 'Chemistry'},
]
export const categories2 = [
  {
    id: 6, 
    name: 'Applications',
    items: [
      {
        id: 1,
        title: 'Routing Demo',
        details: 'Details',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
        disabled: false,
      },
      {
        id: 2,
        title: 'Forecasting Demo',
        details: 'Details',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
        disabled: false,
      },
      ...Array.from(Array(4).keys()).map(() => ({
        id: null,
        title: 'Title',
        details: 'Details',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
        disabled: true,
      }))
    ]

  },
  {
    id: 7, 
    name: 'Learning Assets',
    items: Array.from(Array(6).keys()).map(() => ({
      id: null,
      title: 'Title',
      details: 'Details',
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
      disabled: true,
    }))
  },
  {
    id: 8, 
    name: 'Algorithms',
    items: Array.from(Array(6).keys()).map(() => ({
      id: null,
      title: 'Title',
      details: 'Details',
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
      disabled: true,
    }))
  },
]