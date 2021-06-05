import {Fragment} from "react";

function Table(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Table Light</h3>
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
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicTableExample"><pre><code className="language-html"
                                                                                     data-lang="html"><span
                            className="nt">&lt;table</span> <span className="na">class=</span><span
                            className="s">"table"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;thead&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/thead&gt;</span>
    <span className="nt">&lt;tbody&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Larry<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>the Bird<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/tbody&gt;</span>
<span className="nt">&lt;/table&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicTableExample"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Table Head Options</h3>
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
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicTableHeadOptions"><pre><code className="language-html"
                                                                                         data-lang="html"><span
                            className="nt">&lt;table</span> <span className="na">class=</span><span
                            className="s">"table"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;thead</span> <span className="na">class=</span><span className="s">"thead-dark"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/thead&gt;</span>
    <span className="nt">&lt;tbody&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Larry<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>the Bird<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/tbody&gt;</span>
<span className="nt">&lt;/table&gt;</span>

<span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;thead</span> <span className="na">class=</span><span
                                className="s">"thead-light"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/thead&gt;</span>
    <span className="nt">&lt;tbody&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Larry<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>the Bird<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/tbody&gt;</span>
<span className="nt">&lt;/table&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicTableHeadOptions"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Striped Rows</h3>
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
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicStripedRowsTable"><pre><code className="language-html"
                                                                                         data-lang="html"><span
                            className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-striped"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;thead&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/thead&gt;</span>
    <span className="nt">&lt;tbody&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Larry<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>the Bird<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/tbody&gt;</span>
<span className="nt">&lt;/table&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicStripedRowsTable"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Bordered Table</h3>
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
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicBorderedTable"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-bordered"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;thead&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/thead&gt;</span>
    <span className="nt">&lt;tbody&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td</span> <span className="na">colspan=</span><span className="s">"2"</span><span
                                className="nt">&gt;</span>Larry the Bird<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/tbody&gt;</span>
<span className="nt">&lt;/table&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicBorderedTable"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Borderless Table</h3>
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
                    <table className="table table-borderless">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicBorderlessTable"><pre><code className="language-html"
                                                                                        data-lang="html"><span
                            className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-borderless"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;thead&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/thead&gt;</span>
    <span className="nt">&lt;tbody&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td</span> <span className="na">colspan=</span><span className="s">"2"</span><span
                                className="nt">&gt;</span>Larry the Bird<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/tbody&gt;</span>
<span className="nt">&lt;/table&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicBorderlessTable"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Hoverable Rows</h3>
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
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicHoverTable"><pre><code className="language-html"
                                                                                   data-lang="html"><span
                            className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-hover"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;thead&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/thead&gt;</span>
    <span className="nt">&lt;tbody&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td</span> <span className="na">colspan=</span><span className="s">"2"</span><span
                                className="nt">&gt;</span>Larry the Bird<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/tbody&gt;</span>
<span className="nt">&lt;/table&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicHoverTable"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Small Table</h3>
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
                    <table className="table table-sm">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicSMTable"><pre><code className="language-html"
                                                                                data-lang="html"><span
                            className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-sm"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;thead&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>#<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>First<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Last<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>Handle<span className="nt">&lt;/th&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/thead&gt;</span>
    <span className="nt">&lt;tbody&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>1<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Mark<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Otto<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@mdo<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>2<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td&gt;</span>Jacob<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>Thornton<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@fat<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;th</span> <span className="na">scope=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>3<span className="nt">&lt;/th&gt;</span>
            <span className="nt">&lt;td</span> <span className="na">colspan=</span><span className="s">"2"</span><span
                                className="nt">&gt;</span>Larry the Bird<span className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td&gt;</span>@twitter<span className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/tbody&gt;</span>
<span className="nt">&lt;/table&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#basicSMTable"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Contextual Classes</h3>
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
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Class</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="table-active">
                            <th scope="row">Active</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr>
                            <th scope="row">Default</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr className="table-primary">
                            <th scope="row">Primary</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr className="table-secondary">
                            <th scope="row">Secondary</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr className="table-success">
                            <th scope="row">Success</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr className="table-danger">
                            <th scope="row">Danger</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr className="table-warning">
                            <th scope="row">Warning</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr className="table-info">
                            <th scope="row">Info</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr className="table-light">
                            <th scope="row">Light</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr className="table-dark">
                            <th scope="row">Dark</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicContextualClassesTable"><pre><code className="language-html"
                                                                                               data-lang="html"><span
                            className="c">&lt;!-- On rows --&gt;</span>
<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-active"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>
<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-primary"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>
<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-secondary"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>
<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-success"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>
<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-danger"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>
<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-warning"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>
<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-info"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>
<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-light"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>
<span className="nt">&lt;tr</span> <span className="na">class=</span><span className="s">"table-dark"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/tr&gt;</span>

<span className="c">&lt;!-- On cells (`td` or `th`) --&gt;</span>
<span className="nt">&lt;tr&gt;</span>
    <span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-active"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>
    <span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-primary"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>
    <span className="nt">&lt;td</span> <span className="na">class=</span><span
                                className="s">"table-secondary"</span><span className="nt">&gt;</span>...<span
                                className="nt">&lt;/td&gt;</span>
    <span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-success"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>
    <span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-danger"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>
    <span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-warning"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>
    <span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-info"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>
    <span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-light"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>
    <span className="nt">&lt;td</span> <span className="na">class=</span><span className="s">"table-dark"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/td&gt;</span>
<span className="nt">&lt;/tr&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicContextualClassesTable"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Responsive Tables</h3>
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
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicResponsiveTable"><pre><code className="language-html"
                                                                                        data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"table-responsive"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table"</span><span
                                className="nt">&gt;</span>
        ...
    <span className="nt">&lt;/table&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicResponsiveTable"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Table