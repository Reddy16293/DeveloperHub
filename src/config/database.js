const mongoose =require('mongoose');

// Connect to MongoDB
const connect= async()=>{
    mongoose.connect('mongodb://localhost/DevelperDB')
    console.log('Connecting to MongoDB...');
}
module.exports=connect;