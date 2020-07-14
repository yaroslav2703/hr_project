import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
      mode: 'history',
      base: process.env.BASE_URL,
      routes: [
            {
                  path: '/',
                  name: 'main',
                  meta: {layout: 'main'},
                  component: () => import('./views/Vacancies.vue')
            },
            {
                  path: '/vacancies',
                  name: 'vacancies',
                  meta: {layout: 'main'},
                  component: () => import('./views/Vacancies.vue')
            },
            {
                  path: '/staff',
                  name: 'staff',
                  meta: {layout: 'main'},
                  component: () => import('./views/Staff.vue')
            },
      ]
});

export default router