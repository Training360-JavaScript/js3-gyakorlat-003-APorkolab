'use strict';
const cookieHandler = {
	getAll() {
		const cookiesObj = {};
		const cookiesArr = document.cookie.split('; ');
		cookiesArr.forEach(cookie => {
			const pair = cookie.split('=');
			cookiesObj[pair[0]] = pair[1];
		})
		return cookiesObj;
	},
	toSessionStorage() {
		const backTo = cookieHandler.getAll();
		for (let k in backTo) {
			sessionStorage.setItem(k, backTo[k])
		}
	},
	flush() {
		localStorage.clear();
		document.cookie.split(";").forEach(function (c) {
			document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
		});
	}
}


export {
	cookieHandler
};