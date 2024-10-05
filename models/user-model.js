const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        // Uncomment this if you want unique phone numbers
        // unique: true
    },
    organization: {
        type: String,
    },
    idCardName: {
        type: String
    },
    idCardNumber: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    device: {
        gen1: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'gen1',
            }
        ],
        gen2: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'gen2',
            }
        ]
    }
});

// hashing the password
userSchema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) {
        return next(); // ensure further execution stops
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(user.password, saltRound);
        user.password = hashPass;
    } catch (error) {
        next(error);
    }
});

// comparing password
userSchema.methods.comparePass = async function (password) {
    return bcrypt.compare(password, this.password);
}

// Generating Token
userSchema.methods.generateToken = function () {
    try {
        return jwt.sign(
            {
                userId: this._id,
                email: this.email,
                isAdmin: this.isAdmin
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '7d' } // optional: set token expiration
        );
    } catch (error) {
        console.log('generating token', error);
    }
}

// Define the model, checking if it already exists
const User = mongoose.models.user || mongoose.model('user', userSchema);

module.exports = User;
