const routes = [
  {path: '/', redirect: '/blog'},
  {
    path: '/blog',
    name: 'blogApp',
    component: () => import('@app/pages/entry.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        meta: {
          banner: true
        },
        component: () => import('@app/pages/index/index.vue'),
      },
      {
        path: 'person',
        name: 'person',
        meta: {
          banner: false
        },
        component: () => import('@app/pages/person/person.vue'),
      },
      {
        path: 'article/:id',
        name: 'article',
        meta: {
          banner: true
        },
        component: () => import('@app/pages/article/article.vue'),
      }
    ]
  },
]

export default routes