const express = require('express');
const router = express.Router();
import {createUser} from '../controllers/usersController';

router.post('/create', createUser);

module.exports = router;
