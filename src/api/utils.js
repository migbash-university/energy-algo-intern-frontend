// Util.js Page for the API Functionality,
const fetch = process.browser ? window.fetch : require('node-fetch').default;

let base_url;
if (process.env.NODE_ENV != 'production') {
	base_url = 'http://192.168.0.10:8080'
} else {
	base_url = 'https://energy-web-intern-backend.herokuapp.com'
}

// Function for Internal MiddleWare Post Request,
export function post(endpoint, data) {

	return fetch(base_url + endpoint, {
		method: 'POST',
		// credentials: 'include',
		// mode: "cors",
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		}
	}).then(response => {
		return response.json()
	});
};