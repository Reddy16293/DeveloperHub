const AddReview = require('./addreview-controller');
const MyProfile = require('./myprofile-controller');

module.exports={
    Register: require('./register-controller'),
    Login:require('./login-controller'),
    AllUsers:require('./allprofiles-controller'),
    MyProfile:require('./myprofile-controller'),
    AddReview:require('./addreview-controller'),
    MyReview:require('./myreviews-controller'),
    updateReview:require('./updateprofile')
}