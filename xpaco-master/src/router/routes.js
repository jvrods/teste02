
const routes = [
  {
    path: '/',
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
    path: '/Login',
    component: () => import('layouts/Login.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]

  },

  {
    path: '/Profile',
    component: () => import('layouts/Profile.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]

  },

  {
    path: '/AboutUs',
    component: () => import('layouts/AboutUs.vue'),
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
