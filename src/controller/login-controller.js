const express=require('express');
const jwt= require('jsonwebtoken');
const {Devuser}=require('../models');


const Login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const exists=await Devuser.findOne({email});
        if(!exists){
            return res.status(404).json({
                message: 'User not found',
                success: false,
                user: null,
                error:{}
            })
        }
        if(exists.password!==password){
            return res.status(404).json({
                message: 'Invalid Password',
                success: false,
                user: null,
                error:{}
            })

        }

        let payload={
            user:{
                id:exists.id,
            }
        }
        jwt.sign(payload,'jwtpassword',{expiresIn:360000000} ,(err,token)=>{
            if(err) throw err;
            res.json({token})
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:'Server Error',
            error:err,
        })
    }
}
module.exports = Login;