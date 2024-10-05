const mongoose = require('mongoose');

const deviceGen1 = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rssi: {
        type: String,
        default: '0',
    },
    latitude: {
        type: String,
        default: '0',
    },
    longitude: {
        type: String,
        default: '0',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const deviceGen2 = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rssi: {
        type: String,
        default: '0',
    },
    latitude: {
        type: String,
        default: '0',
    },
    longitude: {
        type: String,
        default: '0',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});


const Gen1 = mongoose.model('gen1', deviceGen1);
const Gen2 = mongoose.model('gen2', deviceGen2);

module.exports = { Gen1, Gen2 };