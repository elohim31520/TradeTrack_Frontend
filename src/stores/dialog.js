import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoginDialogStore = defineStore('loginDialogStore', () => {
	const visible = ref(false)
	// const doubleCount = computed(() => count.value * 2)
	function closeDialog() {
		visible.value = false
	}
	function openDialog() {
		visible.value = true
	}

	return { visible, closeDialog, openDialog }
})
