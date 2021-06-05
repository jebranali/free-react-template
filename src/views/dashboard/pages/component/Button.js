import {Fragment} from "react";

function Button(){
    return (
        <Fragment>
            <div className="card mb-30 button-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Default Buttons</h3>
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
                    <button type="button" className="btn btn-primary mr-2 mt-2">Primary</button>
                    <button type="button" className="btn btn-secondary mr-2 mt-2">Secondary</button>
                    <button type="button" className="btn btn-success mr-2 mt-2">Success</button>
                    <button type="button" className="btn btn-danger mr-2 mt-2">Danger</button>
                    <button type="button" className="btn btn-warning mr-2 mt-2">Warning</button>
                    <button type="button" className="btn btn-info mr-2 mt-2">Info</button>
                    <button type="button" className="btn btn-light mr-2 mt-2">Light</button>
                    <button type="button" className="btn btn-dark mr-2 mt-2">Dark</button>
                    <button type="button" className="btn btn-link mt-2">Link</button>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="defaultButtons"><pre><code className="language-html"
                                                                                  data-lang="html"><span
                            className="nt">&lt;button</span> <span className="na">type=</span><span
                            className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span
                            className="nt">&gt;</span>Primary<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>Secondary<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-success"</span><span
                                className="nt">&gt;</span>Success<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-danger"</span><span
                                className="nt">&gt;</span>Danger<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-warning"</span><span
                                className="nt">&gt;</span>Warning<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-info"</span><span
                                className="nt">&gt;</span>Info<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-light"</span><span
                                className="nt">&gt;</span>Light<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-dark"</span><span
                                className="nt">&gt;</span>Dark<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-link"</span><span
                                className="nt">&gt;</span>Link<span className="nt">&lt;/button&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#defaultButtons">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 button-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Rounded Buttons</h3>
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
                    <button type="button" className="btn btn-primary rounded-pill mr-2 mt-2">Primary</button>
                    <button type="button" className="btn btn-secondary rounded-pill mr-2 mt-2">Secondary</button>
                    <button type="button" className="btn btn-success rounded-pill mr-2 mt-2">Success</button>
                    <button type="button" className="btn btn-danger rounded-pill mr-2 mt-2">Danger</button>
                    <button type="button" className="btn btn-warning rounded-pill mr-2 mt-2">Warning</button>
                    <button type="button" className="btn btn-info rounded-pill mr-2 mt-2">Info</button>
                    <button type="button" className="btn btn-light rounded-pill mr-2 mt-2">Light</button>
                    <button type="button" className="btn btn-dark rounded-pill mr-2 mt-2">Dark</button>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="roundedButtons"><pre><code className="language-html"
                                                                                  data-lang="html"><span
                            className="nt">&lt;button</span> <span className="na">type=</span><span
                            className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary rounded-pill"</span><span
                            className="nt">&gt;</span>Primary<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"btn btn-secondary rounded-pill"</span><span className="nt">&gt;</span>Secondary<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"btn btn-success rounded-pill"</span><span className="nt">&gt;</span>Success<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"btn btn-danger rounded-pill"</span><span className="nt">&gt;</span>Danger<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"btn btn-warning rounded-pill"</span><span className="nt">&gt;</span>Warning<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-info rounded-pill"</span><span
                                className="nt">&gt;</span>Info<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-light rounded-pill"</span><span
                                className="nt">&gt;</span>Light<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-dark rounded-pill"</span><span
                                className="nt">&gt;</span>Dark<span className="nt">&lt;/button&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#roundedButtons">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 button-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Outline Buttons</h3>
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
                    <button type="button" className="btn btn-outline-primary mr-2 mt-2">Primary</button>
                    <button type="button" className="btn btn-outline-secondary mr-2 mt-2">Secondary</button>
                    <button type="button" className="btn btn-outline-success mr-2 mt-2">Success</button>
                    <button type="button" className="btn btn-outline-danger mr-2 mt-2">Danger</button>
                    <button type="button" className="btn btn-outline-warning mr-2 mt-2">Warning</button>
                    <button type="button" className="btn btn-outline-info mr-2 mt-2">Info</button>
                    <button type="button" className="btn btn-outline-light mr-2 mt-2">Light</button>
                    <button type="button" className="btn btn-outline-dark mr-2 mt-2">Dark</button>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="outlineButtons"><pre><code className="language-html"
                                                                                  data-lang="html"><span
                            className="nt">&lt;button</span> <span className="na">type=</span><span
                            className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-primary"</span><span
                            className="nt">&gt;</span>Primary<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-secondary"</span><span
                                className="nt">&gt;</span>Secondary<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-success"</span><span
                                className="nt">&gt;</span>Success<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-danger"</span><span
                                className="nt">&gt;</span>Danger<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-warning"</span><span
                                className="nt">&gt;</span>Warning<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-info"</span><span
                                className="nt">&gt;</span>Info<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-light"</span><span
                                className="nt">&gt;</span>Light<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-dark"</span><span
                                className="nt">&gt;</span>Dark<span className="nt">&lt;/button&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#outlineButtons">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 button-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Icon Only Buttons</h3>
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
                    <button type="button" className="btn btn-outline-primary mr-2 mt-2"><i
                        className='bx bx-home-circle'></i></button>
                    <button type="button" className="btn btn-outline-secondary mr-2 mt-2"><i
                        className='bx bxs-home-heart'></i></button>
                    <button type="button" className="btn btn-outline-success mr-2 mt-2"><i
                        className='bx bx-home-heart'></i></button>
                    <button type="button" className="btn btn-outline-danger mr-2 mt-2"><i
                        className='bx bxs-home-circle'></i></button>
                    <button type="button" className="btn btn-outline-warning mr-2 mt-2"><i className='bx bxs-home'></i>
                    </button>
                    <button type="button" className="btn btn-outline-info mr-2 mt-2"><i className='bx bx-home-alt'></i>
                    </button>
                    <button type="button" className="btn btn-outline-light mr-2 mt-2"><i className='bx bx-home'></i>
                    </button>
                    <button type="button" className="btn btn-outline-dark mr-2 mt-2"><i className='bx bx-user-pin'></i>
                    </button>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="iconOnlyButtons"><pre><code className="language-html"
                                                                                   data-lang="html"><span
                            className="nt">&lt;button</span> <span className="na">type=</span><span
                            className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-primary"</span><span
                            className="nt">&gt;</span><span className="nt">&lt;i</span> <span
                            className="na">class=</span><span className="s">"bx bx-home-circle"</span><span
                            className="nt">&gt;</span><span className="nt">&lt;/i&gt;</span><span
                            className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-secondary"</span><span
                                className="nt">&gt;</span><span className="nt">&lt;i</span> <span
                                className="na">class=</span><span className="s">"bx bx-home-circle"</span><span
                                className="nt">&gt;</span><span className="nt">&lt;/i&gt;</span><span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-success"</span><span
                                className="nt">&gt;</span><span className="nt">&lt;i</span> <span
                                className="na">class=</span><span className="s">"bx bx-home-circle"</span><span
                                className="nt">&gt;</span><span className="nt">&lt;/i&gt;</span><span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-danger"</span><span
                                className="nt">&gt;</span><span className="nt">&lt;i</span> <span
                                className="na">class=</span><span className="s">"bx bx-home-circle"</span><span
                                className="nt">&gt;</span><span className="nt">&lt;/i&gt;</span><span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-warning"</span><span
                                className="nt">&gt;</span><span className="nt">&lt;i</span> <span
                                className="na">class=</span><span className="s">"bx bx-home-circle"</span><span
                                className="nt">&gt;</span><span className="nt">&lt;/i&gt;</span><span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-info"</span><span
                                className="nt">&gt;</span><span className="nt">&lt;i</span> <span
                                className="na">class=</span><span className="s">"bx bx-home-circle"</span><span
                                className="nt">&gt;</span><span className="nt">&lt;/i&gt;</span><span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-light"</span><span
                                className="nt">&gt;</span><span className="nt">&lt;i</span> <span
                                className="na">class=</span><span className="s">"bx bx-home-circle"</span><span
                                className="nt">&gt;</span><span className="nt">&lt;/i&gt;</span><span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-dark"</span><span
                                className="nt">&gt;</span><span className="nt">&lt;i</span> <span
                                className="na">class=</span><span className="s">"bx bx-home-circle"</span><span
                                className="nt">&gt;</span><span className="nt">&lt;/i&gt;</span><span
                                className="nt">&lt;/button&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#iconOnlyButtons"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 button-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Buttons Sizes</h3>
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
                    <h6 className="mt-2 mb-1 font-weight-bold">Large Button</h6>
                    <button type="button" className="btn btn-lg btn-primary mr-2 mt-2">Primary</button>
                    <button type="button" className="btn btn-lg btn-secondary mr-2 mt-2">Secondary</button>
                    <button type="button" className="btn btn-lg btn-success mr-2 mt-2">Success</button>
                    <button type="button" className="btn btn-lg btn-danger mr-2 mt-2">Danger</button>
                    <button type="button" className="btn btn-lg btn-warning mr-2 mt-2">Warning</button>
                    <button type="button" className="btn btn-lg btn-info mr-2 mt-2">Info</button>
                    <button type="button" className="btn btn-lg btn-light mr-2 mt-2">Light</button>
                    <button type="button" className="btn btn-lg btn-dark mr-2 mt-2">Dark</button>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="buttonsSizes"><pre><code className="language-html"
                                                                                data-lang="html"><span
                            className="nt">&lt;button</span> <span className="na">type=</span><span
                            className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary btn-lg"</span><span
                            className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary btn-lg"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-success btn-lg"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-danger btn-lg"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-warning btn-lg"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-info btn-lg"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-light btn-lg"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-dark btn-lg"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#buttonsSizes"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                    <h6 className="mt-4 mb-1 font-weight-bold">Medium Button</h6>
                    <button type="button" className="btn btn-md btn-primary mr-2 mt-2">Primary</button>
                    <button type="button" className="btn btn-md btn-secondary mr-2 mt-2">Secondary</button>
                    <button type="button" className="btn btn-md btn-success mr-2 mt-2">Success</button>
                    <button type="button" className="btn btn-md btn-danger mr-2 mt-2">Danger</button>
                    <button type="button" className="btn btn-md btn-warning mr-2 mt-2">Warning</button>
                    <button type="button" className="btn btn-md btn-info mr-2 mt-2">Info</button>
                    <button type="button" className="btn btn-md btn-light mr-2 mt-2">Light</button>
                    <button type="button" className="btn btn-md btn-dark mr-2 mt-2">Dark</button>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="buttonsSizesMedium"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="nt">&lt;button</span> <span className="na">type=</span><span
                            className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary btn-md"</span><span
                            className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary btn-md"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-success btn-md"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-danger btn-md"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-warning btn-md"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-info btn-md"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-light btn-md"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-dark btn-md"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#buttonsSizesMedium"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                    <h6 className="mt-4 mb-1 font-weight-bold">Small Button</h6>
                    <button type="button" className="btn btn-sm btn-primary mr-2 mt-2">Primary</button>
                    <button type="button" className="btn btn-sm btn-secondary mr-2 mt-2">Secondary</button>
                    <button type="button" className="btn btn-sm btn-success mr-2 mt-2">Success</button>
                    <button type="button" className="btn btn-sm btn-danger mr-2 mt-2">Danger</button>
                    <button type="button" className="btn btn-sm btn-warning mr-2 mt-2">Warning</button>
                    <button type="button" className="btn btn-sm btn-info mr-2 mt-2">Info</button>
                    <button type="button" className="btn btn-sm btn-light mr-2 mt-2">Light</button>
                    <button type="button" className="btn btn-sm btn-dark mr-2 mt-2">Dark</button>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="buttonsSizesSmall"><pre><code className="language-html"
                                                                                     data-lang="html"><span
                            className="nt">&lt;button</span> <span className="na">type=</span><span
                            className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary btn-sm"</span><span
                            className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary btn-sm"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-success btn-sm"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-danger btn-sm"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-warning btn-sm"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-info btn-sm"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-light btn-sm"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-dark btn-sm"</span><span
                                className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#buttonsSizesSmall"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 button-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Active State Buttons</h3>
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
                    <a href="#" className="btn btn-primary active mt-2 mr-2" role="button">Primary link</a>
                    <a href="#" className="btn btn-secondary active mt-2 mr-2" role="button">Secondary Link</a>
                    <a href="#" className="btn btn-success active mt-2 mr-2" role="button">Success Link</a>
                    <a href="#" className="btn btn-danger active mt-2 mr-2" role="button">Danger Link</a>
                    <a href="#" className="btn btn-warning active mt-2 mr-2" role="button">Warning Link</a>
                    <a href="#" className="btn btn-info active mt-2 mr-2" role="button">Info Link</a>
                    <a href="#" className="btn btn-light active mt-2 mr-2" role="button">Light Link</a>
                    <a href="#" className="btn btn-dark active mt-2 mr-2" role="button">Dark Link</a>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="activeStateButtons"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                            className="na">class=</span><span className="s">"btn btn-primary active"</span> <span
                            className="na">role=</span><span className="s">"button"</span><span
                            className="nt">&gt;</span>Primary link<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary active"</span> <span
                                className="na">role=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>Secondary link<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"btn btn-success active"</span> <span
                                className="na">role=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>Success link<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"btn btn-danger active"</span> <span
                                className="na">role=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>Danger link<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"btn btn-warning active"</span> <span
                                className="na">role=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>Warning link<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"btn btn-info active"</span> <span
                                className="na">role=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>Info link<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"btn btn-light active"</span> <span
                                className="na">role=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>Light link<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"btn btn-dark active"</span> <span
                                className="na">role=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>Dark link<span className="nt">&lt;/a&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#activeStateButtons"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 button-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Disabled State Buttons</h3>
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
                    <button type="button" className="btn btn-primary mt-2 mr-2" disabled>Primary button</button>
                    <button type="button" className="btn btn-secondary mt-2 mr-2" disabled>Secondary Button</button>
                    <button type="button" className="btn btn-success mt-2 mr-2" disabled>Success Button</button>
                    <button type="button" className="btn btn-danger mt-2 mr-2" disabled>Danger Button</button>
                    <button type="button" className="btn btn-warning mt-2 mr-2" disabled>Warning Button</button>
                    <button type="button" className="btn btn-info mt-2 mr-2" disabled>Info Button</button>
                    <button type="button" className="btn btn-light mt-2 mr-2" disabled>Light Button</button>
                    <button type="button" className="btn btn-dark mt-2" disabled>Dark Button</button>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="disabledStateButtons"><pre><code className="language-html"
                                                                                        data-lang="html"><span
                            className="nt">&lt;button</span> <span className="na">type=</span><span
                            className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span
                            className="na">disabled</span><span className="nt">&gt;</span>Primary button<span
                            className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span> <span
                                className="na">disabled</span><span className="nt">&gt;</span>Secondary Button<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-success"</span> <span
                                className="na">disabled</span><span className="nt">&gt;</span>Success Button<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-danger"</span> <span
                                className="na">disabled</span><span className="nt">&gt;</span>Danger Button<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-warning"</span> <span
                                className="na">disabled</span><span className="nt">&gt;</span>Warning Button<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-info"</span> <span
                                className="na">disabled</span><span className="nt">&gt;</span>Info Button<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-light"</span> <span
                                className="na">disabled</span><span className="nt">&gt;</span>Light Button<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-dark"</span> <span
                                className="na">disabled</span><span className="nt">&gt;</span>Dark Button<span
                                className="nt">&lt;/button&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#disabledStateButtons"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 button-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Checkbox and Radio Buttons</h3>
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
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary active">
                            <input type="radio" name="options" id="option1" checked></input>
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option2"></input>
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option3"></input>
                        </label>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="checkboxRadioButtons"><pre><code className="language-html"
                                                                                        data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group btn-group-toggle"</span> <span
                            className="na">data-toggle=</span><span className="s">"buttons"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"btn btn-secondary active"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"radio"</span> <span
                                className="na">name=</span><span className="s">"options"</span> <span
                                className="na">id=</span><span className="s">"option1"</span> <span
                                className="na">checked</span><span className="nt">&gt;</span> Active
    <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"radio"</span> <span
                                className="na">name=</span><span className="s">"options"</span> <span
                                className="na">id=</span><span className="s">"option2"</span><span
                                className="nt">&gt;</span> Radio
    <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"radio"</span> <span
                                className="na">name=</span><span className="s">"options"</span> <span
                                className="na">id=</span><span className="s">"option3"</span><span
                                className="nt">&gt;</span> Radio
    <span className="nt">&lt;/label&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#checkboxRadioButtons"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 button-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Display Block Buttons</h3>
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
                    <button type="button" className="btn btn-primary mt-2 btn-lg btn-block">Block level button</button>
                    <button type="button" className="btn btn-secondary mt-2 btn-lg btn-block">Block level button
                    </button>
                    <button type="button" className="btn btn-success mt-2 btn-lg btn-block">Block level button</button>
                    <button type="button" className="btn btn-danger mt-2 btn-lg btn-block">Block level button</button>
                    <button type="button" className="btn btn-warning mt-2 btn-lg btn-block">Block level button</button>
                    <button type="button" className="btn btn-info mt-2 btn-lg btn-block">Block level button</button>
                    <button type="button" className="btn btn-light mt-2 btn-lg btn-block">Block level button</button>
                    <button type="button" className="btn btn-dark mt-2 btn-lg btn-block">Block level button</button>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="displayBlockButtons"><pre><code className="language-html"
                                                                                       data-lang="html"><span
                            className="nt">&lt;button</span> <span className="na">type=</span><span
                            className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary btn-lg btn-block"</span><span
                            className="nt">&gt;</span>Block level button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"btn btn-secondary btn-lg btn-block"</span><span
                                className="nt">&gt;</span>Block level button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"btn btn-success btn-lg btn-block"</span><span className="nt">&gt;</span>Block level button<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-danger btn-lg btn-block"</span><span
                                className="nt">&gt;</span>Block level button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"btn btn-warning btn-lg btn-block"</span><span className="nt">&gt;</span>Block level button<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"btn btn-info btn-lg btn-block"</span><span className="nt">&gt;</span>Block level button<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"btn btn-light btn-lg btn-block"</span><span className="nt">&gt;</span>Block level button<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"btn btn-dark btn-lg btn-block"</span><span className="nt">&gt;</span>Block level button<span
                                className="nt">&lt;/button&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#displayBlockButtons"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Button