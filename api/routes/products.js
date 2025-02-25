const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/',(req,res,next)=>{
    Product.find().exec()
    .then(data=>{
        res.status(200).json({
            message:"proudcts get request successful",
            data:data
        })
    })
    
});

router.post('/',(req,res,next)=>{
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price
    });
    product.save()
    .then(result =>{
        console.log(result)
        res.status(200).json({
            message:"proudcts post request successful",
            product: product
        })
    })
    .catch(err => console.log(err))
    
});

router.get('/:id',(req,res,next)=>{
    const id = req.params.id
    Product.findById(id)
    .exec()
    .then(doc=>{
        console.log(doc)
        res.status(200).json(doc)
    })
    .catch(err=>console.log(err))
    
});

router.put('/:id',async (req,res,next)=>{
    const id = req.params.id
    const item = await Product.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        message:'you patched product with id - ' + id 
    })
})

router.delete('/:id',(req,res,next)=>{
    const id = req.params.id
    Product.findByIdAndDelete(id)
    .exec()
    .then(doc=>{
        console.log(doc)
        res.status(200).json({
            message:'you deleted product with id - ' + id 
        })
        })
    .catch(err=>console.log(err))
    
})
module.exports = router;