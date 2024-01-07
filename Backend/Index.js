const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const port = 5000;
const mongodb = require('./db'); 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    next();
});


mongodb();
app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.use(express.json());
app.use('/api',require("./Routes/Createuser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"))
app.listen(port,()=>{
    console.log(`Example app listen of ${port}`);
});