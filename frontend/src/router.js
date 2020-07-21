import Vue from 'vue';
import Router from 'vue-router';
import auth from '@/utils/auth'

Vue.use(Router);

const router = new Router({
      mode: 'history',
      base: process.env.BASE_URL,
      routes: [
            {
                  path: '/',
                  name: 'start',
                  meta: {layout: 'member', role: 'member'},
                  component: () => import('./views/member/Vacancies.vue')
            },
            {
                  path: '/member/',
                  name: 'm-start',
                  meta: {layout: 'member', role: 'member'},
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
                  meta: {layout: 'member', role: 'member'},
                  component: () => import('./views/member/Vacancies.vue')
            },
            {
                  path: '/hr/vacancies/edit/:id',
                  name: 'hr-vacancies-edit',
                  meta: {layout: 'hr', auth: true, role: 'hr'},
                  component: () => import('./views/hr/EditVacancies.vue')
            },
            {
                  path: '/hr/vacancies/add',
                  name: 'hr-vacancies-add',
                  meta: {layout: 'hr', auth: true, role: 'hr'},
                  component: () => import('./views/hr/AddVacancies.vue')
            },
            {
                  path: '/hr/vacancies',
                  name: 'hr-vacancies',
                  meta: {layout: 'hr', auth: true, role: 'hr'},
                  component: () => import('./views/hr/Vacancies.vue')
            },
            {
                  path: '/hr/vacancies/view/:id',
                  name: 'hr-vacancies-view',
                  meta: {layout: 'hr', auth: true, role: 'hr'},
                  component: () => import('./views/hr/ViewVacancies.vue')
            },
            {
                  path: '/hr/staff/add',
                  name: 'hr-staff-add',
                  meta: {layout: 'hr', auth: true, role: 'hr'},
                  component: () => import('./views/hr/AddStaff.vue')
            },
            {
                  path: '/hr/staff/edit/:id',
                  name: 'hr-employee-edit',
                  meta: {layout: 'hr', auth: true, role: 'hr'},
                  component: () => import('./views/hr/EditStaff.vue')
            },
            {
                  path: '/hr/staff/view/:id',
                  name: 'hr-staff-view',
                  meta: {layout: 'hr', auth: true, role: 'hr'},
                  component: () => import('./views/hr/ViewEmployee.vue')
            },
            {
                  path: '/hr/staff',
                  name: 'hr-staff',
                  meta: {layout: 'hr', auth: true, role: 'hr'},
                  component: () => import('./views/hr/Staff.vue')
            },
            {
                  path: '/hr/response/:id',
                  name: 'hr-response-view',
                  meta: {layout: 'hr', auth: true, role: 'hr'},
                  component: () => import('./views/hr/ViewVacancyResponse.vue')
            },
            {
                  path: '/member/vacancies/view/:id',
                  name: 'member-vacancies-view',
                  meta: {layout: 'member', role: 'member'},
                  component: () => import('./views/member/ViewVacancies.vue')
            },
            {
                  path: '/member/response/:id',
                  name: 'member-response-add',
                  meta: {layout: 'member', role: 'member'},
                  component: () => import('./views/member/AddResponse.vue')
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
                        next();
                  }

            }
            else{
                  next()
            }
      }
});

export default router