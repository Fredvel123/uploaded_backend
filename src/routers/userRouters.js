const { Router } = require('express');
const router = Router();
// 
const userCtl = require('../controllers/userCtl');

router.get('/all',  userCtl.getAllUsers);
router.post('/signup',  userCtl.createNewUser);


module.exports = router;