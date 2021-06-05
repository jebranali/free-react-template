import {Fragment} from "react";

function Grid(){
   return (
       <Fragment>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Grid Options</h3>
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
                   <div className="table-responsive">
                       <table className="table table-bordered table-striped mb-0">
                           <thead>
                           <tr>
                               <th></th>
                               <th className="text-center">
                                   Extra small<br/>
                                   <small>&lt;576px</small>
                               </th>
                               <th className="text-center">
                                   Small<br/>
                                   <small>&ge;576px</small>
                               </th>
                               <th className="text-center">
                                   Medium<br/>
                                   <small>&ge;768px</small>
                               </th>
                               <th className="text-center">
                                   Large<br/>
                                   <small>&ge;992px</small>
                               </th>
                               <th className="text-center">
                                   Extra large<br/>
                                   <small>&ge;1200px</small>
                               </th>
                           </tr>
                           </thead>
                           <tbody>
                           <tr>
                               <th className="text-nowrap" scope="row">Max container width</th>
                               <td>None (auto)</td>
                               <td>540px</td>
                               <td>720px</td>
                               <td>960px</td>
                               <td>1140px</td>
                           </tr>
                           <tr>
                               <th className="text-nowrap" scope="row">Class prefix</th>
                               <td><code>.col-</code></td>
                               <td><code>.col-sm-</code></td>
                               <td><code>.col-md-</code></td>
                               <td><code>.col-lg-</code></td>
                               <td><code>.col-xl-</code></td>
                           </tr>
                           <tr>
                               <th className="text-nowrap" scope="row"># of columns</th>
                               <td colSpan="5">12</td>
                           </tr>
                           <tr>
                               <th className="text-nowrap" scope="row">Gutter width</th>
                               <td colSpan="5">30px (15px on each side of a column)</td>
                           </tr>
                           <tr>
                               <th className="text-nowrap" scope="row">Nestable</th>
                               <td colSpan="5">Yes</td>
                           </tr>
                           <tr>
                               <th className="text-nowrap" scope="row">Column ordering</th>
                               <td colSpan="5">Yes</td>
                           </tr>
                           </tbody>
                       </table>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Basic Grid</h3>
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
                   <div className="grid-bg-example">
                       <div className="row">
                           <div className="col-sm">
                               One of three columns
                           </div>
                           <div className="col-sm">
                               One of three columns
                           </div>
                           <div className="col-sm">
                               One of three columns
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Auto-layout Columns</h3>
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
                   <div className="grid-bg-example">
                       <div className="row">
                           <div className="col">
                               1 of 2
                           </div>
                           <div className="col">
                               2 of 2
                           </div>
                       </div>
                       <div className="row">
                           <div className="col">
                               1 of 3
                           </div>
                           <div className="col">
                               2 of 3
                           </div>
                           <div className="col">
                               3 of 3
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Equal-width multi-line</h3>
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
                   <div className="grid-bg-example">
                       <div className="row">
                           <div className="col">col</div>
                           <div className="col">col</div>
                           <div className="w-100"></div>
                           <div className="col">col</div>
                           <div className="col">col</div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Setting one column width</h3>
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
                   <div className="grid-bg-example">
                       <div className="row">
                           <div className="col">
                               1 of 3
                           </div>
                           <div className="col-6">
                               2 of 3 (wider)
                           </div>
                           <div className="col">
                               3 of 3
                           </div>
                       </div>
                       <div className="row">
                           <div className="col">
                               1 of 3
                           </div>
                           <div className="col-5">
                               2 of 3 (wider)
                           </div>
                           <div className="col">
                               3 of 3
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Variable width content</h3>
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
                   <div className="grid-bg-example">
                       <div className="row m-0 justify-content-md-center">
                           <div className="col col-lg-2">
                               1 of 3
                           </div>
                           <div className="col-md-auto">
                               Variable width content
                           </div>
                           <div className="col col-lg-2">
                               3 of 3
                           </div>
                       </div>
                       <div className="row">
                           <div className="col">
                               1 of 3
                           </div>
                           <div className="col-md-auto">
                               Variable width content
                           </div>
                           <div className="col col-lg-2">
                               3 of 3
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Responsive classes (All breakpoints)</h3>
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
                   <div className="grid-bg-example">
                       <div className="row">
                           <div className="col">col</div>
                           <div className="col">col</div>
                           <div className="col">col</div>
                           <div className="col">col</div>
                       </div>
                       <div className="row">
                           <div className="col-8">col-8</div>
                           <div className="col-4">col-4</div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Responsive classes (Stacked to horizontal)</h3>
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
                   <div className="grid-bg-example">
                       <div className="row">
                           <div className="col-sm-8">col-sm-8</div>
                           <div className="col-sm-4">col-sm-4</div>
                       </div>
                       <div className="row">
                           <div className="col-sm">col-sm</div>
                           <div className="col-sm">col-sm</div>
                           <div className="col-sm">col-sm</div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Responsive classes (Mix and match)</h3>
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
                   <div className="grid-bg-example">

                       <div className="row">
                           <div className="col-md-8">.col-md-8</div>
                           <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                       </div>

                       <div className="row">
                           <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                           <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                           <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                       </div>

                       <div className="row">
                           <div className="col-6">.col-6</div>
                           <div className="col-6">.col-6</div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Responsive classes (Gutters)</h3>
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
                   <div className="grid-bg-example">
                       <div className="row">
                           <div className="col py-3 px-lg-5 border bg-light">Custom column padding</div>
                           <div className="col py-3 px-lg-5 border bg-light">Custom column padding</div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Responsive classes (Row columns)</h3>
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
                   <div className="grid-bg-example">
                       <div className="row row-cols-2">
                           <div className="col">Column</div>
                           <div className="col">Column</div>
                           <div className="col">Column</div>
                           <div className="col">Column</div>
                       </div>
                       <div className="row row-cols-3">
                           <div className="col">Column</div>
                           <div className="col">Column</div>
                           <div className="col">Column</div>
                           <div className="col">Column</div>
                       </div>
                       <div className="row row-cols-4">
                           <div className="col">Column</div>
                           <div className="col">Column</div>
                           <div className="col">Column</div>
                           <div className="col">Column</div>
                       </div>
                       <div className="row row-cols-4">
                           <div className="col">Column</div>
                           <div className="col">Column</div>
                           <div className="col-6">Column</div>
                           <div className="col">Column</div>
                       </div>
                       <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                           <div className="col">Column</div>
                           <div className="col">Column</div>
                           <div className="col">Column</div>
                           <div className="col">Column</div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Vertical Alignment</h3>
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
                   <div className="grid-bg-example bd-example-row-flex-cols">
                       <div className="row align-items-start">
                           <div className="col">
                               One of three columns
                           </div>
                           <div className="col">
                               One of three columns
                           </div>
                           <div className="col">
                               One of three columns
                           </div>
                       </div>
                       <div className="row align-items-center">
                           <div className="col">
                               One of three columns
                           </div>
                           <div className="col">
                               One of three columns
                           </div>
                           <div className="col">
                               One of three columns
                           </div>
                       </div>
                       <div className="row align-items-end">
                           <div className="col">
                               One of three columns
                           </div>
                           <div className="col">
                               One of three columns
                           </div>
                           <div className="col">
                               One of three columns
                           </div>
                       </div>
                       <div className="row">
                           <div className="col align-self-start">
                               One of three columns
                           </div>
                           <div className="col align-self-center">
                               One of three columns
                           </div>
                           <div className="col align-self-end">
                               One of three columns
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Horizontal alignment</h3>
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
                   <div className="grid-bg-example">
                       <div className="row justify-content-start">
                           <div className="col-4">
                               One of two columns
                           </div>
                           <div className="col-4">
                               One of two columns
                           </div>
                       </div>
                       <div className="row justify-content-center">
                           <div className="col-4">
                               One of two columns
                           </div>
                           <div className="col-4">
                               One of two columns
                           </div>
                       </div>
                       <div className="row justify-content-end">
                           <div className="col-4">
                               One of two columns
                           </div>
                           <div className="col-4">
                               One of two columns
                           </div>
                       </div>
                       <div className="row justify-content-around">
                           <div className="col-4">
                               One of two columns
                           </div>
                           <div className="col-4">
                               One of two columns
                           </div>
                       </div>
                       <div className="row justify-content-between">
                           <div className="col-4">
                               One of two columns
                           </div>
                           <div className="col-4">
                               One of two columns
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>No Gutters</h3>
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
                   <div className="grid-bg-example">
                       <div className="row no-gutters">
                           <div className="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
                           <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Column Wrapping</h3>
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
                   <div className="grid-bg-example">
                       <div className="row">
                           <div className="col-9">.col-9</div>
                           <div className="col-4">.col-4 Since 9 + 4 = 13 12, this 4-column-wide div gets
                               wrapped onto a new line as one contiguous unit.</div>
                           <div className="col-6">.col-6
                               Subsequent columns continue along the new line.</div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Column Breaks</h3>
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
                   <div className="grid-bg-example">
                       <div className="row">
                           <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
                           <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>

                           <div className="w-100"></div>
                           <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
                           <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Order classes</h3>
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
                   <div className="grid-bg-example">
                       <div className="row">
                           <div className="col">
                               First in DOM, no order applied
                           </div>
                           <div className="col order-12">
                               Second in DOM, with a larger order
                           </div>
                           <div className="col order-1">
                               Third in DOM, with an order of 1
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Offset classes</h3>
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
                   <div className="grid-bg-example">
                       <div className="row">
                           <div className="col-md-4">.col-md-4</div>
                           <div className="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
                       </div>
                       <div className="row">
                           <div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
                           <div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
                       </div>
                       <div className="row">
                           <div className="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Margin utilities</h3>
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
                   <div className="grid-bg-example">
                       <div className="row">
                           <div className="col-md-4">.col-md-4</div>
                           <div className="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
                       </div>
                       <div className="row">
                           <div className="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
                           <div className="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
                       </div>
                       <div className="row">
                           <div className="col-auto mr-auto">.col-auto .mr-auto</div>
                           <div className="col-auto">.col-auto</div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-30">
               <div className="card-header d-flex justify-content-between align-items-center">
                   <h3>Nesting</h3>
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
                   <div className="grid-bg-example">
                       <div className="row">
                           <div className="col-sm-9">
                               Level 1: .col-sm-9
                               <div className="row">
                                   <div className="col-8 col-sm-6">
                                       Level 2: .col-8 .col-sm-6
                                   </div>
                                   <div className="col-4 col-sm-6">
                                       Level 2: .col-4 .col-sm-6
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </Fragment>
   )
}

export default Grid