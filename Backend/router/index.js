const express = require('express');
const middleware= require('../middleware.js');
const router=express.Router();
const {Register,Login,AllUsers,MyProfile,AddReview,MyReview}= require('../controller');
router.post('/register',Register);

router.post('/login',Login);

router.get('/allprofiles',middleware,AllUsers);

router.get('/myprofile',middleware,MyProfile);

router.post('/addreview',middleware,AddReview);

router.get('/myreview',middleware,MyReview);


/* router.post('/login',LoginController);
router.get('/allprofiles',middleware,AllProfilesController);
router.get('/myprofile',middleware,MyProfileController);
router.post('/addreview', middleware,AddReviewController);
router.get('myreview',middleware,MyReviewController); */
module.exports=router;


