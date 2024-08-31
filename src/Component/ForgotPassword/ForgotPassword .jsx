import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSendOtp = async () => {
        try {
            await axios.post('https://api.sitarammarriagebureau.com/api/user/send-otp', { email });
            setStep(2);
            toast.success('OTP sent to your email.');
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const handleVerifyOtp = async () => {
        try {
            await axios.post('https://api.sitarammarriagebureau.com/api/user/verify-otp', { email, otp });
            setStep(3);
            toast.success('OTP verified. Please set a new password.');
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const handleResetPassword = async () => {
        if (password !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }
        try {
            await axios.post('https://api.sitarammarriagebureau.com/api/user/reset-password', { email, password });
            toast.success('Password reset successfully.');
            navigate('/login');
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message);
        }
    };

    return (
        <section id="forgot-password" className="p_3">
            <div className="container-xl">
                <div className="row text-center">
                    <div className="col-md-6 offset-md-3">
                        <div className="shadow_box formouter">
                            {step === 1 && (
                                <>
                                    <h1 className="font_30 mb-5">Forgot Password</h1>
                                    <input
                                        className="form-control mt-3 loginform"
                                        placeholder="Enter your email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button className="button_1 mt-3" onClick={handleSendOtp}>Send OTP</button>
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    <h1 className="font_30 mb-5">Verify OTP</h1>
                                    <input
                                        className="form-control mt-3 loginform"
                                        placeholder="Enter OTP"
                                        type="text"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />
                                    <button className="button_1 mt-3" onClick={handleVerifyOtp}>Verify OTP</button>
                                </>
                            )}
                            {step === 3 && (
                                <>
                                    <h1 className="font_30 mb-5">Reset Password</h1>
                                    <input
                                        className="form-control mt-3 loginform"
                                        placeholder="New Password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <input
                                        className="form-control mt-3 loginform"
                                        placeholder="Confirm Password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <div className="mt-2" style={{ float: 'left' }}>
                                        <input
                                            type="checkbox"
                                            id="showPassword"
                                            checked={showPassword}
                                            onChange={() => setShowPassword(!showPassword)}
                                        />
                                        <label htmlFor="showPassword">Show Password</label>
                                    </div>
                                    <button className="button_1 mt-3" onClick={handleResetPassword}>Reset Password</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
