import {Fragment} from "react";

function Dropdown(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Single Button Dropdowns</h3>
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
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                                aria-haspopup="true">
                            Dropdown button
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="singleButtonDropdowns"><pre><code className="language-html"
                                                                                         data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"dropdown"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span
                                className="na">type=</span><span className="s">"button"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        Dropdown button
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Another action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Something else here<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#singleButtonDropdowns"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Single Link Dropdowns</h3>
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
                    <div className="dropdown show">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                           aria-haspopup="true">
                            Dropdown link
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="singleLinkDropdowns"><pre><code className="language-html"
                                                                                       data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown show"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span
                                className="na">href=</span><span className="s">"#"</span> <span
                                className="na">role=</span><span className="s">"button"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        Dropdown link
    <span className="nt">&lt;/a&gt;</span>

    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Another action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Something else here<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#singleLinkDropdowns"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 dropdowns-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Multiple Color Dropdowns</h3>
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
                    <div className="btn-group mt-2 mr-2">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true">
                            Primary
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="btn-group mt-2 mr-2">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true">
                            Secondary
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="btn-group mt-2 mr-2">
                        <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true">
                            Success
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="btn-group mt-2 mr-2">
                        <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true">
                            Info
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="btn-group mt-2 mr-2">
                        <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true">
                            Warning
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="btn-group mt-2 mr-2">
                        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true">
                            Danger
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="multipleColorDropdowns"><pre><code className="language-html"
                                                                                          data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"btn-group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary dropdown-toggle"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        Primary
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Another action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Something else here<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-divider"</span><span className="nt">&gt;&lt;/div&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Separated link<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"btn btn-secondary dropdown-toggle"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        Secondary
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Another action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Something else here<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-divider"</span><span className="nt">&gt;&lt;/div&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Separated link<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-success dropdown-toggle"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        Success
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Another action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Something else here<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-divider"</span><span className="nt">&gt;&lt;/div&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Separated link<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"btn btn-info dropdown-toggle"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        Info
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Another action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Something else here<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-divider"</span><span className="nt">&gt;&lt;/div&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Separated link<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-warning dropdown-toggle"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        Warning
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Another action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Something else here<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-divider"</span><span className="nt">&gt;&lt;/div&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Separated link<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-danger dropdown-toggle"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        Danger
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Another action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Something else here<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-divider"</span><span className="nt">&gt;&lt;/div&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Separated link<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#multipleColorDropdowns"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 dropdowns-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Split Button Dropdowns</h3>
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
                    <div className="btn-group mt-2 mr-2">
                        <button type="button" className="btn btn-primary">Primary</button>
                        <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown" aria-haspopup="true">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="btn-group mt-2 mr-2">
                        <button type="button" className="btn btn-secondary">Secondary</button>
                        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown" aria-haspopup="true">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="btn-group mt-2 mr-2">
                        <button type="button" className="btn btn-success">Success</button>
                        <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown" aria-haspopup="true">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="btn-group mt-2 mr-2">
                        <button type="button" className="btn btn-info">Info</button>
                        <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown" aria-haspopup="true">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="btn-group mt-2 mr-2">
                        <button type="button" className="btn btn-warning">Warning</button>
                        <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown" aria-haspopup="true">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="btn-group mt-2 mr-2">
                        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true">
                            Danger
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="splitButtonDropdowns"><pre><code className="language-html"
                                                                                        data-lang="html"><span
                            className="c">&lt;!-- Example split danger button --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-danger"</span><span
                                className="nt">&gt;</span>Action<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-danger dropdown-toggle dropdown-toggle-split"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Toggle Dropdown<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Another action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Something else here<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-divider"</span><span className="nt">&gt;&lt;/div&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Separated link<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#splitButtonDropdowns"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 dropdowns-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Sizing Dropdowns</h3>
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
                    <div className="btn-group mt-2 mr-2">
                        <button className="btn btn-secondary btn-lg dropdown-toggle" type="button"
                                data-toggle="dropdown" aria-haspopup="true">
                            Large button
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div className="btn-group mt-2 mr-2">
                        <button className="btn btn-secondary btn-lg" type="button">
                            Large split button
                        </button>
                        <button type="button" className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown" aria-haspopup="true">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div className="btn-group mt-2 mr-2">
                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button"
                                data-toggle="dropdown" aria-haspopup="true">
                            Small button
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div className="btn-group mt-2">
                        <button className="btn btn-secondary btn-sm" type="button">
                            Small split button
                        </button>
                        <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown" aria-haspopup="true">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="sizingDropdowns"><pre><code className="language-html"
                                                                                   data-lang="html"><span
                            className="c">&lt;!-- Large button groups (default and split) --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-lg dropdown-toggle"</span> <span
                                className="na">type=</span><span className="s">"button"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        Large button
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        ...
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-lg"</span> <span
                                className="na">type=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>
        Large split button
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Toggle Dropdown<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        ...
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="c">&lt;!-- Small button groups (default and split) --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-sm dropdown-toggle"</span> <span
                                className="na">type=</span><span className="s">"button"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        Small button
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        ...
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-sm"</span> <span
                                className="na">type=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>
        Small split button
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Toggle Dropdown<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        ...
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#sizingDropdowns"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 dropdowns-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Dropup Dropdowns</h3>
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

                    <div className="btn-group dropup mr-2 mt-2">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true">
                            Dropup
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>

                    <div className="btn-group dropup mt-2">
                        <button type="button" className="btn btn-secondary">
                            Split dropup
                        </button>
                        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown" aria-haspopup="true">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="dropupDropdowns"><pre><code className="language-html"
                                                                                   data-lang="html"><span
                            className="c">&lt;!-- Default dropup button --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group dropup"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary dropdown-toggle"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        Dropup
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="c">&lt;!-- Dropdown menu links --&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="c">&lt;!-- Split dropup button --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group dropup"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>
        Split dropup
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle dropdown-toggle-split"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Toggle Dropdown<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="c">&lt;!-- Dropdown menu links --&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#dropupDropdowns"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 dropdowns-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Dropright Dropdowns</h3>
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

                    <div className="btn-group dropright mr-2 mt-2">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true">
                            Dropright
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>

                    <div className="btn-group dropright mt-2">
                        <button type="button" className="btn btn-success">
                            Split Dropright
                        </button>
                        <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown" aria-haspopup="true">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="droprightDropdowns"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="c">&lt;!-- Default dropup button --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"btn-group dropright"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary dropdown-toggle"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
    Dropright
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="c">&lt;!-- Dropdown menu links --&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="c">&lt;!-- Split dropup button --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"btn-group dropright"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-success"</span><span
                                className="nt">&gt;</span>
        Split Dropright
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-success dropdown-toggle dropdown-toggle-split"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Toggle Dropdown<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="c">&lt;!-- Dropdown menu links --&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#droprightDropdowns"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 dropdowns-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Dropleft Dropdowns</h3>
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

                    <div className="btn-group dropleft mr-2 mt-2">
                        <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true">
                            Dropleft
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>

                    <div className="btn-group dropleft mt-2">
                        <button type="button" className="btn btn-danger">
                            Split Dropleft
                        </button>
                        <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown" aria-haspopup="true">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="dropleftDropdowns"><pre><code className="language-html"
                                                                                     data-lang="html"><span
                            className="c">&lt;!-- Default dropup button --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"btn-group dropleft"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-warning dropdown-toggle"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
    Dropleft
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="c">&lt;!-- Dropdown menu links --&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="c">&lt;!-- Split dropup button --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"btn-group dropleft"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-danger"</span><span
                                className="nt">&gt;</span>
        Split Dropleft
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-danger dropdown-toggle dropdown-toggle-split"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Toggle Dropdown<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="c">&lt;!-- Dropdown menu links --&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#dropleftDropdowns"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Menu Headers Dropdowns</h3>
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
                    <div className="dropdown show">
                        <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                           aria-haspopup="true">
                            Dropdown link
                        </a>
                        <div className="dropdown-menu">
                            <h6 className="dropdown-header">Dropdown header</h6>
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="menuHeaderDropdowns"><pre><code className="language-html"
                                                                                       data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown show"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"btn btn-primary dropdown-toggle"</span> <span
                                className="na">href=</span><span className="s">"#"</span> <span
                                className="na">role=</span><span className="s">"button"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        Dropdown link
    <span className="nt">&lt;/a&gt;</span>

    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;h6</span> <span className="na">class=</span><span
                                className="s">"dropdown-header"</span><span
                                className="nt">&gt;</span>Dropdown header<span className="nt">&lt;/h6&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Action<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Another action<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#menuHeaderDropdowns"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Menu Forms Dropdowns</h3>
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
                    <div className="dropdown show">
                        <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                           aria-haspopup="true">
                            Dropdown link
                        </a>
                        <div className="dropdown-menu">
                            <form className="px-4 py-3">
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="email@example.com"></input>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password"></input>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="dropdownCheck"></input>
                                        <label className="form-check-label" htmlFor="dropdownCheck">
                                            Remember me
                                        </label>
                                </div>
                                <button type="submit" className="btn btn-primary mt-2 d-block w-100">Sign in</button>
                            </form>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">New around here? Sign up</a>
                            <a className="dropdown-item" href="#">Forgot password?</a>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="menuFormsDropdowns"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown show"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"btn btn-primary dropdown-toggle"</span> <span
                                className="na">href=</span><span className="s">"#"</span> <span
                                className="na">role=</span><span className="s">"button"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        Dropdown link
    <span className="nt">&lt;/a&gt;</span>

    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;form</span> <span className="na">class=</span><span
                                className="s">"px-4 py-3"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"form-group"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;label</span><span className="nt">&gt;</span>Email address<span
                                className="nt">&lt;/label&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span><span
                                className="s">"email"</span> <span className="na">class=</span><span
                                className="s">"form-control"</span> <span className="na">placeholder=</span><span
                                className="s">"<a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                  data-cfemail="5b3e363a32371b3e233a362b373e75383436">[email&#160;protected]</a>"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"form-group"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;label</span><span className="nt">&gt;</span>Password<span
                                className="nt">&lt;/label&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span><span
                                className="s">"password"</span> <span className="na">class=</span><span
                                className="s">"form-control"</span> <span className="na">placeholder=</span><span
                                className="s">"Password"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"form-check"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span><span
                                className="s">"checkbox"</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">id=</span><span
                                className="s">"dropdownCheck"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"dropdownCheck"</span><span className="nt">&gt;</span>
                    Remember me
                <span className="nt">&lt;/label&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"submit"</span> <span
                                className="na">class=</span><span
                                className="s">"btn btn-primary mt-2 d-block w-100"</span><span
                                className="nt">&gt;</span>Sign in<span className="nt">&lt;/button&gt;</span>
        <span className="nt">&lt;/form&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-divider"</span><span className="nt">&gt;&lt;/div&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>New around here? Sign up<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Forgot password?<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#menuFormsDropdowns"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Active Menu Items Dropdowns</h3>
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
                    <div className="dropdown show">
                        <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                           aria-haspopup="true">
                            Dropdown link
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Regular link</a>
                            <a className="dropdown-item active" href="#">Active link</a>
                            <a className="dropdown-item" href="#">Another link</a>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="activeMenuItemsDropdown"><pre><code className="language-html"
                                                                                           data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown show"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"btn btn-primary dropdown-toggle"</span> <span
                                className="na">href=</span><span className="s">"#"</span> <span
                                className="na">role=</span><span className="s">"button"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        Dropdown link
    <span className="nt">&lt;/a&gt;</span>

    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Regular link<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item active"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Active link<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Another link<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#activeMenuItemsDropdown"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Disabled Menu Items Dropdowns</h3>
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
                    <div className="dropdown show">
                        <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                           aria-haspopup="true">
                            Dropdown link
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Regular link</a>
                            <a className="dropdown-item disabled" href="#">Disabled link</a>
                            <a className="dropdown-item" href="#">Another link</a>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="disabledMenuItemsDropdowns"><pre><code className="language-html"
                                                                                              data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown show"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"btn btn-primary dropdown-toggle"</span> <span
                                className="na">href=</span><span className="s">"#"</span> <span
                                className="na">role=</span><span className="s">"button"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
        Dropdown link
    <span className="nt">&lt;/a&gt;</span>

    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Regular link<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item disabled"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Disabled link<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Another link<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#disabledMenuItemsDropdowns"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Dropdown