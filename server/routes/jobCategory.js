var express = require('express');
var router = express.Router();
const jobcategory = require('../controllers/jobcategory.controller');

// const jobcategoryController = require('../controllers/jobcategory.controller');
var cors = require ('cors');
// const jobcategoryValidator = require('../validators/jobcategory.validator');
// const { jobcategorySchema } = require('../validators/jobcategory.validator');



// /* GET job listing. */
 router.get('/', jobcategory.getall);

/* GET job listing. */
router.get('/:id',cors(),jobcategory.get);

/* POST job listing. */
router.post('/',cors(),jobcategory.create);

/* PATCH job listing. */
router.put('/:id',cors(),jobcategory.update);

/* DELETE job listing. */
router.delete('/:id',cors(),jobcategory.remove);

module.exports = router;
