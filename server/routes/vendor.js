var express = require('express');
var router = express.Router();
const vendorController = require('../controllers/vendor.controller');
var cors = require ('cors')
// /* GET job listing. */
 router.get('/', vendorController.getall);

/* GET job listing. */
router.get('/:id',cors(), vendorController.get);

/* POST job listing. */
router.post('/',cors(), vendorController.create);

/* PATCH job listing. */
router.put('/:id',cors(), vendorController.update);

/* DELETE job listing. */
router.delete('/:id',cors(), vendorController.remove);

module.exports = router;
