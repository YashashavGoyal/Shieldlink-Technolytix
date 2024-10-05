const mongoose = require('mongoose');

// Mongo db connection url
const URL = process.env.MONGO_DB_URL;

// connection
const connectDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log('Connection Successfull');
    } catch (error) {
        console.log("Connection Error", error);
        process.exit(0);
    }
}

module.exports = connectDb; 