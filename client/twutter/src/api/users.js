import api from './apiConfig.js';

export const signin = payload => api.post(`/auth/login`, payload).then(res => res.data).then
  (data => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    } 
    if (data.token)  {
      localStorage.setItem('token', data.token);
    }
    return data;
  })

export const verifyToken = token => api.post(`/auth/verify`, token).then(res => res.data)
export const logout = () => api.post(`/auth/logout`).then(res => res.data).then
  (data => {
    localStorage.clear();
    return data;
  })






  

  ;
export const signup = payload => api.post(`/auth/signup`, payload);
export const getAllUsers = () => api.get(`/users`);
export const updateUserByHandle = (handle, payload) => api.patch(`/user/${handle}`, payload);
export const deleteUserByHandle = handle => api.delete(`/user/${handle}`);
export const getUserByHandle = handle => api.get(`/user/${handle}`);
