function Compose(){
    return (
        <div className="email-compose-content-area mt-20">
            <div className="sidebar-left">
                <div className="sidebar">
                    <div className="sidebar-content d-flex email-compose-sidebar">
                        <div className="email-compose-menu">
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
                <div className="email-compose-area">
                    <div className="email-compose-list-wrapper">
                        <h3>New Message</h3>
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="To"></input>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject"></input>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="CC"></input>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="BCC"></input>
                            </div>
                            <div className="summernote"></div>
                            <div className="form-group mb-0 text-right mt-4">
                                <button type="button" className="btn btn-success mr-1">Save <i
                                    className='bx bx-save'></i></button>
                                <button type="button" className="btn btn-success mr-1">Trash <i
                                    className='bx bx-trash'></i></button>
                                <button type="submit" className="btn btn-primary">Send <i className='bx bx-send'></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compose