import { useEffect } from 'react';
import {HashRouter, Link} from "react-router-dom";

function Register(){

    useEffect(() => {
        // Update the document title using the browser API
        document.title = "React Learning - Sign Up";
    });

    return (
        <div className="register-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="register-form">
                        <div className="logo">
                            <HashRouter><Link to="dashboard/analytics">Logo Here</Link></HashRouter>
                        </div>
                        <h2>Register</h2>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" name="name" placeholder="Name"></input>
                                    <span className="label-title"><i className='bx bx-user'></i></span>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="email" placeholder="Email"></input>
                                    <span className="label-title"><i className='bx bx-envelope'></i></span>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password"></input>
                                    <span className="label-title"><i className='bx bx-lock'></i></span>
                            </div>
                            <div className="form-group">
                                <div className="terms-conditions">
                                    <label className="checkbox-box">I accept <a href="#">Terms and Conditions</a>
                                        <input type="checkbox"></input>
                                            <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="register-btn">Sign Up</button>
                            <p className="mb-0">Already have account? <HashRouter><Link to="/">Sign In</Link></HashRouter></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register