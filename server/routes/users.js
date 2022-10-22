const express = require('express')
const router = express.Router()
const bcyrpt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require('../Modals/user/UserSchema')
const multer = require('multer')
const applicationForm = require('../Modals/user/Application')

const storage = multer.diskStorage({
  destination(req, file, callback) {
      callback(null, '../client/public/images');
  },
  filename(req, file, callback) {
      callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

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
        console.log(user,"lkl");
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

// router.post('/application', upload.single('image'), (req, res) => {
//   console.log(req.body);
//   try{
//       const application = new applicationForm ({
//           name: req.body.name,
//           email: req.body.email,
//           phone: req.body.phone,
//           address: req.body.address,
//           company_name: req.body.company_name,
//           image: req.file.filename,
//           Incubation: req.body.Incubation,
//           status: "pending",
//       })

//       application.save().then(data => {
//           console.log(data);
//           res.json(data)
//       }).catch(error => {
//           res.json(error)
//       })
//   } catch (error) {
//       console.log(error);
//   }

// })


router.post('/application/:id',(req,res)=>{
  console.log('Application form is submitted');
  const userId=req.params.id
  console.log(userId);
  req.body.userId=userId
  applicationForm.create(req.body).then((response)=>{
    console.log(response+'responseeeeeeeee');
    console.log('responseeeeeeeeeeee');
    UserModel.findOneAndUpdate({_id:userId},{$set:{isRegisterd:true}})
    .then((data)=>{
      console.log(data+'dataaaaaaaaaaaaaaa');
      data.isRegistered=true
      res.json(data)
    })
    .catch((err)=>{
      res.json(err)
    })
    })
  })


module.exports = router