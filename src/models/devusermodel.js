const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const devuserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
    }
});

// Hash the password before saving
devuserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        this.confirmpassword = this.password;
        next();
    } catch (error) {
        next(error);
    }
});

const Devuser = mongoose.model('Devuser', devuserSchema);
module.exports = Devuser;
