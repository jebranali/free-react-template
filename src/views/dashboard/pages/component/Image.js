import {Fragment} from "react";

function Image(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Responsive Images</h3>
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
                    <img src="assets/img/1920x350.jpg" className="img-fluid" alt="Responsive image"></img>
                        <div className="demo-code-preview" data-label="Code Example">
                            <div className="highlight" id="basicResponsiveImages">
                                <pre><code className="language-html" data-lang="html"><span
                                    className="nt">&lt;img</span> <span className="na">src=</span><span
                                    className="s">"..."</span> <span className="na">class=</span><span
                                    className="s">"img-fluid"</span> <span className="na">alt=</span><span
                                    className="s">"Responsive image"</span><span className="nt">&gt;</span></code></pre>
                                <button type="button" className="btn btn-clipboard"
                                        data-clipboard-target="#basicResponsiveImages"><i className='bx bx-copy'></i>
                                </button>
                            </div>
                        </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Image thumbnails</h3>
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
                    <img src="assets/img/200x200.jpg" alt="..." className="img-thumbnail"></img>
                        <div className="demo-code-preview" data-label="Code Example">
                            <div className="highlight" id="basicImageThumbnails">
                                <pre><code className="language-html" data-lang="html"><span
                                    className="nt">&lt;img</span> <span className="na">src=</span><span
                                    className="s">"..."</span> <span className="na">alt=</span><span
                                    className="s">"..."</span> <span className="na">class=</span><span
                                    className="s">"img-thumbnail"</span><span className="nt">&gt;</span></code></pre>
                                <button type="button" className="btn btn-clipboard"
                                        data-clipboard-target="#basicImageThumbnails"><i className='bx bx-copy'></i>
                                </button>
                            </div>
                        </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Aligning images</h3>
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
                        <img src="assets/img/200x200.jpg" className="rounded float-left" alt="..."></img>
                        <img src="assets/img/200x200.jpg" className="rounded float-right" alt="..."></img>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicAligningImages"><pre><code className="language-html"
                                                                                       data-lang="html"><span
                            className="nt">&lt;img</span> <span className="na">src=</span><span
                            className="s">"..."</span> <span className="na">class=</span><span className="s">"rounded float-left"</span> <span
                            className="na">alt=</span><span className="s">"..."</span><span className="nt">&gt;</span>
<span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"rounded float-right"</span> <span
                                className="na">alt=</span><span className="s">"..."</span><span
                                className="nt">&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicAligningImages"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <img src="assets/img/200x200.jpg" className="rounded mx-auto d-block" alt="..."></img>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicAligningImages2">
                            <pre><code className="language-html" data-lang="html"><span
                                className="nt">&lt;img</span> <span className="na">src=</span><span
                                className="s">"..."</span> <span className="na">class=</span><span className="s">"rounded mx-auto d-block"</span> <span
                                className="na">alt=</span><span className="s">"..."</span><span
                                className="nt">&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicAligningImages2"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <img src="assets/img/200x200.jpg" className="rounded mx-auto d-block" alt="..."></img>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicAligningImages3"><pre><code className="language-html"
                                                                                        data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"text-center"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"rounded"</span> <span
                                className="na">alt=</span><span className="s">"..."</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicAligningImages3"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Image