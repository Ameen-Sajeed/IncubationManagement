const express=require('express')
const app=express()
const dotenv =require('dotenv')
const cookieParser = require("cookie-parser")
const userRouter=require('./routes/users')
const adminRouter=require('./routes/admin')
const cors=require('cors')
app.use(cors())
dotenv.config()



const {connectDb}=require('../server/helpers/mongo_init')
connectDb()

app.use(cookieParser()) 
app.use(express.json())
app.use('/',userRouter)
app.use('/admin',adminRouter)


app.listen(5000,()=>
    console.log(`server is running on port 5000`)
)