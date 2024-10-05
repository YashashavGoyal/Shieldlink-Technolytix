import './Device.css';

export default function Device({ group }) {

    const { name, rssi, latitude, longitude } = group;

    return (
        <>
            <div className="device-box">
                <span className='title'>
                    <i className='bx bx-mobile'></i>
                    {name}
                </span>
                <div className="device-box-content">
                    <p>
                        RSSI Value: <span className='real-time-data'>{rssi}</span><br />
                        Data: <span className='real-time-data'>Db value</span><br />
                        Time: <span className='real-time-data'>00:00</span><br />
                        Location: <span className='real-time-data'>{latitude} {longitude}</span><br />
                    </p>
                </div>
            </div>
        </>
    )
}
