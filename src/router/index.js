import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
		{
			path: '/from',
			component: () => import('../views/From.vue')
		},

	],
})

export default router