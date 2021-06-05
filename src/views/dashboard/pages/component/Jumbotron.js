import {Fragment} from "react";

function Jumbotron(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Basic Jumbotron</h3>
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
                    <div className="jumbotron py-4">
                        <h1 className="display-4">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.</p>
                        <hr className="my-4"></hr>
                            <p>It uses utility classes for typography and spacing to space content out within the larger
                                container.</p>
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicJumbotron"><pre><code className="language-html"
                                                                                  data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"jumbotron py-4"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;h1</span> <span className="na">class=</span><span className="s">"display-4"</span><span
                                className="nt">&gt;</span>Hello, world!<span className="nt">&lt;/h1&gt;</span>
    <span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"lead"</span><span
                                className="nt">&gt;</span>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.<span
                                className="nt">&lt;/p&gt;</span>
    <span className="nt">&lt;hr</span> <span className="na">class=</span><span className="s">"my-4"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;p&gt;</span>It uses utility classes for typography and spacing to space content out within the larger container.<span
                                className="nt">&lt;/p&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"btn btn-primary btn-lg"</span> <span className="na">href=</span><span
                                className="s">"#"</span> <span className="na">role=</span><span
                                className="s">"button"</span><span className="nt">&gt;</span>Learn more<span
                                className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#basicJumbotron">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Fluid Jumbotron</h3>
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
                    <div className="jumbotron py-4 jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space
                                of its parent.</p>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="fluidJumbotron"><pre><code className="language-html"
                                                                                  data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"jumbotron py-4 jumbotron-fluid"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;h1</span> <span className="na">class=</span><span className="s">"display-4"</span><span
                                className="nt">&gt;</span>Fluid jumbotron<span className="nt">&lt;/h1&gt;</span>
        <span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"lead"</span><span
                                className="nt">&gt;</span>This is a modified jumbotron that occupies the entire horizontal space of its parent.<span
                                className="nt">&lt;/p&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#fluidJumbotron">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Jumbotron