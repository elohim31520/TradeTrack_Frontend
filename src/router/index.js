import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/technews',
			name: 'technews',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/TechNews.vue')
		},
		{
			path: '/news',
			name: 'news',
			component: () => import('../views/News.vue')
		},
		{
			path: '/allnews',
			name: 'allnews',
			component: () => import('../views/AllNews.vue')
		}
	]
})

export default router
