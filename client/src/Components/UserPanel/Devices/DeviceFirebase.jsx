import './Device.css';
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import { useEffect } from 'react';
import { useState } from 'react';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-ZVm6xE6JJ35y9_P_PIJM28WI2YAfeiI",
    authDomain: "bright-shark.firebaseapp.com",
    databaseURL: "https://bright-shark-default-rtdb.firebaseio.com",
    projectId: "bright-shark",
    storageBucket: "bright-shark.appspot.com",
    messagingSenderId: "132356090033",
    appId: "1:132356090033:web:009913014ec39f734f9a90",
    measurementId: "G-37BHSPBBYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export default function DeviceFirebase({ children }) {
    const [rssiDevices, setRssiDevices] = useState([]); // State for RSSI devices
    const [rssi433MhzDevices, setRssi433MhzDevices] = useState([]); // State for RSSI-433Mhz devices
    const [rssi24GhzDevices, setRssi24GhzDevices] = useState([]); // State for RSSI-2.4Ghz devices
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const rssiRef = ref(database, 'RSSI'); // Reference for RSSI
        const rssi433MhzRef = ref(database, 'RSSI-433Mhz'); // Reference for RSSI-433Mhz
        const rssi24GhzRef = ref(database, 'RSSI_433Mhz'); // Reference for RSSI-2.4Ghz

        // Listener for RSSI
        const unsubscribeRssi = onValue(rssiRef, (snapshot) => {
            const data = snapshot.val();
            console.log('RSSI Data:', data); // Log data for debugging
            if (data) {
                setRssiDevices(Object.values(data)); // Storing devices in state
            }
        });

        // Listener for RSSI-433Mhz
        const unsubscribeRssi433Mhz = onValue(rssi433MhzRef, (snapshot) => {
            const data = snapshot.val();
            console.log('RSSI-433Mhz Data:', data); // Log data for debugging
            if (data) {
                setRssi433MhzDevices(Object.values(data)); // Storing devices in state
            }
        });

        // Listener for RSSI-2.4Ghz
        const unsubscribeRssi24Ghz = onValue(rssi24GhzRef, (snapshot) => {
            const data = snapshot.val();
            console.log('RSSI-2.4Ghz Data:', data); // Log data for debugging
            if (data) {
                setRssi24GhzDevices(Object.values(data)); // Storing devices in state
            }
        });

        // Cleanup subscriptions on component unmount
        return () => {
            unsubscribeRssi();
            unsubscribeRssi433Mhz();
            unsubscribeRssi24Ghz();
        };
    }, []);

    // Handle loading state
    // if (loading) {
    //     return <div>Loading devices...</div>;
    // }

    // Handle case if no devices are available
    // if (!devices.length) {
    //     return <div>No devices available</div>;
    // }

    if (children) {
        return children
    }


    return (
        <>
                <div className="device-list">
                    <div className="device-list-header">
                        <h4 className="header">
                            Gen-1.1 Devices
                        </h4>
                    </div>
                    <div className="device-list-content">
                        <div className="device-box">
                            <span className='title'>
                                <i className='bx bx-mobile'></i>
                                Device-Id
                            </span>
                            <div className="device-box-content">
                                <p>
                                    RSSI Value: <span className='real-time-data'>{rssiDevices[0]}</span><br />
                                    Data: <span className='real-time-data'>Db value</span><br />
                                    Time: <span className='real-time-data'>00:00</span><br />
                                    Location: <span className='real-time-data'>lat-long</span><br />
                                </p>
                            </div>
                        </div>
                        <div className="device-box">
                            <span className='title'>
                                <i className='bx bx-mobile'></i>
                                Device-Id
                            </span>
                            <div className="device-box-content">
                                <p>
                                    RSSI Value: <span className='real-time-data'>{rssi433MhzDevices[0]}</span><br />
                                    Data: <span className='real-time-data'>Db value</span><br />
                                    Time: <span className='real-time-data'>00:00</span><br />
                                    Location: <span className='real-time-data'>lat-long</span><br />
                                </p>
                            </div>
                        </div>
                        <div className="device-box">
                            <span className='title'>
                                <i className='bx bx-mobile'></i>
                                Device-Id
                            </span>
                            <div className="device-box-content">
                                <p>
                                    RSSI Value: <span className='real-time-data'>{rssi24GhzDevices[0]}</span><br />
                                    Data: <span className='real-time-data'>Db value</span><br />
                                    Time: <span className='real-time-data'>00:00</span><br />
                                    Location: <span className='real-time-data'>lat-long</span><br />
                                </p>
                            </div>
                        </div>
                        <div className="device-box">
                            <span className='title'>
                                <i className='bx bx-mobile'></i>
                                Device-Id
                            </span>
                            <div className="device-box-content">
                                <p>
                                    RSSI Value: <span className='real-time-data'>RSSI</span><br />
                                    Data: <span className='real-time-data'>Db value</span><br />
                                    Time: <span className='real-time-data'>00:00</span><br />
                                    Location: <span className='real-time-data'>lat-long</span><br />
                                </p>
                            </div>
                        </div>
                        <div className="device-box">
                            <span className='title'>
                                <i className='bx bx-mobile'></i>
                                Device-Id
                            </span>
                            <div className="device-box-content">
                                <p>
                                    RSSI Value: <span className='real-time-data'>RSSI</span><br />
                                    Data: <span className='real-time-data'>Db value</span><br />
                                    Time: <span className='real-time-data'>00:00</span><br />
                                    Location: <span className='real-time-data'>lat-long</span><br />
                                </p>
                            </div>
                        </div>
                        <div className="device-box">
                            <span className='title'>
                                <i className='bx bx-mobile'></i>
                                Device-Id
                            </span>
                            <div className="device-box-content">
                                <p>
                                    RSSI Value: <span className='real-time-data'>RSSI</span><br />
                                    Data: <span className='real-time-data'>Db value</span><br />
                                    Time: <span className='real-time-data'>00:00</span><br />
                                    Location: <span className='real-time-data'>lat-long</span><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
