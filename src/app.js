require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());


const pdfRoute = require('./route/pdf.route');

app.use('/api/pdf' , pdfRoute);

app.get('/' , (req,res) => {
    res.json({
        message: "Server is running properly"
    });
})


module.exports = app
