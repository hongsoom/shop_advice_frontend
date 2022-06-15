import axios from 'axios';

const api = axios.create({
	baseURL: "http://3.34.42.87:3000",
	headers: { Authorization: "Bearer " + localStorage.getItem("token")
	},
});

export const apis = {
	// article
	add: (contents) => api.post('/api/articles', contents),
	edit: (id, contents) => api.put(`api/articles/${id}`, contents),
	del: (id) => api.delete(`/api/article/${id}`),
	articles: () => api.get('/api/article'),
	article: (id) => api.get(`/api/articles/${id}`),
	search: (value) => api.get(`/api/articles/search?query=${value}`),
};