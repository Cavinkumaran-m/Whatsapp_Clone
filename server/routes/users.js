import express  from 'express';

import { login, signup } from '../controllers/auth.js'

import { getAllChats } from '../controllers/users.js'

import auth from '../middlewares/auth.js';

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
// router.patch('/update/:id', auth, updateProfile)

router.get('/getAllChats/:email',getAllChats)

export default router