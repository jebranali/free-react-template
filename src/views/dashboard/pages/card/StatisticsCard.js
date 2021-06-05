import {Fragment} from "react";

function StatisticsCard(){
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
                        <h3>6.47% <span className="badge badge-red"><i
                            className='bx bx-down-arrow-alt'></i> 45.5%</span></h3>
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


            <div className="ecommerce-stats-area">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-stats-card-box">
                            <div className="icon">
                                <i className='bx bxs-user-check'></i>
                            </div>
                            <span className="sub-title">Subscribe Gained</span>
                            <h3>23.7k <span className="badge"><i className='bx bx-up-arrow-alt'></i> 26.0%</span></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-stats-card-box">
                            <div className="icon">
                                <i className='bx bxs-badge-dollar'></i>
                            </div>
                            <span className="sub-title">Revenue Generated</span>
                            <h3>15.1k <span className="badge badge-red"><i
                                className='bx bx-down-arrow-alt'></i> 45.5%</span></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-stats-card-box">
                            <div className="icon">
                                <i className='bx bx-purchase-tag'></i>
                            </div>
                            <span className="sub-title">Quarterly Sales</span>
                            <h3>30.9k <span className="badge"><i className='bx bx-up-arrow-alt'></i> 32.1%</span></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-stats-card-box">
                            <div className="icon">
                                <i className='bx bx-shopping-bag'></i>
                            </div>
                            <span className="sub-title">Orders Received</span>
                            <h3>10.5k <span className="badge"><i className='bx bx-up-arrow-alt'></i> 56.9%</span></h3>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row mb-30">
                <div className="col-lg-4 col-md-6">
                    <div className="new-product-box">
                        <div className="icon">
                            <i className='bx bx-shopping-bag'></i>
                        </div>
                        New Products
                        <span className="sub-text d-block font-weight-bold">1.3K</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="new-user-box">
                        <div className="icon">
                            <i className='bx bx-user-pin'></i>
                        </div>
                        New Users
                        <span className="sub-text d-block font-weight-bold">2.5K</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="upcoming-product-box">
                        <div className="icon">
                            <i className='bx bx-cart-alt'></i>
                        </div>
                        Upcoming Products
                        <span className="sub-text d-block font-weight-bold">1.1K</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default StatisticsCard