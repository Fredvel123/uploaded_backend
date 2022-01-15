const { Router } = require('express');
const router = Router();
// 
const userCtl = require('../controllers/userCtl');

router.get('/all',  userCtl.getAllUsers);

module.exports = router;