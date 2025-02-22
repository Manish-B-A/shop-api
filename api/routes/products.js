const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"proudcts get request successful"
    })
});

router.post('/',(req,res,next)=>{
    const product ={
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        message:"proudcts post request successful",
        product:product
    })
});

router.get('/:id',(req,res,next)=>{
    const id = req.params.id
    res.status(200).json({
        message:'you fetched for product with id - ' + id 
    })
});

router.patch('/:id',(req,res,next)=>{
    const id = req.params.id
    res.status(200).json({
        message:'you patched product with id - ' + id 
    })
})

router.delete('/:id',(req,res,next)=>{
    const id = req.params.id
    res.status(200).json({
        message:'you deleted product with id - ' + id 
    })
})
module.exports = router;