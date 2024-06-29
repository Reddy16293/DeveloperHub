const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        let token = req.headers['x-token'];
        if (!token) {
            return res.status(400).send('Token not found');
        }
        let decoded = jwt.verify(token, 'jwtpassword'); // Ensure the secret is 'jwtpassword'
        req.user = decoded.user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).send('Server Error');
    }
};

module.exports = auth;
