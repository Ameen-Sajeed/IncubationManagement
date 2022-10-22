const express = require('express')
const router = express.Router()
const jwt= require('jsonwebtoken')
const bcyrpt = require('bcrypt')
const applicationForm = require('../Modals/user/Application')

router.post('/login',(req,res)=>{
    try {

        const {ADMIN_EMAIL,ADMIN_PWD}=process.env
        const {email,password}= req.body
        if(email===ADMIN_EMAIL){
            if(password===ADMIN_PWD){
                const id='8394n43x14n384n1njk'
                const token=jwt.sign({id}, process.env.JWT_KEY,{
                    expiresIn:"365d",
                })


                console.log("kjhkh");
                console.log(token);

                res.json({admin: true, token:token, auth:true})

            
        }else{
            res.json('Incorrect Password')
        }
    }else{
        res.json('Incorrect email id')
    }
        
    } catch (error) {
        
    }
})

router.get('/application', (req, res) => {
    applicationForm.find({}).then((data)=>{
      console.log(data);
      res.json(data);
   }).catch(()=>{
      let err='Something went wrong!'
      res.json({err:err});
   })
   })


module.exports = router