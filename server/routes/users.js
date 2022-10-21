const express = require('express')
const router = express.Router()
const bcyrpt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require('../Modals/UserSchema')

router.post('/SignUp',async(req,res)=>{
  
    try{
        let {name,phone,email,password}=req.body
        password=await bcyrpt.hash(password, 10)
        UserModel.create({ 
          name:name,
          phone:phone,
          email:email,
          password:password
        }).then((response)=>{
          console.log(response);
          res.json({user: response._id})
        }).catch((err)=>{
          if(err.message.includes('E11000')>-1){
            res.json('Email already exists')
          }else{
            res.json('Invalid credentials')
          }
        })
      }catch(error){
        res.json('Something went wrong')
      }
   
})


router.post('/login',async(req,res)=>{
  try {

    const {email,password}=req.body
    const user = await UserModel.findOne({email})
    if(user) {
      if(!user.isBlocked){  
        const auth = await bcyrpt.compare(password, user.password);
        if (auth) {
          const id=user._id
          const token=jwt.sign({id}, process.env.JWT_KEY,{
            expiresIn:"365d",
          })
          console.log(token);
          // res.cookie("jwt", token);
  
          res.json({user: user, token:token, auth:true})
        }else{
          res.json('Incorrect password')
        }
       }else{
        res.json('Your account is blocked due to some reasons')
       }
    }else{
      res.json('Email not registered')
    }
  }catch(error){
    console.log(error);
  }
  })

router.get('/home',(req,res)=>{
  const cookie = req.cookies.jwt
  const decode = jwt.verify(cookie, process.env.JWT_KEY);
  console.log(decode)
  res.send('welcome to homepage')
})


module.exports = router