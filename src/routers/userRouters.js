const { Router } = require('express');
const router = Router();
// 
const userCtl = require('../controllers/userCtl');

router.get('/all', userCtl.verifyToken,  userCtl.getAllUsers);
router.post('/signup',  userCtl.createNewUser);
router.post('/login',  userCtl.registerUser);


module.exports = router;