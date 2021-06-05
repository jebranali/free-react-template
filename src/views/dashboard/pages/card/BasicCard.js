import {Fragment} from "react";

function BasicCard(){
    return (
       <Fragment>
           <div className="row">
               <div className="col-lg-4 col-md-6">
                   <div className="card mb-30">
                       <div className="card-header d-flex justify-content-between align-items-center">
                           <h3>Card With Header And Footer</h3>
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
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                               been the industry's standard dummy text ever since the 1500s.</p>
                           <img src="assets/img/1.jpg" alt="image"></img>
                       </div>
                       <div className="card-footer">
                           <small className="text-muted">Last updated 3 mins ago</small>
                       </div>
                   </div>
               </div>
               <div className="col-lg-4 col-md-6">
                   <div className="card mb-30">
                       <div className="card-header d-flex justify-content-between align-items-center">
                           <h3>Carousel</h3>
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
                           <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                               <div className="carousel-inner">
                                   <div className="carousel-item active">
                                       <img className="d-block w-100" src="assets/img/2.jpg" alt="First slide"></img>
                                   </div>
                                   <div className="carousel-item">
                                       <img className="d-block w-100" src="assets/img/3.jpg" alt="First slide"></img>
                                   </div>
                                   <div className="carousel-item">
                                       <img className="d-block w-100" src="assets/img/4.jpg" alt="First slide"></img>
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
                           <p className="mb-2 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting
                               industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                               1500s.</p>
                           <small className="text-muted">Last updated 3 mins ago</small>
                       </div>
                   </div>
               </div>
               <div className="col-lg-4 col-md-6">
                   <div className="card mb-30 p-0">
                       <div className="card-body">
                           <img src="assets/img/5.jpg" alt="image"></img>
                       </div>
                       <div className="card-body p-4">
                           <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting
                               industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                               1500s.</p>
                           <small className="text-muted">Last updated 3 mins ago</small>
                       </div>
                   </div>
               </div>
           </div>
           <div className="row">
               <div className="col-lg-6 col-md-12">
                   <div className="card bg-dark text-white mb-30 p-0">
                       <img src="assets/img/slider/1.jpg" className="card-img" alt="image"></img>
                           <div className="card-img-overlay">
                               <h5 className="card-title text-white font-weight-bold">Card title</h5>
                               <p className="card-text mb-2">This is a wider card with supporting text below as a
                                   natural lead-in to additional content. This content is a little bit longer.</p>
                               <small>Last updated 3 mins ago</small>
                           </div>
                   </div>
               </div>
               <div className="col-lg-6 col-md-12">
                   <div className="card mb-30 p-0">
                       <div className="card-body">
                           <div className="youtube-video">
                               <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <h4 className="mb-3 mt-3 font-weight-bold">Card Groups</h4>
           <div className="card-group mb-30">
               <div className="card p-0">
                   <img src="assets/img/1.jpg" className="card-img-top" alt="image"></img>
                       <div className="card-body p-4">
                           <h5 className="card-title font-weight-bold">Card Title</h5>
                           <p className="card-text">This is a wider card with supporting text below as a natural lead-in
                               to additional content. This content is a little bit longer.</p>
                       </div>
               </div>
               <div className="card p-0">
                   <img src="assets/img/2.jpg" className="card-img-top" alt="image"></img>
                       <div className="card-body p-4">
                           <h5 className="card-title font-weight-bold">Card Title</h5>
                           <p className="card-text">This card has supporting text below as a natural lead-in to
                               additional content.</p>
                       </div>
               </div>
               <div className="card p-0">
                   <img src="assets/img/3.jpg" className="card-img-top" alt="image"></img>
                       <div className="card-body p-4">
                           <h5 className="card-title font-weight-bold">Card Title</h5>
                           <p className="card-text">This is a wider card with supporting text below as a natural lead-in
                               to additional content. This card has even longer content than the first to show that
                               equal height action.</p>
                       </div>
               </div>
           </div>
           <h4 className="mb-3 mt-3 font-weight-bold">Card Decks</h4>
           <div className="card-deck mb-30">
               <div className="card p-0">
                   <img src="assets/img/6.jpg" className="card-img-top" alt="image"></img>
                       <div className="card-body p-4">
                           <h5 className="card-title font-weight-bold">Card title</h5>
                           <p className="card-text">This is a longer card with supporting text below as a natural
                               lead-in to additional content. This content is a little bit longer.</p>
                           <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                       </div>
               </div>
               <div className="card p-0">
                   <img src="assets/img/5.jpg" className="card-img-top" alt="image"></img>
                       <div className="card-body p-4">
                           <h5 className="card-title font-weight-bold">Card title</h5>
                           <p className="card-text">This card has supporting text below as a natural lead-in to
                               additional content.</p>
                           <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                       </div>
               </div>
               <div className="card p-0">
                   <img src="assets/img/4.jpg" className="card-img-top" alt="image"></img>
                       <div className="card-body p-4">
                           <h5 className="card-title font-weight-bold">Card title</h5>
                           <p className="card-text">This is a wider card with supporting text below as a natural lead-in
                               to additional content. This card has even longer content than the first to show that
                               equal height action.</p>
                           <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                       </div>
               </div>
           </div>
           <h4 className="mb-3 mt-3 font-weight-bold">Card Columns</h4>
           <div className="card-columns mb-30">
               <div className="card p-0">
                   <img src="assets/img/1.jpg" className="card-img-top" alt="image"></img>
                       <div className="card-body p-4">
                           <h5 className="card-title font-weight-bold">Card title that wraps to a new line</h5>
                           <p className="card-text">This is a longer card with supporting text below as a natural
                               lead-in to additional content. This content is a little bit longer.</p>
                       </div>
               </div>
               <div className="card">
                   <blockquote className="blockquote mb-0 card-body">
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                       <footer className="blockquote-footer">
                           <small className="text-muted">
                               Someone famous in <cite title="Source Title">Source Title</cite>
                           </small>
                       </footer>
                   </blockquote>
               </div>
               <div className="card bg-primary text-white text-center">
                   <blockquote className="blockquote mb-0">
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                       <footer className="blockquote-footer text-white">
                           <small>
                               Someone famous in <cite title="Source Title">Source Title</cite>
                           </small>
                       </footer>
                   </blockquote>
               </div>
               <div className="card text-center">
                   <div className="card-body">
                       <h5 className="card-title font-weight-bold">Card title</h5>
                       <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                       <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                   </div>
               </div>
               <div className="card p-0">
                   <img src="assets/img/3.jpg" className="card-img-top" alt="image"></img>
               </div>
               <div className="card text-right">
                   <blockquote className="blockquote mb-0">
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                       <footer className="blockquote-footer">
                           <small className="text-muted">
                               Someone famous in <cite title="Source Title">Source Title</cite>
                           </small>
                       </footer>
                   </blockquote>
               </div>
               <div className="card">
                   <div className="card-body">
                       <h5 className="card-title font-weight-bold">Card title</h5>
                       <p className="card-text">This is another card with title and supporting text below. This card has
                           some additional content to make it slightly taller overall.</p>
                       <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                   </div>
               </div>
               <div className="card p-0">
                   <img src="assets/img/2.jpg" className="card-img-top" alt="image"></img>
                       <div className="card-body p-4">
                           <h5 className="card-title font-weight-bold">Card title</h5>
                           <p className="card-text">This card has supporting text below as a natural lead-in to
                               additional content.</p>
                           <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                       </div>
               </div>
           </div>
       </Fragment>
    )
}

export default BasicCard