import {Fragment} from "react";

function Badge(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Heading Badges</h3>
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
                    <h1>Example heading <span className="badge badge-primary">New</span></h1>
                    <h2>Example heading <span className="badge badge-secondary">New</span></h2>
                    <h3>Example heading <span className="badge badge-success">New</span></h3>
                    <h4>Example heading <span className="badge badge-danger">New</span></h4>
                    <h5>Example heading <span className="badge badge-warning">New</span></h5>
                    <h6>Example heading <span className="badge badge-info">New</span></h6>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="headingBadges"><pre><code className="language-html"
                                                                                 data-lang="html"><span
                            className="nt">&lt;h1&gt;</span>Example heading <span className="nt">&lt;span</span> <span
                            className="na">class=</span><span className="s">"badge badge-primary"</span><span
                            className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h1&gt;</span>
<span className="nt">&lt;h2&gt;</span>Example heading <span className="nt">&lt;span</span> <span
                                className="na">class=</span><span className="s">"badge badge-secondary"</span><span
                                className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h2&gt;</span>
<span className="nt">&lt;h3&gt;</span>Example heading <span className="nt">&lt;span</span> <span
                                className="na">class=</span><span className="s">"badge badge-success"</span><span
                                className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h3&gt;</span>
<span className="nt">&lt;h4&gt;</span>Example heading <span className="nt">&lt;span</span> <span
                                className="na">class=</span><span className="s">"badge badge-danger"</span><span
                                className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h4&gt;</span>
<span className="nt">&lt;h5&gt;</span>Example heading <span className="nt">&lt;span</span> <span
                                className="na">class=</span><span className="s">"badge badge-warning"</span><span
                                className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h5&gt;</span>
<span className="nt">&lt;h6&gt;</span>Example heading <span className="nt">&lt;span</span> <span
                                className="na">class=</span><span className="s">"badge badge-info"</span><span
                                className="nt">&gt;</span>New<span className="nt">&lt;/span&gt;&lt;/h6&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#headingBadges">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 badge-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Counter Badges</h3>
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
                    <button type="button" className="mt-2 mr-2 btn btn-outline-primary">
                        Notifications
                        <span className="badge badge-primary">9</span>
                    </button>
                    <button type="button" className="mt-2 mr-2 btn btn-outline-secondary">
                        Notifications
                        <span className="badge badge-secondary">9</span>
                    </button>
                    <button type="button" className="mt-2 mr-2 btn btn-outline-success">
                        Notifications
                        <span className="badge badge-success">9</span>
                    </button>
                    <button type="button" className="mt-2 mr-2 btn btn-outline-danger">
                        Notifications
                        <span className="badge badge-danger">9</span>
                    </button>
                    <button type="button" className="mt-2 mr-2 btn btn-outline-warning">
                        Notifications
                        <span className="badge badge-warning">9</span>
                    </button>
                    <button type="button" className="mt-2 mr-2 btn btn-outline-info">
                        Notifications
                        <span className="badge badge-info">9</span>
                    </button>
                    <button type="button" className="mt-2 btn btn-outline-dark">
                        Notifications
                        <span className="badge badge-dark">9</span>
                    </button>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="counterBadges"><pre><code className="language-html"
                                                                                 data-lang="html"><span
                            className="nt">&lt;button</span> <span className="na">type=</span><span
                            className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-primary"</span><span
                            className="nt">&gt;</span>
    Notifications <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-primary"</span><span
                                className="nt">&gt;</span>9<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-secondary"</span><span
                                className="nt">&gt;</span>
    Notifications <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-secondary"</span><span
                                className="nt">&gt;</span>9<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-success"</span><span
                                className="nt">&gt;</span>
    Notifications <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-success"</span><span
                                className="nt">&gt;</span>9<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-danger"</span><span
                                className="nt">&gt;</span>
    Notifications <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-danger"</span><span
                                className="nt">&gt;</span>9<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-warning"</span><span
                                className="nt">&gt;</span>
    Notifications <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-warning"</span><span
                                className="nt">&gt;</span>9<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-info"</span><span
                                className="nt">&gt;</span>
    Notifications <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-info"</span><span
                                className="nt">&gt;</span>9<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-dark"</span><span
                                className="nt">&gt;</span>
    Notifications <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-dark"</span><span
                                className="nt">&gt;</span>9<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/button&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#counterBadges">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 badge-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Counter Badges Style 2</h3>
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
                    <button type="button" className="mt-2 mr-2 btn btn-primary">
                        Notifications
                        <span className="badge badge-light">9</span>
                    </button>
                    <button type="button" className="mt-2 mr-2 btn btn-secondary">
                        Notifications
                        <span className="badge badge-light">9</span>
                    </button>
                    <button type="button" className="mt-2 mr-2 btn btn-success">
                        Notifications
                        <span className="badge badge-light">9</span>
                    </button>
                    <button type="button" className="mt-2 mr-2 btn btn-danger">
                        Notifications
                        <span className="badge badge-light">9</span>
                    </button>
                    <button type="button" className="mt-2 mr-2 btn btn-warning">
                        Notifications
                        <span className="badge badge-dark">9</span>
                    </button>
                    <button type="button" className="mt-2 mr-2 btn btn-info">
                        Notifications
                        <span className="badge badge-light">9</span>
                    </button>
                    <button type="button" className="mt-2 btn btn-dark">
                        Notifications
                        <span className="badge badge-light">9</span>
                    </button>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="counterBadges2"><pre><code className="language-html"
                                                                                  data-lang="html"><span
                            className="nt">&lt;button</span> <span className="na">type=</span><span
                            className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span
                            className="nt">&gt;</span>
    Notifications <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-light"</span><span
                                className="nt">&gt;</span>9<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>
    Notifications <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-light"</span><span
                                className="nt">&gt;</span>9<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-success"</span><span
                                className="nt">&gt;</span>
    Notifications <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-light"</span><span
                                className="nt">&gt;</span>9<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-danger"</span><span
                                className="nt">&gt;</span>
    Notifications <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-light"</span><span
                                className="nt">&gt;</span>9<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-warning"</span><span
                                className="nt">&gt;</span>
    Notifications <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-dark"</span><span
                                className="nt">&gt;</span>9<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-info"</span><span
                                className="nt">&gt;</span>
    Notifications <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-light"</span><span
                                className="nt">&gt;</span>9<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-dark"</span><span
                                className="nt">&gt;</span>
    Notifications <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-light"</span><span
                                className="nt">&gt;</span>9<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/button&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#counterBadges2">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 badge-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Contextual Variations Badges</h3>
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
                    <span className="badge badge-primary mt-2 mr-2">Primary</span>
                    <span className="badge badge-secondary mt-2 mr-2">Secondary</span>
                    <span className="badge badge-success mt-2 mr-2">Success</span>
                    <span className="badge badge-danger mt-2 mr-2">Danger</span>
                    <span className="badge badge-warning mt-2 mr-2">Warning</span>
                    <span className="badge badge-info mt-2 mr-2">Info</span>
                    <span className="badge badge-light mt-2 mr-2">Light</span>
                    <span className="badge badge-dark mt-2">Dark</span>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="contextualVariationsBadges"><pre><code className="language-html"
                                                                                              data-lang="html"><span
                            className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-primary"</span><span
                            className="nt">&gt;</span>Primary<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"badge badge-secondary"</span><span
                                className="nt">&gt;</span>Secondary<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"badge badge-success"</span><span className="nt">&gt;</span>Success<span
                                className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"badge badge-danger"</span><span className="nt">&gt;</span>Danger<span
                                className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"badge badge-warning"</span><span className="nt">&gt;</span>Warning<span
                                className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"badge badge-info"</span><span className="nt">&gt;</span>Info<span
                                className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"badge badge-light"</span><span className="nt">&gt;</span>Light<span
                                className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"badge badge-dark"</span><span className="nt">&gt;</span>Dark<span
                                className="nt">&lt;/span&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#contextualVariationsBadges"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 badge-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Pill Badges</h3>
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
                    <span className="badge badge-pill badge-primary mt-2 mr-2">Primary</span>
                    <span className="badge badge-pill badge-secondary mt-2 mr-2">Secondary</span>
                    <span className="badge badge-pill badge-success mt-2 mr-2">Success</span>
                    <span className="badge badge-pill badge-danger mt-2 mr-2">Danger</span>
                    <span className="badge badge-pill badge-warning mt-2 mr-2">Warning</span>
                    <span className="badge badge-pill badge-info mt-2 mr-2">Info</span>
                    <span className="badge badge-pill badge-light mt-2 mr-2">Light</span>
                    <span className="badge badge-pill badge-dark mt-2">Dark</span>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="pillBadges"><pre><code className="language-html"
                                                                              data-lang="html"><span
                            className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-pill badge-primary"</span><span
                            className="nt">&gt;</span>Primary<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-pill badge-secondary"</span><span
                                className="nt">&gt;</span>Secondary<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-pill badge-success"</span><span
                                className="nt">&gt;</span>Success<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-pill badge-danger"</span><span
                                className="nt">&gt;</span>Danger<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-pill badge-warning"</span><span
                                className="nt">&gt;</span>Warning<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"badge badge-pill badge-info"</span><span
                                className="nt">&gt;</span>Info<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-pill badge-light"</span><span
                                className="nt">&gt;</span>Light<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"badge badge-pill badge-dark"</span><span
                                className="nt">&gt;</span>Dark<span className="nt">&lt;/span&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#pillBadges"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 badge-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Links Badges</h3>
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
                    <a href="#" className="badge badge-primary">Primary</a>
                    <a href="#" className="badge badge-secondary">Secondary</a>
                    <a href="#" className="badge badge-success">Success</a>
                    <a href="#" className="badge badge-danger">Danger</a>
                    <a href="#" className="badge badge-warning">Warning</a>
                    <a href="#" className="badge badge-info">Info</a>
                    <a href="#" className="badge badge-light">Light</a>
                    <a href="#" className="badge badge-dark">Dark</a>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="linkBadges"><pre><code className="language-html"
                                                                              data-lang="html">
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                            className="na">class=</span><span className="s">"badge badge-primary"</span><span
                            className="nt">&gt;</span>Primary<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                            className="na">class=</span><span className="s">"badge badge-secondary"</span><span
                            className="nt">&gt;</span>Secondary<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                            className="na">class=</span><span className="s">"badge badge-success"</span><span
                            className="nt">&gt;</span>Success<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                            className="na">class=</span><span className="s">"badge badge-danger"</span><span
                            className="nt">&gt;</span>Danger<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                            className="na">class=</span><span className="s">"badge badge-warning"</span><span
                            className="nt">&gt;</span>Warning<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                            className="na">class=</span><span className="s">"badge badge-info"</span><span
                            className="nt">&gt;</span>Info<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                            className="na">class=</span><span className="s">"badge badge-light"</span><span
                            className="nt">&gt;</span>Light<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                            className="na">class=</span><span className="s">"badge badge-dark"</span><span
                            className="nt">&gt;</span>Dark<span className="nt">&lt;/a&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#linkBadges"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Badge