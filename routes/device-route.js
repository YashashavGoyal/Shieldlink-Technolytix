const express = require('express');
const authmiddleware = require('../middleware/auth-middleware');
const {
    registerDevice,
    getAllDevicesForUser,
    editDevice,
    deleteDevice
} = require('../controllers/device-controller');

const router = express.Router();

router.route('/:devicetype/new').post(authmiddleware, registerDevice);

router.route('/:id/edit').patch(authmiddleware, editDevice);

router.route('/:id/:devicetype/delete').delete(authmiddleware, deleteDevice);

router.route('/read').get(authmiddleware, getAllDevicesForUser);

module.exports = router;