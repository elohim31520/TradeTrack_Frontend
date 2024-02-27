<template>
	<div class="news-wrap">
		<div class="card flex justify-content-center">
			<Calendar v-model="startDate" placeholder="start Date" />
			<Calendar v-model="endDate" placeholder="end Date" />
			<InputText type="text" v-model="inputQuery" placeholder="Search"/>
			<Button type="button" label="Submit" icon="pi pi-search" :loading="loading" @click="apiGetUserNews" />
		</div>

		<DataTable
			:value="news"
			:totalPages="1"
			:totalRecords="10000"
			tableStyle="min-width: 60rem"
			paginator
			:rows="pageSize"
			:rowsPerPageOptions="[5, 10, 20, 50]"
			@page="onPage($event)"
		>
			<Column field="title" header="Title"></Column>
			<Column field="company" header="Company"></Column>
			<Column field="createdAt" header="Time"></Column>
			<Column field="web_url" header="Detail">
				<template #body="slotProps">
					<Button label="Detail" severity="help" @click="gotoWeb(slotProps.data.web_url)" />
				</template>
			</Column>
		</DataTable>
	</div>
</template>

<script setup>
import axios from "axios";
import api from "@/api";
import { ref, onMounted } from 'vue';

const startDate = ref();
const endDate = ref();
const news = ref([])
const pageIndex = ref(0)
let pageSize = ref(200)
let inputQuery = ref("");

const onPage = (event) => {
	console.log(event);

	pageIndex.value = event.page
	apiGetUserNews()
};

onMounted(() => {
	// apiGetUserNews()
})

const apiGetUserNews = () => {
	api.getAllNews({
		pageSize: pageSize.value,
		pageIndex: pageIndex.value,
		startDate: startDate.value,
		endDate: endDate.value,
		query: inputQuery.value,
	}).then(res => {
		news.value = res.data
	});
}

const gotoWeb = url => {
	window.open(url)
}


</script>

<style lang='scss'>
.news-wrap {
	width: 100%;
	height: 100vh;
	td {
		background-color: #333;
		color: #eee;
	}
}
</style>