'use strict';

function setCookie(name, string) {
	const now = new Date();
	now.setTime(now.getTime + 900000);
	const expires = now.toUTCString();
	document.cookie = `${name}=${string}; expires=${expires}`;
};

export default setCookie;