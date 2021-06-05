import {Fragment} from "react";

function Border(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Additive</h3>
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
                    <div className="bd-example-border-utils">
                        <span className="border"></span>
                        <span className="border-top"></span>
                        <span className="border-right"></span>
                        <span className="border-bottom"></span>
                        <span className="border-left"></span>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicAdditiveBorder"><pre><code className="language-html"
                                                                                       data-lang="html"><span
                            className="nt">&lt;span</span> <span className="na">class=</span><span
                            className="s">"border"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"border-top"</span><span
                                className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"border-right"</span><span
                                className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"border-bottom"</span><span
                                className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"border-left"</span><span
                                className="nt">&gt;&lt;/span&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicAdditiveBorder"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Subtractive</h3>
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
                    <div className="bd-example-border-utils bd-example-border-utils-0">
                        <span className="border-0"></span>
                        <span className="border-top-0"></span>
                        <span className="border-right-0"></span>
                        <span className="border-bottom-0"></span>
                        <span className="border-left-0"></span>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicSubtractiveBorder"><pre><code className="language-html"
                                                                                          data-lang="html"><span
                            className="nt">&lt;span</span> <span className="na">class=</span><span
                            className="s">"border-0"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"border-top-0"</span><span
                                className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"border-right-0"</span><span
                                className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"border-bottom-0"</span><span
                                className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"border-left-0"</span><span
                                className="nt">&gt;&lt;/span&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicSubtractiveBorder"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Border Color</h3>
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
                    <div className="bd-example-border-utils">
                        <span className="border border-primary"></span>
                        <span className="border border-secondary"></span>
                        <span className="border border-success"></span>
                        <span className="border border-danger"></span>
                        <span className="border border-warning"></span>
                        <span className="border border-info"></span>
                        <span className="border border-light"></span>
                        <span className="border border-dark"></span>
                        <span className="border border-white"></span>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicBorderColor"><pre><code className="language-html"
                                                                                    data-lang="html"><span
                            className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"border border-primary"</span><span
                            className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"border border-secondary"</span><span
                                className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"border border-success"</span><span
                                className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"border border-danger"</span><span
                                className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"border border-warning"</span><span
                                className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"border border-info"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"border border-light"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"border border-dark"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"border border-white"</span><span className="nt">&gt;&lt;/span&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicBorderColor"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Border-radius</h3>
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
                    <div className="bd-example-border-utils">
                        <img src="assets/img/70x70.jpg" alt="..." className="rounded"></img>
                        <img src="assets/img/70x70.jpg" alt="..." className="rounded-top"></img>
                        <img src="assets/img/70x70.jpg" alt="..." className="rounded-right"></img>
                        <img src="assets/img/70x70.jpg" alt="..." className="rounded-bottom"></img>
                        <img src="assets/img/70x70.jpg" alt="..." className="rounded-left"></img>
                        <img src="assets/img/70x70.jpg" alt="..." className="rounded-circle"></img>
                        <img src="assets/img/150x75.jpg" alt="..." className="rounded-pill"></img>
                        <img src="assets/img/70x70.jpg" alt="..." className="rounded-0"></img>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicBorderRadius"><pre><code className="language-html"
                                                                                     data-lang="html"><span
                            className="nt">&lt;img</span> <span className="na">src=</span><span
                            className="s">"..."</span> <span className="na">alt=</span><span className="s">"..."</span> <span
                            className="na">class=</span><span className="s">"rounded"</span><span
                            className="nt">&gt;</span>
<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">alt=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"rounded-top"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">alt=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"rounded-right"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">alt=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"rounded-bottom"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">alt=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"rounded-left"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">alt=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"rounded-circle"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">alt=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"rounded-pill"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">alt=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"rounded-0"</span><span
                                className="nt">&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicBorderRadius"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Border