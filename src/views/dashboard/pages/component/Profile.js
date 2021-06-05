function Profile(){
    return (
        <section className="profile-area">
            <div className="profile-header mb-30">
                <div className="user-profile-images">
                    <img src="assets/img/profile-banner.jpg" className="cover-image" alt="image"></img>
                        <div className="upload-cover-photo">
                            <a href="#"><i className='bx bx-camera'></i> <span>Update Cover Photo</span></a>
                        </div>
                        <div className="profile-image">
                            <img src="assets/img/user1.jpg" alt="image"></img>
                                <div className="upload-profile-photo">
                                    <a href="#"><i className='bx bx-camera'></i> <span>Update</span></a>
                                </div>
                        </div>
                        <div className="user-profile-text">
                            <h3>Andro Smith</h3>
                            <span className="d-block">Developer</span>
                        </div>
                </div>
                <div className="user-profile-nav">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="timeline-tab" data-toggle="tab" href="#timeline"
                               role="tab" aria-controls="timeline" aria-selected="true">Timeline</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="about-tab" data-toggle="tab" href="#about" role="tab"
                               aria-controls="about" aria-selected="false">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="friends-tab" data-toggle="tab" href="#friends" role="tab"
                               aria-controls="friends" aria-selected="false">Friends</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab"
                               aria-controls="settings" aria-selected="false">Settings</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-9">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="timeline" role="tabpanel"
                             aria-labelledby="timeline-tab">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card user-intro-box mb-30">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h3>Intro</h3>
                                            <div className="dropdown">
                                                <button className="dropdown-toggle" type="button" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                    <i className='bx bx-dots-horizontal-rounded'></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-show'></i> View
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-edit-alt'></i> Edit
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-trash'></i> Delete
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-printer'></i> Print
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-download'></i> Download
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0">Life Is Short Write Better Code....</p>
                                            <button type="submit">Edit Bio</button>
                                        </div>
                                    </div>
                                    <div className="card user-info-box mb-30">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h3>Info</h3>
                                            <div className="dropdown">
                                                <button className="dropdown-toggle" type="button" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                    <i className='bx bx-dots-horizontal-rounded'></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-show'></i> View
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-edit-alt'></i> Edit
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-trash'></i> Delete
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-printer'></i> Print
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-download'></i> Download
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-unstyled mb-0">
                                                <li className="d-flex">
                                                    <i className="bx bx-briefcase mr-2"></i>
                                                    <span className="d-inline-block">Full Stack Developer at <a href="#"
                                                                                                                className="d-inline-block">EnvyTheme</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className="bx bx-briefcase mr-2"></i>
                                                    <span className="d-inline-block">Former UI Designer at <a href="#"
                                                                                                              className="d-inline-block">ThemeForest</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bxs-graduation mr-2'></i>
                                                    <span className="d-inline-block">Studies Computer Science Engineering at <a
                                                        href="#" className="d-inline-block">ABC University</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bxs-graduation mr-2'></i>
                                                    <span className="d-inline-block">Went to <a href="#"
                                                                                                className="d-inline-block">Government High School, USA</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bx-home-circle mr-2'></i>
                                                    <span className="d-inline-block">Lives in <a href="#"
                                                                                                 className="d-inline-block">USA</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bx-map mr-2'></i>
                                                    <span className="d-inline-block">From <a href="#"
                                                                                             className="d-inline-block">New York, USA</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bx-wifi mr-2'></i>
                                                    <span className="d-inline-block">Followed by <a href="#"
                                                                                                    className="d-inline-block">111 people</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bx-phone mr-2'></i>
                                                    <span className="d-inline-block">Phone <a href="#"
                                                                                              className="d-inline-block">+0 (123) 456 7892</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bx-envelope mr-2'></i>
                                                    <span className="d-inline-block">Email <a href="#"
                                                                                              className="d-inline-block"><span
                                                        className="__cf_email__"
                                                        data-cfemail="d0b8b5bcbcbf90b1beb4a2bffeb3bfbd">[email&#160;protected]</span></a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bx-calendar mr-2'></i>
                                                    <span className="d-inline-block">Joined <a href="#"
                                                                                               className="d-inline-block">March 2009</a></span>
                                                </li>
                                            </ul>
                                            <button type="submit">Edit Info</button>
                                        </div>
                                    </div>
                                    <div className="card user-photos-box mb-30">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h3>Photos</h3>
                                            <button type="submit" className="photo-upload-btn"><i
                                                className='bx bx-upload'></i> Upload
                                            </button>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-unstyled mb-0 d-flex flex-wrap">
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/user1.jpg" alt="image"></img>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/user2.jpg" alt="image"></img>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/user3.jpg" alt="image"></img>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/user4.jpg" alt="image"></img>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/user5.jpg" alt="image"></img>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/user6.jpg" alt="image"></img>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card user-skills-box mb-30">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h3>Skills</h3>
                                            <button type="submit" className="create-btn">Create</button>
                                        </div>
                                        <div className="card-body">
                                            <label className="badge">HTML5</label>
                                            <label className="badge">CSS3</label>
                                            <label className="badge">JavaScript</label>
                                            <label className="badge">PHP</label>
                                            <label className="badge">Java</label>
                                            <label className="badge">WordPress</label>
                                            <label className="badge">UX/UI</label>
                                            <label className="badge">React</label>
                                        </div>
                                    </div>
                                    <div className="card user-social-box mb-30">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h3>Social</h3>
                                            <button type="submit" className="add-btn">Add</button>
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="facebook" target="_blank" data-toggle="tooltip"
                                               data-placement="top" title="Facebook"><i className='bx bxl-facebook'></i></a>
                                            <a href="#" className="twitter" target="_blank" data-toggle="tooltip"
                                               data-placement="top" title="Twitter"><i
                                                className='bx bxl-twitter'></i></a>
                                            <a href="#" className="instagram" target="_blank" data-toggle="tooltip"
                                               data-placement="top" title="Instagram"><i
                                                className='bx bxl-instagram'></i></a>
                                            <a href="#" className="linkedin" target="_blank" data-toggle="tooltip"
                                               data-placement="top" title="Linkedin"><i className='bx bxl-linkedin'></i></a>
                                            <a href="#" className="pinterest" target="_blank" data-toggle="tooltip"
                                               data-placement="top" title="Pinterest"><i
                                                className='bx bxl-pinterest-alt'></i></a>
                                            <a href="#" className="stack-overflow" target="_blank" data-toggle="tooltip"
                                               data-placement="top" title="Stack Overflow"><i
                                                className='bx bxl-stack-overflow'></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="post-share-content mb-30">
                                        <div className="post-share-field">
                                            <label><img src="assets/img/user1.jpg" alt="image"></img></label>
                                            <textarea cols="30" rows="4" className="form-control"
                                                      placeholder="What's on your mind?"></textarea>
                                        </div>
                                        <div
                                            className="post-share-footer d-flex align-items-center justify-content-between mt-4 pt-4">
                                            <div className="post-share-info">
                                                <a href="#" className="d-inline-block" data-toggle="tooltip"
                                                   data-placement="top" title="Photo/Video"><i
                                                    className="bx bx-camera"></i></a>
                                                <a href="#" className="d-inline-block" data-toggle="tooltip"
                                                   data-placement="top" title="Tag Friends"><i
                                                    className='bx bx-user-circle'></i></a>
                                                <a href="#" className="d-inline-block" data-toggle="tooltip"
                                                   data-placement="top" title="Feeling/Activity"><i
                                                    className='bx bx-smile'></i></a>
                                                <a href="#" className="d-inline-block" data-toggle="tooltip"
                                                   data-placement="top" title="Share Your Location"><i
                                                    className='bx bx-map'></i></a>
                                            </div>
                                            <div className="post-btn">
                                                <a href="#" className="d-inline-block">Post</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-story-content">
                                        <div className="card mb-30">
                                            <div
                                                className="card-header d-flex justify-content-between align-items-center">
                                                <div className="timeline-story-header d-flex align-items-center">
                                                    <img src="assets/img/user1.jpg" width="50" height="50"
                                                         className="rounded-circle" alt="image"></img>
                                                        <div className="info ml-3">
                                                            <h6><a href="#">Andro Smith</a> updated his cover photo.
                                                            </h6>
                                                            <span className="d-block">December 7 at 11:01 AM</span>
                                                        </div>
                                                </div>
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle" type="button"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className='bx bx-dots-horizontal-rounded'></i>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-show'></i> View
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-edit-alt'></i> Edit
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-trash'></i> Delete
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-printer'></i> Print
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-download'></i> Download
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor
                                                    eos id ipsa nobis omnis, tenetur? Dolor officiis omnis quo?</p>
                                                <a href="#" className="d-block">
                                                    <img src="assets/img/slider/1.jpg" alt="image"></img>
                                                </a>
                                                <div className="feedback-summary mt-4">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Like"><i
                                                        className='bx bx-like'></i> 9898</a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                       title="Comment"><i className='bx bx-comment'></i> 898</a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                       title="Share"><i className='bx bx-share'></i> 354</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-30">
                                            <div
                                                className="card-header d-flex justify-content-between align-items-center">
                                                <div className="timeline-story-header d-flex align-items-center">
                                                    <img src="assets/img/user1.jpg" width="50" height="50"
                                                         className="rounded-circle" alt="image"></img>
                                                        <div className="info ml-3">
                                                            <h6><a href="#">Andro Smith</a> updated his status.</h6>
                                                            <span className="d-block">December 7 at 11:01 AM</span>
                                                        </div>
                                                </div>
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle" type="button"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className='bx bx-dots-horizontal-rounded'></i>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-show'></i> View
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-edit-alt'></i> Edit
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-trash'></i> Delete
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-printer'></i> Print
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-download'></i> Download
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the industry's standard
                                                    dummy text ever since the 1500s, when an unknown printer took a
                                                    galley of type and scrambled it to make a type specimen book.</p>
                                                <div className="feedback-summary mt-4">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Like"><i
                                                        className='bx bx-like'></i> 9898</a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                       title="Comment"><i className='bx bx-comment'></i> 898</a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                       title="Share"><i className='bx bx-share'></i> 354</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-30">
                                            <div
                                                className="card-header d-flex justify-content-between align-items-center">
                                                <div className="timeline-story-header d-flex align-items-center">
                                                    <img src="assets/img/user1.jpg" width="50" height="50"
                                                         className="rounded-circle" alt="image"></img>
                                                        <div className="info ml-3">
                                                            <h6><a href="#">Andro Smith</a> updated his profile picture.
                                                            </h6>
                                                            <span className="d-block">December 7 at 11:01 AM</span>
                                                        </div>
                                                </div>
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle" type="button"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className='bx bx-dots-horizontal-rounded'></i>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-show'></i> View
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-edit-alt'></i> Edit
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-trash'></i> Delete
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-printer'></i> Print
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-download'></i> Download
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <a href="#" className="d-block">
                                                    <img src="assets/img/slider/2.jpg" alt="image"></img>
                                                </a>
                                                <div className="feedback-summary mt-4">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Like"><i
                                                        className='bx bx-like'></i> 9898</a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                       title="Comment"><i className='bx bx-comment'></i> 898</a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                       title="Share"><i className='bx bx-share'></i> 354</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-30">
                                            <div
                                                className="card-header d-flex justify-content-between align-items-center">
                                                <div className="timeline-story-header d-flex align-items-center">
                                                    <img src="assets/img/user1.jpg" width="50" height="50"
                                                         className="rounded-circle" alt="image"></img>
                                                        <div className="info ml-3">
                                                            <h6><a href="#">Andro Smith</a> updated his status.</h6>
                                                            <span className="d-block">December 7 at 11:01 AM</span>
                                                        </div>
                                                </div>
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle" type="button"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className='bx bx-dots-horizontal-rounded'></i>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-show'></i> View
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-edit-alt'></i> Edit
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-trash'></i> Delete
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-printer'></i> Print
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-download'></i> Download
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the industry's standard
                                                    dummy text ever since the 1500s, when an unknown printer took a
                                                    galley of type and scrambled it to make a type specimen book.</p>
                                                <div className="feedback-summary mt-4">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Like"><i
                                                        className='bx bx-like'></i> 5874</a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                       title="Comment"><i className='bx bx-comment'></i> 541</a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                       title="Share"><i className='bx bx-share'></i> 24</a>
                                                </div>
                                            </div>
                                            <hr></hr>
                                                <div className="card-body">
                                                    <p className="mb-0">When an unknown printer took a galley of type
                                                        and scrambled it to make a type specimen book.</p>
                                                    <div className="feedback-summary mt-4">
                                                        <a href="#" data-toggle="tooltip" data-placement="top"
                                                           title="Like"><i className='bx bx-like'></i> 541</a>
                                                        <a href="#" data-toggle="tooltip" data-placement="top"
                                                           title="Comment"><i className='bx bx-comment'></i> 555</a>
                                                        <a href="#" data-toggle="tooltip" data-placement="top"
                                                           title="Share"><i className='bx bx-share'></i> 54</a>
                                                    </div>
                                                </div>
                                            <hr></hr>
                                                    <div className="card-body">
                                                        <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                            printing and typesetting industry. Lorem Ipsum has been the
                                                            industry's standard dummy text ever since the 1500s, when an
                                                            unknown printer took a galley of type and scrambled it to
                                                            make a type specimen book.</p>
                                                        <div className="feedback-summary mt-4">
                                                            <a href="#" data-toggle="tooltip" data-placement="top"
                                                               title="Like"><i className='bx bx-like'></i> 5874</a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top"
                                                               title="Comment"><i className='bx bx-comment'></i> 541</a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top"
                                                               title="Share"><i className='bx bx-share'></i> 24</a>
                                                        </div>
                                                    </div>
                                        </div>
                                        <div className="card mb-30">
                                            <div
                                                className="card-header d-flex justify-content-between align-items-center">
                                                <div className="timeline-story-header d-flex align-items-center">
                                                    <img src="assets/img/user1.jpg" width="50" height="50"
                                                         className="rounded-circle" alt="image"></img>
                                                        <div className="info ml-3">
                                                            <h6><a href="#">Andro Smith</a> updated his video.</h6>
                                                            <span className="d-block">December 5 at 12:01 AM</span>
                                                        </div>
                                                </div>
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle" type="button"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className='bx bx-dots-horizontal-rounded'></i>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-show'></i> View
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-edit-alt'></i> Edit
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-trash'></i> Delete
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-printer'></i> Print
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className='bx bx-download'></i> Download
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                                                <div className="feedback-summary mt-3">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Like"><i
                                                        className='bx bx-like'></i> 8541</a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                       title="Comment"><i className='bx bx-comment'></i> 599</a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                       title="Share"><i className='bx bx-share'></i> 54</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card user-intro-box mb-30">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h3>Intro</h3>
                                            <div className="dropdown">
                                                <button className="dropdown-toggle" type="button" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                    <i className='bx bx-dots-horizontal-rounded'></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-show'></i> View
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-edit-alt'></i> Edit
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-trash'></i> Delete
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-printer'></i> Print
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-download'></i> Download
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0">Life Is Short Write Better Code....</p>
                                        </div>
                                    </div>
                                    <div className="card user-skills-box mb-30">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h3>Skills</h3>
                                        </div>
                                        <div className="card-body">
                                            <label className="badge">HTML5</label>
                                            <label className="badge">CSS3</label>
                                            <label className="badge">JavaScript</label>
                                            <label className="badge">PHP</label>
                                            <label className="badge">Java</label>
                                            <label className="badge">WordPress</label>
                                            <label className="badge">UX/UI</label>
                                            <label className="badge">React</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="card user-info-box mb-30">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h3>Info</h3>
                                            <div className="dropdown">
                                                <button className="dropdown-toggle" type="button" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                    <i className='bx bx-dots-horizontal-rounded'></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-show'></i> View
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-edit-alt'></i> Edit
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-trash'></i> Delete
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-printer'></i> Print
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-download'></i> Download
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-unstyled mb-0">
                                                <li className="d-flex">
                                                    <i className="bx bx-briefcase mr-2"></i>
                                                    <span className="d-inline-block">Full Stack Developer at <a href="#"
                                                                                                                className="d-inline-block">EnvyTheme</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className="bx bx-briefcase mr-2"></i>
                                                    <span className="d-inline-block">Former UI Designer at <a href="#"
                                                                                                              className="d-inline-block">ThemeForest</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bxs-graduation mr-2'></i>
                                                    <span className="d-inline-block">Studies Computer Science Engineering at <a
                                                        href="#" className="d-inline-block">ABC University</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bxs-graduation mr-2'></i>
                                                    <span className="d-inline-block">Went to <a href="#"
                                                                                                className="d-inline-block">Government High School, USA</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bx-home-circle mr-2'></i>
                                                    <span className="d-inline-block">Lives in <a href="#"
                                                                                                 className="d-inline-block">USA</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bx-map mr-2'></i>
                                                    <span className="d-inline-block">From <a href="#"
                                                                                             className="d-inline-block">New York, USA</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bx-wifi mr-2'></i>
                                                    <span className="d-inline-block">Followed by <a href="#"
                                                                                                    className="d-inline-block">111 people</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bx-phone mr-2'></i>
                                                    <span className="d-inline-block">Phone <a href="#"
                                                                                              className="d-inline-block">+0 (123) 456 7892</a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bx-envelope mr-2'></i>
                                                    <span className="d-inline-block">Email <a href="#"
                                                                                              className="d-inline-block"><span
                                                        className="__cf_email__"
                                                        data-cfemail="adc5c8c1c1c2edccc3c9dfc283cec2c0">[email&#160;protected]</span></a></span>
                                                </li>
                                                <li className="d-flex">
                                                    <i className='bx bx-calendar mr-2'></i>
                                                    <span className="d-inline-block">Joined <a href="#"
                                                                                               className="d-inline-block">March 2009</a></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card user-about-me-box mb-30">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h3>About Me</h3>
                                            <div className="dropdown">
                                                <button className="dropdown-toggle" type="button" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                    <i className='bx bx-dots-horizontal-rounded'></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-show'></i> View
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-edit-alt'></i> Edit
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-trash'></i> Delete
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-printer'></i> Print
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-download'></i> Download
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p>Hi I'm Andro Smith,has been the industry's standard dummy text ever since
                                                the 1500s, when an unknown printer took a galley of type.</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book. It has survived not only five
                                                centuries, but also the leap into electronic typesetting, remaining
                                                essentially unchanged.</p>
                                        </div>
                                    </div>
                                    <div className="card user-biography-box mb-30">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h3>Biography</h3>
                                            <div className="dropdown">
                                                <button className="dropdown-toggle" type="button" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                    <i className='bx bx-dots-horizontal-rounded'></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-show'></i> View
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-edit-alt'></i> Edit
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-trash'></i> Delete
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-printer'></i> Print
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <i className='bx bx-download'></i> Download
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="font-weight-bold">A little flash back of Andro Smith</h6>
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English. Many desktop publishing packages and web
                                                page editors now use Lorem Ipsum as their default model text, and a
                                                search for 'lorem ipsum' will uncover many web sites still in their
                                                infancy. Various versions have evolved over the years, sometimes by
                                                accident, sometimes on purpose (injected humour and the like).</p>
                                        </div>
                                    </div>
                                    <div className="card user-social-box mb-30">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h3>Social</h3>
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="facebook" target="_blank" data-toggle="tooltip"
                                               data-placement="top" title="Facebook"><i className='bx bxl-facebook'></i></a>
                                            <a href="#" className="twitter" target="_blank" data-toggle="tooltip"
                                               data-placement="top" title="Twitter"><i
                                                className='bx bxl-twitter'></i></a>
                                            <a href="#" className="instagram" target="_blank" data-toggle="tooltip"
                                               data-placement="top" title="Instagram"><i
                                                className='bx bxl-instagram'></i></a>
                                            <a href="#" className="linkedin" target="_blank" data-toggle="tooltip"
                                               data-placement="top" title="Linkedin"><i className='bx bxl-linkedin'></i></a>
                                            <a href="#" className="pinterest" target="_blank" data-toggle="tooltip"
                                               data-placement="top" title="Pinterest"><i
                                                className='bx bxl-pinterest-alt'></i></a>
                                            <a href="#" className="stack-overflow" target="_blank" data-toggle="tooltip"
                                               data-placement="top" title="Stack Overflow"><i
                                                className='bx bxl-stack-overflow'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="friends" role="tabpanel" aria-labelledby="friends-tab">
                            <div className="card user-friends-box mb-30">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h3>Friends</h3>
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" type="button" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                            <i className='bx bx-dots-horizontal-rounded'></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <i className='bx bx-show'></i> View
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <i className='bx bx-edit-alt'></i> Edit
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <i className='bx bx-trash'></i> Delete
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <i className='bx bx-printer'></i> Print
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <i className='bx bx-download'></i> Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user1.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">John Smith</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">2 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user2.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">Sarah Taylor</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">20 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user3.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">James Anderson</a>
                                                        </h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">10 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user4.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">David Warner</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">2 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user5.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">Eva Smith</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">20 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user6.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">Sam Curran</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">10 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user7.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">Mark Wood</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">2 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user8.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">Lucy Lanning</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">20 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user9.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">Josh Butler</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">10 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user1.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">John Smith</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">2 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user2.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">Sarah Taylor</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">20 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user3.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">James Anderson</a>
                                                        </h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">10 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user4.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">David Warner</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">2 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user5.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">Eva Smith</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">20 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user6.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">Sam Curran</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">10 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user7.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">Mark Wood</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">2 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user8.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">Lucy Lanning</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">20 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4">
                                            <div className="single-friends-box d-flex align-items-center">
                                                <img src="assets/img/user9.jpg" alt="image"></img>
                                                    <div className="info ml-3">
                                                        <h5><a href="#" className="d-inline-block">Josh Butler</a></h5>
                                                        <span><a href="#"
                                                                 className="d-inline-block">10 mutual friends</a></span>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                            <div className="card user-settings-box mb-30">
                                <div className="card-body">
                                    <form>
                                        <h3><i className='bx bx-user-circle'></i> Personal Info</h3>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label>First Name</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter first name"></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label>Last Name</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter last name"></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label>Job</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter job name"></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Bio</label>
                                                    <textarea cols="30" rows="5" placeholder="Write something..."
                                                              className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Joined Date</label>
                                                    <input type="text" className="form-control" placeholder="dd/mm/yy"></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Date of Birth</label>
                                                    <input type="text" className="form-control" placeholder="dd/mm/yy"></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label>Email Address</label>
                                                    <input type="email" className="form-control"
                                                           placeholder="Enter email address"></input>
                                                <span className="form-text text-muted d-block">
<small>If you want to change email please <a href="#" className="d-inline-block">click</a> here.</small>
</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label>Phone Number</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter phone number"></input>
                                                <span className="form-text text-muted d-block">
<small>If you want to change phone number please <a href="#" className="d-inline-block">click</a> here.</small>
</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="password" className="form-control"
                                                           placeholder="Enter password"></input>
                                                <span className="form-text text-muted d-block">
<small>If you want to change password please <a href="#" className="d-inline-block">click</a> here.</small>
</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h3><i className='bx bx-building'></i> Company Info</h3>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Company Name</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter company name"></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Website</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter website url"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <h3><i className='bx bx-world'></i> Social</h3>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label>Facebook</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter facebook url"></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label>Twitter</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter twitter url"></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label>Instagram</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter instagram url"></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label>Linkedin</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter linkedin url"></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label>Pinterest</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter pinterest url"></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label>Stack Overflow</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter stack overflow url"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-box text-right">
                                            <button type="submit" className="submit-btn"><i
                                                className='bx bx-save'></i> Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card user-events-box mb-30">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h3>Today's Events</h3>
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                    <i className='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className='bx bx-show'></i> View
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className='bx bx-edit-alt'></i> Edit
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className='bx bx-trash'></i> Delete
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className='bx bx-printer'></i> Print
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className='bx bx-download'></i> Download
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex flex-wrap mb-0">
                                <li>
                                    <a href="#">
                                        <i className="bx bx-briefcase"></i>
                                        <span>Designing Olaf Admin</span>
                                        9:00 AM
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="bx bx-briefcase"></i>
                                        <span>Coding with React Next</span>
                                        6:00 AM
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card user-friend-request-box mb-30">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h3>Friend Request</h3>
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                    <i className='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className='bx bx-show'></i> View
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className='bx bx-edit-alt'></i> Edit
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className='bx bx-trash'></i> Delete
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className='bx bx-printer'></i> Print
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className='bx bx-download'></i> Download
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled mb-0">
                                <li className="d-flex align-items-center">
                                    <img src="assets/img/user2.jpg" width="70" height="70" className="rounded-circle"
                                         alt="image"></img>
                                        <div className="info ml-3">
                                            <h6><a href="#">Charlotte Mia</a></h6>
                                            <span className="d-block"><a href="#">3 mutual friends</a></span>
                                            <div className="btn-box">
                                                <a href="#" role="button" className="mr-1"><i
                                                    className='bx bx-check'></i></a>
                                                <a href="#" role="button"><i className='bx bx-x'></i></a>
                                            </div>
                                        </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <img src="assets/img/user3.jpg" width="70" height="70" className="rounded-circle"
                                         alt="image"></img>
                                        <div className="info ml-3">
                                            <h6><a href="#">Steven Smith</a></h6>
                                            <span className="d-block"><a href="#">3 mutual friends</a></span>
                                            <div className="btn-box">
                                                <a href="#" role="button" className="mr-1"><i
                                                    className='bx bx-check'></i></a>
                                                <a href="#" role="button"><i className='bx bx-x'></i></a>
                                            </div>
                                        </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <img src="assets/img/user4.jpg" width="70" height="70" className="rounded-circle"
                                         alt="image"></img>
                                        <div className="info ml-3">
                                            <h6><a href="#">James Anderson</a></h6>
                                            <span className="d-block"><a href="#">3 mutual friends</a></span>
                                            <div className="btn-box">
                                                <a href="#" role="button" className="mr-1"><i
                                                    className='bx bx-check'></i></a>
                                                <a href="#" role="button"><i className='bx bx-x'></i></a>
                                            </div>
                                        </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <img src="assets/img/user5.jpg" width="70" height="70" className="rounded-circle"
                                         alt="image"></img>
                                        <div className="info ml-3">
                                            <h6><a href="#">Ellie Emma</a></h6>
                                            <span className="d-block"><a href="#">3 mutual friends</a></span>
                                            <div className="btn-box">
                                                <a href="#" role="button" className="mr-1"><i
                                                    className='bx bx-check'></i></a>
                                                <a href="#" role="button"><i className='bx bx-x'></i></a>
                                            </div>
                                        </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card user-trends-box mb-30">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h3>Trends for you</h3>
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                    <i className='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className='bx bx-show'></i> View
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className='bx bx-edit-alt'></i> Edit
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className='bx bx-trash'></i> Delete
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className='bx bx-printer'></i> Print
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className='bx bx-download'></i> Download
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#">
                                        Trending in New York
                                        <span>#WordPress</span>
                                        1.16M Tweets
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Trending in USA
                                        <span>#DigitalMarketing</span>
                                        10.29M Tweets
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Trending in Canada
                                        <span>#Coding</span>
                                        15.54M Tweets
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile