var express = require('express');
var router = express.Router();
const teenController = require('../controllers/teen.controller');
var cors = require ('cors')
// /* GET job listing. */
 router.get('/', teenController.getall);

/* GET job listing. */
router.get('/:id',cors(), teenController.get);

/* POST job listing. */
router.post('/',cors(),teenController.create);

/* PATCH job listing. */
router.patch('/:id',cors(),teenController.update);

/* DELETE job listing. */
router.delete('/:id',cors(),teenController.remove);

module.exports = router;