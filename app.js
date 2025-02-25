const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

mongoose.connect('mongodb+srv://manish:manish@shopapi.poh9i.mongodb.net/?retryWrites=true&w=majority&appName=shopapi')
.then(()=>console.log('connected to db'))
.catch(()=>console.log('some error while connecting to db'))


//to just parse the incoming dat(through json or through url) to be more readable
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// solve cors issue
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', '*');

//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE');
//         return res.status(200).json({})

//     }
// })

app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);


// app.use((req,res,next)=>{
//     res.status(200).json({ 
//         message:"request call works"
//     })
// });

// app.use((req, res, next) => {
//     const error = new Error()
//     error.status = 404;
//     next(error);
// })

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: "this is a big error"
//         }
//     })
// })
module.exports = app;