const express= require("express")
const User =require("../models/user")
const router = express.Router()
 

router.post('/users',async (req,res)=>{
    try{
        const users =await User.insertMany(req.body)
        res.status(200).send(users)
    }
    catch(e){
res.status(404).send(e)
    }
})

router.get('/users',async (req,res)=>{
    try{
        const users =await User.find({})
        if(!users){
            res.status(400).send("No users found")
        }
        res.status(200).send(users)
    }
    catch(e){
        res.status(404).send(e)
    }
})

router.get('/users/:id',async (req,res)=>{
    try{
        const user =await User.findById(req.params.id)
        if(!user){
            res.status(400).send("No users found")
        }
        res.status(200).send(user)
    }
    catch(e){
        res.status(404).send(e)
    }
})

router.patch('/users/:id',async (req,res)=>{
try{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
if(!user){
            res.status(400).send("No users found")
        }
        res.status(200).send(user)
    }
    catch(e){
        res.status(404).send(e)
    }
})


router.delete('/users/:id',async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)

    if(!user){
            res.status(400).send("No users found")
        }
        res.status(200).send("the user deleted successfully")
    }
    catch(e){
        res.status(404).send(e)
    }
})

module.exports=router

