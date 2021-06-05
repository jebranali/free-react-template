import {Fragment} from "react";

function Display(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Display property</h3>
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
                    <div className="d-inline p-2 bg-primary text-white">d-inline</div>
                    <div className="d-inline p-2 bg-dark text-white">d-inline</div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="displayInlineBlock"><pre><code className="language-markup"
                                                                                      data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-inline p-2 bg-primary text-white"</span><span
                            className="nt">&gt;</span>d-inline<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-inline p-2 bg-dark text-white"</span><span
                                className="nt">&gt;</span>d-inline<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#displayInlineBlock"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                    <div className="d-block mt-4 p-2 bg-primary text-white">d-inline</div>
                    <div className="d-block p-2 bg-dark text-white">d-inline</div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="displayBlock"><pre><code className="language-markup"
                                                                                data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-block p-2 bg-primary text-white"</span><span
                            className="nt">&gt;</span>d-inline<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-block p-2 bg-dark text-white"</span><span
                                className="nt">&gt;</span>d-inline<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#displayBlock"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Hiding elements</h3>
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
                    <div className="table-responsive">
                        <table className="mb-0 table table-bordered">
                            <thead>
                            <tr>
                                <th>Screen Size</th>
                                <th>Class</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Hidden on all</td>
                                <td><code className="highlighter-rouge">.d-none</code></td>
                            </tr>
                            <tr>
                                <td>Hidden only on xs</td>
                                <td><code className="highlighter-rouge">.d-none .d-sm-block</code></td>
                            </tr>
                            <tr>
                                <td>Hidden only on sm</td>
                                <td><code className="highlighter-rouge">.d-sm-none .d-md-block</code></td>
                            </tr>
                            <tr>
                                <td>Hidden only on md</td>
                                <td><code className="highlighter-rouge">.d-md-none .d-lg-block</code></td>
                            </tr>
                            <tr>
                                <td>Hidden only on lg</td>
                                <td><code className="highlighter-rouge">.d-lg-none .d-xl-block</code></td>
                            </tr>
                            <tr>
                                <td>Hidden only on xl</td>
                                <td><code className="highlighter-rouge">.d-xl-none</code></td>
                            </tr>
                            <tr>
                                <td>Visible on all</td>
                                <td><code className="highlighter-rouge">.d-block</code></td>
                            </tr>
                            <tr>
                                <td>Visible only on xs</td>
                                <td><code className="highlighter-rouge">.d-block .d-sm-none</code></td>
                            </tr>
                            <tr>
                                <td>Visible only on sm</td>
                                <td><code className="highlighter-rouge">.d-none .d-sm-block .d-md-none</code></td>
                            </tr>
                            <tr>
                                <td>Visible only on md</td>
                                <td><code className="highlighter-rouge">.d-none .d-md-block .d-lg-none</code></td>
                            </tr>
                            <tr>
                                <td>Visible only on lg</td>
                                <td><code className="highlighter-rouge">.d-none .d-lg-block .d-xl-none</code></td>
                            </tr>
                            <tr>
                                <td>Visible only on xl</td>
                                <td><code className="highlighter-rouge">.d-none .d-xl-block</code></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Display