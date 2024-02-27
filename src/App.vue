<template>
	<div class="flex">
		<aside class="sticky top-0 left-0">
			<SideMenu />
		</aside>

		<div class="flex flex-col">
			<NavBar />
			<div class="route-display-block">
				<RouterView />
			</div>
		</div>
	</div>
	<LoginDialog />

</template>

<script setup>
import SideMenu from '@/components/SideMenu.vue'
import NavBar from '@/components/NavBar.vue'

import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LoginDialog from './components/LoginDialog.vue'
import { useLoginDialogStore } from './stores/dialog.js'
const { openDialog } = useLoginDialogStore()
import { ref } from "vue";
const visible = ref(false);
const items = ref([
	{
		label: 'File',
		icon: 'pi pi-fw pi-file',
		items: [
			{
				label: 'New',
				icon: 'pi pi-fw pi-plus',
				items: [
					{
						label: 'Bookmark',
						icon: 'pi pi-fw pi-bookmark'
					},
					{
						label: 'Video',
						icon: 'pi pi-fw pi-video'
					}
				]
			},
			{
				label: 'Delete',
				icon: 'pi pi-fw pi-trash'
			},
			{
				separator: true
			},
			{
				label: 'Export',
				icon: 'pi pi-fw pi-external-link'
			}
		]
	},
	{
		label: 'Edit',
		icon: 'pi pi-fw pi-pencil',
		items: [
			{
				label: 'Left',
				icon: 'pi pi-fw pi-align-left'
			},
			{
				label: 'Right',
				icon: 'pi pi-fw pi-align-right'
			},
			{
				label: 'Center',
				icon: 'pi pi-fw pi-align-center'
			},
			{
				label: 'Justify',
				icon: 'pi pi-fw pi-align-justify'
			}
		]
	},
	{
		label: 'Users',
		icon: 'pi pi-fw pi-user',
		items: [
			{
				label: 'New',
				icon: 'pi pi-fw pi-user-plus'
			},
			{
				label: 'Delete',
				icon: 'pi pi-fw pi-user-minus'
			},
			{
				label: 'Search',
				icon: 'pi pi-fw pi-users',
				items: [
					{
						label: 'Filter',
						icon: 'pi pi-fw pi-filter',
						items: [
							{
								label: 'Print',
								icon: 'pi pi-fw pi-print'
							}
						]
					},
					{
						icon: 'pi pi-fw pi-bars',
						label: 'List'
					}
				]
			}
		]
	},
	{
		label: 'Events',
		icon: 'pi pi-fw pi-calendar',
		items: [
			{
				label: 'Edit',
				icon: 'pi pi-fw pi-pencil',
				items: [
					{
						label: 'Save',
						icon: 'pi pi-fw pi-calendar-plus'
					},
					{
						label: 'Delete',
						icon: 'pi pi-fw pi-calendar-minus'
					}
				]
			},
			{
				label: 'Archieve',
				icon: 'pi pi-fw pi-calendar-times',
				items: [
					{
						label: 'Remove',
						icon: 'pi pi-fw pi-calendar-minus'
					}
				]
			}
		]
	},
	{
		separator: true
	},
	{
		label: 'Quit',
		icon: 'pi pi-fw pi-power-off'
	}
]);
</script>

<style>
.side-menu-wrap {
	position: fixed;
	top: 0;
	height: 100vh;
	left: 0;
	border-right: 1px solid #eee;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}

.route-display-block {
	margin-top: 6rem;
	padding: 1rem;
}
</style>
