import React, { useState } from 'react';
import './Setting.css';
import { toast } from 'react-toastify'; // Make sure to install react-toastify if you haven't
import { useAuth } from '../../utils/auth';

export default function Setting() {
    const { API } = useAuth();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userId: '',
        phone: '',
        message: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const URL = `${API}/api/contact/send`;
        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const resData = await response.json();
                toast.success(resData.message || 'Message sent successfully!');
                setFormData({ firstName: '', lastName: '', email: '', userId: '', phone: '', message: '' }); // Clear form after submission
            } else {
                const resData = await response.json();
                toast.error(resData.message || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Submit Error: ', error);
            toast.error('An error occurred while sending your message. Please try again.');
        }
    };

    return (
        <div className="setting-container">
            <div className="general-setting">
                <div className="box-container">
                    <i className='bx bx-window-alt'></i>
                    <span>General Setting</span>
                </div>
                <div className="box-container">
                    <i className='bx bx-shield-quarter'></i>
                    <span>Security Setting</span>
                </div>
                <div className="box-container">
                    <i className='bx bx-devices'></i>
                    <span>Manage Devices</span>
                </div>
                <div className="box-container">
                    <i className='bx bx-bell'></i>
                    <span>Alert Notification</span>
                </div>
                <div className="box-container">
                    <i className='bx bx-wallet'></i>
                    <span>Payment Setting</span>
                </div>
                <div className="box-container">
                    <i className='bx bx-headphone'></i>
                    <span>Support Setting</span>
                </div>
            </div>
            <div className="chat-config">
                <div className="header">
                    <i className='bx bx-chat'></i>
                    <h3>Chat With Us</h3>
                </div>
                <div className="chat-container">
                    <div className="header">
                        <h3>Tell Us Your Query</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-container">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="Enter your first name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-container">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Enter your last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-container">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-container">
                            <label htmlFor="user_id">User ID</label>
                            <input
                                type="text"
                                name="userId"
                                id="user_id"
                                placeholder="Enter your user ID"
                                value={formData.userId}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-container">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-container">
                            <label htmlFor="message">Enter Your Message</label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Type your message here"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="form-container">
                            <button type="submit" className="btn submit-btn">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
