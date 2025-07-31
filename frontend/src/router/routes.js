// routes configuration for Vue Router
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/Services.vue'),
  },
]
