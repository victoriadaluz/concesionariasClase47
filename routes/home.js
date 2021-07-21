let express = require('express');
let router = express.Router();
let controller = require('../controllers/homeController')

/* de controller traeme el método index */
router.get('/', controller.index)




module.exports = router;