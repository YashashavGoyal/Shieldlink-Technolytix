import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import UserPanel from './Layout/UserPanel/UserPanel';
import Dashboard from './Pages/Dashboard/Dashboard';
import Analyze from './Pages/Analyze/Analyze';
import Profile from './Pages/Profile/Profile';
import Report from './Pages/Report/Report';
import Setting from './Pages/Setting/Setting';
import LoginLayout from './Layout/Home/Login/LoginLayout';
import HomeLayout from './Layout/Home/Home';
import AboutLayout from './Layout/Home/AboutLayout';
import ContactLayout from './Layout/Home/ContactLayout';
import AdminProtect from './utils/AdminProtected';
import PrivateRoute from './utils/PrivateRoute';
import { useAuth } from './utils/auth';
import RegisterDevice from './Pages/Registerdevice/RegisterDevice';
import Logout from './Components/Logout/Logout';
import DeviceInfo from './Pages/DeviceInfo/DeviceInfo';

function App() {

    const { isLoggedIn } = useAuth();

    return (
        <>
            <Router>
                <Routes>
                    <Route path='user/admin' element={
                        <PrivateRoute isLoggedIn={isLoggedIn}>
                            <UserPanel />
                        </PrivateRoute>
                    } >
                        <Route index path='dashboard' element={<Dashboard />} />
                        <Route path='analyze' element={<Analyze />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='register-device' element={<RegisterDevice />} />
                        {/* <Route path='report/:device-type' element={<Report />} /> */}
                        <Route path='report' element={<Report />} />
                        <Route path='device/info/:id' element={<DeviceInfo />} />
                        <Route path='setting' element={<Setting />} />
                    </Route>
                    
                    
                    <Route path='/' element={<HomeLayout />} />
                    <Route path='login' element={<LoginLayout />} />
                    <Route path='about' element={<AboutLayout />} />
                    <Route path='contact' element={<ContactLayout />} />
                    <Route path='logout' element={<Logout />} />
                </Routes>
            </Router>

        </>
    )
}

export default App
