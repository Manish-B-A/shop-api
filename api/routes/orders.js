const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"orders get request"
    })
});

router.post('/',(req,res,next)=>{
    const order ={
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(200).json({
        message:"orders post request",
        order: order
    })
})
router.get('/:id',(req,res,next)=>{
    const id = req.params.id
    res.status(200).json({
        message:"orders get request for order id - " + id
    })
})

router.delete('/:id',(req,res,next)=>{
    const id = req.params.id
    res.status(200).json({
        message:"orders delete request for order id - " + id
    })
})

module.exports = router;