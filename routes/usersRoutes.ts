const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController.ts');

router.post('/create', usersController.createUser);

module.exports = router;
