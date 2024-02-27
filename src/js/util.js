export function setCookie(name, value, days = 1) {
	let exp = new Date();
	exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
	if (days == 0) {
		document.cookie = name + "=" + escape(value) + ";path=/";
	} else {
		document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString();
	}
}

export function getCookie(name) {
	let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
	if (arr = document.cookie.match(reg)) return unescape(arr[2])
	else return null
}