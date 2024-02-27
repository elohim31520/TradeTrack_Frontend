import axios from "axios"
import { getCookie } from '../js/util'

const API_HOST = 'http://localhost:1234'

export default function ajax(apiMethod, data, httpMethod) {
	const token = getCookie('Token')
	const headerConfig = {
		headers: {
			'authorization': `Bearer ${token}`,
		}
	}
	const params1 = [`${API_HOST}${apiMethod}`, headerConfig]
	const params2 = [`${API_HOST}${apiMethod}`, data, headerConfig]
	let p1
	switch (httpMethod) {
		case "GET":
			p1 = axios.get(...params1)
			break

		case "POST":
			p1 = axios.post(...params2)
			break

		case "PATCH":
			p1 = axios.patch(...params2)
			break

		case "DELETE":
			p1 = axios.delete(...params1)
			break

		case "PUT":
			p1 = axios.put(...params2)
			break

		default:
			break;
	}
	return p1.then(res => res.data)
		.catch(err => {
			console.error(err.message);
			console.log(err.response);
		})
}