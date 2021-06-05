import React from "react";
import {HashRouter, Link} from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar top-navbar navbar-expand">
            <div className="collapse navbar-collapse" id="navbarSupportContent">
                <div className="responsive-burger-menu d-block d-lg-none">
                    <span className="top-bar"></span>
                    <span className="middle-bar"></span>
                    <span className="bottom-bar"></span>
                </div>
                <ul className="navbar-nav left-nav align-items-center">
                    <li className="nav-item">
                        <HashRouter><Link to="/dashboard/inbox" className="nav-link">
                            <i className="bx bx-envelope"></i>
                        </Link></HashRouter>
                    </li>
                    <li className="nav-item">
                        <HashRouter><Link to="/dashboard/chat" className="nav-link">
                            <i className='bx bx-message'></i>
                        </Link></HashRouter>
                    </li>
                    <li className="nav-item">
                        <HashRouter><Link to="/dashboard/calendar" className="nav-link">
                            <i className='bx bx-calendar'></i>
                        </Link></HashRouter>
                    </li>
                    <li className="nav-item">
                        <HashRouter><Link to="/dashboard/todo" className="nav-link">
                            <i className='bx bx-edit'></i>
                        </Link></HashRouter>
                    </li>
                    <li className="nav-item dropdown apps-box">
                        <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <i className='bx bxs-grid'></i>
                        </a>
                        <div className="dropdown-menu">
                            <div className="dropdown-header d-flex justify-content-between align-items-center">
                                <span className="title d-inline-block">Web Apps</span>
                                <span className="edit-btn d-inline-block">Edit</span>
                            </div>
                            <div className="dropdown-body">
                                <div className="d-flex flex-wrap align-items-center">
                                    <a href="#" className="dropdown-item">
                                        <img src="assets/img/icon-account.png" alt="image"></img>
                                        <span className="d-block mb-0">Account</span>
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <img src="assets/img/icon-google.png" alt="image"></img>
                                        <span className="d-block mb-0">Search</span>
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <img src="assets/img/icon-map.png" alt="image"></img>
                                        <span className="d-block mb-0">Maps</span>
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <img src="assets/img/icon-youtube.png" alt="image"></img>
                                        <span className="d-block mb-0">YouTube</span>
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <img src="assets/img/icon-playstore.png" alt="image"></img>
                                        <span className="d-block mb-0">Play</span>
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <img src="assets/img/icon-gmail.png" alt="image"></img>
                                        <span className="d-block mb-0">Gmail</span>
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <img src="assets/img/icon-drive.png" alt="image"></img>
                                        <span className="d-block mb-0">Drive</span>
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <img src="assets/img/icon-calendar.png" alt="image"></img>
                                        <span className="d-block mb-0">Calendar</span>
                                    </a>
                                </div>
                            </div>
                            <div className="dropdown-footer">
                                <a href="#" className="dropdown-item">View All</a>
                            </div>
                        </div>
                    </li>
                </ul>
                <form className="nav-search-form d-none ml-auto d-md-block">
                    <label><i className='bx bx-search'></i></label>
                    <input type="text" className="form-control" placeholder="Search here..."></input>
                </form>
                <ul className="navbar-nav right-nav align-items-center">
                    <li className="nav-item">
                        <a className="nav-link bx-fullscreen-btn" id="fullscreen-button">
                            <i className="bx bx-fullscreen"></i>
                        </a>
                    </li>
                    <li className="nav-item dropdown language-switch-nav-item">
                        <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <img src="assets/img/us-flag.jpg" alt="image"></img>
                            <span>English <i className='bx bx-chevron-down'></i></span>
                        </a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item d-flex justify-content-between align-items-center">
                                <span>German</span>
                                <img src="assets/img/germany-flag.jpg" alt="flag"></img>
                            </a>
                            <a href="#" className="dropdown-item d-flex justify-content-between align-items-center">
                                <span>French</span>
                                <img src="assets/img/france-flag.jpg" alt="flag"></img>
                            </a>
                            <a href="#" className="dropdown-item d-flex justify-content-between align-items-center">
                                <span>Spanish</span>
                                <img src="assets/img/spain-flag.jpg" alt="flag"></img>
                            </a>
                            <a href="#" className="dropdown-item d-flex justify-content-between align-items-center">
                                <span>Russian</span>
                                <img src="assets/img/russia-flag.jpg" alt="flag"></img>
                            </a>
                            <a href="#" className="dropdown-item d-flex justify-content-between align-items-center">
                                <span>Italian</span>
                                <img src="assets/img/italy-flag.jpg" alt="flag"></img>
                            </a>
                        </div>
                    </li>
                    <li className="nav-item message-box dropdown">
                        <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <div className="message-btn">
                                <i className='bx bx-envelope'></i>
                                <span className="badge badge-primary">4</span>
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <div className="dropdown-header d-flex justify-content-between align-items-center">
                                <span className="title d-inline-block">4 New Message</span>
                                <span className="clear-all-btn d-inline-block">Clear All</span>
                            </div>
                            <div className="dropdown-body">
                                <a href="#" className="dropdown-item d-flex align-items-center">
                                    <div className="figure">
                                        <img src="assets/img/user1.jpg" className="rounded-circle" alt="image"></img>
                                    </div>
                                    <div className="content d-flex justify-content-between align-items-center">
                                        <div className="text">
                                            <span className="d-block">Sarah Taylor</span>
                                            <p className="sub-text mb-0">UX/UI design</p>
                                        </div>
                                        <p className="time-text mb-0">2 sec ago</p>
                                    </div>
                                </a>
                                <a href="#" className="dropdown-item d-flex align-items-center">
                                    <div className="figure">
                                        <img src="assets/img/user2.jpg" className="rounded-circle" alt="image"></img>
                                    </div>
                                    <div className="content d-flex justify-content-between align-items-center">
                                        <div className="text">
                                            <span className="d-block">Lucy Eva</span>
                                            <p className="sub-text mb-0">Web developers</p>
                                        </div>
                                        <p className="time-text mb-0">5 sec ago</p>
                                    </div>
                                </a>
                                <a href="#" className="dropdown-item d-flex align-items-center">
                                    <div className="figure">
                                        <img src="assets/img/user3.jpg" className="rounded-circle" alt="image"></img>
                                    </div>
                                    <div className="content d-flex justify-content-between align-items-center">
                                        <div className="text">
                                            <span className="d-block">James Anderson</span>
                                            <p className="sub-text mb-0">Content whitter</p>
                                        </div>
                                        <p className="time-text mb-0">3 min ago</p>
                                    </div>
                                </a>
                                <a href="#" className="dropdown-item d-flex align-items-center">
                                    <div className="figure">
                                        <img src="assets/img/user4.jpg" className="rounded-circle" alt="image"></img>
                                    </div>
                                    <div className="content d-flex justify-content-between align-items-center">
                                        <div className="text">
                                            <span className="d-block">Steven Smith</span>
                                            <p className="sub-text mb-0">Digital marketing</p>
                                        </div>
                                        <p className="time-text mb-0">7 min ago</p>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-footer">
                                <a href="#" className="dropdown-item">View All</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item notification-box dropdown">
                        <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <div className="notification-btn">
                                <i className='bx bx-bell'></i>
                                <span className="badge badge-secondary">5</span>
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <div className="dropdown-header d-flex justify-content-between align-items-center">
                                <span className="title d-inline-block">6 New Notifications</span>
                                <span className="mark-all-btn d-inline-block">Mark all as read</span>
                            </div>
                            <div className="dropdown-body">
                                <a href="#" className="dropdown-item d-flex align-items-center">
                                    <div className="icon">
                                        <i className='bx bx-message-rounded-dots'></i>
                                    </div>
                                    <div className="content">
                                        <span className="d-block">Just sent a new message!</span>
                                        <p className="sub-text mb-0">2 sec ago</p>
                                    </div>
                                </a>
                                <a href="#" className="dropdown-item d-flex align-items-center">
                                    <div className="icon">
                                        <i className='bx bx-user'></i>
                                    </div>
                                    <div className="content">
                                        <span className="d-block">New customer registered</span>
                                        <p className="sub-text mb-0">5 sec ago</p>
                                    </div>
                                </a>
                                <a href="#" className="dropdown-item d-flex align-items-center">
                                    <div className="icon">
                                        <i className='bx bx-layer'></i>
                                    </div>
                                    <div className="content">
                                        <span className="d-block">Apps are ready for update</span>
                                        <p className="sub-text mb-0">3 min ago</p>
                                    </div>
                                </a>
                                <a href="#" className="dropdown-item d-flex align-items-center">
                                    <div className="icon">
                                        <i className='bx bx-hourglass'></i>
                                    </div>
                                    <div className="content">
                                        <span className="d-block">Your item is shipped</span>
                                        <p className="sub-text mb-0">7 min ago</p>
                                    </div>
                                </a>
                                <a href="#" className="dropdown-item d-flex align-items-center">
                                    <div className="icon">
                                        <i className='bx bx-comment-dots'></i>
                                    </div>
                                    <div className="content">
                                        <span className="d-block">Steven commented on your post</span>
                                        <p className="sub-text mb-0">1 sec ago</p>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-footer">
                                <a href="#" className="dropdown-item">View All</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown profile-nav-item">
                        <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <div className="menu-profile">
                                <span className="name">Hi! Andro</span>
                                <img src="assets/img/user1.jpg" className="rounded-circle" alt="image"></img>
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <div className="dropdown-header d-flex flex-column align-items-center">
                                <div className="figure mb-3">
                                    <img src="assets/img/user1.jpg" className="rounded-circle" alt="image"></img>
                                </div>
                                <div className="info text-center">
                                    <span className="name">Andro Smith</span>
                                    <p className="mb-3 email"><a href="/cdn-cgi/l/email-protection"
                                                                 className="__cf_email__"
                                                                 data-cfemail="046c6168686b44656a60766b77696d706c2a676b69">[email&#160;protected]</a>
                                    </p>
                                </div>
                            </div>
                            <div className="dropdown-body">
                                <ul className="profile-nav p-0 pt-3">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className='bx bx-user'></i> <span>Profile</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className='bx bx-envelope'></i> <span>My Inbox</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className='bx bx-edit-alt'></i> <span>Edit Profile</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className='bx bx-cog'></i> <span>Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="dropdown-footer">
                                <ul className="profile-nav">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className='bx bx-log-out'></i> <span>Logout</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar