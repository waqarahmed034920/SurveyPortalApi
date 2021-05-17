const router = require('express').Router();
const surveyController = require('../controller/surveyController');

router.get('/', surveyController.getAll);
router.post('/', surveyController.insert);

module.exports = router;