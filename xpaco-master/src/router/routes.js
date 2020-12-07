
const routes = [
  {
    path: '/HomePage',
    component: () => import('layouts/HomePage.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/Inscricao',
    component: () => import('layouts/Inscricao.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]

  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
