// const joi = require('joi');
// const { schema } = require('./models/user');
// const { model } = require('mongoose');

// //validating registration
// const registerValidation = (data) => {
//     const Schema = joi.object(
//         {
//             name: joi.string().min(6).max(255).required(),
//             email: joi.string().min(6).max(255).required(),
//             password: joi.string().min(6).max(255).required()
//         }
//     );

//     return schema.validate(data);
// }

// model.exports = { registerValidation };

const joi = require('joi');

const registerValidation = (data) => {
    const schema = joi.object(
        {
            name: joi.string().min(6).max(255).required(),
            email: joi.string().min(6).max(255).required(),
            password: joi.string().min(6).max(255).required()
        });
    return schema.validate(data);
}

module.exports = { registerValidation };