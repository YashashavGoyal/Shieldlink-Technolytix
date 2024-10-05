const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    message: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }
})

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;