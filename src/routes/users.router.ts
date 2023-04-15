const express = require('express');
const router = express.Router();
import { createUser, updateUser } from '../controllers/usersController';

router.post('', createUser);
router.patch('', updateUser);
router.get('', createUser);
router.delete('', createUser);

module.exports = router;
