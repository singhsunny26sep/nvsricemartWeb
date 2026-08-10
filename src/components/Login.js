import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [step, setStep] = useState(1); // 1: mobile input, 2: OTP input
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [sessionId, setSessionId] = useState(''); // Store sessionId from send OTP response
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!mobile || mobile.length !== 10 || isNaN(mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    setError('');
    setIsLoading(true);
    try {
      const response = await fetch('https://nvs-rice-mart.onrender.com/nvs-rice-mart/auth/loginOrSignin-with-mobile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send OTP');
      }

      const data = await response.json();
      // Store sessionId for verification
      if (data.data && data.data.otpData && data.data.otpData.Details) {
        setSessionId(data.data.otpData.Details);
      }
      
      // If successful, move to step 2
      setStep(2);
      setSuccess(`OTP sent to ${mobile}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6 || isNaN(otp)) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    setError('');
    setIsLoading(true);
    try {
      const response = await fetch('https://nvs-rice-mart.onrender.com/nvs-rice-mart/auth/verify-otp-mobile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          sessionId,
          mobile,
          otp,
          fcmToken: "ertrerterter", // Empty as not provided by user
          currentScreen: "LANDING" // As per API docs
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Invalid OTP');
      }

      // If successful, navigate to Home
      setSuccess('Login successful!');
      const data = await response.json();
      // Store token from response
      let token = null;
      if (data.data && data.data.token) {
        token = data.data.token;
      } else if (data.token) {
        token = data.token;
      }
      if (token) {
        localStorage.setItem('token', token);
      }
      navigate('/Home');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://nvs-rice-mart.onrender.com/nvs-rice-mart/auth/loginOrSignin-with-mobile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to resend OTP');
      }

      const data = await response.json();
      // Update sessionId for new OTP
      if (data.data && data.data.otpData && data.data.otpData.Details) {
        setSessionId(data.data.otpData.Details);
      }

      setSuccess(`New OTP sent to ${mobile}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Sign in to your account</h2>
          <p>Enter your mobile number to get started</p>
        </div>
        <div className="login-form">
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          <form onSubmit={(e) => e.preventDefault()}>
            {step === 1 ? (
              <>
                <div className="form-group">
                  <label className="form-label" htmlFor="mobile">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    autoComplete="mobile"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className={`form-input ${error && error.includes('mobile') ? 'error' : ''}`}
                    placeholder="Enter your 10-digit mobile number"
                    maxLength="10"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={isLoading || !mobile || mobile.length !== 10}
                  className={`action-button ${isLoading ? 'loading' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <span className="button-icon">⏳</span>
                      <span className="button-text">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="button-icon">📱</span>
                      <span className="button-text">Send OTP</span>
                    </>
                  )}
                </button>
                <p className="otp-info">
                  We'll send a 6-digit OTP to your mobile number for verification
                </p>
              </>
            ) : (
              <>
                <div className="otp-section">
                  <p className="otp-info">
                    We've sent a 6-digit OTP to <strong>{mobile}</strong>
                  </p>
                  <p className="otp-info">
                    Please enter the OTP you received to continue.
                  </p>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="otp">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    id="otp"
                    autoComplete="otp"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className={`form-input ${error && error.includes('OTP') ? 'error' : ''}`}
                    placeholder="Enter 6-digit OTP"
                    maxLength="6"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={isLoading || !otp || otp.length !== 6}
                  className={`action-button ${isLoading ? 'loading' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <span className="button-icon">⏳</span>
                      <span className="button-text">Verifying...</span>
                    </>
                  ) : (
                    <>
                      <span className="button-icon">✅</span>
                      <span className="button-text">Verify OTP</span>
                    </>
                  )}
                </button>
                <div className="alternative-actions">
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={isLoading}
                    className="resend-link"
                  >
                    {isLoading ? 'Please wait...' : 'Resend OTP'}
                  </button>
                  <p className="otp-info">
                    Didn't receive the code?
                  </p>
                </div>
              </>
            )}
          </form>
          <p className="signup-prompt">
            Don't have an account?{' '}
            <button type="button" className="signup-link">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;