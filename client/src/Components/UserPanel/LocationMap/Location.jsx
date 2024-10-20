import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';

const Location = ({ latitude, longitude, name }) => {
    return (
        <div className="map-container">
            <h2>Device Location</h2>
            <MapContainer
                center={[latitude, longitude]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "400px", width: "100%" }}  // Ensure height and width are applied
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[latitude, longitude]}>
                    <Popup>
                        {name}<br />Latitude: {latitude}, Longitude: {longitude}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Location;
