import axios from 'axios';

const url = 'http://localhost:5000/posts';

const API = axios.create({ baseURL: 'http://localhost:5000' });

//API.interceptors.request.use((req) => {
    //if (localStorage.getItem('profile')) {
        //req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    //}

    //return req;
//});

export const fetchPosts = () => API.get(url);
export const createPost = (newPost) => API.post(url, newPost);
export const likePost = (id) => API.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`${url}/${id}`);

//export const signIn = (formData) => API.post('/user/signin', formData);
//export const signUp = (formData) => API.post('/user/signup', formData);
