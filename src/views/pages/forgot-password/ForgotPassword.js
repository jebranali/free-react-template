import {useEffect} from 'react'

function ForgotPassword(){

    useEffect(() => {
        // Update the document title using the browser API
        document.title = "React Learning - Forgot Password";
    });

    return (
        <div className="forgot-password-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="forgot-password-content">
                        <div className="row m-0">
                            <div className="col-lg-5 p-0">
                                <div className="image">
                                    <img src="assets/img/computer.png" alt="image"></img>
                                </div>
                            </div>
                            <div className="col-lg-7 p-0">
                                <div className="forgot-password-form">
                                    <h2>Recover your password</h2>
                                    <p className="mb-0">Please provide the email address that you used when you signed
                                        up for your Olaf account.</p>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="name"
                                                   placeholder="Email address"></input>
                                                <span className="label-title"><i className='bx bx-envelope'></i></span>
                                        </div>
                                        <button type="submit" className="forgot-password-btn">Send Password</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword