const router = require('express').Router();
const faqController = require('../controller/faqController');

router.get('/', faqController.getAll);
router.get('/:id', faqController.getById);
router.post('/', faqController.insert);
router.put('/', faqController.update);
router.delete('/:id', faqController.delete);

module.exports = router;