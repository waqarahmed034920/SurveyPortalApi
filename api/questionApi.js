const router = require('express').Router();
const questionController = require('../controller/questionController');

router.post('/', questionController.insert);

module.exports = router;