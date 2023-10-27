const blogController = require('../Controllers/blogController');
const express = require('express');
const app = express();
const router = express.Router();

router.get('/home', blogController.allblogs);

module.exports = router;