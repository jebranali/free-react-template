import {Fragment} from 'react'
function Analytics(){
    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="stats-card-box">
                        <div className="icon-box">
                            <i className='bx bx-bar-chart'></i>
                        </div>
                        <span className="sub-title">Conversion Rate</span>
                        <h3>5.45% <span className="badge"><i className='bx bx-up-arrow-alt'></i> 56.9%</span></h3>
                        <div className="progress-list">
                            <div className="bar-inner">
                                <div className="bar progress-line" data-width="56.9"></div>
                            </div>
                            <p>Ratio website’s visitors</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="stats-card-box">
                        <div className="icon-box">
                            <i className='bx bx-bar-chart-square'></i>
                        </div>
                        <span className="sub-title">Conversion Value</span>
                        <h3>4.75% <span className="badge"><i className='bx bx-up-arrow-alt'></i> 32.1%</span></h3>
                        <div className="progress-list">
                            <div className="bar-inner">
                                <div className="bar progress-line" data-width="32.1"></div>
                            </div>
                            <p>Ratio website’s visitors</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="stats-card-box">
                        <div className="icon-box">
                            <i className='bx bx-bar-chart-alt'></i>
                        </div>
                        <span className="sub-title">Conversion Order</span>
                        <h3>6.47% <span className="badge badge-red"><i className='bx bx-down-arrow-alt'></i> 45.5%</span>
                        </h3>
                        <div className="progress-list">
                            <div className="bar-inner">
                                <div className="bar progress-line" data-width="45.5"></div>
                            </div>
                            <p>Ratio website’s visitors</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="stats-card-box">
                        <div className="icon-box">
                            <i className='bx bx-paper-plane'></i>
                        </div>
                        <span className="sub-title">Subscribers Gained</span>
                        <h3>92.6% <span className="badge"><i className='bx bx-up-arrow-alt'></i> 26.0%</span></h3>
                        <div className="progress-list">
                            <div className="bar-inner">
                                <div className="bar progress-line" data-width="26.0"></div>
                            </div>
                            <p>Subscribe in month</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-7 col-md-12">

                    <div className="card mb-30">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h3>Website Analytics</h3>
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
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
                            <div id="website-analytics-chart" className="extra-margin"></div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-5 col-md-12">

                    <div className="card mb-30">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h3>Email Send</h3>
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
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
                            <div id="emailSend-chart" className="extra-margin"></div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="card mb-30 pt-2">
                        <div className="card-body activity-timeline-chart-box">
                            <div id="activity-timeline-chart"></div>
                            <div className="activity-timeline-content">
                                <div className="card-header">
                                    <h3>Activity Timeline</h3>
                                </div>
                                <ul>
                                    <li>
                                        <i className='bx bx-check-double'></i>
                                        <span>Organic Search</span>
                                        2,862 0.7%
                                    </li>
                                    <li>
                                        <i className='bx bx-check-double'></i>
                                        <span>Referral Visitor</span>
                                        1,142 0.5%
                                    </li>
                                    <li>
                                        <i className='bx bx-check-double'></i>
                                        <span>Email Campaign</span>
                                        3,214 0.5%
                                    </li>
                                    <li>
                                        <i className='bx bx-check-double'></i>
                                        <span>Social Media</span>
                                        2,214 0.9%
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-30">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h3>Activity</h3>
                        </div>
                        <div className="card-body activity-card-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="progress-list">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>Income Amount</span>
                                            <span>$8,098</span>
                                        </div>
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="80"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="progress-list">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>Total Budget</span>
                                            <span>$7,754</span>
                                        </div>
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="98"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="progress-list">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>Total Sales</span>
                                            <span>$6,542</span>
                                        </div>
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="95"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="progress-list">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>Completed Tasks</span>
                                            <span>105</span>
                                        </div>
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="90"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">

                    <div className="card mb-30">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h3>Traffic Source</h3>
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
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
                            <div id="traffic-source-chart" className="extra-margin"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-5">
                            <div className="card mb-30">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h3>Best Sales</h3>
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
                                <div className="card-body best-sales-box">
                                    <ul>
                                        <li className="d-flex align-items-center">
                                            <span>S</span>
                                            <div className="bar-inner">
                                                <div className="bar progress-line" data-width="95"></div>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <span>M</span>
                                            <div className="bar-inner">
                                                <div className="bar progress-line" data-width="87"></div>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <span>T</span>
                                            <div className="bar-inner">
                                                <div className="bar progress-line" data-width="90"></div>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <span>W</span>
                                            <div className="bar-inner">
                                                <div className="bar progress-line" data-width="45"></div>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <span>T</span>
                                            <div className="bar-inner">
                                                <div className="bar progress-line" data-width="79"></div>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <span>F</span>
                                            <div className="bar-inner">
                                                <div className="bar progress-line" data-width="58"></div>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <span>S</span>
                                            <div className="bar-inner">
                                                <div className="bar progress-line" data-width="77"></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="card mb-30">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h3>Browser Used</h3>
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
                                <div className="card-body browser-used-box">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th>Browser</th>
                                                <th>Sessions</th>
                                                <th>Bounce Rate</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Google Chrome</td>
                                                <td>13,410</td>
                                                <td>31.24% (<i className='bx bx-up-arrow-alt'></i> 39%)</td>
                                            </tr>
                                            <tr>
                                                <td>Mozila Firefox</td>
                                                <td>13,443</td>
                                                <td>30.23% (<i className='bx bx-up-arrow-alt'></i> 54%)</td>
                                            </tr>
                                            <tr>
                                                <td>Opera Mini</td>
                                                <td>1,410</td>
                                                <td>68.24% (<i className='bx bx-down-arrow-alt red'></i> 20%)</td>
                                            </tr>
                                            <tr>
                                                <td>Microsoft edge</td>
                                                <td>2,241</td>
                                                <td>67.88% (<i className='bx bx-down-arrow-alt red'></i> 45%)</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


{/*            <div className="row">*/}
{/*                <div className="col-lg-6 col-md-12">*/}
{/*                    <div className="card mb-30">*/}
{/*                        <div className="card-header d-flex justify-content-between align-items-center">*/}
{/*                            <h3>Tasks</h3>*/}
{/*                            <div className="dropdown">*/}
{/*                                <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"*/}
{/*                                        aria-expanded="false">*/}
{/*                                    <i className='bx bx-dots-horizontal-rounded'></i>*/}
{/*                                </button>*/}
{/*                                <div className="dropdown-menu">*/}
{/*                                    <a className="dropdown-item d-flex align-items-center" href="#">*/}
{/*                                        <i className='bx bx-show'></i> View*/}
{/*                                    </a>*/}
{/*                                    <a className="dropdown-item d-flex align-items-center" href="#">*/}
{/*                                        <i className='bx bx-edit-alt'></i> Edit*/}
{/*                                    </a>*/}
{/*                                    <a className="dropdown-item d-flex align-items-center" href="#">*/}
{/*                                        <i className='bx bx-trash'></i> Delete*/}
{/*                                    </a>*/}
{/*                                    <a className="dropdown-item d-flex align-items-center" href="#">*/}
{/*                                        <i className='bx bx-printer'></i> Print*/}
{/*                                    </a>*/}
{/*                                    <a className="dropdown-item d-flex align-items-center" href="#">*/}
{/*                                        <i className='bx bx-download'></i> Download*/}
{/*                                    </a>*/}
{/*                                </div>*/}
{/*                            </div>*/}
{/*                        </div>*/}
{/*                        <div className="card-body widget-todo-list">*/}
{/*                            <ul>*/}
{/*                                <li>*/}
{/*                                    <div className="checkbox">*/}
{/*                                        <input className="inp-cbx" id="cbx" type="checkbox" style="display: none;"/>*/}
{/*                                        <label className="cbx" htmlFor="cbx">*/}
{/*<span>*/}
{/*<svg width="12px" height="10px" viewBox="0 0 12 10">*/}
{/*<polyline points="1.5 6 4.5 9 10.5 1"></polyline>*/}
{/*</svg>*/}
{/*</span>*/}
{/*                                        </label>*/}
{/*                                    </div>*/}
{/*                                    <div className="todo-item-title">*/}
{/*                                        <img src="assets/img/user1.jpg" data-toggle="tooltip" data-placement="top"*/}
{/*                                             title="Sarah Taylor" alt="image"></img>*/}
{/*                                            <h3>Print bills</h3>*/}
{/*                                            <p>There are many variations of...</p>*/}
{/*                                    </div>*/}
{/*                                    <div className="todo-item-action">*/}
{/*                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>*/}
{/*                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>*/}
{/*                                    </div>*/}
{/*                                </li>*/}
{/*                                <li>*/}
{/*                                    <div className="checkbox">*/}
{/*                                        <input className="inp-cbx" id="cbx2" type="checkbox" style="display: none;"/>*/}
{/*                                        <label className="cbx" htmlFor="cbx2">*/}
{/*<span>*/}
{/*<svg width="12px" height="10px" viewBox="0 0 12 10">*/}
{/*<polyline points="1.5 6 4.5 9 10.5 1"></polyline>*/}
{/*</svg>*/}
{/*</span>*/}
{/*                                        </label>*/}
{/*                                    </div>*/}
{/*                                    <div className="todo-item-title">*/}
{/*                                        <img src="assets/img/user2.jpg" data-toggle="tooltip" data-placement="top"*/}
{/*                                             title="Lucy Eva" alt="image"></img>*/}
{/*                                            <h3>Call Rampbo</h3>*/}
{/*                                            <p>There are many variations of...</p>*/}
{/*                                    </div>*/}
{/*                                    <div className="todo-item-action">*/}
{/*                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>*/}
{/*                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>*/}
{/*                                    </div>*/}
{/*                                </li>*/}
{/*                                <li>*/}
{/*                                    <div className="checkbox">*/}
{/*                                        <input className="inp-cbx" id="cbx3" type="checkbox" style="display: none;"/>*/}
{/*                                        <label className="cbx" htmlFor="cbx3">*/}
{/*<span>*/}
{/*<svg width="12px" height="10px" viewBox="0 0 12 10">*/}
{/*<polyline points="1.5 6 4.5 9 10.5 1"></polyline>*/}
{/*</svg>*/}
{/*</span>*/}
{/*                                        </label>*/}
{/*                                    </div>*/}
{/*                                    <div className="todo-item-title">*/}
{/*                                        <img src="assets/img/user3.jpg" data-toggle="tooltip" data-placement="top"*/}
{/*                                             title="John Smith" alt="image"></img>*/}
{/*                                            <h3>Print Statements all</h3>*/}
{/*                                            <p>There are many variations of...</p>*/}
{/*                                    </div>*/}
{/*                                    <div className="todo-item-action">*/}
{/*                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>*/}
{/*                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>*/}
{/*                                    </div>*/}
{/*                                </li>*/}
{/*                                <li>*/}
{/*                                    <div className="checkbox">*/}
{/*                                        <input className="inp-cbx" id="cbx4" type="checkbox" style="display: none;"/>*/}
{/*                                        <label className="cbx" htmlFor="cbx4">*/}
{/*<span>*/}
{/*<svg width="12px" height="10px" viewBox="0 0 12 10">*/}
{/*<polyline points="1.5 6 4.5 9 10.5 1"></polyline>*/}
{/*</svg>*/}
{/*</span>*/}
{/*                                        </label>*/}
{/*                                    </div>*/}
{/*                                    <div className="todo-item-title">*/}
{/*                                        <img src="assets/img/user4.jpg" data-toggle="tooltip" data-placement="top"*/}
{/*                                             title="Steven Smith" alt="image"></img>*/}
{/*                                            <h3>What reason think</h3>*/}
{/*                                            <p>There are many variations of...</p>*/}
{/*                                    </div>*/}
{/*                                    <div className="todo-item-action">*/}
{/*                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>*/}
{/*                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>*/}
{/*                                    </div>*/}
{/*                                </li>*/}
{/*                                <li>*/}
{/*                                    <div className="checkbox">*/}
{/*                                        <input className="inp-cbx" id="cbx5" type="checkbox" style="display: none;"/>*/}
{/*                                        <label className="cbx" htmlFor="cbx5">*/}
{/*<span>*/}
{/*<svg width="12px" height="10px" viewBox="0 0 12 10">*/}
{/*<polyline points="1.5 6 4.5 9 10.5 1"></polyline>*/}
{/*</svg>*/}
{/*</span>*/}
{/*                                        </label>*/}
{/*                                    </div>*/}
{/*                                    <div className="todo-item-title">*/}
{/*                                        <img src="assets/img/user5.jpg" data-toggle="tooltip" data-placement="top"*/}
{/*                                             title="Lucy Smith" alt="image"></img>*/}
{/*                                            <h3>Think about business content?</h3>*/}
{/*                                            <p>There are many variations of...</p>*/}
{/*                                    </div>*/}
{/*                                    <div className="todo-item-action">*/}
{/*                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>*/}
{/*                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>*/}
{/*                                    </div>*/}
{/*                                </li>*/}
{/*                                <li>*/}
{/*                                    <div className="checkbox">*/}
{/*                                        <input className="inp-cbx" id="cbx6" type="checkbox" style="display: none;"/>*/}
{/*                                        <label className="cbx" htmlFor="cbx6">*/}
{/*<span>*/}
{/*<svg width="12px" height="10px" viewBox="0 0 12 10">*/}
{/*<polyline points="1.5 6 4.5 9 10.5 1"></polyline>*/}
{/*</svg>*/}
{/*</span>*/}
{/*                                        </label>*/}
{/*                                    </div>*/}
{/*                                    <div className="todo-item-title">*/}
{/*                                        <img src="assets/img/user6.jpg" data-toggle="tooltip" data-placement="top"*/}
{/*                                             title="James Anderson" alt="image"></img>*/}
{/*                                            <h3>Reason would it be advisable</h3>*/}
{/*                                            <p>There are many variations of...</p>*/}
{/*                                    </div>*/}
{/*                                    <div className="todo-item-action">*/}
{/*                                        <a href="#" className="edit"><i className='bx bx-edit-alt'></i></a>*/}
{/*                                        <a href="#" className="delete"><i className='bx bx-trash'></i></a>*/}
{/*                                    </div>*/}
{/*                                </li>*/}
{/*                            </ul>*/}
{/*                        </div>*/}
{/*                    </div>*/}
{/*                </div>*/}
{/*                <div className="col-lg-6 col-md-12">*/}
{/*                    <div className="card mb-30">*/}
{/*                        <div className="card-header d-flex justify-content-between align-items-center">*/}
{/*                            <h3>Where are your users?</h3>*/}
{/*                            <div className="dropdown">*/}
{/*                                <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"*/}
{/*                                        aria-expanded="false">*/}
{/*                                    <i className='bx bx-dots-horizontal-rounded'></i>*/}
{/*                                </button>*/}
{/*                                <div className="dropdown-menu">*/}
{/*                                    <a className="dropdown-item d-flex align-items-center" href="#">*/}
{/*                                        <i className='bx bx-show'></i> View*/}
{/*                                    </a>*/}
{/*                                    <a className="dropdown-item d-flex align-items-center" href="#">*/}
{/*                                        <i className='bx bx-edit-alt'></i> Edit*/}
{/*                                    </a>*/}
{/*                                    <a className="dropdown-item d-flex align-items-center" href="#">*/}
{/*                                        <i className='bx bx-trash'></i> Delete*/}
{/*                                    </a>*/}
{/*                                    <a className="dropdown-item d-flex align-items-center" href="#">*/}
{/*                                        <i className='bx bx-printer'></i> Print*/}
{/*                                    </a>*/}
{/*                                    <a className="dropdown-item d-flex align-items-center" href="#">*/}
{/*                                        <i className='bx bx-download'></i> Download*/}
{/*                                    </a>*/}
{/*                                </div>*/}
{/*                            </div>*/}
{/*                        </div>*/}
{/*                        <div className="card-body">*/}
{/*                            <div id="world-map-markers"></div>*/}
{/*                        </div>*/}
{/*                    </div>*/}
{/*                </div>*/}
{/*            </div>*/}
        </Fragment>
    )
}

export default Analytics