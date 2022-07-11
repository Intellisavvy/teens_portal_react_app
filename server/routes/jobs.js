var express = require('express');
var router = express.Router();
const jv = require('../validators/job.validator')

const jobsController = require('../controllers/job.controller');
var cors = require ('cors');
const jobValidator = require('../validators/job.validator');
const { jobSchema } = require('../validators/job.validator');



// /* GET job listing. */
 router.get('/', jobsController.getall);

/* GET job listing. */
router.get('/:id',cors(),jobsController.get);

/* POST job listing. */
router.post('/',cors(),jobsController.create);

/* PATCH job listing. */
router.put('/:id',cors(),jobsController.update);

/* DELETE job listing. */
router.delete('/:id',cors(),jobsController.remove);

module.exports = router;
