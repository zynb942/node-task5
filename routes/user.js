const express= require("express")
 const app = express()
const user =require("../models/user")
const router = app.router()
 

router.post('/users',async (req,res)=>{
    try{
        const users =await user.insertMany(req.body)
        res.status(200).send(users)
    }
    catch(e){
res.status(404).send(e)
    }
})

router.get('/users',async (req,res)=>{
    try{
        const users =await users.find({})
        if(!users){
            res.status(400).send("No users found")
        }
        res.status(200).send(users)
    }
    catch(e){
        res.status(404).send(e)
    }
})

router.get('/users',async (req,res)=>{
    try{
        const user =await users.findById(req.params.id)
        if(!user){
            res.status(400).send("No users found")
        }
        res.status(200).send(user)
    }
    catch(e){
        res.status(404).send(e)
    }
})

router.patch('/users',async (req,res)=>{
try{
    const user = await user.findByIdAndUpdate(req.params.id,req.body,{
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


router.delete('/users',async(req,res)=>{
    try{
        const user = await user.findByIdAndDelete(req.params.id)

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
