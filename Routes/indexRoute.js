const router = require("express").Router();

const personnesController = require('../controllers/personnesController');

router.get('/', personnesController.list);
router.get('/getinfo/:id', personnesController.getinfo);


module.exports = router;