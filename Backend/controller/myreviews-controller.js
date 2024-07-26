const express = require('express');
const { Review } = require('../models');

const MyReview = async (req, res) => {
    try {
        // Find all reviews
        const allreviews = await Review.find();

        // Filter reviews where taskworker matches req.user.id
        const myreviews = allreviews.filter(review => review.taskworker.toString() === req.user.id.toString());

        return res.status(200).json({
            success: true,
            message: 'User reviews fetched successfully',
            count: myreviews.length,
            data: myreviews
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

module.exports = MyReview;
