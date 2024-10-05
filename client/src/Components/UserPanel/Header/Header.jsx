import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
    const [page, setPage] = useState('');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        console.log(path);
        
        if (path === '/user/admin/dashboard') {
            setPage('Dashboard');
        } else if (path === '/user/admin/analyze') {
            setPage('Analytics');
        } else if (path === '/user/admin/profile') {
            setPage('Profile');
        } else if (path === '/user/admin/report') {
            setPage('Report');
        } else if (path === '/user/admin/setting') {
            setPage('Setting');
        } else {
            setPage('');
        }
    }, [location.pathname]);

    return (
        <div className="header">
            <div className="left">
                <h1>{page}</h1>
                <ul className="breadcrumb">
                    <li><a href="#">
                        ShieldLink
                    </a></li>
                    /
                    <li><a href="#" className="active">{page}</a></li>
                </ul>
            </div>
            {
                (page === '/admin/user/report')?
                <a href="#" className="report">
                    <i className='bx bx-cloud-download'></i>
                    <span>Download CSV</span>
                </a>:null
            }
        </div>
    );
}
