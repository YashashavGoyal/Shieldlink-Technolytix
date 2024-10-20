import { useLocation, NavLink } from "react-router-dom";
import './Sidebar.css'; // Import the CSS file

export default function Sidebar({ isSidebarClosed }) {
    const location = useLocation();

    // Helper function to determine if the current path matches
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
                <a href="#" className="logo">
                    <i className='bx bx-code-alt'></i>
                    <div className="logo-name"><span>Shield</span>link</div>
                </a>
                <ul className="side-menu">
                    <li className={isActive("/dashboard") ? "active" : ""}>
                        <NavLink to="/user/admin/dashboard">
                            <i className='bx bxs-dashboard'></i>Dashboard
                        </NavLink>
                    </li>
                    <li className={isActive("/analyze") ? "active" : ""}>
                        <NavLink to="/user/admin/analyze">
                            <i className='bx bx-analyse'></i>Analytics
                        </NavLink>
                    </li>
                    <li className={isActive("/report") ? "active" : ""}>
                        <NavLink to="/user/admin/report">
                            <i className='bx bx-receipt'></i>Report
                        </NavLink>
                    </li>
                    {/* <li className={""
                        // isActive("/report") ||
                        // isActive("/report/gen-1") ||
                        // isActive("/report/gen-2") ||
                        // isActive("/report/gen-3")
                        //     ? "active"
                        //     : ""
                    }>
                        <details>
                            <summary>
                                <NavLink to='/user/admin/report'>
                                    <i className='bx bx-receipt'></i> Report
                                </NavLink>
                                <i className='bx bx-chevron-down'></i>
                            </summary>
                            <div className="dropdown-content">
                                <NavLink to='/user/admin/report/gen-1'>
                                    GEN 1
                                </NavLink>
                                <NavLink to='/user/admin/report/gen-2'>
                                    GEN 2
                                </NavLink>
                                <NavLink to='/user/admin/report/gen-3'>
                                    GEN 3
                                </NavLink>
                            </div>
                        </details>
                    </li> */}
                    <li className={isActive("/profile") ? "active" : ""}>
                        <NavLink to="/user/admin/profile">
                            <i className='bx bx-user'></i>Profile
                        </NavLink>
                    </li>
                    <li className={isActive("/setting") ? "active" : ""}>
                        <NavLink to="/user/admin/setting">
                            <i className='bx bx-cog'></i>Settings
                        </NavLink>
                    </li>
                </ul>
                <ul className="side-menu">
                    <li className={isActive("/logout") ? "active logout" : "logout"}>
                        <NavLink to="/logout">
                            <i className='bx bx-log-out-circle'></i>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}
