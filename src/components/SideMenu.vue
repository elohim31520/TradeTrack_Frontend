<template>
	<div class="card flex justify-content-center side-menu-container">
		<Menu :model="items">
			<template #item="{ item }">
				<router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
					<a v-ripple :href="href" @click="navigate">
						<span :class="item.icon" />
						<span class="ml-2">{{ item.label }}</span>
					</a>
				</router-link>
				<a v-else v-ripple :href="item.url" :target="item.target">
					<span :class="item.icon" />
					<span class="ml-2">{{ item.label }}</span>
				</a>
			</template>
		</Menu>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();

const items = ref([
	{
		label: 'Tech News',
		icon: 'pi pi-cloud',
		route: '/technews'
	},
	{
		label: 'Stock News',
		icon: 'pi pi-list',
		route: '/news',
		// command: () => {
		// 	this.$router.push('/news');
		// }
	},
	{
		label: 'All News',
		icon: 'pi pi-twitter',
		route: '/allnews'
	},
	{
		label: 'Finviz S&P 500 Map',
		icon: 'pi pi-qrcode',
		url: 'https://finviz.com/map.ashx'
	}
]);
</script>

<style lang="scss">
.side-menu-container {
	.p-menu {
		background-color: rgb(24 24 27);
		height: 100vh;
		border-top:  none;
		border-bottom: none;
	}
	.p-menuitem-content{
		padding: 1rem;
	}
}
</style>