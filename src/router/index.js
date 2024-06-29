const express = require('express');
const middleware= require('../middleware.js');
const router=express.Router();
const {Register,Login}= require('../controller');
router.post('/register',Register);
router.post('/login',Login);
/* router.post('/login',LoginController);
router.get('/allprofiles',middleware,AllProfilesController);
router.get('/myprofile',middleware,MyProfileController);
router.post('/addreview', middleware,AddReviewController);
router.get('myreview',middleware,MyReviewController); */
module.exports=router;


