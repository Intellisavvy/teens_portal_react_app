const Joi = require('joi');


const schema = Joi.object({
    id : Joi.number().required(),
    
    username: Joi.string()
              .min(5)
              .max(500)
              .required()
              .label(' username'),
    password: Joi.password()
              .min(8)
              .max(100)
              .required()
              .label('password'),
    type:     Joi.enum('teen','parent','vendor')
              .required()
              .label('type')

})

module.exports = {
    userSchema: schema
}