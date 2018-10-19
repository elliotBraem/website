import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/pages/Homepage';
import Resume from '@/pages/Resume';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    }, {
      path: '/resume',
      name: 'Resume',
      component: Resume,
    },
  ],
});
