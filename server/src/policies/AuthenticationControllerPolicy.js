const Joi = require('joi')

module.exports= {
    register(req, res, next){
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{6,32}$')
            )
        }

        const {err, value} = Joi.validate(req.body, schema)
        if(err){
            switch(err.details[0].context.key){
                case 'email':
                res.status(400).send({
                    err: 'Email address is not valid'
                })
                break
                case 'password':
                res.status(400).send({
                    err: `The password provided failed to match the following rules:
                    <br>
                    1. It must contain ONLY the following characters: lower case, upper case, numerics
                    <br>
                    2. It must be at least 6 characters and not greater than 32 characters.
                    `
                })
                break
                default:
                res.status(400).send({
                    err: 'invalid registration infomation'
                })
            }
        }else{
            next()
        }
    }
}