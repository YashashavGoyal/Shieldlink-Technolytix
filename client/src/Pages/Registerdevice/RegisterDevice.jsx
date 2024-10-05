import React, { useState, useEffect } from 'react';
import './RegisterDevice.css'; // Your custom styles
import { useAuth } from '../../utils/auth';

export default function RegisterDevice() {
    const { API, token, deviceData, loadingDevice } = useAuth();
    const { gen1 = [], gen2 = [] } = deviceData;

    const [deviceType, setDeviceType] = useState('gen1');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(''); // Reset message on new submission

        const url = `${API}/api/device/${deviceType}/new`;

        const deviceData = { name };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(deviceData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(`Device registered successfully as ${deviceType}`);
                setName('');
                fetchDevices(); // Update devices list after successful registration
            } else {
                setMessage(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error registering device:', error);
            setMessage('Internal server error');
        }

        setIsLoading(false);
    };

    return (
        <div className="register-device-layout">
            <div className="register-device-container">
                <h2>Register Device</h2>
                <form onSubmit={handleSubmit} className="register-device-form">
                    <div className="form-group">
                        <label htmlFor="deviceType">Device Type</label>
                        <select
                            id="deviceType"
                            value={deviceType}
                            onChange={(e) => setDeviceType(e.target.value)}
                            className="device-select"
                        >
                            <option value="gen1">Gen1</option>
                            <option value="gen2">Gen2</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Device Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="device-input"
                            required
                        />
                    </div>

                    <button type="submit" className="device-btn" disabled={isLoading}>
                        {isLoading ? 'Registering...' : 'Register Device'}
                    </button>
                </form>

                {/* {message && <p className="register-device-message">{message}</p>} */}
            </div>

            {/* Right Sidebar */}
            {deviceData && (
                <div className="device-sidebar">
                    <h3>Your Devices</h3>
                    <ul className="device-list">
                        {/* Display gen1 devices */}
                        <h4>Gen1 Devices</h4>
                        {gen1.length > 0 ? (
                            gen1.map((device, index) => (
                                <li key={index} className="device-item">
                                    {device.name} Gen-1                                </li>
                            ))
                        ) : (
                            <p>No Gen1 devices registered.</p>
                        )}

                        {/* Display gen2 devices */}
                        <h4>Gen2 Devices</h4>
                        {gen2.length > 0 ? (
                            gen2.map((device, index) => (
                                <li key={index} className="device-item">
                                    {device.name} Gen-2
                                </li>
                            ))
                        ) : (
                            <p>No Gen2 devices registered.</p>
                        )}
                    </ul>
                </div>
            )}

        </div>
    );
}
