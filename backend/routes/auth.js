import express from 'express';
import { createOrUpdateUser } from '../controllers/createOrUpdateUser.js';

const router = express.Router();

router.get('/create-or-update-user', createOrUpdateUser);

export default router;
