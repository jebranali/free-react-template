function Slider(){
    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="card mb-30">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h3>Slides Only</h3>
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
                        <p>Here’s a carousel with slides only. Note the presence of the <span
                            className="text-danger font-weight-bold">.d-block</span> and <span
                            className="text-danger">.w-100</span> on carousel images to prevent browser default image
                            alignment.</p>
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="assets/img/slider/1.jpg" alt="First slide"></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/img/slider/2.jpg" alt="First slide"></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/img/slider/3.jpg" alt="First slide"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card mb-30">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h3>With Controls</h3>
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
                        <p>Adding in the previous and next controls:</p>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="assets/img/slider/4.jpg" alt="First slide"></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/img/slider/5.jpg" alt="First slide"></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/img/slider/6.jpg" alt="First slide"></img>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card mb-30">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h3>With Indicators</h3>
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
                        <p>You can also add the indicators to the carousel, alongside the controls, too.</p>
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="assets/img/slider/7.jpg" alt="First slide"></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/img/slider/8.jpg" alt="First slide"></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/img/slider/9.jpg" alt="First slide"></img>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card mb-30">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h3>With Indicators</h3>
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
                        <p>Add captions to your slides easily with the <span
                            className="text-danger font-weight-bold">.carousel-caption</span> element within any <span
                            className="font-weight-bold text-danger">.carousel-item</span>.</p>
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="assets/img/slider/3.jpg" alt="First slide"></img>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5 className="text-white">First slide label</h5>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/img/slider/2.jpg" alt="First slide"></img>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5 className="text-white">Second slide label</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/img/slider/1.jpg" alt="First slide"></img>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5 className="text-white">Third slide label</h5>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card mb-30">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h3>Crossfade</h3>
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
                        <p>Add <span className="text-danger font-weight-bold">.carousel-fade</span> to your carousel to
                            animate slides with a fade transition instead of a slide.</p>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="assets/img/slider/6.jpg" alt="First slide"></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/img/slider/5.jpg" alt="First slide"></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/img/slider/4.jpg" alt="First slide"></img>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleFade" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleFade" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider