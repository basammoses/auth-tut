import express from 'express';
import {
  getUserByHandle, createUser, deleteUserByHandle,updateUserByHandle,getUsers, getUserPostsByHandle, addUserPostsToProfile} from '../controllers/users.js';

const router = express.Router();
router.get('/', getUsers);
router.get('/:handle', getUserByHandle);
router.get('/:handle/posts', getUserPostsByHandle);
router.post('/create', createUser);
router.delete('/:handle/delete', deleteUserByHandle);
router.patch('/:handle/update', updateUserByHandle);
router.patch('/:handle/add', addUserPostsToProfile);


export default router;
