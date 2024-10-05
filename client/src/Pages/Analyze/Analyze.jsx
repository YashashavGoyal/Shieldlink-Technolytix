import { Link } from 'react-router-dom';
import './Analyze.css';
import { useAuth } from '../../utils/auth';

export default function Analyze() {

    const { loadingDevice, deviceData } = useAuth();
    const { gen1 = [], gen2 = [] } = deviceData;

    return (
        <>
            <div className="device-data">
                <div className="device-list-header">
                    <div className="header">
                        <i className='bx bx-note'></i>
                        <h3>Devices</h3>
                        <Link to='/user/admin/register-admin'>
                            <i style={{ color: 'white' }} className='bx bx-plus'></i>
                        </Link>
                    </div>
                    <ul className="device-list">
                        {
                            (gen1.length === 0) ?
                                <h1>No Gen1 Device</h1> :
                                gen1.map((device, index) => {
                                    return (
                                        <li key={index} className="working">
                                            <div className="device-list-title">
                                                <i className='bx bx-check-circle'></i>
                                                <p>{device.name}</p>
                                            </div>
                                            <i className='bx bx-dots-vertical-rounded'></i>
                                        </li>
                                    )
                                })
                        }
                        {
                            (gen2.length === 0) ?
                                <h1>No Gen2 Device</h1> :
                                gen2.map((device, index) => {
                                    return (
                                        <li key={index} className="working">
                                            <div className="device-list-title">
                                                <i className='bx bx-check-circle'></i>
                                                <p>{device.name}</p>
                                            </div>
                                            <i className='bx bx-dots-vertical-rounded'></i>
                                        </li>
                                    )
                                })
                        }
                        <li className="not-working">
                            <div className="device-list-title">
                                <i className='bx bx-x-circle'></i>
                                <p>Device 3</p>
                            </div>
                            <i className='bx bx-dots-vertical-rounded'></i>
                        </li>
                        <li className="not-working">
                            <div className="device-list-title">
                                <i className='bx bx-x-circle'></i>
                                <p>Device 3</p>
                            </div>
                            <i className='bx bx-dots-vertical-rounded'></i>
                        </li>
                    </ul>
                </div>


                <div className="device-activity">
                    <div className="header">
                        <i className='bx bx-line-chart'></i>
                        <h3>Device Activity</h3>
                        <i className='bx bx-filter'></i>
                    </div>
                    {/* <canvas id="myChart" style="width:100%;max-width:700px"></canvas> */}
                </div>

            </div>

            <div className="alert-records">
                <div className="header">
                    <i className='bx bx-note'></i>
                    <h3>Suspious Activity ~ Alerts</h3>
                    <i className='bx bx-filter'></i>
                    <i className='bx bx-search'></i>
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
    )
}
