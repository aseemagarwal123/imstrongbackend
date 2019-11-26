
const express = require('express');
const bodyParser = require('body-parser');
const {
     fetchprizes
 } = require('../controllers/PrizeController');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());



router.get('/fetchprizes',fetchprizes)



module.exports = router;
