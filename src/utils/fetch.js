const fetch = process.browser ? window.fetch : require('node-fetch').default;

// Function for Internal MiddleWare Post Request:
export function post(endpoint, data) {
	console.log('data-fetch-middleware', data);
	return fetch(endpoint, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		}
	}).then(r => r.json());
}