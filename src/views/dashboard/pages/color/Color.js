import {Fragment} from "react";

function Color(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Colors</h3>
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
                    <p className="text-primary">.text-primary</p>
                    <p className="text-secondary">.text-secondary</p>
                    <p className="text-success">.text-success</p>
                    <p className="text-danger">.text-danger</p>
                    <p className="text-warning">.text-warning</p>
                    <p className="text-info">.text-info</p>
                    <p className="text-light bg-dark">.text-light</p>
                    <p className="text-dark">.text-dark</p>
                    <p className="text-muted">.text-muted</p>
                    <p className="text-white bg-dark">.text-white</p>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicColors"><pre><code className="language-markup"
                                                                               data-lang="html"><span
                            className="nt">&lt;p</span> <span className="na">class=</span><span
                            className="s">"text-primary"</span><span className="nt">&gt;</span>.text-primary<span
                            className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-secondary"</span><span
                                className="nt">&gt;</span>.text-secondary<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-success"</span><span
                                className="nt">&gt;</span>.text-success<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-danger"</span><span
                                className="nt">&gt;</span>.text-danger<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-warning"</span><span
                                className="nt">&gt;</span>.text-warning<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-info"</span><span
                                className="nt">&gt;</span>.text-info<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-light bg-dark"</span><span
                                className="nt">&gt;</span>.text-light<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-dark"</span><span
                                className="nt">&gt;</span>.text-dark<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-muted"</span><span
                                className="nt">&gt;</span>.text-muted<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-white bg-dark"</span><span
                                className="nt">&gt;</span>.text-white<span className="nt">&lt;/p&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#basicColors"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Background Colors</h3>
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
                    <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
                    <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
                    <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
                    <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
                    <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
                    <div className="p-3 mb-2 bg-info text-white">.bg-info</div>
                    <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
                    <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
                    <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicBGColors"><pre><code className="language-markup"
                                                                                 data-lang="html"><span
                            className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span
                            className="s">"#"</span> <span className="na">class=</span><span
                            className="s">"text-primary"</span><span className="nt">&gt;</span>Primary link<span
                            className="nt">&lt;/a&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"text-secondary"</span><span
                                className="nt">&gt;</span>Secondary link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"text-success"</span><span
                                className="nt">&gt;</span>Success link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"text-danger"</span><span
                                className="nt">&gt;</span>Danger link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"text-warning"</span><span
                                className="nt">&gt;</span>Warning link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"text-info"</span><span
                                className="nt">&gt;</span>Info link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"text-light bg-dark"</span><span
                                className="nt">&gt;</span>Light link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"text-dark"</span><span
                                className="nt">&gt;</span>Dark link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"text-muted"</span><span
                                className="nt">&gt;</span>Muted link<span className="nt">&lt;/a&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"text-white bg-dark"</span><span
                                className="nt">&gt;</span>White link<span
                                className="nt">&lt;/a&gt;&lt;/p&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#basicBGColors">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Color