import { useAuth } from "../../../utils/auth"

export default function Insight() {

    const { deviceData } = useAuth();
    const { gen1 = [], gen2 = [] } = deviceData;

    return (
        <>
            <ul className="insights">
                <li>
                    <i className='bx bx-devices'></i>
                    <span className="info">
                        <h3>
                            {gen1.length + gen2.length || 0}
                        </h3>
                        <p>Devices</p>
                    </span>
                </li>
                <li><i className='bx bx-check-square'></i>
                    <span className="info">
                        <h3>
                            {gen1.length + gen2.length || 0}
                        </h3>
                        <p>Active Devices</p>
                    </span>
                </li>
                <li><i className='bx bx-line-chart'></i>
                    <span className="info">
                        <h3>
                            0
                        </h3>
                        <p>Results</p>
                    </span>
                </li>
                <li><i className='bx bxs-radiation'></i>
                    <span className="info">
                        <h3>
                            0
                        </h3>
                        <p>Suspious</p>
                    </span>
                </li>
            </ul >
        </>
    )
}
