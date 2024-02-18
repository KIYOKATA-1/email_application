const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("SALAM")
});


app.listen(PORT, () =>{
    console.log(`app listening on port ${PORT}`)
})