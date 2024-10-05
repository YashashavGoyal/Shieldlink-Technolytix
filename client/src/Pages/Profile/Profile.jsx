import React, { useEffect, useState } from 'react';
import './Profile.css';
import { useAuth } from '../../utils/auth';
import { toast } from 'react-toastify';

export default function Profile() {
    const { API, token, user, isLoading } = useAuth();

    const [isEditable, setIsEditable] = useState(false);

    const [userInfo, setUserInfo] = useState({
        name: '',
        organization: '',
        email: '',
        idCardName: '',
        idCardNumber: '',
    });

    const gen1 = user.device?.gen1 || []; // Safe access to user.device
    const gen2 = user.device?.gen2 || []; // Safe access to user.device

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        // console.log(token);

        if (!token) {
            toast.error("Invalid session. Please log in again.");
            return;
        }

        const URL = `${API}/api/auth/user/update`;
        try {
            const response = await fetch(URL, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            });

            const resData = await response.json();
            if (response.ok) {
                toast.success(resData.message);
                setIsEditable(false);
            } else if (response.status === 401) { // Unauthorized
                toast.error("Session expired. Please log in again.");
                // Handle logout or token refresh here
            } else {
                toast.error(resData.message || "Failed to update user information.");
            }
        } catch (error) {
            console.error("Update Error: ", error); // Log error for debugging
            toast.error("An error occurred while updating. Please try again.");
        }
    };

    // Update userInfo whenever the user changes
    useEffect(() => {
        if (user) {
            setUserInfo({
                name: user.name || 'Name',
                organization: user.organization || 'Organization',
                email: user.email || 'Email',
                idCardName: user.idCardName || 'Id Name',
                idCardNumber: user.idCardNumber || 'Id Number',
            });
        }
    }, [user]); // Add user as a dependency

    if (isLoading) {
        return <h1>User Data Loading...</h1>;
    }

    return (
        <div className="profile-container">
            <section className="profile-header">
                <div className="profile-summary">
                    <i className='bx bx-user-circle icon'></i>
                    <h2>User Profile</h2>
                </div>
                <div className="profile-stats">
                    <div className="stat-item">
                        <span className="stat-title">Devices</span>
                        <span className="stat-number">{gen1.length + gen2.length}</span> {/* Updated device count */}
                    </div>
                </div>
            </section>

            <section className="profile-details">
                <div className="profile-photo-container">
                    <div className="profile-photo-border">
                        <img src="" alt="User Profile" className="profile-photo" />
                    </div>
                </div>
                <div className="profile-info">
                    <h3>Personal Information</h3>
                    <form onSubmit={handleUpdate}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={userInfo.name}
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                        <div className="form-group">
                            <label>Organization Name</label>
                            <input
                                type="text"
                                name="organization"
                                value={userInfo.organization}
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={userInfo.email}
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                        <div className="form-group">
                            <label>ID Card Name</label>
                            <input
                                type="text"
                                name="idCardName"
                                value={userInfo.idCardName}
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                        <div className="form-group">
                            <label>ID Card Number</label>
                            <input
                                type="text"
                                name="idCardNumber"
                                value={userInfo.idCardNumber}
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                        <div className="form-group">
                            <label>Devices Added</label>
                            <input
                                type="text"
                                value={gen1.length + gen2.length || 0}
                                disabled
                            />
                        </div>
                        <div className="form-group" style={{ gap: '10px' }}>
                            <button type="button" onClick={() => setIsEditable(!isEditable)}>
                                {isEditable ? 'Cancel' : 'Edit'}
                            </button>
                            {isEditable && <button type="submit">Update</button>}
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
