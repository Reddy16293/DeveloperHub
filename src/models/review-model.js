const mongoose=require('mongoose');

const review=new mongoose.Schema({
      taskprovider:{
        type:String,
        required:true
      },
      taskworker:{
        type:String,
        required:true
      },
      rating:{
        type:String,
        required:true
      }
      

})
 const  Review= mongoose.model('Review',review);
 module.exports=Review;