const express= require('express');
const dbconnect= require('./config/database.js');
const {Devuser,Review} = require('./models');
const jwt= require('jsonwebtoken');
const middleware= require('./middleware.js');
const cors =require('cors');
const apiroutes=require('./router');




const app=express();

app.use(express.json());
app.use(cors({origin:'*'}));
app.use(express.urlencoded({extended:true}));

app.use('/api',apiroutes);

app.get('/',(req,res)=>{
    res.send('Welcome');
})




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

app.get('/myprofile',middleware,async(req,res)=>{
    try{
        let user =await Devuser.findById(req.user.id);
        
        return res.json(user);

    }
    catch(error){
        console.log(error);
        return res.status(500).send('Server Error');
    }
})
app.post('/addreview', middleware, async (req, res) => {
    try {
        const { taskworker, rating } = req.body;
        const exist = await Devuser.findById(req.user.id);
        if (!exist) {
            return res.status(404).send('User not found');
        }
        const newReview = new Review({
            taskprovider: exist.fullname,
            taskworker,
            rating
        });
        await newReview.save();
        return res.status(200).send("Review updated successfully");
    } catch (error) {
        console.log(error);
        return res.status(500).send('Server Error');
    }
});


app.get('/myreview', middleware, async (req, res) => {
    try {
        let myreviews = await Review.find({ taskworker: req.user.id });
        return res.status(200).json(myreviews);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Server Error');
    }
});

app.listen(3000,async()=>{
    console.log('Server is running on port 3000');
    await dbconnect();
})