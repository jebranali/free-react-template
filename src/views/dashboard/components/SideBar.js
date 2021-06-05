import React from "react";
import {HashRouter, Link} from "react-router-dom";

function SideBar(){
    return (
        <div className="sidemenu-area">
            <div className="sidemenu-header">
                <HashRouter><Link to="/dashboard/analytics">Logo Here</Link></HashRouter>
                <div className="burger-menu d-none d-lg-block">
                    <span className="top-bar"></span>
                    <span className="middle-bar"></span>
                    <span className="bottom-bar"></span>
                </div>
                <div className="responsive-burger-menu d-block d-lg-none">
                    <span className="top-bar"></span>
                    <span className="middle-bar"></span>
                    <span className="bottom-bar"></span>
                </div>
            </div>
            <div className="sidemenu-body">
                <ul className="sidemenu-nav metisMenu h-100" id="sidemenu-nav" data-simplebar>
                    <li className="nav-item-title">
                        Main
                    </li>
                    <li className="nav-item">
                        <a href="#" className="collapsed-nav-link nav-link" aria-expanded="false">
                            <span className="icon"><i className='bx bx-home-circle'></i></span>
                            <span className="menu-title">Dashboard</span>
                            <span className="badge">2</span>
                        </a>
                        <ul className="sidemenu-nav-second-level">
                            <li className="nav-item mm-active">
                                <HashRouter><Link to="/dashboard/analytics" className="nav-link">
                                    <span className="icon"><i className='bx bx-analyse'></i></span>
                                    <span className="menu-title">Analytics</span>
                                </Link></HashRouter>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item-title">
                        Apps
                    </li>
                    <li className="nav-item">
                        <a href="#" className="collapsed-nav-link nav-link" aria-expanded="false">
                            <span className="icon"><i className='bx bx-envelope'></i></span>
                            <span className="menu-title">Email</span>
                            <span className="badge">3</span>
                        </a>
                        <ul className="sidemenu-nav-second-level">
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/inbox" className="nav-link">
                                    <span className="icon"><i className='bx bxs-inbox'></i></span>
                                    <span className="menu-title">Inbox</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/read" className="nav-link">
                                    <span className="icon"><i className='bx bxs-badge-check'></i></span>
                                    <span className="menu-title">Read</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/compose" className="nav-link">
                                    <span className="icon"><i className='bx bx-send'></i></span>
                                    <span className="menu-title">Compose</span>
                                </Link></HashRouter>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <HashRouter><Link to="/dashboard/chat" className="nav-link">
                            <span className="icon"><i className='bx bx-message'></i></span>
                            <span className="menu-title">Chat</span>
                        </Link></HashRouter>
                    </li>
                    <li className="nav-item">
                        <HashRouter><Link to="/dashboard/todo" className="nav-link">
                            <span className="icon"><i className='bx bx-badge-check'></i></span>
                            <span className="menu-title">Todo</span>
                        </Link></HashRouter>
                    </li>
                    <li className="nav-item">
                        <HashRouter><Link to="/dashboard/calendar" className="nav-link">
                            <span className="icon"><i className='bx bx-calendar'></i></span>
                            <span className="menu-title">Calendar</span>
                        </Link></HashRouter>
                    </li>
                    <li className="nav-item-title">
                        UI Elements
                    </li>
                    <li className="nav-item">
                        <HashRouter><Link to="/dashboard/grid" className="nav-link">
                            <span className="icon"><i className='bx bx-grid-alt'></i></span>
                            <span className="menu-title">Grid</span>
                        </Link></HashRouter>
                    </li>
                    <li className="nav-item">
                        <HashRouter><Link to="/dashboard/color" className="nav-link">
                            <span className="icon"><i className='bx bxs-color-fill'></i></span>
                            <span className="menu-title">Colors</span>
                        </Link></HashRouter>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="collapsed-nav-link nav-link" aria-expanded="false">
                            <span className="icon"><i className='bx bx-brightness'></i></span>
                            <span className="menu-title">Icons</span>
                        </a>
                        <ul className="sidemenu-nav-second-level">
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/boxicon" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Box Icons</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/feathericon" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Feather Icons</span>
                                </Link></HashRouter>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="collapsed-nav-link nav-link" aria-expanded="false">
                            <span className="icon"><i className='bx bx-card'></i></span>
                            <span className="menu-title">Card</span>
                        </a>
                        <ul className="sidemenu-nav-second-level">
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/basiccard" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Basic Card</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/colorcard" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Colors Card</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/statisticscard" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Statistics Card</span>
                                </Link></HashRouter>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item mm-active">
                        <a href="#" className="collapsed-nav-link nav-link" aria-expanded="false">
                            <span className="icon"><i className='bx bx-chart'></i></span>
                            <span className="menu-title">Component</span>
                        </a>
                        <ul className="sidemenu-nav-second-level">
                            <li className="nav-item mm-active">
                                <HashRouter><Link to="/dashboard/alert" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Alert</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/badge" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Badge</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/border" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Border</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/breadcrumb" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Breadcrumb</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/button" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Buttons</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/buttongroup" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Button Group</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/slider" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Slider</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/collapse" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Collapse</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/display" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Display</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/dropdown" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Dropdown</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/embed" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Embed</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/figure" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Figures</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/image" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Images</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/jumbotron" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Jumbotron</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/listgroup" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">List Group</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/mediaobject" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Media Object</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/modal" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Modal</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/nav" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Navs</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/navbar" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Navbar</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/pagination" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Pagination</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/progress" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Progress</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/spinner" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Spinner</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/text" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Text</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/verticalalignment" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Vertical Alignment</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/typography" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Typography</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/tooltip" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Tooltips</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/popover" className="nav-link">
                                    <span className="icon"><i className='bx bx-right-arrow-alt'></i></span>
                                    <span className="menu-title">Popovers</span>
                                </Link></HashRouter>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item-title">
                        Forms & Table
                    </li>
                    <li className="nav-item">
                        <HashRouter><Link to="/dashboard/form" className="nav-link">
                            <span className="icon"><i className='bx bxs-layer'></i></span>
                            <span className="menu-title">Form Layout</span>
                        </Link></HashRouter>
                    </li>
                    <li className="nav-item">
                        <HashRouter><Link to="/dashboard/inputgroup" className="nav-link">
                            <span className="icon"><i className='bx bx-file'></i></span>
                            <span className="menu-title">Form Input Group</span>
                        </Link></HashRouter>
                    </li>
                    <li className="nav-item">
                        <HashRouter><Link to="/dashboard/table" className="nav-link">
                            <span className="icon"><i className='bx bx-table'></i></span>
                            <span className="menu-title">Table</span>
                        </Link></HashRouter>
                    </li>
                    <li className="nav-item">
                        <HashRouter><Link to="/dashboard/tabledark" className="nav-link">
                            <span className="icon"><i className='bx bx-calendar'></i></span>
                            <span className="menu-title">Table Dark</span>
                        </Link></HashRouter>
                    </li>
                    <li className="nav-item-title">
                        Pages
                    </li>
                    <li className="nav-item">
                        <HashRouter><Link to="/dashboard/profile" className="nav-link">
                            <span className="icon"><i className='bx bx-user-circle'></i></span>
                            <span className="menu-title">Profile</span>
                        </Link></HashRouter>
                    </li>
                    <li className="nav-item">
                        <HashRouter><Link to="/dashboard/faq" className="nav-link">
                            <span className="icon"><i className='bx bx-help-circle'></i></span>
                            <span className="menu-title">FAQ</span>
                        </Link></HashRouter>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="collapsed-nav-link nav-link" aria-expanded="false">
                            <span className="icon"><i className='bx bx-lock-open'></i></span>
                            <span className="menu-title">Authentication</span>
                        </a>
                        <ul className="sidemenu-nav-second-level">
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/login" className="nav-link">
                                    <span className="icon"><i className='bx bx-log-in'></i></span>
                                    <span className="menu-title">Login</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/register" className="nav-link">
                                    <span className="icon"><i className='bx bx-log-in-circle'></i></span>
                                    <span className="menu-title">Register</span>
                                </Link></HashRouter>
                            </li>
                            <li className="nav-item">
                                <HashRouter><Link to="/dashboard/forgot-password" className="nav-link">
                                    <span className="icon"><i className='bx bx-lock'></i></span>
                                    <span className="menu-title">Forgot Password</span>
                                </Link></HashRouter>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar