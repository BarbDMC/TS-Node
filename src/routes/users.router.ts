const express = require('express');
const router = express.Router();
import {createUser} from '../controllers/usersController';

router.get('/create', createUser);

module.exports = router;
