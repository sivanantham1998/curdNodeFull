const mongoose=require('mongoose');
const siva=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        
    },
    address:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('primaryData',siva)