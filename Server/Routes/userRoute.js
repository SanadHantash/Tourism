const userController = require('../Controllers/userController');
const express = require('express');
const app = express();
const router = express.Router();


router.post('/signup', userController.createUser);



module.exports = router;


