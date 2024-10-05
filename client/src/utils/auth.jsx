import { get } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const API = ` http://127.0.0.1:2024`;

    // token state variable
    const [token, setToken] = useState(localStorage.getItem('token'));


    // setting token in LS
    const setTokenInLS = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    }


    // user state variable
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState();

    // getting user data
    const getUser = async () => {
        const url = `${API}/api/auth/user/info`;

        try {
            setIsLoading(true);
            if (token !== null) {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                const resdata = await response.json();

                if (response.ok) {
                    const userData = await resdata.user;
                    // console.log(userData);
                    setUser(userData);
                    setIsLoading(false);
                }
                else {
                    setIsLoading(false);
                }
            }

        } catch (error) {
            console.log(`usr data error`, error);
        }

    }

    useEffect(() => {
        getUser();
    }, [])


    const [deviceData, setDeviceData] = useState({ gen1: [], gen2: [] });
    const [loadingDevice, setDeviceLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch devices when the component mounts
    const fetchDevices = async () => {
        try {
            const response = await fetch(`${API}/api/device/read`, {
                method: 'GET', // Assuming GET is used for fetching devices
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // Assuming you're using JWT tokens
                },
            });

            const resData = await response.json();
            if (response.ok) {
                // toast.success(resData.message);
                setDeviceData(resData.devices); // Store the fetched devices (gen1 and gen2 arrays) in state
                setDeviceLoading(false);
            }
        } catch (error) {
            setError(error.message);
            setDeviceLoading(false);
        }
    };

    useEffect(() => {

        fetchDevices();
        // console.log(deviceData);

    });





    const logoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }


    let isLoggedIn = !!token;

    const contextContent = {
        API,
        token,
        isLoggedIn,
        deviceData,
        loadingDevice,
        isLoading,
        user,
        setTokenInLS,
        getUser,
        logoutUser,
    }

    return (
        <AuthContext.Provider value={contextContent}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    };
    return authContextValue;
}