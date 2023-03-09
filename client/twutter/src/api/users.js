import api from './apiConfig.js';



export const insertUser = payload => api.post(`/user`, payload);
export const getAllUsers = () => api.get(`/users`);
export const updateUserByHandle = (handle, payload) => api.patch(`/user/${handle}`, payload);
export const deleteUserByHandle = handle => api.delete(`/user/${handle}`);
export const getUserByHandle = handle => api.get(`/user/${handle}`);
