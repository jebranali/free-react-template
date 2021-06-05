function Inbox(){
    return (
        <div className="email-content-area mt-20">
            <div className="sidebar-left">
                <div className="sidebar">
                    <div className="sidebar-content d-flex email-sidebar" data-simplebar>
                        <div className="email-menu">
                            <button type="button" className="btn btn-primary btn-block compose-btn mb-4"><i
                                className='bx bx-plus'></i> Compose
                            </button>
                            <div className="list-group list-group-messages">
                                <a href="#" className="list-group-item active">
                                    <i className='bx bx-envelope'></i>
                                    Inbox
                                    <span className="badge badge-success d-inline-block">5</span>
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className='bx bx-paper-plane'></i>
                                    Sent
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className='bx bx-edit'></i>
                                    Drafts
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className='bx bx-star'></i>
                                    Starred
                                    <span className="badge badge-primary d-inline-block">3</span>
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className='bx bxs-time-five'></i>
                                    Snoozed
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className='bx bx-info-square'></i>
                                    Spam
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className='bx bx-trash'></i>
                                    Trash
                                    <span className="badge badge-danger d-inline-block">8</span>
                                </a>
                            </div>
                            <label className="d-block list-group-label text-uppercase">Labels</label>
                            <div className="list-group list-group-labels">
                                <a href="#" className="list-group-item">
                                    Categories
                                </a>
                                <a href="#" className="list-group-item">
                                    Social
                                </a>
                                <a href="#" className="list-group-item">
                                    Updates
                                </a>
                                <a href="#" className="list-group-item">
                                    Forums
                                </a>
                                <a href="#" className="list-group-item">
                                    Promotions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-right">
                <div className="email-area">
                    <div className="email-list-wrapper">
                        <div className="email-list">
                            <div className="email-list-header d-flex align-items-center">
                                <div className="header-left d-flex align-items-center mr-3">
                                    <div className="checkbox mr-3">
                                        <input className="inp-cbx" id="cbx-all" type="checkbox" style={{display:"none"}}></input>
                                        <label className="cbx" htmlFor="cbx-all">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                        </label>
                                    </div>
                                    <ul className="list-inline m-0 d-flex">
                                        <li className="list-inline-item email-delete">
                                            <button type="button" className="btn-icon">
                                                <i className='bx bx-trash'></i>
                                            </button>
                                        </li>
                                        <li className="list-inline-item email-unread">
                                            <button type="button" className="btn-icon">
                                                <i className='bx bx-envelope'></i>
                                            </button>
                                        </li>
                                        <li className="list-inline-item email-unread">
                                            <div className="dropdown">
                                                <button className="dropdown-toggle btn-icon" type="button"
                                                        data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                    <i className='bx bx-info-square'></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-edit'></i> Drafts
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-info-square'></i> Spam
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-trash'></i> Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-inline-item email-unread">
                                            <div className="dropdown">
                                                <button className="dropdown-toggle btn-icon" type="button"
                                                        data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                    <i className='bx bx-purchase-tag-alt'></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-duplicate'></i> Categories
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bxs-user-detail'></i> Social
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-up-arrow'></i> Updates
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-chat'></i> Forums
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-trending-up'></i> Promotions
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header-right w-100">
                                    <form>
                                        <label><i className="bx bx-search"></i></label>
                                        <input type="text" className="form-control" placeholder="Search email..."></input>
                                    </form>
                                </div>
                            </div>
                            <ul className="list-wrapper" data-simplebar>
                                <li className="email-list-item">
                                    <div className="email-list-actions mr-3">
                                        <div className="checkbox">
                                            <input className="inp-cbx" id="cbx" type="checkbox" style={{display:"none"}}></input>
                                            <label className="cbx" htmlFor="cbx">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                            </label>
                                        </div>
                                        <span className="favorite">
<i className='bx bx-star'></i>
</span>
                                    </div>
                                    <a href="#" className="email-list-detail">
                                        <div>
                                            <img src="assets/img/user1.jpg" alt="image"></img>
                                                <span className="from d-block">Codecademy Pro</span>
                                                <p className="mb-0 msg">Black Friday Sale on Codecademy Pro</p>
                                        </div>
                                        <span className="date d-block">01:50 PM</span>
                                    </a>
                                </li>
                                <li className="email-list-item">
                                    <div className="email-list-actions mr-3">
                                        <div className="checkbox">
                                            <input className="inp-cbx" id="cbx2" type="checkbox"
                                                   style={{display:"none"}}></input>
                                            <label className="cbx" htmlFor="cbx2">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                            </label>
                                        </div>
                                        <span className="favorite">
<i className='bx bx-star'></i>
</span>
                                    </div>
                                    <a href="#" className="email-list-detail">
                                        <div>
                                            <img src="assets/img/user2.jpg" alt="image"></img>
                                                <span className="from d-block">Font Awesome</span>
                                                <p className="mb-0 msg">Confirm Your Font Awesome Account Email
                                                    Address</p>
                                        </div>
                                        <span className="date d-block">02 Dec</span>
                                    </a>
                                </li>
                                <li className="email-list-item read">
                                    <div className="email-list-actions mr-3">
                                        <div className="checkbox">
                                            <input className="inp-cbx" id="cbx3" type="checkbox"
                                                   style={{display:"none"}}></input>
                                            <label className="cbx" htmlFor="cbx3">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                            </label>
                                        </div>
                                        <span className="favorite">
<i className='bx bx-star'></i>
</span>
                                    </div>
                                    <a href="#" className="email-list-detail">
                                        <div>
                                            <img src="assets/img/user3.jpg" alt="image"></img>
                                                <span className="from d-block">Stack Overflow</span>
                                                <p className="mb-0 msg">Reputation values have changed across Stack
                                                    Overflow</p>
                                        </div>
                                        <span className="date d-block">05 Dec</span>
                                    </a>
                                </li>
                                <li className="email-list-item">
                                    <div className="email-list-actions mr-3">
                                        <div className="checkbox">
                                            <input className="inp-cbx" id="cbx4" type="checkbox"
                                                   style={{display:"none"}}></input>
                                            <label className="cbx" htmlFor="cbx4">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                            </label>
                                        </div>
                                        <span className="favorite">
<i className='bx bx-star'></i>
</span>
                                    </div>
                                    <a href="#" className="email-list-detail">
                                        <div>
                                            <img src="assets/img/user4.jpg" alt="image"></img>
                                                <span className="from d-block">Envato Market</span>
                                                <p className="mb-0 msg">[ThemeForest] EnvyTheme replied to your
                                                    comment!</p>
                                        </div>
                                        <span className="date d-block">02 Dec</span>
                                    </a>
                                </li>
                                <li className="email-list-item">
                                    <div className="email-list-actions mr-3">
                                        <div className="checkbox">
                                            <input className="inp-cbx" id="cbx5" type="checkbox"
                                                   style={{display:"none"}}></input>
                                            <label className="cbx" htmlFor="cbx5">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
 </span>
                                            </label>
                                        </div>
                                        <span className="favorite">
<i className='bx bx-star'></i>
</span>
                                    </div>
                                    <a href="#" className="email-list-detail">
                                        <div>
                                            <img src="assets/img/user5.jpg" alt="image"></img>
                                                <span className="from d-block">EnvyTheme Market</span>
                                                <p className="mb-0 msg">[ThemeForest] EnvyTheme replied to your
                                                    comment!</p>
                                        </div>
                                        <span className="date d-block">05 Dec</span>
                                    </a>
                                </li>
                                <li className="email-list-item">
                                    <div className="email-list-actions mr-3">
                                        <div className="checkbox">
                                            <input className="inp-cbx" id="cbx6" type="checkbox"
                                                   style={{display:"none"}}></input>
                                            <label className="cbx" htmlFor="cbx6">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                            </label>
                                        </div>
                                        <span className="favorite">
<i className='bx bx-star'></i>
</span>
                                    </div>
                                    <a href="#" className="email-list-detail">
                                        <div>
                                            <img src="assets/img/user6.jpg" alt="image"></img>
                                                <span className="from d-block">ThemeForest Market</span>
                                                <p className="mb-0 msg">[ThemeForest] EnvyTheme replied to your
                                                    comment!</p>
                                        </div>
                                        <span className="date d-block">08 Dec</span>
                                    </a>
                                </li>
                                <li className="email-list-item read">
                                    <div className="email-list-actions mr-3">
                                        <div className="checkbox">
                                            <input className="inp-cbx" id="cbx7" type="checkbox"
                                                   style={{display:"none"}}></input>
                                            <label className="cbx" htmlFor="cbx7">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                            </label>
                                        </div>
                                        <span className="favorite">
<i className='bx bx-star'></i>
</span>
                                    </div>
                                    <a href="#" className="email-list-detail">
                                        <div>
                                            <img src="assets/img/user1.jpg" alt="image"></img>
                                                <span className="from d-block">Envato Market</span>
                                                <p className="mb-0 msg">[ThemeForest] EnvyTheme replied to your
                                                    comment</p>
                                        </div>
                                        <span className="date d-block">15 Dec</span>
                                    </a>
                                </li>
                                <li className="email-list-item">
                                    <div className="email-list-actions mr-3">
                                        <div className="checkbox">
                                            <input className="inp-cbx" id="cbx8" type="checkbox"
                                                   style={{display:"none"}}></input>
                                            <label className="cbx" htmlFor="cbx8">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                            </label>
                                        </div>
                                        <span className="favorite">
<i className='bx bx-star'></i>
</span>
                                    </div>
                                    <a href="#" className="email-list-detail">
                                        <div>
                                            <img src="assets/img/user2.jpg" alt="image"></img>
                                                <span className="from d-block">Instagram</span>
                                                <p className="mb-0 msg">New login to Instagram from Chrome on
                                                    Windows</p>
                                        </div>
                                        <span className="date d-block">20 Dec</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="email-list-footer d-flex justify-content-between align-items-center">
                                <p className="mb-0">Show: 1 - 10 of 590</p>
                                <div className="email-pagination-btn">
                                    <button type="submit" className="email-pagination-prev d-inline-block"><i
                                        className='bx bx-arrow-to-left'></i></button>
                                    <button type="submit" className="email-pagination-next d-inline-block"><i
                                        className='bx bx-arrow-to-right'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inbox