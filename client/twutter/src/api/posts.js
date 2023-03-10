
import api from './apiConfig.js';


export const getPostById = id => api.get(`/post/${id}`);
export const insertPost = payload => api.post(`/post/create`, payload

  
  

  


);
export const getAllPosts = () => api.get(`/post`);
export const updatePostById = (id, payload) => api.patch(`/post/${id}`, payload);
export const deletePostById = id => api.delete(`/post/${id}`);