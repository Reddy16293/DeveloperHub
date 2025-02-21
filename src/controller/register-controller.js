const express = require('express');
const { Devuser } = require('../models');

const Register = async (req, res) => {
    try {
        const { fullname, email, mobile, skills, password, confirmpassword } = req.body;
        const exists = await Devuser.findOne({ email });

        if (exists) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists',
                error: {},
            });
        }

        if (password !== confirmpassword) {
            return res.status(400).json({
                success: false,
                message: 'Passwords do not match',
                error: {},
            });
        }

        let newUser = new Devuser({
            fullname,
            email,
            mobile,
            skills,
            password,
            confirmpassword
        });

        await newUser.save();

        return res.status(200).json({
            success: true,
            message: 'User registered successfully',
            user: newUser,
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error',
            error: err,
        });
    }
};

module.exports = Register;
