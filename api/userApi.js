const router = require('express').Router();
const userController = require('../controller/userController');

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userController.insert);
router.put('/', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;