const User = require("../models/user-model");
const Contact = require("../models/contact-model");

// Login Admin
const adminLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404)
                .json({ message: "User Not Found" });
        }

        if (!user.isAdmin) {
            return res.status(401)
                .json({ message: "You are not an Admin" });
        }

        const isPass = await user.comparePass(password);

        if (!isPass) {
            return res.status(401)
                .json({ message: "Invalid Credential" });
        }

        return res.status(200)
            .json({
                message: "Logged In",
                token: user.generateToken(),
                user
            });

    } catch (err) {
        // console.error(error);
        // res.status(500)
        //     .json({ message: "Internal Server Error Can't Login Admin" });

        const error = {
            status: 500,
            message: "Internal Server Error Can't Login Admin",
            discription: err,
        }
        next(error);
    }
}

// Get All Users For Admin
const getAdminUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ message: "Successfully Fetched Users", users });
    } catch (err) {
        // console.error(error);
        // res.status(500).json({ message: "Internal Server Error Cannot Get All Users" });

        const error = {
            status: 500,
            message: "Internal Server Error Cannot Get All Users",
            discription: err,
        }
        next(error);
    }
}

// Create User
const createUser = async (req, res, next) => {
    try {
        const { name, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });


        if (userExist) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        const user = await User.create({
            name, email:email.toLowerCase(), phone, password
        })

        res.status(201).json({
            message: "Account Created Successfully",
            token: user.generateToken(),
            userId: user._id,
        })

    } catch (err) {
        // res.status(500).json({ message: "Internal Server Error" });
        console.log(err);
        
        const error = {
            status: 500,
            message: "Internal Server Error Cannot Create User",
            discription: err,
        }
        next(error);
    }
}

// Function to get a specific user's devices
const getUserDevice = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        const user = req.user;

        // Find the user by ID
        const targetUser = await User.findById(id).populate('device.gen1').populate('device.gen2');

        if (!targetUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Retrieve the user's devices
        const devices = {
            gen1: targetUser.device.gen1,
            gen2: targetUser.device.gen2,
        };

        return res.status(200).json({
            message: 'Devices fetched successfully',
            userId: id,
            devices,
        });
    } catch (error) {
        console.error('Error fetching user devices:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete User
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        await User.deleteOne({ _id: id });

        res.status(200).json({ message: "User Deleted" });

    } catch (err) {
        // console.error(err);
        // return res.status(500)
        //     .json({ message: "Cannot Delete User Internal Server Error" });

        const error = {
            status: 500,
            message: "Cannot Delete User Internal Server Error",
            discription: err,
        }
        next(error);
    }
}

// Function to get all devices categorized by generation
const getAllDevices = async (req, res) => {
    try {
        // Fetch all Gen1 devices
        const gen1Devices = await Gen1.find();

        // Fetch all Gen2 devices
        const gen2Devices = await Gen2.find();

        return res.status(200).json({
            message: 'All devices fetched successfully',
            devices: {
                gen1: gen1Devices,
                gen2: gen2Devices,
            },
        });
    } catch (error) {
        console.error('Error fetching all devices:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Get All Msg
const getAdminContacts = async (req, res) => {
    try {
        const message = await Contact.find({});
        res.status(200).json({ message: "Successfully Fetched Contacts", message });
    } catch (err) {
        // console.error(error);
        // res.status(500).json({ message: "Internal Server Error Cannot Get All Contacts" });

        const error = {
            status: 500,
            message: "Internal Server Error Cannot Get All Contacts",
            discription: err,
        }
        next(error);
    }
}

// Delete Contact By Id
const deleteMsg = async (req, res) => {
    try {
        const id = req.params.id;
        const msg = await Contact.findById(id);

        if (!msg) {
            return res.status(404).json({ message: "Message Not Found" });
        }

        await msg.deleteOne({ _id: id });

        res.status(200).json({ message: "Message Deleted" });

    } catch (err) {
        // console.error(err);
        // return res.status(500)
        //     .json({ message: "Cannot Delete Message Internal Server Error" });

        const error = {
            status: 500,
            message: "Cannot Delete Message Internal Server Error",
            discription: err,
        }
        next(error);
    }
}

module.exports = {
    adminLogin,
    getAdminUsers,
    createUser,
    getUserDevice,
    deleteUser,
    getAllDevices,
    getAdminContacts,
    deleteMsg,
};