import { useEffect } from "react";
import { useAuth } from "../../utils/auth"
import { Navigate } from "react-router-dom";

export default function Logout() {

    const { logoutUser, user } = useAuth();

    useEffect(() => {
        if (user) {
            logoutUser();
        }
    }, [])

    return <Navigate to='/' replace />
}
