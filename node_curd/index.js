const express=require('express');
const app=express();
var cors = require('cors')
app.use(cors())
const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
app.use(express.json());
const siva=require('./siva')
mongoose.connect('mongodb+srv://admin:admin@admin.dlig7l3.mongodb.net/?retryWrites=true&w=majority',(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("connect");
    }
})

app.get('/',async(req,res)=>{
    const a=await siva.find();
    res.json(a)
})

app.post('/',async(req,res)=>{
    const a=await siva({
        name:req.body.name,
        age:req.body.age,
        address:req.body.address
    })
    a.save();
    res.json(a)
})

app.get('/:id',async(req,res)=>{
    const {id}=req.params;
    const a=await siva.findById(id);
    res.json(a);
})

app.put('/:id',async(req,res)=>{
    const {id}=req.params;
    const a=await siva.findById(id);
    a.name=req.body.name;
    a.age=req.body.age;
    a.address=req.body.address; 
    a.save();
    res.json(a)
})
app.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    await siva.findByIdAndDelete(id);
    res.json("deleted");
})
app.listen(199,()=>console.log("running")) 