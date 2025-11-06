import React, { useState } from 'react';

const LoginModal = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('email');

    return (
        <div className="login-modal" style={{ display: 'flex' }} onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="login-content">
                <span className="close-login" onClick={onClose}>&times;</span>
                <h2>Login / Sign Up</h2>

                <div className="login-tabs">
                    <div className={`login-tab ${activeTab === 'email' ? 'active' : ''}`} onClick={() => setActiveTab('email')}>Email</div>
                    <div className={`login-tab ${activeTab === 'mobile' ? 'active' : ''}`} onClick={() => setActiveTab('mobile')}>Mobile</div>
                </div>

                <form className={`login-form ${activeTab === 'email' ? 'active' : ''}`} onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="email-login">Email Address</label>
                        <input type="email" id="email-login" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                    <p style={{ textAlign: 'center', marginTop: '15px' }}>Don't have an account? <a href="#" style={{ color: 'var(--accent)' }}>Sign up</a></p>
                </form>

                <form className={`login-form ${activeTab === 'mobile' ? 'active' : ''}`} onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input type="tel" id="mobile" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="otp">OTP</label>
                        <input type="text" id="otp" required />
                    </div>
                    <button type="submit" className="login-btn">Login with OTP</button>
                    <p style={{ textAlign: 'center', marginTop: '15px' }}>Don't have an account? <a href="#" style={{ color: 'var(--accent)' }}>Sign up</a></p>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
