import {Fragment} from "react";

function Spinner(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Border Spinner</h3>
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
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="borderSpinner"><pre><code className="language-html"
                                                                                 data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"spinner-border"</span> <span className="na">role=</span><span
                            className="s">"status"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#borderSpinner">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Colors Spinner</h3>
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
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-border text-secondary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-border text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-border text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-border text-info" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-border text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-border text-dark" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="colorSpinner"><pre><code className="language-html"
                                                                                data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border text-primary"</span> <span
                            className="na">role=</span><span className="s">"status"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border text-secondary"</span> <span
                                className="na">role=</span><span className="s">"status"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-border text-success"</span> <span
                                className="na">role=</span><span className="s">"status"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-border text-danger"</span> <span className="na">role=</span><span
                                className="s">"status"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-border text-warning"</span> <span
                                className="na">role=</span><span className="s">"status"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-border text-info"</span> <span className="na">role=</span><span
                                className="s">"status"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-border text-light"</span> <span className="na">role=</span><span
                                className="s">"status"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-border text-dark"</span> <span className="na">role=</span><span
                                className="s">"status"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#colorSpinner"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Growing Spinner</h3>
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
                    <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-secondary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-info" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-dark" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="growingSpinner"><pre><code className="language-html"
                                                                                  data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-grow text-primary"</span> <span
                            className="na">role=</span><span className="s">"status"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-grow text-secondary"</span> <span
                                className="na">role=</span><span className="s">"status"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-grow text-success"</span> <span className="na">role=</span><span
                                className="s">"status"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-grow text-danger"</span> <span className="na">role=</span><span
                                className="s">"status"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-grow text-warning"</span> <span className="na">role=</span><span
                                className="s">"status"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-grow text-info"</span> <span className="na">role=</span><span
                                className="s">"status"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-grow text-light"</span> <span className="na">role=</span><span
                                className="s">"status"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-grow text-dark"</span> <span className="na">role=</span><span
                                className="s">"status"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#growingSpinner">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Alignment Margin</h3>
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
                    <div className="spinner-border m-5" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="alignmentMarginSpinners"><pre><code className="language-html"
                                                                                           data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border m-5"</span> <span
                            className="na">role=</span><span className="s">"status"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#alignmentMarginSpinners"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Placement Flex</h3>
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
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="placementFloats2"><pre><code className="language-html"
                                                                                    data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex justify-content-center"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-border"</span> <span className="na">role=</span><span
                                className="s">"status"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#placementFloats2"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Placement Flex</h3>
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
                    <div className="d-flex align-items-center">
                        <strong>Loading...</strong>
                        <div className="spinner-grow ml-auto" role="status" aria-hidden="true"></div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="placementFlex"><pre><code className="language-html"
                                                                                 data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Loading...<span className="nt">&lt;/strong&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-grow ml-auto"</span> <span className="na">role=</span><span
                                className="s">"status"</span> <span className="na">aria-hidden=</span><span
                                className="s">"true"</span><span className="nt">&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#placementFlex">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Placement Floats</h3>
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
                    <div className="clearfix">
                        <div className="spinner-border float-right" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="placementFloats"><pre><code className="language-html"
                                                                                   data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"clearfix"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border float-right"</span> <span
                                className="na">role=</span><span className="s">"status"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#placementFloats"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Placement Text Align</h3>
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
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="placementTextAlign"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"text-center"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-border"</span> <span className="na">role=</span><span
                                className="s">"status"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#placementTextAlign"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Size</h3>
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
                    <div className="spinner-border spinner-border-sm" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow spinner-grow-sm" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="spinnersSize"><pre><code className="language-html"
                                                                                data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"spinner-border spinner-border-sm"</span> <span
                            className="na">role=</span><span className="s">"status"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"spinner-grow spinner-grow-sm"</span> <span
                                className="na">role=</span><span className="s">"status"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#spinnersSize"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 spinners-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Buttons</h3>
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
                    <button className="btn btn-primary mt-2 mr-2" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span className="sr-only">Loading...</span>
                    </button>
                    <button className="btn btn-primary mt-2" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="buttonsSpinners"><pre><code className="language-html"
                                                                                   data-lang="html"><span
                            className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span
                            className="na">type=</span><span className="s">"button"</span> <span
                            className="na">disabled</span><span className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"spinner-border spinner-border-sm"</span> <span
                                className="na">role=</span><span className="s">"status"</span> <span
                                className="na">aria-hidden=</span><span className="s">"true"</span><span
                                className="nt">&gt;&lt;/span&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>Loading...<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">class=</span><span
                                className="s">"btn btn-primary"</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">disabled</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"spinner-border spinner-border-sm"</span> <span
                                className="na">role=</span><span className="s">"status"</span> <span
                                className="na">aria-hidden=</span><span className="s">"true"</span><span
                                className="nt">&gt;&lt;/span&gt;</span>
    Loading...
<span className="nt">&lt;/button&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#buttonsSpinners"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Spinner