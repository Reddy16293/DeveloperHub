const express = require('express');
const middleware = require('../middleware.js');
const router = express.Router();
const { Register, Login, AllUsers, MyProfile, AddReview, MyReview } = require('../controller');
const updateProfile = require('../controller/updateprofile.js'); // Correctly import updateProfile

router.post('/register', Register);
router.post('/login', Login);
router.get('/allprofiles', middleware, AllUsers);
router.get('/myprofile', middleware, MyProfile);
router.post('/addreview', middleware, AddReview);
router.get('/myreview', middleware, MyReview);
router.put('/updateprofile', middleware, updateProfile); // Use the correct updateProfile function

module.exports = router;

