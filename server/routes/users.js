import express from 'express';
import {
  getUserByHandle, createUser, deleteUserByHandle,updateUserByHandle,getUsers} from '../controllers/users.js';

const router = express.Router();
router.get('/', getUsers);
router.get('/:handle', getUserByHandle);
router.post('/create', createUser);
router.delete('/:handle/delete', deleteUserByHandle);
router.patch('/:handle/update', updateUserByHandle);


export default router;
