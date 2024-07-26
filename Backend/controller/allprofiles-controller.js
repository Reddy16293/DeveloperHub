const { Devuser } = require('../models');

const AllUsers = async (req, res) => {
    try {
        const allProfiles = await Devuser.find();
        return res.json({
            success: true,
            message: 'All Users',
            count: allProfiles.length,
            data: allProfiles,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message, // Adding error message for clarity
        });
    }
};

module.exports = AllUsers;
