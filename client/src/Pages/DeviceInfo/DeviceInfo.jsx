import React from 'react';
import { useParams } from 'react-router-dom';
import Location from '../../Components/UserPanel/LocationMap/Location';
import RssiGraph from '../../Components/UserPanel/RSSIGraph/RssiGraph';
import './DeviceDetailsPage.css';
import { useAuth } from '../../utils/auth';

const DeviceInfo = () => {
    const { deviceId } = useParams(); // Get deviceId from route parameters

    const { deviceData, user } = useAuth();
    const device = deviceData.gen1.find((d) => d.id === deviceId) || deviceData.gen2.find((d) => d.id === deviceId);
    if (!device) {
        return <h1>Device Not Found</h1>;
    }

    const { name, rssi, latitude, longitude } = device;

    return (
        <div className="device-details-container">
            {/* User Info Section */}
            <div className="user-info">
                <h2>User Info</h2>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>

            {/* Device Info Section */}
            <div className="device-info">
                <h2>Device Info</h2>
                <p><strong>Device Name:</strong> {name}</p>
                <p><strong>RSSI:</strong> {rssi}</p>
                <p><strong>Latitude:</strong> {latitude}</p>
                <p><strong>Longitude:</strong> {longitude}</p>
            </div>

            {/* Map Section */}
            <Location latitude={latitude} longitude={longitude} name={name} />

            {/* RSSI Graph Section */}
            <RssiGraph initialRssi={rssi} />
        </div>
    );
};

export default DeviceInfo;
