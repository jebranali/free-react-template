function Todo(){
    return (
        <div className="todo-content-area mt-20">
            <div className="sidebar-left">
                <div className="sidebar">
                    <div className="sidebar-content d-flex email-sidebar" data-simplebar>
                        <div className="todo-menu">
                            <button type="button" className="btn btn-primary btn-block compose-btn mb-4"><i
                                className='bx bx-plus'></i> New Task
                            </button>
                            <div className="list-group list-group-messages">
                                <a href="#" className="list-group-item active">
                                    <i className='bx bx-list-check'></i>
                                    All
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className='bx bx-list-ol'></i>
                                    New
                                    <span className="badge badge-success d-inline-block">5</span>
                                </a>
                            </div>
                            <label className="d-block list-group-label text-uppercase">Labels</label>
                            <div className="list-group list-group-messages">
                                <a href="#" className="list-group-item">
                                    <i className='bx bx-star'></i>
                                    Favorite
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className='bx bx-check-double'></i>
                                    Done
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className='bx bx-trash'></i>
                                    Trashed
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
                <div className="todo-area">
                    <div className="todo-list-wrapper">
                        <div className="todo-list">
                            <div className="todo-list-header d-flex align-items-center">
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
                                        <li className="list-inline-item email-unread">
                                            <div className="dropdown">
                                                <button className="dropdown-toggle btn-icon" type="button"
                                                        data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                    <i className='bx bx-filter-alt'></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-sort-up'></i> Ascending
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-sort-down'></i> Descending
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
                                <li className="todo-list-item">
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
                                    <div className="todo-item-title">
                                        <img src="assets/img/user1.jpg" data-toggle="tooltip" data-placement="top"
                                             title="Sarah Taylor" alt="image"></img>
                                            <h3>Print bills</h3>
                                            <p>There are many variations of...</p>
                                    </div>
                                    <div className="todo-item-action">
                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>
                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>
                                    </div>
                                </li>
                                <li className="todo-list-item">
                                    <div className="checkbox">
                                        <input className="inp-cbx" id="cbx2" type="checkbox" style={{display:"none"}}></input>
                                        <label className="cbx" htmlFor="cbx2">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                        </label>
                                    </div>
                                    <div className="todo-item-title">
                                        <img src="assets/img/user2.jpg" data-toggle="tooltip" data-placement="top"
                                             title="Lucy Eva" alt="image"></img>
                                            <h3>Call Rampbo</h3>
                                            <p>There are many variations of...</p>
                                    </div>
                                    <div className="todo-item-action">
                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>
                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>
                                    </div>
                                </li>
                                <li className="todo-list-item">
                                    <div className="checkbox">
                                        <input className="inp-cbx" id="cbx3" type="checkbox" style={{display:"none"}}></input>
                                        <label className="cbx" htmlFor="cbx3">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                        </label>
                                    </div>
                                    <div className="todo-item-title">
                                        <img src="assets/img/user3.jpg" data-toggle="tooltip" data-placement="top"
                                             title="John Smith" alt="image"></img>
                                            <h3>Print Statements all</h3>
                                            <p>There are many variations of...</p>
                                    </div>
                                    <div className="todo-item-action">
                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>
                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>
                                    </div>
                                </li>
                                <li className="todo-list-item">
                                    <div className="checkbox">
                                        <input className="inp-cbx" id="cbx4" type="checkbox" style={{display:"none"}}></input>
                                        <label className="cbx" htmlFor="cbx4">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                        </label>
                                    </div>
                                    <div className="todo-item-title">
                                        <img src="assets/img/user4.jpg" data-toggle="tooltip" data-placement="top"
                                             title="Steven Smith" alt="image"></img>
                                            <h3>What reason think</h3>
                                            <p>There are many variations of...</p>
                                    </div>
                                    <div className="todo-item-action">
                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>
                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>
                                    </div>
                                </li>
                                <li className="todo-list-item">
                                    <div className="checkbox">
                                        <input className="inp-cbx" id="cbx5" type="checkbox" style={{display:"none"}}></input>
                                        <label className="cbx" htmlFor="cbx5">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                        </label>
                                    </div>
                                    <div className="todo-item-title">
                                        <img src="assets/img/user5.jpg" data-toggle="tooltip" data-placement="top"
                                             title="Lucy Smith" alt="image"></img>
                                            <h3>Think about business content?</h3>
                                            <p>There are many variations of...</p>
                                    </div>
                                    <div className="todo-item-action">
                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>
                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>
                                    </div>
                                </li>
                                <li className="todo-list-item">
                                    <div className="checkbox">
                                        <input className="inp-cbx" id="cbx6" type="checkbox" style={{display:"none"}}></input>
                                        <label className="cbx" htmlFor="cbx6">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                        </label>
                                    </div>
                                    <div className="todo-item-title">
                                        <img src="assets/img/user6.jpg" data-toggle="tooltip" data-placement="top"
                                             title="James Anderson" alt="image"></img>
                                            <h3>Reason would it be advisable</h3>
                                            <p>There are many variations of...</p>
                                    </div>
                                    <div className="todo-item-action">
                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>
                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>
                                    </div>
                                </li>
                                <li className="todo-list-item">
                                    <div className="checkbox">
                                        <input className="inp-cbx" id="cbx7" type="checkbox" style={{display:"none"}}></input>
                                        <label className="cbx" htmlFor="cbx7">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                        </label>
                                    </div>
                                    <div className="todo-item-title">
                                        <img src="assets/img/user1.jpg" data-toggle="tooltip" data-placement="top"
                                             title="Sarah Taylor" alt="image"></img>
                                            <h3>Print bills</h3>
                                            <p>There are many variations of...</p>
                                    </div>
                                    <div className="todo-item-action">
                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>
                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>
                                    </div>
                                </li>
                                <li className="todo-list-item">
                                    <div className="checkbox">
                                        <input className="inp-cbx" id="cbx8" type="checkbox" style={{display:"none"}}></input>
                                        <label className="cbx" htmlFor="cbx8">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                        </label>
                                    </div>
                                    <div className="todo-item-title">
                                        <img src="assets/img/user2.jpg" data-toggle="tooltip" data-placement="top"
                                             title="Lucy Eva" alt="image"></img>
                                            <h3>Call Rampbo</h3>
                                            <p>There are many variations of...</p>
                                    </div>
                                    <div className="todo-item-action">
                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>
                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>
                                    </div>
                                </li>
                                <li className="todo-list-item">
                                    <div className="checkbox">
                                        <input className="inp-cbx" id="cbx9" type="checkbox" style={{display:"none"}}></input>
                                        <label className="cbx" htmlFor="cbx9">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                        </label>
                                    </div>
                                    <div className="todo-item-title">
                                        <img src="assets/img/user3.jpg" data-toggle="tooltip" data-placement="top"
                                             title="John Smith" alt="image"></img>
                                            <h3>Print Statements all</h3>
                                            <p>There are many variations of...</p>
                                    </div>
                                    <div className="todo-item-action">
                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>
                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>
                                    </div>
                                </li>
                                <li className="todo-list-item">
                                    <div className="checkbox">
                                        <input className="inp-cbx" id="cbx10" type="checkbox" style={{display:"none"}}></input>
                                        <label className="cbx" htmlFor="cbx10">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                        </label>
                                    </div>
                                    <div className="todo-item-title">
                                        <img src="assets/img/user4.jpg" data-toggle="tooltip" data-placement="top"
                                             title="Steven Smith" alt="image"></img>
                                            <h3>What reason think</h3>
                                            <p>There are many variations of...</p>
                                    </div>
                                    <div className="todo-item-action">
                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>
                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>
                                    </div>
                                </li>
                                <li className="todo-list-item">
                                    <div className="checkbox">
                                        <input className="inp-cbx" id="cbx11" type="checkbox" style={{display:"none"}}></input>
                                        <label className="cbx" htmlFor="cbx11">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                        </label>
                                    </div>
                                    <div className="todo-item-title">
                                        <img src="assets/img/user5.jpg" data-toggle="tooltip" data-placement="top"
                                             title="Lucy Smith" alt="image"></img>
                                            <h3>Think about business content?</h3>
                                            <p>There are many variations of...</p>
                                    </div>
                                    <div className="todo-item-action">
                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>
                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>
                                    </div>
                                </li>
                                <li className="todo-list-item">
                                    <div className="checkbox">
                                        <input className="inp-cbx" id="cbx12" type="checkbox" style={{display:"none"}}></input>
                                        <label className="cbx" htmlFor="cbx12">
<span>
<svg width="12px" height="10px" viewBox="0 0 12 10">
<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
</svg>
</span>
                                        </label>
                                    </div>
                                    <div className="todo-item-title">
                                        <img src="assets/img/user6.jpg" data-toggle="tooltip" data-placement="top"
                                             title="James Anderson" alt="image"></img>
                                            <h3>Reason would it be advisable</h3>
                                            <p>There are many variations of...</p>
                                    </div>
                                    <div className="todo-item-action">
                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>
                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo