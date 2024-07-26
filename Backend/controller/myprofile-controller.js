const express = require('express');
const { Devuser } = require('../models');

const MyProfile = async (req, res) => {
    try {
        const user = await Devuser.findById(req.user.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }
        return res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message,
        });
    }
};

module.exports = MyProfile;
