import Vue from 'vue';
import Router from 'vue-router';
import auth from '@/utils/auth'

Vue.use(Router);

const router = new Router({
      mode: 'history',
      base: process.env.BASE_URL,
      routes: [
            {
                  path: '/member/',
                  name: 'm-start',
                  meta: {layout: 'member', auth: true, role: 'member'},
                  component: () => import('./views/member/Vacancies.vue')
            },
            {
                  path: '/hr/',
                  name: 'hr-start',
                  meta: {layout: 'hr', auth: true, role: 'hr'},
                  component: () => import('./views/hr/Vacancies.vue')
            },
            {
                  path: '/login',
                  name: 'login',
                  meta: {layout: 'empty'},
                  component: () => import('./views/Login.vue')
            },
            {
                  path: '/register',
                  name: 'register',
                  meta: {layout: 'empty'},
                  component: () => import('./views/Register.vue')
            },
            {
                  path: '/member/vacancies',
                  name: 'm-vacancies',
                  meta: {layout: 'member', auth: true, role: 'member'},
                  component: () => import('./views/member/Vacancies.vue')
            },
            {
                  path: '/hr/vacancies/add',
                  name: 'hr-vacancies-add',
                  meta: {layout: 'hr', auth: true, role: 'hr'},
                  component: () => import('./views/hr/AddVacancies.vue')
            },
            {
                  path: '/hr/vacancies',
                  name: 'l-books',
                  meta: {layout: 'hr', auth: true, role: 'hr'},
                  component: () => import('./views/hr/Vacancies.vue')
            },
            {
                  path: '/hr/staff',
                  name: 'l-loans',
                  meta: {layout: 'hr', auth: true, role: 'hr'},
                  component: () => import('./views/hr/Staff.vue')
            }
      ]
});

router.beforeEach((to, from, next) => {

      const requireAuth = to.matched.some(record => record.meta.auth);

      if (requireAuth && !auth.Check()) {
            next('/login?message=login');
      }
      else {
            const role = to.meta.role;
            const name = to.name;
            if ((name === 'login') || (name === 'register')){
                  next()
            }
            else if (auth.Check()) {
                  if (role === auth.CheckRole()){
                        next()
                  }
                  else{
                        next('/login');
                  }

            }
            else{
                  next('/login');
            }
      }
});

export default router