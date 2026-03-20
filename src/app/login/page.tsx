'use client';

import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('dryba@coleman.com.ar');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);
  const [jokeScreen, setJokeScreen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate auth connection
    setTimeout(() => {
      setLoading(false);
      
      // If the default credentials match, trigger the "Juandy" joke
      if (email === 'dryba@coleman.com.ar' && password === '123456') {
        setJokeScreen(true);
      } else {
        alert("Invalid credentials. Please contact your Global Administrator.");
      }
    }, 1500);
  };

  if (jokeScreen) {
    return (
      <div className="joke-screen">
        <div className="joke-content">
          <img 
            src="https://russellbedford.com/media/8307/daniel-ryba-7-2.png" 
            alt="Daniel Ryba" 
            className="joke-image" 
          />
          <h1 className="joke-title">¡¡Hola Global Chairman SOY JUANDY!!</h1>
          <button className="btn-primary" onClick={() => setJokeScreen(false)} style={{ marginTop: '30px' }}>
            Go Back
          </button>
        </div>
        <style jsx>{`
          .joke-screen {
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            background: radial-gradient(circle, #0F172A 0%, #000 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }
          .joke-content {
            text-align: center;
            animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }
          .joke-image {
            width: 300px;
            height: 300px;
            object-fit: contain;
            border-radius: 50%;
            background: rgba(2, 132, 199, 0.2);
            box-shadow: 0 0 100px rgba(2, 132, 199, 0.8);
            border: 5px solid #0284C7;
            animation: spinDance 3s linear infinite;
            filter: hue-rotate(90deg) contrast(1.2);
          }
          .joke-title {
            margin-top: 40px;
            color: #FFFFFF;
            font-size: 48px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            animation: pulseColor 1s infinite alternate;
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          }
          
          @keyframes popIn {
            0% { transform: scale(0.1); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          
          @keyframes spinDance {
            0% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(10deg) scale(1.1); }
            50% { transform: rotate(0deg) scale(1); }
            75% { transform: rotate(-10deg) scale(1.1); }
            100% { transform: rotate(0deg) scale(1); }
          }

          @keyframes pulseColor {
            from { color: #FFFFFF; text-shadow: 0 0 20px #0284C7; }
            to { color: #0284C7; text-shadow: 0 0 40px #FFFFFF; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <section className="login-wrapper">
        <div className="login-container glass-card">
          <div className="login-logo">
            <h2>Member Portal</h2>
            <p>Secure access for COLEMAN partners.</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <label htmlFor="email">Corporate Email</label>
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                placeholder="name@coleman-partner.com"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                placeholder="••••••••"
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <button type="button" className="forgot-password-btn" onClick={() => alert("Contact global support to reset your COLEMAN credentials.")}>Forgot password?</button>
            </div>

            <button type="submit" className="btn-primary login-submit" disabled={loading}>
              {loading ? 'Authenticating...' : 'Secure Login'}
            </button>
          </form>
          
          <div className="login-footer">
            <p>Protected by COLEMAN Cyber Security &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .login-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          padding: 80px 20px;
        }

        .login-container {
          width: 100%;
          max-width: 480px;
          padding: 60px 40px;
          border-radius: 8px;
        }

        .login-logo { text-align: center; margin-bottom: 40px; }
        .login-logo h2 { font-size: 32px; color: var(--text-primary); margin-bottom: 8px; font-family: var(--font-heading); font-weight: 400; }
        .login-logo p { color: var(--text-secondary); font-size: 15px; }

        .login-form { display: flex; flex-direction: column; gap: 24px; }

        .input-group { display: flex; flex-direction: column; gap: 8px; }
        .input-group label { color: var(--text-primary); font-size: 14px; font-weight: 500; }
        .input-group input {
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.1);
          color: var(--text-primary);
          padding: 14px 16px;
          border-radius: 4px;
          font-size: 16px;
          transition: all 0.3s ease;
        }
        .input-group input:focus {
          outline: none;
          border-color: var(--cobalt-accent);
          box-shadow: 0 0 0 2px rgba(2, 132, 199, 0.1);
        }

        .form-options { display: flex; justify-content: space-between; align-items: center; font-size: 14px; }
        .remember-me { display: flex; align-items: center; gap: 8px; color: var(--text-secondary); cursor: pointer; }
        .forgot-password-btn { background: none; border: none; padding: 0; color: var(--cobalt-accent); font-weight: 500; font-size: 14px; font-family: inherit; cursor: pointer; }
        .forgot-password-btn:hover { text-decoration: underline; }

        .login-submit { width: 100%; padding: 16px; font-size: 16px; margin-top: 8px; }
        .login-submit:disabled { opacity: 0.7; cursor: not-allowed; }

        .login-footer { margin-top: 40px; text-align: center; border-top: 1px solid rgba(15, 23, 42, 0.1); padding-top: 24px; }
        .login-footer p { color: var(--text-secondary); font-size: 12px; }
      `}</style>
    </>
  );
}
