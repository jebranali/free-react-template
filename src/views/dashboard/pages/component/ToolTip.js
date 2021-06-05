import {Fragment} from "react";

function ToolTip(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Basic Tooltips</h3>
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
                    <button type="button" className="btn btn-secondary mt-2 mr-2" data-toggle="tooltip"
                            data-placement="top" title="Tooltip on top">
                        Tooltip on top
                    </button>
                    <button type="button" className="btn btn-secondary mt-2 mr-2" data-toggle="tooltip"
                            data-placement="right" title="Tooltip on right">
                        Tooltip on right
                    </button>
                    <button type="button" className="btn btn-secondary mt-2 mr-2" data-toggle="tooltip"
                            data-placement="bottom" title="Tooltip on bottom">
                        Tooltip on bottom
                    </button>
                    <button type="button" className="btn btn-secondary mt-2" data-toggle="tooltip" data-placement="left"
                            title="Tooltip on left">
                        Tooltip on left
                    </button>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicToolTips"><pre><code className="language-html"
                                                                                 data-lang="html"><span
                            className="nt">&lt;button</span> <span className="na">type=</span><span
                            className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span
                            className="na">data-toggle=</span><span className="s">"tooltip"</span> <span
                            className="na">data-placement=</span><span className="s">"top"</span> <span
                            className="na">title=</span><span className="s">"Tooltip on top"</span><span
                            className="nt">&gt;</span>
    Tooltip on top
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span> <span
                                className="na">data-toggle=</span><span className="s">"tooltip"</span> <span
                                className="na">data-placement=</span><span className="s">"right"</span> <span
                                className="na">title=</span><span className="s">"Tooltip on right"</span><span
                                className="nt">&gt;</span>
    Tooltip on right
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span> <span
                                className="na">data-toggle=</span><span className="s">"tooltip"</span> <span
                                className="na">data-placement=</span><span className="s">"bottom"</span> <span
                                className="na">title=</span><span className="s">"Tooltip on bottom"</span><span
                                className="nt">&gt;</span>
    Tooltip on bottom
<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span> <span
                                className="na">data-toggle=</span><span className="s">"tooltip"</span> <span
                                className="na">data-placement=</span><span className="s">"left"</span> <span
                                className="na">title=</span><span className="s">"Tooltip on left"</span><span
                                className="nt">&gt;</span>
    Tooltip on left
<span className="nt">&lt;/button&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#basicToolTips">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Disabled Tooltips</h3>
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
<span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="Disabled tooltip">
<button className="btn btn-primary" style={{"pointer-events": "none"}} type="button" disabled>Disabled button</button>
</span>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="disabledToolTips"><pre><code className="language-html"
                                                                                    data-lang="html"><span
                            className="nt">&lt;span</span> <span className="na">class=</span><span
                            className="s">"d-inline-block"</span> <span className="na">tabindex=</span><span
                            className="s">"0"</span> <span className="na">data-toggle=</span><span
                            className="s">"tooltip"</span> <span className="na">title=</span><span className="s">"Disabled tooltip"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">class=</span><span
                                className="s">"btn btn-primary"</span> <span className="na">style=</span><span
                                className="s">"pointer-events: none;"</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">disabled</span><span
                                className="nt">&gt;</span>Disabled button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;/span&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#disabledToolTips"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ToolTip