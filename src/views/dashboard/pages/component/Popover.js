import {Fragment} from "react";

function Popover(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Basic Popovers</h3>
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
                    <button type="button" className="btn btn-lg btn-danger" data-toggle="popover" title="Popover title"
                            data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle
                        popover
                    </button>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicPopovers"><pre><code className="language-html"
                                                                                 data-lang="html"><span
                            className="nt">&lt;button</span> <span className="na">type=</span><span
                            className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-lg btn-danger"</span> <span
                            className="na">data-toggle=</span><span className="s">"popover"</span> <span
                            className="na">title=</span><span className="s">"Popover title"</span> <span
                            className="na">data-content=</span><span className="s">"And here's some amazing content.
    It's very engaging. Right?"</span><span className="nt">&gt;</span>Click to toggle popover<span
                            className="nt">&lt;/button&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#basicPopovers">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 popovers-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Four Directions</h3>
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
                    <button type="button" className="btn btn-primary mt-2 mr-2" data-container="body"
                            data-toggle="popover" data-placement="top"
                            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on top
                    </button>
                    <button type="button" className="btn btn-secondary mt-2 mr-2" data-container="body"
                            data-toggle="popover" data-placement="right"
                            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on right
                    </button>
                    <button type="button" className="btn btn-success mt-2 mr-2" data-container="body"
                            data-toggle="popover" data-placement="bottom" data-content="Vivamus
                    sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on bottom
                    </button>
                    <button type="button" className="btn btn-dark mt-2" data-container="body" data-toggle="popover"
                            data-placement="left"
                            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on left
                    </button>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="fourDirectionsPopovers"><pre><code className="language-html"
                                                                                          data-lang="html"><span
                            className="nt">&lt;button</span> <span className="na">type=</span><span
                            className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span
                            className="na">data-container=</span><span className="s">"body"</span> <span
                            className="na">data-toggle=</span><span className="s">"popover"</span> <span
                            className="na">data-placement=</span><span className="s">"top"</span> <span
                            className="na">data-content=</span><span className="s">"Vivamus sagittis
    lacus vel augue laoreet rutrum faucibus."</span><span className="nt">&gt;</span>
    Popover on top
<span className="nt">&lt;/button&gt;</span>

<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span> <span
                                className="na">data-container=</span><span className="s">"body"</span> <span
                                className="na">data-toggle=</span><span className="s">"popover"</span> <span
                                className="na">data-placement=</span><span className="s">"right"</span> <span
                                className="na">data-content=</span><span className="s">"Vivamus sagittis
    lacus vel augue laoreet rutrum faucibus."</span><span className="nt">&gt;</span>
    Popover on right
<span className="nt">&lt;/button&gt;</span>

<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-success"</span> <span
                                className="na">data-container=</span><span className="s">"body"</span> <span
                                className="na">data-toggle=</span><span className="s">"popover"</span> <span
                                className="na">data-placement=</span><span className="s">"bottom"</span> <span
                                className="na">data-content=</span><span className="s">"Vivamus
sagittis lacus vel augue laoreet rutrum faucibus."</span><span className="nt">&gt;</span>
    Popover on bottom
<span className="nt">&lt;/button&gt;</span>

<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-dark"</span> <span
                                className="na">data-container=</span><span className="s">"body"</span> <span
                                className="na">data-toggle=</span><span className="s">"popover"</span> <span
                                className="na">data-placement=</span><span className="s">"left"</span> <span
                                className="na">data-content=</span><span className="s">"Vivamus sagittis
    lacus vel augue laoreet rutrum faucibus."</span><span className="nt">&gt;</span>
    Popover on left
<span className="nt">&lt;/button&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#fourDirectionsPopovers"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Dismiss on Next Click</h3>
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
                    <a tabIndex="0" className="btn btn-lg btn-danger" role="button" data-toggle="popover"
                       data-trigger="focus" title="Dismissible popover"
                       data-content="And here's some amazing content. It's very engaging. Right?">Dismissible
                        popover</a>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="dismissPopovers"><pre><code className="language-html"
                                                                                   data-lang="html"><span
                            className="nt">&lt;a</span> <span className="na">tabindex=</span><span
                            className="s">"0"</span> <span className="na">class=</span><span className="s">"btn btn-lg btn-danger"</span> <span
                            className="na">role=</span><span className="s">"button"</span> <span
                            className="na">data-toggle=</span><span className="s">"popover"</span> <span
                            className="na">data-trigger=</span><span className="s">"focus"</span> <span
                            className="na">title=</span><span className="s">"Dismissible popover"</span> <span
                            className="na">data-content=</span>
<span className="s">"And here's some amazing content. It's very engaging. Right?"</span><span className="nt">&gt;</span>Dismissible popover<span
                                className="nt">&lt;/a&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#dismissPopovers"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Disabled Elements</h3>
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
<span className="d-inline-block" data-toggle="popover" data-content="Disabled popover">
<button className="btn btn-primary" style={{"pointer-events":"none"}} type="button" disabled>Disabled button</button>
</span>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="disabledPopovers"><pre><code className="language-html"
                                                                                    data-lang="html"><span
                            className="nt">&lt;span</span> <span className="na">class=</span><span
                            className="s">"d-inline-block"</span> <span className="na">data-toggle=</span><span
                            className="s">"popover"</span> <span className="na">data-content=</span><span className="s">"Disabled popover"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">class=</span><span
                                className="s">"btn btn-primary"</span> <span className="na">style=</span><span
                                className="s">"pointer-events: none;"</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">disabled</span><span
                                className="nt">&gt;</span>Disabled button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;/span&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#disabledPopovers"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Popover