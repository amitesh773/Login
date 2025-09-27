//--------------------------------Bcrypt----------------------------------------
const Bcrypt = require('bcrypt') 
//----------------------------------JWT-------------------------------------
const jwt = require('jsonwebtoken')
const User = require('../module/User')
const userValidation = require('../validation/userValidation')

const registreUser = async(req,res)=>{
    try {
        let{error} = userValidation.validate(req.body)
        if(error){
            return res.status(404).json({message: error.details[0].message})
        }
    let {username, email, password } = req.body;
    
    let existingUser = await User.findOne({username, email})
    if(existingUser){
      return res.status(400).json({message: "Email and Username exist..!!"})
    }
    
    let hashPassword = await Bcrypt.hash(password,10)

    let data = new User ({
        username,
        email,
        password : hashPassword
    })

    await data.save();

    res.status(200).json({message: "Registerd sussifully...!!!"})

    } catch (err) {
        console.error(err);
        res.status(400).json({message:"Internal server error"})
    }
}

const loginUser = async(req,res)=>{
    try {
        let {email,password} = req.body;
        if(!email|| !password){
         return res.status(400).json({message: 'Email and Password is required..!!'})
        }
    
    let registerUser = await User.findOne({email})
    if(!registerUser){
         return res.status(404).json({message: 'Email does not registered, please signup first'})
      }

    let checkPassword = await Bcrypt.compare(password,registerUser.password);
    if(!checkPassword){
         return res.status(400).json({message: 'Wrong Password'})
      }

      let token = jwt.sign(
         {
            username: registerUser.username,
            email: registerUser.email,
            role: registerUser.role,
         },
         process.env.JWT_SECRET,  
         { expiresIn: '12h' }   
      );

      res.status(200).json({message: 'Login Successfull..!!', token})
    } catch (err) {
        console.error(err)
        res.status(200).json({message: "Internal server error"})
    }
}

module.exports = {
    registreUser,loginUser
}