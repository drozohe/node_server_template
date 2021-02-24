
const {Router} = require('express');
const code2dController = require('../controllers/codes2d.controller');
const router = Router();

router.get('/', code2dController.get);

router.put('/', code2dController.put);

router.post('/', code2dController.post);

router.delete('/', code2dController.del);


module.exports = router;

