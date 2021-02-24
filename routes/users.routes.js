
const {Router} = require('express');
const userController = require('../controllers/user.controller');
const router = Router();

router.get('/', userController.get);

router.put('/', userController.put);

router.post('/', userController.post);

router.delete('/', userController.del);


module.exports = router;

