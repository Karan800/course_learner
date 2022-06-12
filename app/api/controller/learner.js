const learnerModel = require('../models/learner')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const create = (req,res,next) => {
    const {name,email,password} = req.body

    learnerModel.create({
        name,
        email,
        password
    }, (err,result) => {
        if(err)
        next(err)
        else
        res.status(200).json({
            status: "Success",
            message: "Learner Added Successfully",
            data: result
        })
    })
} 

const login = (req,res,next) => {
    learnerModel.findOne({email : req.body.email}, (err,result) => {
        if(err){       
             next(err)
             console.log("invalid learner")
        }
        else{
            if(bcrypt.compareSync(req.body.password,result.password)){
                const token = jwt.sign({id:result._id},req.app.get('secretKey'), {expiresIn:'1h'})
                res.json({
                    status:"Success",
                    message:"Successfully Logged in",
                    data: {
                        learner: result,
                        token: token
                    }
                })
            }
        }
    })
}

module.exports = {create, login}