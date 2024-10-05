const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authmiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(400)
            .json({ message: "Invalid User" });
    }

    // const userToken = token.replace("Bearer", "").trim();
    const userToken = token.split(" ")[1]; // This splits the "Bearer <token>"

    try {
        const isVerified = jwt.verify(userToken, process.env.JWT_SECRET_KEY);

        const userData = User.findOne({ email: isVerified.email })
            .select({
                password: 0,
            });

        req.user = isVerified;
        req.token = userToken;
        // req.userId = isVerified.userId;        
            
        next();
    } catch (err) {
        // res.status(401).json({ message: "User can not verified" });
        console.log(err);

        const error = {
            status: 401,
            message: "User can not verified",
            discription: err,
        }
        next(error);
    }
}

module.exports = authmiddleware;