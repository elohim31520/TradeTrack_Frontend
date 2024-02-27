<template>
	<div class="card flex justify-content-center">
		<Dialog v-model:visible="store.visible" modal header="Header" :style="{ width: '50vw' }">
			<div class="flex flex-column">
				<div class="flex flex-column gap-2">
					<label for="username">Username</label>
					<InputText id="username" v-model="username" aria-describedby="username-help" />
					<small id="username-help">Enter your username</small>
				</div>

				<div class="flex flex-column gap-2">
					<label for="password">Password</label>
					<InputText id="password" v-model="password" aria-describedby="password-help" />
					<small id="password-help">Enter your password</small>
				</div>
			</div>
			<template #footer>
				<Button label="No" icon="pi pi-times" @click="store.closeDialog()" text />
				<Button label="Login" icon="pi pi-check" @click="doLogin()" autofocus />
			</template>
		</Dialog>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useLoginDialogStore } from '../stores/dialog.js'
import { setCookie } from '../js/util'

import API from '@/api'
const store = useLoginDialogStore()
const username = ref('');
const password = ref('');
const doLogin = () => {
	API.userLogin(username.value, password.value).then(res => {
		setCookie('Token', res.token)
		store.closeDialog()
	})
}
</script>

<style>
.flex {
	display: flex;
}
.flex-column {
	flex-direction: column;
}
</style>