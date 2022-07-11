const Joi = require('joi');



const schema = Joi.object({
    
    jobdescription : Joi.string()
                      .min(5)
                      .max(500)
                      .required()
                      .label(' jobdescription'),
    payment : Joi.string()
              .max(50)
             
              .label('payment'),
    timestart : Joi.date()
               
                .label('timestart'),
    timeend :Joi.date()
              
               .label('timeend'),
    timmings : Joi.string()
                .max(80)
                .required()
                .label('timmings'),
    state : Joi.string()
                .required()
                .label('state'),

    city : Joi.string()
            .max(45)
            .required()
            .label('city'),
    zipcode: Joi.string()
             .length(5)
             .pattern(/^[0-9]+$/)
             .message({'string.pattern.base': `zipcode have only digits`})
             .required()
            .label('zipcode'),
    contactdetails : Joi.string()
             .max(200)
             .required()
             .label('contacts'),
    // job_category_id : Joi.number().
    //                   min(2)
    //                  .max(50)
    //                  .required()
    //                  .label('jcfk'),


})

module.exports = {
    jobSchema: schema
}