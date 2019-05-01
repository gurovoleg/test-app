export default class JsonApiService {
	_apiBase = "http://jsonplaceholder.typicode.com";

	async getAllComments() {
		const api = `${this._apiBase}/comments`;
		const res = await fetch(api);
		if (!res.ok) {
			console.log("Fetch data error! getAllcomments(): " + res.status);
			return null;
		}
		return await res.json();
	}
}