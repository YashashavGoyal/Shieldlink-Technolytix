export default function Navigation({ setIsSidebar }) {

    // Function to toggle the sidebar's open/close state
    const handleMenuClick = () => {
        setIsSidebar(prevState => !prevState);
    };

    return (
        <>
            <nav>
                <i className='bx bx-menu' onClick={handleMenuClick}></i>
                {/* <input type="checkbox" id="theme-toggle" hidden />
                <label htmlFor="theme-toggle" className="theme-toggle">
                    <i className='bx bxs-moon'></i>
                </label> */}
                <a href="#" className="notif">
                    <i className='bx bx-bell'></i>
                    <span className="count">12</span>
                </a>
                <a href="#" className="profile">
                    <img src="images/logo.png" alt="Profile" />
                </a>
            </nav>
        </>
    );
}
