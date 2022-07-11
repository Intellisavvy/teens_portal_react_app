const Joi = require('joi');



const schema = Joi.object({
   
    
    userName: Joi.string()
                 .min(5)
                 .max(500)
                 .required()
                 .label(' job_category'),



})

module.exports = {
    jobcategorySchema: schema
}