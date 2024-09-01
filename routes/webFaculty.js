import express from 'express';
import {getregisterFacultyController, getloginFacultyController} from '../controllers/get_authFacultyController.js'
import {postregisterFacultyController, postloginFacultyController} from '../controllers/post_authFacultyController.js'

const router = express.Router();

router.get('/register', getregisterFacultyController);
router.get('/login', getloginFacultyController);

router.post('/register', postregisterFacultyController);
router.post('/login', postloginFacultyController);

export default router;