import { useEffect } from 'react';
import {HashRouter, Link} from "react-router-dom";

function Login(){

    useEffect(() => {
        // Update the document title using the browser API
        document.title = "React Learning - Sign In";
    });

    return (
        <div className="login-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="login-form">
                        <div className="logo">
                            <HashRouter><Link to="dashboard/analytics">Logo Here</Link></HashRouter>
                        </div>
                        <h2>Welcome</h2>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" name="email" placeholder="Email"></input>
                                <span className="label-title"><i className='bx bx-user'></i></span>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password"></input>
                                <span className="label-title"><i className='bx bx-lock'></i></span>
                            </div>
                            <div className="form-group">
                                <div className="remember-forgot">
                                    <label className="checkbox-box">Remember me
                                        <input type="checkbox"></input>
                                        <span className="checkmark"></span>
                                    </label>
                                    <HashRouter><Link to="forgot-password" className="forgot-password">Forgot password?</Link></HashRouter>
                                </div>
                            </div>
                            <button type="submit" className="login-btn">Login</button>
                            <p className="mb-0">Don’t have an account? <HashRouter><Link to="register">Sign Up</Link></HashRouter></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login