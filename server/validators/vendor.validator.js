const Joi = require('joi');



const schema = Joi.object({
    id : Joi.number().required(),
    
    name   :Joi.string()
             .required()
             .label('name'),
    phonenumber : Joi.number()
               .min(10)
              .max(10)
              .required()
              .label('phonenumber'),
    email   :  Joi.string()
              .max(100)
              .required()
              .label('email'),
     ssn     :Joi.number()
              .max(9)
              .required()
              .label('ssnnumber'),

    stateandcity : Joi.string()
               .max(45)
               .required()
               .label('stateandcity'),
    zipcode : Joi.string()
               .length(5)
               .pattern(/^[0-9]+$/)
               .message({'string.pattern.base': `zipcode have only digits`})
               .required()
               .label('zipcode'),

            })

            module.exports = {
                vendorSchema: schema
            }