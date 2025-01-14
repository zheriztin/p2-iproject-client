import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Recipe from '../views/Recipe.vue'
import RecipeDetail from '../components/RecipeDetail.vue'
import Favourites from '../views/Favourites.vue'
import FilteredRecipes from '../views/FilteredRecipes.vue'
import Subscribe from '../views/Subscribe.vue'
import FavouriteDetail from '../components/FavouriteDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children : [
      {
        path: '/',
        name: 'Recipe',
        component: Recipe,
      },
      {
        path: '/favourites',
        name: 'Favourites',
        component: Favourites,
      },
      {
        path: '/favourites/:id',
        name: 'FavouriteDetail',
        component: FavouriteDetail
      },
      {
        path: '/search',
        name: 'FilteredRecipes',
        component: FilteredRecipes,
      },
      {
        path: '/recipe/:id',
        name: 'RecipeDetail',
        component: RecipeDetail
      },
      {
        path: '/subscribe',
        name: 'Subscribe',
        component: Subscribe
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach ((to, from, next) => {
  if (localStorage.access_token && to.name === "Login") {
    next ({name: "Home"})
  } else if (!localStorage.access_token && to.name === "Favourite") {
    next ({name : "Home"})
  } else {
    next()
  }
})

export default router
