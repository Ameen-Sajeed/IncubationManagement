const express = require('express')
const router = express.Router()
const jwt= require('jsonwebtoken')
const bcyrpt = require('bcrypt')
const applicationForm = require('../Modals/user/Application')
const slotsbooking = require('../Modals/user/Slot')
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

   
router.post('/approve/:id', async (req, res) => {
    try {
        applicationForm.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                status: "approved"
            }
        }).then(response => {
            if (response) res.status(200).json({ update: true })
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        console.log(error);
    }
})

   router.post('/reject/:id', async (req, res) => {
    try {
        applicationForm.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                status: "rejected"
            }
        }).then(response => {
            if (response) res.status(200).json({ update: true })
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        console.log(error);
    }
})
router.get('/approved', async (req, res) => {
    try {
        applicationForm.find({ status: "approved" }).then(response => {
            // console.log("lklkk");
            // console.log(response);
            res.status(200).json(response)
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        console.log(error);
    }
})


router.get('/rejected', async (req, res) => {
    try {
        applicationForm.find({ status: "rejected" }).then(response => {
            // console.log("lklkkopopo");
            // console.log(response);
            res.status(200).json(response)
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        // console.log(error);
    }
})

router.get('/slots',async(req,res)=>{
    try {
        slotsbooking.find().then(response => {
            res.status(200).json(response)
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        // console.log(error);
    }
})

router.get('/slotBooking', async (req, res) => {
    try {
        applicationForm.findOneAndUpdate({ _id: req.query.companyId }, {
            $set: {
                status: "Booked"
            }
        }).then(response => {
            if (response) {
                slotsbooking.findOneAndUpdate({ sloatNo: req.query.slotId }, {
                    $set: {
                        "bookedId": req.query.companyId,
                        "status": true
                    }
                }).then(response => {
                    res.status(200).json(response)
                }).catch(error => res.json(error))
            }
        }).catch(error => res.json(error))


    } catch (error) {
        console.log(error);
    }
})


router.post('/createslots',async(req,res)=>{
//     console.log("slotssss");
//     slotsbooking.create(req.body).then((response)=>{
//       console.log("created");
//       console.log(response);
//       res.json(response)
//     }).catch((err)=>{
//       console.log(err);
//     })
//   })
try {

    const createslot = new slotsbooking({
        bookedId: req.body.bookedId,
        sloatNo: req.body.sloatNo,

    })
     createslot.save().then((data)=>{
        console.log(data);
        res.json(data)
    }).catch(error=>{
        res.json(data)
    })
    
} catch (error) {
    console.log(error);
}
})

// router.post('/booking/:id',async (req, res, next) => {
//     let appId=req.params.id
//     let {val, index}=req.body
//     let char=val[index].slot
//     applicationForm.findOneAndUpdate({_id:appId},{$set:{isBooked:true, slotId:char}}).then((data)=>{
//       data.isBooked=true
//       data.slotId=char
//       res.json({data});
//    }).catch((err)=>{
//     console.log(err);
//        err='Something went wrong!'
//       res.json({err:err});
//    })
//    })


router.get('/progress', async (req, res) => {
    try {
        applicationForm.find().then(response => {
            res.status(200).json(response)
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        console.log(error);
    }
})



module.exports = router