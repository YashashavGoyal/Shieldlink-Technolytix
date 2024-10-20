import Device from "../../Components/UserPanel/Devices/Device";
import DeviceFirebase from "../../Components/UserPanel/Devices/DeviceFirebase";
import { useAuth } from "../../utils/auth";

export default function Report() {

    const { deviceData, loadingDevice } = useAuth();
    const { gen1 = [], gen2 = [] } = deviceData;

    console.log(deviceData);
    

    if (loadingDevice) {
        return <h1>Loading Reports...</h1>
    }

    return (
        <>
            <div className="device-container">
                {/* Fetching Data From Firebase */}
                <DeviceFirebase />
                <div className="device-list">
                    <div className="device-list-header">
                        <h4 className="header">
                            Gen-1 Devices
                        </h4>
                    </div>
                    <div className="device-list-content">
                        {
                            (gen1.length === 0) ?
                                <div className="device-list">
                                    <h1>No Gen-1 Devices</h1>
                                </div> :
                                gen1.map((device, index) => (
                                    <Device key={device._id || index} group={device} />
                                ))
                        }
                    </div>
                </div>
                <div className="device-list">
                    <div className="device-list-header">
                        <h4 className="header">
                            Gen-2 Devices
                        </h4>
                    </div>
                    <div className="device-list-content">
                        {
                            (gen2.length === 0) ?
                                <div className="device-list">
                                    <h1>No Gen-2 Devices</h1>
                                </div> :
                                gen2.map((device, index) => (
                                    <Device key={device._id || index} group={device} />
                                ))
                        }
                    </div>
                </div>
            </div >
        </>
    )
}
