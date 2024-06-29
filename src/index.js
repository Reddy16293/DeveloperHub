const express= require('express');
const dbconnect= require('./config/database.js');


const cors =require('cors');
const apiroutes=require('./router');


const app=express();

app.use(express.json());
app.use(cors({origin:'*'}));
app.use(express.urlencoded({extended:true}));

app.use('/api',apiroutes);

app.listen(3000,async()=>{
    console.log('Server is running on port 3000');
    await dbconnect();
})