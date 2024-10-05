import './Dashboard.css';
import Insight from "../../Components/UserPanel/Insights/Insight";
import { useAuth } from '../../utils/auth';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const { deviceData, loadingDevice } = useAuth();
    const { gen1 = [], gen2 = [] } = deviceData; // Use default empty array if devices is undefined

    if (loadingDevice) {
        return <div>Loading devices...</div>;
    }

    return (
        <>
            <Insight />

            <div className="activity-graph">
                <div className="graph-heading">
                    <h3>Overall Suspicious Activity Graph</h3>
                    {/* <canvas id="myChart" style="width:100%;max-width:700px"></canvas> */}
                </div>
            </div>

            <div className="device-check-list">
                <div className="header">
                    <i className='bx bx-devices'></i>
                    <h3>Devices Status</h3>
                    <Link to={'/user/admin/register-device'}>
                        <i style={{color: 'white'}} className='bx bx-plus'></i>
                    </Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Device Id</th>
                            <th>RSSI</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gen1.length === 0 && gen2.length === 0 ? (
                            <tr>
                                <td colSpan="3">No Devices Found</td>
                            </tr>
                        ) : (
                            <>
                                {gen1.map((device) => (
                                    <tr key={device._id || device.name}>
                                        <td>
                                            <p>{device.name}</p>
                                        </td>
                                        <td>
                                            {device.rssi}
                                        </td>
                                        <td><span className="status completed">Working</span></td>
                                    </tr>
                                ))}
                                {gen2.map((device) => (
                                    <tr key={device._id || device.name}>
                                        <td>
                                            <p>{device.name}</p>
                                        </td>
                                        <td>
                                            {device.rssi}
                                        </td>
                                        <td><span className="status completed">Working</span></td>
                                    </tr>
                                ))}
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
