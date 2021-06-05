import {Fragment} from "react";

function TableDark(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Table Dark</h3>
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
                    <table className="table table-dark">
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
                        <div className="highlight" id="basicDarkTableExample"><pre><code className="language-html"
                                                                                         data-lang="html"><span
                            className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-dark"</span><span
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
                                    data-clipboard-target="#basicDarkTableExample"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Striped Rows Dark</h3>
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
                    <table className="table table-striped table-dark">
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
                        <div className="highlight" id="basicStripedRowsDarkTable"><pre><code className="language-html"
                                                                                             data-lang="html"><span
                            className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-striped table-dark"</span><span
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
                                    data-clipboard-target="#basicStripedRowsDarkTable"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Bordered Table Dark</h3>
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
                    <table className="table table-bordered table-dark">
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
                        <div className="highlight" id="basicBorderedDarkTable"><pre><code className="language-html"
                                                                                          data-lang="html"><span
                            className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-bordered table-dark"</span><span
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
                                    data-clipboard-target="#basicBorderedDarkTable"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Borderless Table Dark</h3>
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
                    <table className="table table-borderless table-dark">
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
                        <div className="highlight" id="basicBorderlessDarkTable"><pre><code className="language-html"
                                                                                            data-lang="html"><span
                            className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-borderless table-dark"</span><span
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
                                    data-clipboard-target="#basicBorderlessDarkTable"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Hoverable Rows Dark</h3>
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
                    <table className="table table-hover table-dark">
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
                        <div className="highlight" id="basicHoverDarkTable"><pre><code className="language-html"
                                                                                       data-lang="html"><span
                            className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-hover table-dark"</span><span
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
                                    data-clipboard-target="#basicHoverDarkTable"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Small Table Dark</h3>
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
                    <table className="table table-sm table-dark">
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
                        <div className="highlight" id="basicSMDarkTable"><pre><code className="language-html"
                                                                                    data-lang="html"><span
                            className="nt">&lt;table</span> <span className="na">class=</span><span className="s">"table table-sm table-dark"</span><span
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
                                    data-clipboard-target="#basicSMDarkTable"><i className='bx bx-copy'></i></button>
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
                        <table className="table table-dark">
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
                        <div className="highlight" id="basicResponsiveDarkTable"><pre><code className="language-html"
                                                                                            data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"table-responsive"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;table</span> <span className="na">class=</span><span
                                className="s">"table table-dark"</span><span className="nt">&gt;</span>
        ...
    <span className="nt">&lt;/table&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicResponsiveDarkTable"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TableDark