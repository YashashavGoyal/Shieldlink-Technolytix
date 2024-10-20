import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RSSIGraph = ({ initialRssi }) => {
    const [rssiData, setRssiData] = useState([initialRssi, initialRssi, initialRssi, initialRssi]);
    const [timestamps, setTimestamps] = useState([
        new Date().toLocaleTimeString(),
        new Date().toLocaleTimeString(),
        new Date().toLocaleTimeString(),
        new Date().toLocaleTimeString(),
    ]);

    // Simulate RSSI data update for demo purposes
    useEffect(() => {
        const interval = setInterval(() => {
            const newRssi = initialRssi; // Here you can replace with real-time RSSI value

            // Update RSSI values, keeping only the last 4
            setRssiData((prevData) => {
                const updatedData = [...prevData.slice(-3), newRssi];
                return updatedData.length < 4 ? [...Array(4 - updatedData.length).fill(initialRssi), ...updatedData] : updatedData;
            });

            // Update timestamps, keeping only the last 4
            setTimestamps((prevTimestamps) => {
                const newTimestamp = new Date().toLocaleTimeString();
                const updatedTimestamps = [...prevTimestamps.slice(-3), newTimestamp];
                return updatedTimestamps.length < 4 ? [...Array(4 - updatedTimestamps.length).fill(newTimestamp), ...updatedTimestamps] : updatedTimestamps;
            });
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on unmount
    }, [initialRssi]);

    // Chart.js data object
    const chartData = {
        labels: timestamps,
        datasets: [
            {
                label: 'RSSI Value Over Time',
                data: rssiData,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="rssi-graph-container">
            <h2>RSSI Value Over Time</h2>
            <Line data={chartData} />
        </div>
    );
};

export default RSSIGraph;
