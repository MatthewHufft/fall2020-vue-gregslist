import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import CarDetails from '../pages/CarDetails.vue'
// @ts-ignore
import Cars from '../pages/Cars.vue'
// @ts-ignore
import Jobs from '../pages/Jobs.vue'
// @ts-ignore
import JobDetails from '../pages/JobDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetails
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails
  },
  {
    path: '*',
    redirect: '/cars'
  },

]

const router = new VueRouter({
  routes
})

export default router
