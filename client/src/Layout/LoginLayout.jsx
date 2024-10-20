import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import './Login.css';
import Footer from '../Components/Footer/Footer';
import img from '../assets/images/Login.png';
import LoginSvg from '../Components/LoginSvg/LoginSvg';
import { useAuth } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function LoginLayout() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const { API, setTokenInLS } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            email,
            password,
        };

        try {
            const response = await fetch(`${API}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const resData = await response.json();

            if (response.ok) {
                // console.log('Login successful:', data);
                toast.success('Login Successfull');
                setTokenInLS(resData.token)
                navigate('/user/admin/dashboard');
            } else {
                console.error('Login failed:', resData.message);
                toast.error('Login Failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="login-body">
                <div className="login-img">
                    <LoginSvg />
                    <img src={img} alt="Login Illustration" />
                </div>
                <div className="login-container">
                    <form onSubmit={handleSubmit}>
                        <h3>
                            Welcome Again!
                            <h3>Login to access Admin Panel</h3>
                        </h3>

                        <label htmlFor="username">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            id="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
