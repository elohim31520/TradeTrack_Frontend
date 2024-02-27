import axios from "axios"
import ajax from './ajax'

function getUserFavoriteCompanyNews(data) {
	return ajax(`/news/subscription`, data, 'POST')
}

function getUserFavoriteNews(data) {
	return ajax(`/favorite/news`, data)
}

function setUserFavoriteNews(data) {
	return ajax(`/favorite/news/set`, data)
}

function getUserSubscriptionNews(data) {
	// 參數 userId, pageIndex, pageSize startDate ,endDate title, company
	return ajax(`/news/subscription`, data, 'GET')
}

function getAllNews(data) {
	// 參數 pageIndex, pageSize startDate ,endDate, query
	return ajax(`/news/queryall`, data, 'POST')
}

function userLogin(userId, pwd) {
	return ajax(`/users/login`, { userId, pwd }, 'POST')
}

function userRegister(userId, pwd) {
	return axios.post(`/users/register`, { userId, pwd })
}

export default {
	getUserFavoriteNews,
	getUserSubscriptionNews,
	getAllNews,
	userLogin,
	userRegister
}