<template>
	<div class="absolute top-0 bg-stone-900 flex items-center navbar-container">
		<Button label="Login" icon="pi pi-external-link" @click="openDialog()" />
		<Avatar label="P" class="mr-2" size="xlarge" shape="circle" style="background-color: rgb(31 41 55);"/>
	</div>
</template>

<script setup>
import { useLoginDialogStore } from '@/stores/dialog.js'
const { openDialog } = useLoginDialogStore()
</script>

<style lang='scss'>
.navbar-container{
	width: 100%;
	height: 5rem;
	left: 200px;
	box-sizing: border-box;
	border-bottom: 1px solid rgb(82 82 82);
}
</style>