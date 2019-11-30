import VueRouter from 'vue-router'
import Home from './pages/Home'
import CarFull from './pages/CarFull'
import ErrorCmp from './pages/Error'

const Cars = resolve => {
  require.ensure(['./pages/Cars.vue'], () => {
    resolve(
      require('./pages/Cars')
    )
  })
}

const Car = resolve => {
  require.ensure(['./pages/Car.vue'], () => {
    resolve(
      require('./pages/Car')
    )
  })
}

export default new VueRouter({
  routes: [
    {
      path: '', // localhost:8080
      component: Home
    },
    {
      path: '/cars', // localhost:8080/cars
      component: Cars,
      name: 'Cars'
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full',
          component: CarFull,
          name: 'CarFull',
          beforeEnter (to, from, next) {
            let n = true
            if (n) {
              next(true)
            } else {
              next(false)
            }
          }
        }
      ]
    },
    {
      path: '/none',
      redirect: {
        name: 'Cars'
      }
    },
    {
      path: '*',
      component: ErrorCmp
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return {
      x: 0,
      y: 500
    }
  }
})
