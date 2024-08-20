const Devuser = require('../models/devusermodel');
const bcrypt = require('bcryptjs');

// Update profile controller
const updateProfile = async (req, res) => {
  try {
     const userId = req.user.id;
    const { fullname, email, mobile, skills, password, confirmpassword } = req.body;

    // Validate passwords
    if (password !== confirmpassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
    
    // Prepare the update object
    const updateData = {
      fullname,
      mobile,
      skills,
    };

    // If the password is provided, hash it before updating
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updateData.password = hashedPassword;
      updateData.confirmpassword = hashedPassword;
    }

    // Find user by ID and update
    const updatedUser = await Devuser.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully', updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = updateProfile;
