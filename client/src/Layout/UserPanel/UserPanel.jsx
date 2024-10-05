import { useState } from "react";
import Navigation from "../../Components/UserPanel/Navigation/Navigation";
import Sidebar from "../../Components/UserPanel/Sidebar/Sidebar";
import './UserPanel.css';
import Header from "../../Components/UserPanel/Header/Header";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../utils/auth";

export default function UserPanel() {

    const { user, devices } = useAuth();

    const [isSidebarClosed, setIsSidebarClosed] = useState(true);

    return (
        <>
            <Sidebar isSidebarClosed={isSidebarClosed} />
            <div className="content">
                <Navigation setIsSidebar={setIsSidebarClosed} />

                <main>
                    <Header />
                    <Outlet />
                </main>
            </div>
        </>
    );
}
