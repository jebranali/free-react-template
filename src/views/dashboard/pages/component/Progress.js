import {Fragment} from "react";

function Progress(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Default Progress</h3>
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
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                             aria-valuemax="100"></div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50"
                             aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75"
                             aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100"
                             aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="defaultProgress"><pre><code className="language-html"
                                                                                   data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"progress"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"progress-bar"</span> <span className="na">role=</span><span
                                className="s">"progressbar"</span> <span className="na">aria-valuenow=</span><span
                                className="s">"0"</span> <span className="na">aria-valuemin=</span><span
                                className="s">"0"</span> <span className="na">aria-valuemax=</span><span
                                className="s">"100"</span><span className="nt">&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"progress"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"progress-bar"</span> <span className="na">role=</span><span
                                className="s">"progressbar"</span> <span className="na">style=</span><span
                                className="s">"width: 25%"</span> <span className="na">aria-valuenow=</span><span
                                className="s">"25"</span> <span className="na">aria-valuemin=</span><span
                                className="s">"0"</span> <span className="na">aria-valuemax=</span><span
                                className="s">"100"</span><span className="nt">&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"progress"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"progress-bar"</span> <span className="na">role=</span><span
                                className="s">"progressbar"</span> <span className="na">style=</span><span
                                className="s">"width: 50%"</span> <span className="na">aria-valuenow=</span><span
                                className="s">"50"</span> <span className="na">aria-valuemin=</span><span
                                className="s">"0"</span> <span className="na">aria-valuemax=</span><span
                                className="s">"100"</span><span className="nt">&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"progress"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"progress-bar"</span> <span className="na">role=</span><span
                                className="s">"progressbar"</span> <span className="na">style=</span><span
                                className="s">"width: 75%"</span> <span className="na">aria-valuenow=</span><span
                                className="s">"75"</span> <span className="na">aria-valuemin=</span><span
                                className="s">"0"</span> <span className="na">aria-valuemax=</span><span
                                className="s">"100"</span><span className="nt">&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"progress"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"progress-bar"</span> <span className="na">role=</span><span
                                className="s">"progressbar"</span> <span className="na">style=</span><span
                                className="s">"width: 100%"</span> <span className="na">aria-valuenow=</span><span
                                className="s">"100"</span> <span className="na">aria-valuemin=</span><span
                                className="s">"0"</span> <span className="na">aria-valuemax=</span><span
                                className="s">"100"</span><span className="nt">&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#defaultProgress"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Progress