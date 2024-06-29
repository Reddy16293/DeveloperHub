const express= require('express');
const dbconnect= require('./config/database.js');
const {Devuser} = require('./models');
const jwt= require('jsonwebtoken');
const middleware= require('./middleware.js');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send('Welcome');
})
app.post('/register',async(req,res)=>{
    try {
        const {fullname,email,mobile,skills,password,confirmpassword}=req.body;
        const exist =await Devuser.findOne({email});
        if(exist){
            return res.status(400).send('Email already exists');
        }
        if(password!==confirmpassword){
            return res.status(400).send('Password does not match');
        }
        let newUser=new Devuser({
            fullname,
            email,
            mobile,
            skills,
            password,
            confirmpassword
        })
        newUser.save();
        return res.status(201).send('User Registered');

        
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server Eroor"); 
    }
})

app.post('/login',async(req,res) => {
    try {
        const {email, password} = req.body;
        const exists =await Devuser.findOne({email});
        if(!exists){
            return res.status(404).send('User not found');
        }
        if(exists.password!==password){
            return res.status(401).send('Invalid Password');
        }
        let payload={

            user:{
                id:exists.id,
            }

        }
        jwt.sign(payload,'jwtpassword',{expiresIn:36000000} ,(err,token)=>{
            if(err) throw err;
            res.json({token})
        })


    } catch (error) {
        console.log(error);
        return res.status(500).send("Server Error");  }
    }
)


app.get('/allprofiles',middleware,async (req,res)=>{
    try{
        const allProfiles=await Devuser.find();
        return res.json(allProfiles);


    }
    catch(error){
        console.log(error);
        return res.status(500).send('Server Error');
    }
})

app.listen(3000,async()=>{
    console.log('Server is running on port 3000');
    await dbconnect();
})