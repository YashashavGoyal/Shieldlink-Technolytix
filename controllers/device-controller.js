const { Gen1, Gen2 } = require('../models/device-model');
const User = require('../models/user-model');

// Function to register a device
const registerDevice = async (req, res, next) => {
    try {
        const userId = req.user._id;
        const { devicetype } = req.params;
        const { name } = req.body;

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Validate the devicetype
        if (devicetype !== 'gen1' && devicetype !== 'gen2') {
            return res.status(400).json({ message: 'Invalid device type' });
        }

        // Check if the device already exists for gen1 or gen2
        let existingDevice;
        if (devicetype === 'gen1') {
            existingDevice = await Gen1.findOne({ name });
        } else if (devicetype === 'gen2') {
            existingDevice = await Gen2.findOne({ name });
        }

        // If the device exists, return an error
        if (existingDevice) {
            return res.status(400).json({ message: 'Device already exists' });
        }

        // Create a new device based on the devicetype
        let newDevice;
        if (devicetype === 'gen1') {
            newDevice = new Gen1({
                name,
                user: userId, 
            });
        } else if (devicetype === 'gen2') {
            newDevice = new Gen2({
                name, 
                user: userId, 
            });
        }

        // Save the new device
        await newDevice.save();

        // Add the device to the user's respective device array
        if (devicetype === 'gen1') {
            user.device.gen1.push(newDevice._id);
        } else {
            user.device.gen2.push(newDevice._id);
        }

        // Save the updated user document
        await user.save();

        return res.status(200).json({
            message: `Device successfully registered and added to ${devicetype}`,
            device: newDevice, 
        });

    } catch (error) {
        console.error('Error registering device:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



// Function to modify the device name
const editDevice = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, devicetype } = req.body;
        const userId = req.userId;


        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }

        let device;

        // Check if device is gen1 or gen2 based on devicetype
        if (devicetype === 'gen1') {
            device = await Gen1.findOne({ _id: id, user: userId });
        } else if (devicetype === 'gen2') {
            device = await Gen2.findOne({ _id: id, user: userId });
        } else {
            return res.status(400).json({ message: 'Invalid device type' });
        }

        // If the device is not found or doesn't belong to the user, return an error
        if (!device) {
            return res.status(404).json({ message: 'Device not found or access denied' });
        }

        // Update the device name
        device.name = name;

        // Save the updated device
        await device.save();

        return res.status(200).json({
            message: 'Device name updated successfully',
            device
        });

    } catch (error) {
        console.error('Error editing device:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

// Function to delete a device
const deleteDevice = async (req, res) => {
    try {
        const { id } = req.params;
        const { devicetype } = req.params;
        const userId = req.user.userId; 

        console.log("User ID:", userId);
        console.log("Device ID:", id);
        console.log("Device Type:", devicetype);

        let device, model;

        // Check if the device is of type gen1 or gen2
        if (devicetype === 'gen1') {
            device = await Gen1.findOne({ _id: id, user: userId });
            console.log("Found Gen1 Device:", device);
            model = 'gen1';
        } else if (devicetype === 'gen2') {
            device = await Gen2.findOne({ _id: id, user: userId });
            console.log("Found Gen2 Device:", device);
            model = 'gen2';
        } else {
            return res.status(400).json({ message: 'Invalid device type' });
        }

        if (!device) {
            return res.status(404).json({ message: 'Device not found or access denied' });
        }

        // Delete the device from the respective collection
        await (devicetype === 'gen1' ? Gen1.deleteOne({ _id: id }) : Gen2.deleteOne({ _id: id }));

        // Remove the device reference from the user's gen1 or gen2 array
        await User.findByIdAndUpdate(userId, { $pull: { [`device.${model}`]: id } });

        return res.status(200).json({
            message: 'Device deleted successfully',
            deviceId: id,
            deviceType: model,
        });
    } catch (error) {
        console.error('Error deleting device:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



// Function to fetch all devices (gen1 and gen2) for a user
const getAllDevicesForUser = async (req, res) => {
    try {
        const userId = req.user._id;

        // Find the user and populate the device arrays with full device details
        const user = await User.findById(userId)
            .populate('device.gen1')
            .populate('device.gen2');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({
            message: 'Devices fetched successfully',
            devices: {
                gen1: user.device.gen1,
                gen2: user.device.gen2,
            }
        });

    } catch (error) {
        console.error('Error fetching devices:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    registerDevice,
    editDevice,
    deleteDevice,
    getAllDevicesForUser,
};
