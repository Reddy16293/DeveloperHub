const express = require('express');
const {Devuser,Review}=require('../models');
const { exists } = require('../models/devusermodel');

const AddReview=async(req,res)=>{
    try{
        const {taskworker,rating} =req.body;
        const exist =await Devuser.findById(req.user.id);
        if(!exist){
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }
        const newReview= new Review({
            taskprovider:exist.fullname,
            taskworker: taskworker,
            rating: rating,
            
        })
        newReview.save();
        return res.status(200).json({
            success:true,
            message:'Review added successfully',
            review: newReview
        })

    }
    catch(error){
        console.log(error);
        return res.status(404).json({
            success: false,
            message: 'Failed to add review',
            error: error.message
        })
    }

}
module.exports=AddReview;