import {Fragment} from 'react';

function Alert(){
    return (
        <Fragment>
            <div className="card-header d-flex justify-content-between align-items-center">
                <h3>Default Alerts</h3>
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
                <div className="alert alert-primary" role="alert">
                    This is a primary alert—check it out!
                </div>
                <div className="alert alert-secondary" role="alert">
                    This is a secondary alert—check it out!
                </div>
                <div className="alert alert-success" role="alert">
                    This is a success alert—check it out!
                </div>
                <div className="alert alert-danger" role="alert">
                    This is a danger alert—check it out!
                </div>
                <div className="alert alert-warning" role="alert">
                    This is a warning alert—check it out!
                </div>
                <div className="alert alert-info" role="alert">
                    This is a info alert—check it out!
                </div>
                <div className="alert alert-light" role="alert">
                    This is a light alert—check it out!
                </div>
                <div className="alert alert-dark" role="alert">
                    This is a dark alert—check it out!
                </div>
                <div className="demo-code-preview" data-label="Code Example">
                    <div className="highlight" id="defaultAlerts"><pre><code className="language-markup"
                                                                             data-lang="html"><span
                        className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-primary"</span> <span
                        className="na">role=</span><span className="s">"alert"</span><span
                        className="nt">&gt;</span>...<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"alert alert-secondary"</span> <span
                            className="na">role=</span><span className="s">"alert"</span><span
                            className="nt">&gt;</span>...<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"alert alert-success"</span> <span className="na">role=</span><span
                            className="s">"alert"</span><span className="nt">&gt;</span>...<span
                            className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"alert alert-danger"</span> <span className="na">role=</span><span
                            className="s">"alert"</span><span className="nt">&gt;</span>...<span
                            className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"alert alert-warning"</span> <span className="na">role=</span><span
                            className="s">"alert"</span><span className="nt">&gt;</span>...<span
                            className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"alert alert-info"</span> <span className="na">role=</span><span
                            className="s">"alert"</span><span className="nt">&gt;</span>...<span
                            className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"alert alert-light"</span> <span className="na">role=</span><span
                            className="s">"alert"</span><span className="nt">&gt;</span>...<span
                            className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"alert alert-dark"</span> <span className="na">role=</span><span
                            className="s">"alert"</span><span className="nt">&gt;</span>...<span
                            className="nt">&lt;/div&gt;</span></code></pre>
                        <button type="button" className="btn btn-clipboard" data-clipboard-target="#defaultAlerts">
                            <i className='bx bx-copy'></i></button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Alert