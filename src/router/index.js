import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import About from '../views/AboutView.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobDetails from '../views/Jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },

  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },

  // Redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },

  // Catchcall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
