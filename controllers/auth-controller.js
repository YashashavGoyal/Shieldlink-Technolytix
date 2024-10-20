const User = require('../models/user-model');
const { Gen1, Gen2 } = require('../models/device-model');

// Login User
const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {
            res.status(400).json({
                message: "Invalid Credential",
            });
        }

        const isPass = await userExist.comparePass(password);

        if (isPass) {
            res.status(200).json({
                message: "Login Successfull",
                token: userExist.generateToken(),
                userId: userExist._id
            })
        }
        else {
            res.status(400).json({
                message: "Invalid Credential",
            });
        }

    } catch (err) {
        // res.status(500).json({message: "Internal Server Error"})

        const error = {
            status: 500,
            message: "Internal Server Error Cannot Login User",
            discription: err,
        }
        next(error);
    }
}

// Update User
// Update User
const updateUser = async (req, res) => {
    try {
        const id = req.user._id;
        const updateUser = req.body;
        // console.log(updateUser);
        

        // Validate the updateUser object to avoid updating restricted fields
        if (Object.keys(updateUser).length === 0) {
            return res.status(400).json({
                message: "No data provided for update"
            });
        }

        // Remove the password field if it exists
        if (updateUser.password) {
            delete updateUser.password;
        }

        if (updateUser.email) {
            updateUser.email = updateUser.email.toLowerCase();
        }

        const user = await User.findByIdAndUpdate(id, updateUser, { new: true });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: "User updated successfully",
            user,
        });
    } catch (error) {
        // Ensure that you only respond once in case of an error
        console.error(error);  // Log the error for debugging
        if (!res.headersSent) {
            return res.status(500).json({
                message: "Internal Server Error: Can't Update User",
            });
        }
    }
}


// Getting User Info
const getUser = async (req, res) => {
    try {
        const id = req.user._id;
        // console.log(req.user)
        const userData = await User.findById(id);

        // console.log(userData);
        

        if (!userData) {
            return res.status(404)
                .json({ message: "User Not Found " });
        }

        return res.status(200).json({
            message: "User Data Fetched Succesfully",
            user: userData,
        })

    } catch (err) {
        console.log(error);
        // return res.status(500)
        //     .json({ message: "Internal Serrver Error Can't Get User Info" });

        const error = {
            status: 500,
            message: "Internal Serrver Error Can't Get User Info",
            discription: err,
        }
        next(error);
    }
}


module.exports = {
    loginUser,
    updateUser,
    getUser,
};