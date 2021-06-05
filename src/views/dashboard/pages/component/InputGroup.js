import {Fragment} from "react";

function InputGroup(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Basic Input Group</h3>
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
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Recipient's username"></input>
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">@example.com</span>
                            </div>
                    </div>
                    <label htmlFor="basic-url">Your vanity URL</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                        </div>
                        <input type="text" className="form-control" id="basic-url"></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                        </div>
                        <input type="text" className="form-control"></input>
                            <div className="input-group-append">
                                <span className="input-group-text">.00</span>
                            </div>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">With textarea</span>
                        </div>
                        <textarea className="form-control"></textarea>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicInputGroups"><pre><code className="language-html"
                                                                                    data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span> <span className="na">id=</span><span
                                className="s">"basic-addon1"</span><span className="nt">&gt;</span>@<span
                                className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">placeholder=</span><span className="s">"Username"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">placeholder=</span><span className="s">"Recipient's username"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-append"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span> <span className="na">id=</span><span
                                className="s">"basic-addon2"</span><span className="nt">&gt;</span>@example.com<span
                                className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"basic-url"</span><span
                                className="nt">&gt;</span>Your vanity URL<span className="nt">&lt;/label&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span> <span className="na">id=</span><span
                                className="s">"basic-addon3"</span><span className="nt">&gt;</span>https://example.com/users/<span
                                className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">id=</span><span className="s">"basic-url"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span><span className="nt">&gt;</span>$<span
                                className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-append"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span><span className="nt">&gt;</span>.00<span
                                className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span><span
                                className="nt">&gt;</span>With textarea<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;textarea</span> <span className="na">class=</span><span className="s">"form-control"</span><span
                                className="nt">&gt;&lt;/textarea&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicInputGroups"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Wrapping Input Group</h3>
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
                    <div className="input-group flex-nowrap">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username"></input>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="wrappingInputGroup"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group flex-nowrap"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span> <span className="na">id=</span><span
                                className="s">"addon-wrapping"</span><span className="nt">&gt;</span>@<span
                                className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">placeholder=</span><span className="s">"Username"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#wrappingInputGroup"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Sizing Input Group</h3>
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

                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                        </div>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
                        </div>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
                        </div>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="sizingInputGroups"><pre><code className="language-html"
                                                                                     data-lang="html"><span
                            className="c">&lt;!-- Small --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group input-group-sm mb-3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span> <span className="na">id=</span><span
                                className="s">"inputGroup-sizing-sm"</span><span className="nt">&gt;</span>Small<span
                                className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="c">&lt;!-- Default --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span> <span className="na">id=</span><span
                                className="s">"inputGroup-sizing-default"</span><span
                                className="nt">&gt;</span>Default<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="c">&lt;!-- Large --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group input-group-lg"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span> <span className="na">id=</span><span
                                className="s">"inputGroup-sizing-lg"</span><span className="nt">&gt;</span>Large<span
                                className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#sizingInputGroups"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Checkboxes and Radios Input Group</h3>
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

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox"></input>
                            </div>
                        </div>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="radio"></input>
                            </div>
                        </div>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="checkboxesRadiosInputGroup"><pre><code className="language-html"
                                                                                              data-lang="html"><span
                            className="c">&lt;!-- Checkbox --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"checkbox"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="c">&lt;!-- Radio --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;input</span> <span className="na">type=</span><span
                                className="s">"radio"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#checkboxesRadiosInputGroup"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Multiple Inputs</h3>
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
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">First and last name</span>
                        </div>
                        <input type="text" className="form-control"></input>
                            <input type="text" className="form-control"></input>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="multipleInputsGroups"><pre><code className="language-html"
                                                                                        data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"input-group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span><span className="nt">&gt;</span>First and last name<span
                                className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#multipleInputsGroups"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Multiple Addons</h3>
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
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                            <span className="input-group-text">0.00</span>
                        </div>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control"></input>
                            <div className="input-group-append">
                                <span className="input-group-text">$</span>
                                <span className="input-group-text">0.00</span>
                            </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="multipleAddonsInputGroup"><pre><code className="language-html"
                                                                                            data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span><span className="nt">&gt;</span>$<span
                                className="nt">&lt;/span&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span><span className="nt">&gt;</span>0.00<span
                                className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-append"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span><span className="nt">&gt;</span>$<span
                                className="nt">&lt;/span&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span><span className="nt">&gt;</span>0.00<span
                                className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#multipleAddonsInputGroup"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Button Addons</h3>
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
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon1">Button
                            </button>
                        </div>
                        <input type="text" className="form-control" placeholder=""></input>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Recipient's username"></input>
                            <div className="input-group-append">
                                <button className="btn btn-outline-dark" type="button" id="button-addon2">Button
                                </button>
                            </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend" id="button-addon3">
                            <button className="btn btn-outline-primary" type="button">Button</button>
                            <button className="btn btn-outline-primary" type="button">Button</button>
                        </div>
                        <input type="text" className="form-control" placeholder=""></input>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Recipient's username"></input>
                            <div className="input-group-append" id="button-addon4">
                                <button className="btn btn-outline-success" type="button">Button</button>
                                <button className="btn btn-outline-success" type="button">Button</button>
                            </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="buttonAddonsInputGroup"><pre><code className="language-html"
                                                                                          data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-secondary"</span> <span
                                className="na">type=</span><span className="s">"button"</span> <span
                                className="na">id=</span><span className="s">"button-addon1"</span><span
                                className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">placeholder=</span><span className="s">""</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">placeholder=</span><span className="s">"Recipient's username"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-append"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-dark"</span> <span
                                className="na">type=</span><span className="s">"button"</span> <span
                                className="na">id=</span><span className="s">"button-addon2"</span><span
                                className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span> <span className="na">id=</span><span
                                className="s">"button-addon3"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-primary"</span> <span
                                className="na">type=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-primary"</span> <span
                                className="na">type=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">placeholder=</span><span className="s">""</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">placeholder=</span><span className="s">"Recipient's username"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-append"</span> <span className="na">id=</span><span
                                className="s">"button-addon4"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-success"</span> <span
                                className="na">type=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-success"</span> <span
                                className="na">type=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#buttonAddonsInputGroup"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Buttons with Dropdowns</h3>
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
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div role="separator" className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control"></input>
                            <div className="input-group-append">
                                <button className="btn btn-outline-primary dropdown-toggle" type="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <div role="separator" className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="buttonsWithDropdownsInputGroup"><pre><code
                            className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span
                            className="na">class=</span><span className="s">"input-group mb-3"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-secondary dropdown-toggle"</span> <span
                                className="na">type=</span><span className="s">"button"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span> <span
                                className="na">aria-expanded=</span><span className="s">"false"</span><span
                                className="nt">&gt;</span>
        Dropdown<span className="nt">&lt;/button&gt;</span>
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
            <span className="nt">&lt;div</span> <span className="na">role=</span><span className="s">"separator"</span> <span
                                className="na">class=</span><span className="s">"dropdown-divider"</span><span
                                className="nt">&gt;&lt;/div&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Separated link<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-append"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-primary dropdown-toggle"</span> <span
                                className="na">type=</span><span className="s">"button"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span> <span
                                className="na">aria-expanded=</span><span className="s">"false"</span><span
                                className="nt">&gt;</span>
        Dropdown<span className="nt">&lt;/button&gt;</span>
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
            <span className="nt">&lt;div</span> <span className="na">role=</span><span className="s">"separator"</span> <span
                                className="na">class=</span><span className="s">"dropdown-divider"</span><span
                                className="nt">&gt;&lt;/div&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Separated link<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#buttonsWithDropdownsInputGroup"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Segmented Buttons</h3>
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
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button type="button" className="btn btn-outline-primary">Action</button>
                            <button type="button"
                                    className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div role="separator" className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        <input type="text" className="form-control"
                               aria-label="Text input with segmented dropdown button"></input>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control"
                               aria-label="Text input with segmented dropdown button"></input>
                            <div className="input-group-append">
                                <button type="button" className="btn btn-outline-success">Action</button>
                                <button type="button"
                                        className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <div role="separator" className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="segmentedButtonsInputGroup"><pre><code className="language-html"
                                                                                              data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-primary"</span><span
                                className="nt">&gt;</span>Action<span className="nt">&lt;/button&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-primary dropdown-toggle dropdown-toggle-split"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span>
        <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"sr-only"</span><span className="nt">&gt;</span>Toggle Dropdown<span
                                className="nt">&lt;/span&gt;</span>
        <span className="nt">&lt;/button&gt;</span>
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
            <span className="nt">&lt;div</span> <span className="na">role=</span><span className="s">"separator"</span> <span
                                className="na">class=</span><span className="s">"dropdown-divider"</span><span
                                className="nt">&gt;&lt;/div&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Separated link<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">aria-label=</span><span className="s">"Text input with segmented dropdown button"</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">aria-label=</span><span className="s">"Text input with segmented dropdown button"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-append"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-success"</span><span
                                className="nt">&gt;</span>Action<span className="nt">&lt;/button&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-success dropdown-toggle dropdown-toggle-split"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span>
        <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"sr-only"</span><span className="nt">&gt;</span>Toggle Dropdown<span
                                className="nt">&lt;/span&gt;</span>
        <span className="nt">&lt;/button&gt;</span>
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
            <span className="nt">&lt;div</span> <span className="na">role=</span><span className="s">"separator"</span> <span
                                className="na">class=</span><span className="s">"dropdown-divider"</span><span
                                className="nt">&gt;&lt;/div&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Separated link<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#segmentedButtonsInputGroup"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Custom Select</h3>
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
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text">Options</label>
                        </div>
                        <select className="custom-select">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <select className="custom-select">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div className="input-group-append">
                            <label className="input-group-text">Options</label>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                        <select className="custom-select">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <select className="custom-select">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="customSelectInputGroup"><pre><code className="language-html"
                                                                                          data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span><span className="nt">&gt;</span>Options<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;select</span> <span className="na">class=</span><span
                                className="s">"custom-select"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;option</span> <span className="na">selected</span><span className="nt">&gt;</span>Choose...<span
                                className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">"1"</span><span
                                className="nt">&gt;</span>One<span className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">"2"</span><span
                                className="nt">&gt;</span>Two<span className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">"3"</span><span
                                className="nt">&gt;</span>Three<span className="nt">&lt;/option&gt;</span>
    <span className="nt">&lt;/select&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;select</span> <span className="na">class=</span><span
                                className="s">"custom-select"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;option</span> <span className="na">selected</span><span className="nt">&gt;</span>Choose...<span
                                className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">"1"</span><span
                                className="nt">&gt;</span>One<span className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">"2"</span><span
                                className="nt">&gt;</span>Two<span className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">"3"</span><span
                                className="nt">&gt;</span>Three<span className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;/select&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-append"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span><span className="nt">&gt;</span>Options<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-secondary"</span> <span
                                className="na">type=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;select</span> <span className="na">class=</span><span
                                className="s">"custom-select"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;option</span> <span className="na">selected</span><span className="nt">&gt;</span>Choose...<span
                                className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">"1"</span><span
                                className="nt">&gt;</span>One<span className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">"2"</span><span
                                className="nt">&gt;</span>Two<span className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">"3"</span><span
                                className="nt">&gt;</span>Three<span className="nt">&lt;/option&gt;</span>
    <span className="nt">&lt;/select&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;select</span> <span className="na">class=</span><span
                                className="s">"custom-select"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;option</span> <span className="na">selected</span><span className="nt">&gt;</span>Choose...<span
                                className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">"1"</span><span
                                className="nt">&gt;</span>One<span className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">"2"</span><span
                                className="nt">&gt;</span>Two<span className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">"3"</span><span
                                className="nt">&gt;</span>Three<span className="nt">&lt;/option&gt;</span>
    <span className="nt">&lt;/select&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-append"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-secondary"</span> <span
                                className="na">type=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#customSelectInputGroup"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Custom File Input</h3>
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
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Upload</span>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input"></input>
                                <label className="custom-file-label">Choose file</label>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input"></input>
                                <label className="custom-file-label">Choose file</label>
                        </div>
                        <div className="input-group-append">
                            <span className="input-group-text">Upload</span>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input"></input>
                                <label className="custom-file-label">Choose file</label>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input"></input>
                                <label className="custom-file-label">Choose file</label>
                        </div>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="customFileInput"><pre><code className="language-html"
                                                                                   data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span><span className="nt">&gt;</span>Upload<span
                                className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"custom-file"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"file"</span> <span
                                className="na">class=</span><span className="s">"custom-file-input"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"custom-file-label"</span><span className="nt">&gt;</span>Choose file<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"custom-file"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"file"</span> <span
                                className="na">class=</span><span className="s">"custom-file-input"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"custom-file-label"</span><span className="nt">&gt;</span>Choose file<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-append"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"input-group-text"</span><span className="nt">&gt;</span>Upload<span
                                className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group mb-3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-prepend"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-secondary"</span> <span
                                className="na">type=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"custom-file"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"file"</span> <span
                                className="na">class=</span><span className="s">"custom-file-input"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"custom-file-label"</span><span className="nt">&gt;</span>Choose file<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>

<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"custom-file"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"file"</span> <span
                                className="na">class=</span><span className="s">"custom-file-input"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"custom-file-label"</span><span className="nt">&gt;</span>Choose file<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"input-group-append"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-outline-secondary"</span> <span
                                className="na">type=</span><span className="s">"button"</span><span
                                className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#customFileInput"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default InputGroup