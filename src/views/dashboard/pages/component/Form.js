import {Fragment} from "react";

function Form(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Basic Forms</h3>
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
                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control"></input>
                                <small className="form-text text-muted">We'll never share your email with anyone
                                    else.</small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control"></input>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicForms"><pre><code><span className="nt">&lt;form&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span><span className="nt">&gt;</span>Email address<span
                                className="nt">&lt;/label&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"email"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;small</span> <span className="na">class=</span><span className="s">"form-text text-muted"</span><span
                                className="nt">&gt;</span>We'll never share your email with anyone else.<span
                                className="nt">&lt;/small&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span><span className="nt">&gt;</span>Password<span
                                className="nt">&lt;/label&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span
                                className="s">"password"</span> <span className="na">class=</span><span
                                className="s">"form-control"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"form-group form-check"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span
                                className="s">"checkbox"</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">id=</span><span
                                className="s">"exampleCheck1"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"exampleCheck1"</span><span className="nt">&gt;</span>Check me out<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"submit"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Submit<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#basicForms"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Form Controls Forms</h3>
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
                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="name@example.com"></input>
                        </div>
                        <div className="form-group">
                            <label>Example select</label>
                            <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Example multiple select</label>
                            <select multiple className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Example textarea</label>
                            <textarea className="form-control" rows="3"></textarea>
                        </div>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="formControlsFroms"><pre><code><span
                            className="nt">&lt;form&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span><span className="nt">&gt;</span>Email address<span
                                className="nt">&lt;/label&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"email"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">placeholder=</span><span className="s">"<a
                                href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                data-cfemail="bbd5dad6defbdec3dad6cbd7de95d8d4d6">[email&#160;protected]</a>"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span><span className="nt">&gt;</span>Example select<span
                                className="nt">&lt;/label&gt;</span>
        <span className="nt">&lt;select</span> <span className="na">class=</span><span
                                className="s">"form-control"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;option&gt;</span>1<span className="nt">&lt;/option&gt;</span>
            <span className="nt">&lt;option&gt;</span>2<span className="nt">&lt;/option&gt;</span>
            <span className="nt">&lt;option&gt;</span>3<span className="nt">&lt;/option&gt;</span>
            <span className="nt">&lt;option&gt;</span>4<span className="nt">&lt;/option&gt;</span>
            <span className="nt">&lt;option&gt;</span>5<span className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;/select&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span><span className="nt">&gt;</span>Example multiple select<span
                                className="nt">&lt;/label&gt;</span>
        <span className="nt">&lt;select</span> <span className="na">multiple</span> <span
                                className="na">class=</span><span className="s">"form-control"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;option&gt;</span>1<span className="nt">&lt;/option&gt;</span>
            <span className="nt">&lt;option&gt;</span>2<span className="nt">&lt;/option&gt;</span>
            <span className="nt">&lt;option&gt;</span>3<span className="nt">&lt;/option&gt;</span>
            <span className="nt">&lt;option&gt;</span>4<span className="nt">&lt;/option&gt;</span>
            <span className="nt">&lt;option&gt;</span>5<span className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;/select&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span><span className="nt">&gt;</span>Example textarea<span
                                className="nt">&lt;/label&gt;</span>
        <span className="nt">&lt;textarea</span> <span className="na">class=</span><span
                                className="s">"form-control"</span> <span className="na">rows=</span><span
                                className="s">"3"</span><span className="nt">&gt;&lt;/textarea&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#formControlsFroms"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Sizing Forms</h3>
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
                    <form>
                        <div className="form-group">
                            <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg"></input>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Default input"></input>
                        </div>
                        <div className="form-group">
                            <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm"></input>
                        </div>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="sizingForms"><pre><code><span className="nt">&lt;form&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span className="s">"form-control form-control-lg"</span> <span
                                className="na">type=</span><span className="s">"text"</span> <span
                                className="na">placeholder=</span><span className="s">".form-control-lg"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-control"</span> <span className="na">type=</span><span
                                className="s">"text"</span> <span className="na">placeholder=</span><span className="s">"Default input"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span className="s">"form-control form-control-sm"</span> <span
                                className="na">type=</span><span className="s">"text"</span> <span
                                className="na">placeholder=</span><span className="s">".form-control-sm"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#sizingForms"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                    <form className="mt-5">
                        <div className="form-group">
                            <select className="form-control form-control-lg">
                                <option>Large select</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                                <option>Default select</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control form-control-sm">
                                <option>Small select</option>
                            </select>
                        </div>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="sizingForms2"><pre><code><span className="nt">&lt;form&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;select</span> <span className="na">class=</span><span className="s">"form-control form-control-lg"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;option&gt;</span>Large select<span className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;/select&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;select</span> <span className="na">class=</span><span
                                className="s">"form-control"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;option&gt;</span>Default select<span className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;/select&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;select</span> <span className="na">class=</span><span className="s">"form-control form-control-sm"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;option&gt;</span>Small select<span className="nt">&lt;/option&gt;</span>
        <span className="nt">&lt;/select&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#sizingForms2"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Readonly Forms</h3>
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
                    <form>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Readonly input here..." readOnly></input>
                        </div>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="readonlyForms"><pre><code><span
                            className="nt">&lt;form&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-control"</span> <span className="na">type=</span><span
                                className="s">"text"</span> <span className="na">placeholder=</span><span className="s">"Readonly input here..."</span> <span
                                className="na">readonly</span><span className="nt">&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#readonlyForms">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Readonly Plain Text Forms</h3>
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
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" readOnly className="form-control-plaintext" id="staticEmail"
                                       value="email@example.com"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword"></input>
                            </div>
                        </div>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="readonlyPlainTextForms"><pre><code><span
                            className="nt">&lt;form&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"form-group row"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"col-sm-2 col-form-label"</span><span
                                className="nt">&gt;</span>Email<span className="nt">&lt;/label&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"col-sm-10"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;input</span> <span className="na">type=</span><span
                                className="s">"text"</span> <span className="na">readonly</span> <span
                                className="na">class=</span><span className="s">"form-control-plaintext"</span> <span
                                className="na">id=</span><span className="s">"staticEmail"</span> <span
                                className="na">value=</span><span className="s">"<a href="/cdn-cgi/l/email-protection"
                                                                                    className="__cf_email__"
                                                                                    data-cfemail="40252d21292c002538212d302c256e232f2d">[email&#160;protected]</a>"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"form-group row"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"col-sm-2 col-form-label"</span><span
                                className="nt">&gt;</span>Password<span className="nt">&lt;/label&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"col-sm-10"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"password"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">id=</span><span className="s">"inputPassword"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#readonlyPlainTextForms"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Range Inputs Forms</h3>
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
                    <form>
                        <div className="form-group">
                            <label>Example Range input</label>
                            <input type="range" className="form-control-range" id="formControlRange"></input>
                        </div>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="rangeInputsForms"><pre><code><span
                            className="nt">&lt;form&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span><span className="nt">&gt;</span>Example Range input<span
                                className="nt">&lt;/label&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"range"</span> <span
                                className="na">class=</span><span className="s">"form-control-range"</span> <span
                                className="na">id=</span><span className="s">"formControlRange"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#rangeInputsForms"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Checkboxes and Radios Forms</h3>
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
                    <form>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Default checkbox
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled></input>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    Disabled checkbox
                                </label>
                        </div>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="checkboxesRadiosForms2"><pre><code><span
                            className="nt">&lt;form&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"checkbox"</span> <span className="na">value=</span><span
                                className="s">""</span> <span className="na">id=</span><span
                                className="s">"defaultCheck1"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"defaultCheck1"</span><span className="nt">&gt;</span>
            Default checkbox
        <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"checkbox"</span> <span className="na">value=</span><span
                                className="s">""</span> <span className="na">id=</span><span
                                className="s">"defaultCheck2"</span> <span className="na">disabled</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"defaultCheck2"</span><span className="nt">&gt;</span>
            Disabled checkbox
        <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#checkboxesRadiosForms2"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                    <form className="mt-5">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                                   value="option1" checked></input>
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Default radio
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                                   value="option2"></input>
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    Second default radio
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                                   value="option3" disabled></input>
                                <label className="form-check-label" htmlFor="exampleRadios3">
                                    Disabled radio
                                </label>
                        </div>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="checkboxesRadiosForms"><pre><code><span
                            className="nt">&lt;form&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"radio"</span> <span className="na">name=</span><span
                                className="s">"exampleRadios"</span> <span className="na">id=</span><span
                                className="s">"exampleRadios1"</span> <span className="na">value=</span><span
                                className="s">"option1"</span> <span className="na">checked</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"exampleRadios1"</span><span className="nt">&gt;</span>
            Default radio
        <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"radio"</span> <span className="na">name=</span><span
                                className="s">"exampleRadios"</span> <span className="na">id=</span><span
                                className="s">"exampleRadios2"</span> <span className="na">value=</span><span
                                className="s">"option2"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"exampleRadios2"</span><span className="nt">&gt;</span>
            Second default radio
        <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"radio"</span> <span className="na">name=</span><span
                                className="s">"exampleRadios"</span> <span className="na">id=</span><span
                                className="s">"exampleRadios3"</span> <span className="na">value=</span><span
                                className="s">"option3"</span> <span className="na">disabled</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"exampleRadios3"</span><span className="nt">&gt;</span>
            Disabled radio
        <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#checkboxesRadiosForms"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Inline Checkboxes and Radios Forms</h3>
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
                    <form>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"
                                   disabled></input>
                                <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
                        </div>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="inlineCheckboxesRadiosForms1"><pre><code><span
                            className="nt">&lt;form&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check form-check-inline"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"checkbox"</span> <span className="na">id=</span><span
                                className="s">"inlineCheckbox1"</span> <span className="na">value=</span><span
                                className="s">"option1"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"inlineCheckbox1"</span><span className="nt">&gt;</span>1<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check form-check-inline"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"checkbox"</span> <span className="na">id=</span><span
                                className="s">"inlineCheckbox2"</span> <span className="na">value=</span><span
                                className="s">"option2"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"inlineCheckbox2"</span><span className="nt">&gt;</span>2<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check form-check-inline"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"checkbox"</span> <span className="na">id=</span><span
                                className="s">"inlineCheckbox3"</span> <span className="na">value=</span><span
                                className="s">"option3"</span> <span className="na">disabled</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"inlineCheckbox3"</span><span className="nt">&gt;</span>3 (disabled)<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#inlineCheckboxesRadiosForms1"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                    <form className="mt-5">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                   value="option1"></input>
                                <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                   value="option2"></input>
                                <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                   value="option3" disabled></input>
                                <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
                        </div>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="inlineCheckboxesRadiosForms2"><pre><code><span
                            className="nt">&lt;form&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check form-check-inline"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"radio"</span> <span className="na">name=</span><span
                                className="s">"inlineRadioOptions"</span> <span className="na">id=</span><span
                                className="s">"inlineRadio1"</span> <span className="na">value=</span><span
                                className="s">"option1"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"inlineRadio1"</span><span className="nt">&gt;</span>1<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check form-check-inline"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"radio"</span> <span className="na">name=</span><span
                                className="s">"inlineRadioOptions"</span> <span className="na">id=</span><span
                                className="s">"inlineRadio2"</span> <span className="na">value=</span><span
                                className="s">"option2"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"inlineRadio2"</span><span className="nt">&gt;</span>2<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check form-check-inline"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"radio"</span> <span className="na">name=</span><span
                                className="s">"inlineRadioOptions"</span> <span className="na">id=</span><span
                                className="s">"inlineRadio3"</span> <span className="na">value=</span><span
                                className="s">"option3"</span> <span className="na">disabled</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"inlineRadio3"</span><span className="nt">&gt;</span>3 (disabled)<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#inlineCheckboxesRadiosForms2"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Without Labels Checkboxes and Radios Forms</h3>
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
                    <form>
                        <div className="form-check">
                            <input className="form-check-input position-static" type="checkbox" id="blankCheckbox"
                                   value="option1"></input>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input position-static" type="radio" name="blankRadio"
                                   id="blankRadio1" value="option1"></input>
                        </div>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="withoutLabelsCheckboxesRadiosForms"><pre><code><span
                            className="nt">&lt;form&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span className="s">"form-check-input position-static"</span> <span
                                className="na">type=</span><span className="s">"checkbox"</span> <span
                                className="na">id=</span><span className="s">"blankCheckbox"</span> <span
                                className="na">value=</span><span className="s">"option1"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span className="s">"form-check-input position-static"</span> <span
                                className="na">type=</span><span className="s">"radio"</span> <span
                                className="na">name=</span><span className="s">"blankRadio"</span> <span
                                className="na">id=</span><span className="s">"blankRadio1"</span> <span
                                className="na">value=</span><span className="s">"option1"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#withoutLabelsCheckboxesRadiosForms"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Forms Grid</h3>
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
                    <form>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name"></input>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name"></input>
                            </div>
                        </div>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="formsGrid1"><pre><code><span className="nt">&lt;form&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;input</span> <span className="na">type=</span><span
                                className="s">"text"</span> <span className="na">class=</span><span
                                className="s">"form-control"</span> <span className="na">placeholder=</span><span
                                className="s">"First name"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;input</span> <span className="na">type=</span><span
                                className="s">"text"</span> <span className="na">class=</span><span
                                className="s">"form-control"</span> <span className="na">placeholder=</span><span
                                className="s">"Last name"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#formsGrid1"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                    <form className="mt-5">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input type="email" className="form-control" id="inputEmail4"></input>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Password</label>
                                <input type="password" className="form-control" id="inputPassword4"></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                        </div>
                        <div className="form-group">
                            <label>Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2"
                                   placeholder="Apartment, studio, or floor"></input>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>City</label>
                                <input type="text" className="form-control" id="inputCity"></input>
                            </div>
                            <div className="form-group col-md-4">
                                <label>State</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label>Zip</label>
                                <input type="text" className="form-control" id="inputZip"></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Check me out
                                    </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="formsGrid2"><pre><code><span className="nt">&lt;form&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-row"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"form-group col-md-6"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;label</span> <span className="na">for=</span><span
                                className="s">"inputEmail4"</span><span className="nt">&gt;</span>Email<span
                                className="nt">&lt;/label&gt;</span>
            <span className="nt">&lt;input</span> <span className="na">type=</span><span
                                className="s">"email"</span> <span className="na">class=</span><span
                                className="s">"form-control"</span> <span className="na">id=</span><span
                                className="s">"inputEmail4"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"form-group col-md-6"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;label</span> <span className="na">for=</span><span
                                className="s">"inputPassword4"</span><span className="nt">&gt;</span>Password<span
                                className="nt">&lt;/label&gt;</span>
            <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"password"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">id=</span><span className="s">"inputPassword4"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">for=</span><span
                                className="s">"inputAddress"</span><span className="nt">&gt;</span>Address<span
                                className="nt">&lt;/label&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">id=</span><span className="s">"inputAddress"</span> <span
                                className="na">placeholder=</span><span className="s">"1234 Main St"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"inputAddress2"</span><span
                                className="nt">&gt;</span>Address 2<span className="nt">&lt;/label&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">id=</span><span className="s">"inputAddress2"</span> <span
                                className="na">placeholder=</span><span
                                className="s">"Apartment, studio, or floor"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-row"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"form-group col-md-6"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"inputCity"</span><span
                                className="nt">&gt;</span>City<span className="nt">&lt;/label&gt;</span>
            <span className="nt">&lt;input</span> <span className="na">type=</span><span
                                className="s">"text"</span> <span className="na">class=</span><span
                                className="s">"form-control"</span> <span className="na">id=</span><span
                                className="s">"inputCity"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"form-group col-md-4"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;label</span> <span className="na">for=</span><span
                                className="s">"inputState"</span><span className="nt">&gt;</span>State<span
                                className="nt">&lt;/label&gt;</span>
            <span className="nt">&lt;select</span> <span className="na">id=</span><span
                                className="s">"inputState"</span> <span className="na">class=</span><span
                                className="s">"form-control"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;option</span> <span className="na">selected</span><span
                                className="nt">&gt;</span>Choose...<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>...<span className="nt">&lt;/option&gt;</span>
            <span className="nt">&lt;/select&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"form-group col-md-2"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;label</span> <span className="na">for=</span><span
                                className="s">"inputZip"</span><span className="nt">&gt;</span>Zip<span
                                className="nt">&lt;/label&gt;</span>
            <span className="nt">&lt;input</span> <span className="na">type=</span><span
                                className="s">"text"</span> <span className="na">class=</span><span
                                className="s">"form-control"</span> <span className="na">id=</span><span
                                className="s">"inputZip"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"form-check"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"checkbox"</span> <span className="na">id=</span><span
                                className="s">"gridCheck"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"gridCheck"</span><span className="nt">&gt;</span>
                Check me out
            <span className="nt">&lt;/label&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"submit"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Sign in<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#formsGrid2"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Forms Row</h3>
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
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name"></input>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name"></input>
                            </div>
                        </div>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="formsRow"><pre><code><span className="nt">&lt;form&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-row"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;input</span> <span className="na">type=</span><span
                                className="s">"text"</span> <span className="na">class=</span><span
                                className="s">"form-control"</span> <span className="na">placeholder=</span><span
                                className="s">"First name"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;input</span> <span className="na">type=</span><span
                                className="s">"text"</span> <span className="na">class=</span><span
                                className="s">"form-control"</span> <span className="na">placeholder=</span><span
                                className="s">"Last name"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#formsRow"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Horizontal Forms</h3>
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
                    <form>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3"></input>
                            </div>
                        </div>
                        <fieldset className="form-group">
                            <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios"
                                               id="gridRadios1" value="option1" checked></input>
                                            <label className="form-check-label" htmlFor="gridRadios1">
                                                First radio
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios"
                                               id="gridRadios2" value="option2"></input>
                                            <label className="form-check-label" htmlFor="gridRadios2">
                                                Second radio
                                            </label>
                                    </div>
                                    <div className="form-check disabled">
                                        <input className="form-check-input" type="radio" name="gridRadios"
                                               id="gridRadios3" value="option3" disabled></input>
                                            <label className="form-check-label" htmlFor="gridRadios3">
                                                Third disabled radio
                                            </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div className="form-group row">
                            <div className="col-sm-2">Checkbox</div>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1"></input>
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Example checkbox
                                        </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="horizontalForms"><pre><code><span
                            className="nt">&lt;form&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group row"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">for=</span><span className="s">"inputEmail3"</span> <span
                                className="na">class=</span><span className="s">"col-sm-2 col-form-label"</span><span
                                className="nt">&gt;</span>Email<span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-10"</span><span
                                className="nt">&gt;</span>
      <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"email"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">id=</span><span className="s">"inputEmail3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group row"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">for=</span><span
                                className="s">"inputPassword3"</span> <span className="na">class=</span><span
                                className="s">"col-sm-2 col-form-label"</span><span
                                className="nt">&gt;</span>Password<span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-10"</span><span
                                className="nt">&gt;</span>
      <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"password"</span> <span
                                className="na">class=</span><span className="s">"form-control"</span> <span
                                className="na">id=</span><span className="s">"inputPassword3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;fieldset</span> <span className="na">class=</span><span
                                className="s">"form-group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>
      <span className="nt">&lt;legend</span> <span className="na">class=</span><span className="s">"col-form-label col-sm-2 pt-0"</span><span
                                className="nt">&gt;</span>Radios<span className="nt">&lt;/legend&gt;</span>
      <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-10"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"form-check"</span><span className="nt">&gt;</span>
          <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"radio"</span> <span className="na">name=</span><span
                                className="s">"gridRadios"</span> <span className="na">id=</span><span
                                className="s">"gridRadios1"</span> <span className="na">value=</span><span
                                className="s">"option1"</span> <span className="na">checked</span><span
                                className="nt">&gt;</span>
          <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"gridRadios1"</span><span className="nt">&gt;</span>
            First radio
          <span className="nt">&lt;/label&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"form-check"</span><span className="nt">&gt;</span>
          <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"radio"</span> <span className="na">name=</span><span
                                className="s">"gridRadios"</span> <span className="na">id=</span><span
                                className="s">"gridRadios2"</span> <span className="na">value=</span><span
                                className="s">"option2"</span><span className="nt">&gt;</span>
          <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"gridRadios2"</span><span className="nt">&gt;</span>
            Second radio
          <span className="nt">&lt;/label&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"form-check disabled"</span><span className="nt">&gt;</span>
          <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"radio"</span> <span className="na">name=</span><span
                                className="s">"gridRadios"</span> <span className="na">id=</span><span
                                className="s">"gridRadios3"</span> <span className="na">value=</span><span
                                className="s">"option3"</span> <span className="na">disabled</span><span
                                className="nt">&gt;</span>
          <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"gridRadios3"</span><span className="nt">&gt;</span>
            Third disabled radio
          <span className="nt">&lt;/label&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
      <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/fieldset&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group row"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-2"</span><span
                                className="nt">&gt;</span>Checkbox<span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-10"</span><span
                                className="nt">&gt;</span>
      <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-check"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">class=</span><span
                                className="s">"form-check-input"</span> <span className="na">type=</span><span
                                className="s">"checkbox"</span> <span className="na">id=</span><span
                                className="s">"gridCheck1"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"form-check-label"</span> <span className="na">for=</span><span
                                className="s">"gridCheck1"</span><span className="nt">&gt;</span>
          Example checkbox
        <span className="nt">&lt;/label&gt;</span>
      <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group row"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-10"</span><span
                                className="nt">&gt;</span>
      <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"submit"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Sign in<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#horizontalForms"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Supported Elements Forms</h3>
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
                    <form className="was-validated">
                        <div className="mb-3">
                            <label htmlFor="validationTextarea">Textarea</label>
                            <textarea className="form-control is-invalid" id="validationTextarea"
                                      placeholder="Required example textarea" required></textarea>
                            <div className="invalid-feedback">
                                Please enter a message in the textarea.
                            </div>
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="customControlValidation1"
                                   required></input>
                                <label className="custom-control-label" htmlFor="customControlValidation1">Check this
                                    custom checkbox</label>
                                <div className="invalid-feedback">Example invalid feedback text</div>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="customControlValidation2"
                                   name="radio-stacked" required></input>
                                <label className="custom-control-label" htmlFor="customControlValidation2">Toggle this
                                    custom radio</label>
                        </div>
                        <div className="custom-control custom-radio mb-3">
                            <input type="radio" className="custom-control-input" id="customControlValidation3"
                                   name="radio-stacked" required></input>
                                <label className="custom-control-label" htmlFor="customControlValidation3">Or toggle
                                    this other custom radio</label>
                                <div className="invalid-feedback">More example invalid feedback text</div>
                        </div>
                        <div className="form-group">
                            <select className="custom-select" required>
                                <option value="">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div className="invalid-feedback">Example invalid custom select feedback</div>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="validatedCustomFile" required></input>
                                <label className="custom-file-label" htmlFor="validatedCustomFile">Choose
                                    file...</label>
                                <div className="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                    </form>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="supportedElementsForms"><pre><code><span
                            className="nt">&lt;form</span> <span className="na">class=</span><span
                            className="s">"was-validated"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"mb-3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">for=</span><span
                                className="s">"validationTextarea"</span><span className="nt">&gt;</span>Textarea<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;textarea</span> <span className="na">class=</span><span className="s">"form-control is-invalid"</span> <span
                                className="na">id=</span><span className="s">"validationTextarea"</span> <span
                                className="na">placeholder=</span><span className="s">"Required example textarea"</span> <span
                                className="na">required</span><span className="nt">&gt;&lt;/textarea&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"invalid-feedback"</span><span className="nt">&gt;</span>
      Please enter a message in the textarea.
    <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>

  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"custom-control custom-checkbox mb-3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span
                                className="na">class=</span><span className="s">"custom-control-input"</span> <span
                                className="na">id=</span><span className="s">"customControlValidation1"</span> <span
                                className="na">required</span><span className="nt">&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"custom-control-label"</span> <span className="na">for=</span><span
                                className="s">"customControlValidation1"</span><span className="nt">&gt;</span>Check this custom checkbox<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"invalid-feedback"</span><span className="nt">&gt;</span>Example invalid feedback text<span
                                className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>

  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"custom-control custom-radio"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"radio"</span> <span
                                className="na">class=</span><span className="s">"custom-control-input"</span> <span
                                className="na">id=</span><span className="s">"customControlValidation2"</span> <span
                                className="na">name=</span><span className="s">"radio-stacked"</span> <span
                                className="na">required</span><span className="nt">&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"custom-control-label"</span> <span className="na">for=</span><span
                                className="s">"customControlValidation2"</span><span className="nt">&gt;</span>Toggle this custom radio<span
                                className="nt">&lt;/label&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"custom-control custom-radio mb-3"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"radio"</span> <span
                                className="na">class=</span><span className="s">"custom-control-input"</span> <span
                                className="na">id=</span><span className="s">"customControlValidation3"</span> <span
                                className="na">name=</span><span className="s">"radio-stacked"</span> <span
                                className="na">required</span><span className="nt">&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"custom-control-label"</span> <span className="na">for=</span><span
                                className="s">"customControlValidation3"</span><span className="nt">&gt;</span>Or toggle this other custom radio<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"invalid-feedback"</span><span className="nt">&gt;</span>More example invalid feedback text<span
                                className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>

  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;select</span> <span className="na">class=</span><span className="s">"custom-select"</span> <span
                                className="na">required</span><span className="nt">&gt;</span>
      <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">""</span><span
                                className="nt">&gt;</span>Open this select menu<span
                                className="nt">&lt;/option&gt;</span>
      <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">"1"</span><span
                                className="nt">&gt;</span>One<span className="nt">&lt;/option&gt;</span>
      <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">"2"</span><span
                                className="nt">&gt;</span>Two<span className="nt">&lt;/option&gt;</span>
      <span className="nt">&lt;option</span> <span className="na">value=</span><span className="s">"3"</span><span
                                className="nt">&gt;</span>Three<span className="nt">&lt;/option&gt;</span>
    <span className="nt">&lt;/select&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"invalid-feedback"</span><span className="nt">&gt;</span>Example invalid custom select feedback<span
                                className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>

  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"custom-file"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"file"</span> <span
                                className="na">class=</span><span className="s">"custom-file-input"</span> <span
                                className="na">id=</span><span className="s">"validatedCustomFile"</span> <span
                                className="na">required</span><span className="nt">&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">class=</span><span
                                className="s">"custom-file-label"</span> <span className="na">for=</span><span
                                className="s">"validatedCustomFile"</span><span className="nt">&gt;</span>Choose file...<span
                                className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"invalid-feedback"</span><span className="nt">&gt;</span>Example invalid custom file feedback<span
                                className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/form&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#supportedElementsForms"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Form