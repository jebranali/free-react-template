function Read(){
    return (
        <div className="email-read-content-area mt-20">
            <div className="sidebar-left">
                <div className="sidebar">
                    <div className="sidebar-content d-flex email-sidebar" data-simplebar>
                        <div className="email-read-menu">
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
                <div className="email-read-area">
                    <div className="email-read-list-wrapper">
                        <div className="email-read-list">
                            <div className="email-read-list-header d-flex align-items-center justify-content-between">
                                <div className="header-left d-flex align-items-center">
                                    <a href="#" className="d-inline-block go-back">
                                        <i className='bx bx-chevron-left'></i>
                                    </a>
                                    <h3 className="font-weight-bold mb-0">Tips for using your new inbox <span
                                        className="badge bg-success ml-1">Inbox</span></h3>
                                </div>
                                <div className="header-right d-flex align-items-center">
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
                            </div>
                            <div className="email-read-scroll-area" data-simplebar>
                                <ul className="list-wrapper">
                                    <li className="email-read-list-item">
                                        <div className="email-read-list-detail">
                                            <div className="user-information">
                                                <img src="assets/img/user1.jpg" alt="image"></img>
                                                    <span className="name d-block">Steven Smith <span
                                                        className="email d-inline-block">(<a
                                                        href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                        data-cfemail="681b05011c00280f05090104460b0705">[email&#160;protected]</a>)</span></span>
                                                    <p className="mb-0 to">to Luis Gustavo</p>
                                            </div>
                                            <div className="email-information d-flex align-items-center">
                                                <span className="date d-block">01:50 PM</span>
                                                <span className="favorite d-block">
<i className='bx bx-star'></i>
</span>
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle" type="button"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className='bx bx-dots-vertical-rounded'></i>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-reply'></i> Reply
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-reply-all'></i> Reply to all
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-caret-right'></i> Forward
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-trash'></i> Delete
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-printer'></i> Print
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="email-read-list-content">
                                            <p className="font-weight-bold">Dear Sir/Ma'am,</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book. It has survived not only five
                                                centuries, but also the leap into electronic typesetting, remaining
                                                essentially unchanged.</p>
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English. Many desktop publishing packages and web
                                                page editors now use Lorem Ipsum as their default model text, and a
                                                search for 'lorem ipsum' will uncover many web sites still in their
                                                infancy.</p>
                                            <div className="email-read-list-footer">
                                                <label className="font-weight-bold d-block mb-2 text-uppercase">Attached
                                                    Files</label>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <img src="assets/img/psd.png" width="25" alt="image"></img>
                                                                <span
                                                                    className="d-inline-block ml-2">Olaf-design.psd</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <img src="assets/img/sketch.png" width="25" alt="image"></img>
                                                                <span
                                                                    className="d-inline-block ml-2">Olaf-design.sketch</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="email-read-list-item">
                                        <div className="email-read-list-detail">
                                            <div className="user-information">
                                                <img src="assets/img/user2.jpg" alt="image"></img>
                                                    <span className="name d-block">Sarah Taylor <span
                                                        className="email d-inline-block">(<a
                                                        href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                        data-cfemail="6b180a190a032b0c060a020745080406">[email&#160;protected]</a>)</span></span>
                                                    <p className="mb-0 to">to Luis Gustavo</p>
                                            </div>
                                            <div className="email-information d-flex align-items-center">
                                                <span className="date d-block">01:50 PM</span>
                                                <span className="favorite d-block">
<i className='bx bx-star'></i>
</span>
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle" type="button"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className='bx bx-dots-vertical-rounded'></i>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-reply'></i> Reply
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-reply-all'></i> Reply to all
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-caret-right'></i> Forward
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-trash'></i> Delete
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-printer'></i> Print
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="email-read-list-content">
                                            <p className="font-weight-bold">Dear Sir/Ma'am,</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book. It has survived not only five
                                                centuries, but also the leap into electronic typesetting, remaining
                                                essentially unchanged.</p>
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English. Many desktop publishing packages and web
                                                page editors now use Lorem Ipsum as their default model text, and a
                                                search for 'lorem ipsum' will uncover many web sites still in their
                                                infancy.</p>
                                            <div className="email-read-list-footer">
                                                <label className="font-weight-bold d-block mb-2 text-uppercase">Attached
                                                    Files</label>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <img src="assets/img/psd.png" width="25" alt="image"></img>
                                                                <span
                                                                    className="d-inline-block ml-2">Olaf-design.psd</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <img src="assets/img/sketch.png" width="25" alt="image"></img>
                                                                <span
                                                                    className="d-inline-block ml-2">Olaf-design.sketch</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="email-reply-list-item">
                                        <a href="#" className="d-inline-block"><i className='bx bx-reply'></i> Reply</a>
                                        <a href="#" className="d-inline-block"><i className='bx bx-reply-all'></i> Reply
                                            All</a>
                                        <a href="#" className="d-inline-block"><i
                                            className='bx bx-fast-forward'></i> Forward</a>
                                    </li>
                                </ul>
                            </div>
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

export default Read