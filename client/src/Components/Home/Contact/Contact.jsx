import React, { useState } from 'react';
import './ContactUs.css';
import { useAuth } from '../../../utils/auth';
import { toast } from 'react-toastify';

const ContactUs = () => {

    const { API } = useAuth();

    const [message, setMessage] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setMessage({
            ...message,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API}/api/contact/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message), // Send the message object as JSON
            });
            const resData = await response.json();
            if (response.ok) {
                toast.success(resData.message);
                setMessage({
                    firstname: "",
                    lastname: "",
                    email: "",
                    phone: "",
                    message: "",
                })
            }
            else {
                toast.error(resData.message);
            }
        } catch (error) {
            // Show error toast notification
            toast.error(error.message || 'Error sending message', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    return (
        <div className="contactUs">
            <div className="title">
                <h1>Get in Touch</h1>
            </div>
            <div className="box">
                {/* Contact Form */}
                <div className="contact form">
                    <h3>Send a message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="formBox">
                            <div className="row50">
                                <div className="inputBox">
                                    <span>First Name</span>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        name='firstname'
                                        value={message.firstname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="inputBox">
                                    <span>Last Name</span>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        name='lastname'
                                        value={message.lastname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row50">
                                <div className="inputBox">
                                    <span>Email</span>
                                    <input
                                        type="email"
                                        placeholder="email@gmail.com"
                                        name='email'
                                        value={message.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="inputBox">
                                    <span>Mobile No</span>
                                    <input
                                        type="text"
                                        placeholder="+91 Phone Number"
                                        name='phone'
                                        value={message.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputBox">
                                    <span>Message</span>
                                    <textarea
                                        placeholder="Write your message"
                                        name='message'
                                        value={message.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputBox">
                                    <input type="submit" value="Send" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="contact info">
                    <h3>Contact Info</h3>
                    <div className="infoBox">
                        <div>
                            <span><ion-icon name="location"></ion-icon></span>
                            <p>Udaipur, Rajasthan <br /> INDIA</p>
                        </div>
                        <div>
                            <span><ion-icon name="mail"></ion-icon></span>
                            <a href="mailto:loremipsum@gmail.com">loremipsum@gmail.com</a>
                        </div>
                        <div>
                            <span><ion-icon name="call"></ion-icon></span>
                            <a href="tel:+91982774637">+91 98765 56789</a>
                        </div>
                        <ul className="sci">
                            <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                            <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                            <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                            <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
                        </ul>
                    </div>
                </div>

                {/* Google Map */}
                <div className="contact map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.074103507089!2d73.69400067514279!3d24.586638678109182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e58bc2c50aad%3A0x5f8246e8c8ddb768!2siStart%20Nest%20Incubator!5e0!3m2!1sen!2sin!4v1724276465301!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
