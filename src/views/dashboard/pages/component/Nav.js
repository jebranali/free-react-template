import {Fragment} from "react";

function Nav(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Base Nav</h3>
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
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicBaseNav"><pre><code className="language-markup"
                                                                                data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span
                            className="s">"nav"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link active"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Active<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"nav-link disabled"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Disabled<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#basicBaseNav"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Horizontal Alignment</h3>
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
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="horizontalAlignmentNav"><pre><code className="language-markup"
                                                                                          data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"nav justify-content-center"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link active"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Active<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"nav-link disabled"</span> <span className="na">href=</span><span
                                className="s">"#"</span> <span className="na">tabindex=</span><span
                                className="s">"-1"</span> <span className="na">aria-disabled=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span>Disabled<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#horizontalAlignmentNav"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                    <ul className="nav justify-content-end mt-4">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="horizontalAlignmentNav2"><pre><code className="language-markup"
                                                                                           data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"nav justify-content-end"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link active"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Active<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"nav-link disabled"</span> <span className="na">href=</span><span
                                className="s">"#"</span> <span className="na">tabindex=</span><span
                                className="s">"-1"</span> <span className="na">aria-disabled=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span>Disabled<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#horizontalAlignmentNav2"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Vertical</h3>
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
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="verticalAlignmentNav"><pre><code className="language-markup"
                                                                                        data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"nav flex-column"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link active"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Active<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"nav-link disabled"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Disabled<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#verticalAlignmentNav"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Tabs</h3>
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
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="tabsNav"><pre><code className="language-markup" data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"nav nav-tabs"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link active"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Active<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"nav-link disabled"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Disabled<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#tabsNav"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Fill and Justify</h3>
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
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="fillAndJustifyNav"><pre><code className="language-markup"
                                                                                     data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"nav nav-pills nav-fill"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link active"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Active<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"nav-link disabled"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Disabled<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#fillAndJustifyNav"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Navs with Dropdowns</h3>
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
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                               aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="tabsWithDropdowns"><pre><code className="language-markup"
                                                                                     data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"nav nav-tabs"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link active"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Active<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"nav-item dropdown"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link dropdown-toggle"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">href=</span><span className="s">"#"</span> <span
                                className="na">role=</span><span className="s">"button"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span> <span
                                className="na">aria-expanded=</span><span className="s">"false"</span><span
                                className="nt">&gt;</span>Dropdown<span className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span
                                className="nt">&gt;</span>
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
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"nav-link disabled"</span> <span className="na">href=</span><span
                                className="s">"#"</span> <span className="na">tabindex=</span><span
                                className="s">"-1"</span> <span className="na">aria-disabled=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span>Disabled<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#tabsWithDropdowns"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Nav