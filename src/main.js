import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import IndexPage from './pages/index.vue'

Vue.use(VueRouter)

// define routes that tell VueRouter where to direct different kinds of requests
const routes = [
    { path: '/', component: IndexPage },
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router, ...App
}).$mount('#app')
