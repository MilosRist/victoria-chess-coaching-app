const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Authorization token is missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET); 
        req.userId = decoded.id; 
        next();
    } catch (error) {
        console.error('Token verification failed:', error);
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = verifyToken;
