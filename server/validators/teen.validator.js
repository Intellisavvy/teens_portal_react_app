const Joi = require('joi');



const schema = Joi.object({
    
    firstName : Joi.string()
                      .min(5)
                      .max(500)
                      .required()
                      .label(' firstName'),
    lastName : Joi.string()
              .max(50)
              .required()
              .label('lastName'), 
    gender : Joi.string().required(),
     dob   :Joi.date()
            .required()
            .label("dob"),
    ssn     :Joi.number()
            .optional()
            .label('ssnnumber'),
    parentName :Joi.string()
            .required()
            .label('parent/gaurdianName'),
    parentEmail:Joi.string()
                .required()
                .label('parent/gaurdianemail'),
    address:Joi.string()
            .required()
            .label('address'),



})

module.exports = {
    teenSchema: schema
}

