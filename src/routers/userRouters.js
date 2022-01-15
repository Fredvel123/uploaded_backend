const { Router } = require('express');
const router = Router();
// 
const userCtl = require('../controllers/userCtl');

router.get('/all', userCtl.verifyToken,  userCtl.getAllUsers);
router.post('/signup',  userCtl.createNewUser);
router.post('/login',  userCtl.registerUser);
router.get('/about', userCtl.verifyToken,  userCtl.getInfoUser);


module.exports = router;