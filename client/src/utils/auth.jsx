import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const API = import.meta.env.VITE_API_URL || `http://127.0.0.1:4000`;

    const [token, setToken] = useState(localStorage.getItem('token'));


    const setTokenInLS = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    };


    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);


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
                    setUser(userData);
                } else {
                    throw new Error(resdata.message || "Failed to fetch user");
                }
            }
        } catch (error) {
            console.error("User data fetch error:", error);
            toast.error("Failed to fetch user data");
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        getUser();
    }, []);


    const [deviceData, setDeviceData] = useState({ gen1: [], gen2: [] });
    const [loadingDevice, setDeviceLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch devices from the API
    const fetchDevices = async () => {
        try {
            setDeviceLoading(true);
            const response = await fetch(`${API}/api/device/read`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // Assuming you're using JWT tokens
                },
            });

            const resData = await response.json();
            if (response.ok) {
                setDeviceData(resData.devices); // Store the fetched devices (gen1 and gen2 arrays) in state
            } else {
                throw new Error(resData.message || "Failed to fetch devices");
            }
        } catch (error) {
            setError(error.message);
            toast.error("Error fetching devices");
        } finally {
            setDeviceLoading(false);
        }
    };

    // Fetch device data when token changes
    useEffect(() => {
        const interval = setInterval(() => {
            if (token) {
                fetchDevices();
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [token]); // Dependency array ensures this runs when the token changes



    // Function to log out the user
    const logoutUser = () => {
        setTokenInLS(""); // Clear token from LS and state
        setUser({}); // Reset user object
        toast.info("Logged out successfully");
    };

    // Check if the user is logged in
    let isLoggedIn = !!token;

    // Context content to be provided to components
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
    };

    // Provide the context to children
    return (
        <AuthContext.Provider value={contextContent}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to access the AuthContext
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};
