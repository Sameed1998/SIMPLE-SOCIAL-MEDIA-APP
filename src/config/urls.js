export const API_BASE_URL = "https://jsonplaceholder.typicode.com"

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const GET_POSTS = getApiUrl('/posts');
export const ADD_POST = getApiUrl('/posts');