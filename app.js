const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();

const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/app.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);

})

app.listen(PORT, () =>{
    console.log(`app listening on port ${PORT}`)
})