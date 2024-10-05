const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const sendMsg = async (req, res, next) => {
    try {
        const { firstname, lastname, phone, email, message } = req.body;
        // const userData = User.findById(user);

        const msg = await Contact.create({
            firstname,
            lastname,
            phone,
            email,
            message,
        })

        return res.status(200).json({ message: "Message Sent Successfully" });

    } catch (err) {
        console.error(err);
        // res.status(500)
        //     .json({ message: "Internal Server Error Connot Send Message" });

        const error = {
            status: 500,
            message: "Internal Server Error Connot Send Message",
            discription: err,
        }
        next(error);
    }
}

const readMsg = async (req, res, next) => {
    try {
        const msgs = await Contact.find({});
        res.status(200).json({
            message: "All Contact fetched",
            msgs,
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
        })
    }
}

module.exports = { sendMsg, readMsg };