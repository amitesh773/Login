const jwt = require('jsonwebtoken');
const { message } = require('../validation/userValidation');

const authentication = (req, res, next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(400).json({message: 'Please login first..!!!'})
        }

        let decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded
        next()

    } catch (error) {
        return res.status(400).json({message:"Invalid token...!!!"})
    }
}

module.exports = authentication;