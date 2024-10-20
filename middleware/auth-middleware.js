const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authmiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization");

        // Check if token exists
        if (!token) {
            return res.status(400).json({ message: "Invalid User - No token provided" });
        }

        // Extract the actual token by splitting the "Bearer <token>" string
        const userToken = token.split(" ")[1]; 

        if (!userToken) {
            return res.status(400).json({ message: "Invalid User - Malformed token" });
        }

        // Verify the JWT token
        const isVerified = jwt.verify(userToken, process.env.JWT_SECRET_KEY);

        if (!isVerified) {
            return res.status(401).json({ message: "Token could not be verified" });
        }

        // Find the user in the database (await the promise)
        const userData = await User.findOne({ email: isVerified.email }).select({
            password: 0, // Exclude password from the result
        });

        if (!userData) {
            return res.status(401).json({ message: "User not found" });
        }

        // Attach user data to the request object
        req.user = userData;
        req.token = userToken;

        next(); // Proceed to the next middleware
    } catch (err) {
        console.log(err); // Log the error for debugging

        // Respond with a structured error message
        res.status(401).json({
            status: 401,
            message: "User cannot be verified",
            error: err.message,
        });
    }
};

module.exports = authmiddleware;
