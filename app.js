const express = require('express');
const app = express();
const bodyParser = require('body-parser')


const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

//to just parse the incoming dat(through json or through url) to be more readable
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/products',productsRoutes);
app.use('/orders',ordersRoutes);


// app.use((req,res,next)=>{
//     res.status(200).json({ 
//         message:"request call works"
//     })
// });

app.use((req,res,next)=>{
    const error = new Error()
    error.status= 404;
    next(error);
})

app.use((error, req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:"this is a big error"
        }
    })
})
module.exports = app;