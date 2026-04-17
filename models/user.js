const mongoose = require("mongoose")
const validator = require("validator")

const user = mongoose.model(user,{

name:{
    type:String,
    require:true,
    trim:true
},
city:{
    type:String,
    require:true,
    trim:true
},
age:{
    type:Number,
    require:true,
    trim:true,
    validate(val){
        if(val<=0){
            throw new Error('invalid age!');
            
        }
    }
},



})

module.exports= user