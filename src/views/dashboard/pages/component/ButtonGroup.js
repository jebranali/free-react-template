import {Fragment} from "react";

function ButtonGroup(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Basic Button Group</h3>
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
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary">Left</button>
                        <button type="button" className="btn btn-primary">Middle</button>
                        <button type="button" className="btn btn-primary">Right</button>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicButtonGroup"><pre><code className="language-html"
                                                                                    data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"btn-group"</span> <span className="na">role=</span><span
                            className="s">"group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Left<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Middle<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Right<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicButtonGroup"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Toolbar Button Group</h3>
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
                    <div className="btn-toolbar" role="toolbar">
                        <div className="btn-group mr-2" role="group">
                            <button type="button" className="btn btn-secondary">1</button>
                            <button type="button" className="btn btn-secondary">2</button>
                            <button type="button" className="btn btn-secondary">3</button>
                            <button type="button" className="btn btn-secondary">4</button>
                        </div>
                        <div className="btn-group mr-2" role="group">
                            <button type="button" className="btn btn-secondary">5</button>
                            <button type="button" className="btn btn-secondary">6</button>
                            <button type="button" className="btn btn-secondary">7</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-secondary">8</button>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="toolbarButtonGroup"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"btn-toolbar"</span> <span className="na">role=</span><span
                            className="s">"toolbar"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"btn-group mr-2"</span> <span className="na">role=</span><span
                                className="s">"group"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>1<span className="nt">&lt;/button&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>2<span className="nt">&lt;/button&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>3<span className="nt">&lt;/button&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>4<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"btn-group mr-2"</span> <span className="na">role=</span><span
                                className="s">"group"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>5<span className="nt">&lt;/button&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>6<span className="nt">&lt;/button&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>7<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span> <span
                                className="na">role=</span><span className="s">"group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>8<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#toolbarButtonGroup"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 button-group-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Sizing Button Group</h3>
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
                    <div className="btn-group btn-group-lg mr-2 mt-2" role="group">
                        <button type="button" className="btn btn-primary">Left</button>
                        <button type="button" className="btn btn-primary">Middle</button>
                        <button type="button" className="btn btn-primary">Right</button>
                    </div>
                    <div className="btn-group mr-2 mt-2" role="group">
                        <button type="button" className="btn btn-primary">Left</button>
                        <button type="button" className="btn btn-primary">Middle</button>
                        <button type="button" className="btn btn-primary">Right</button>
                    </div>
                    <div className="btn-group btn-group-sm mt-2" role="group">
                        <button type="button" className="btn btn-primary">Left</button>
                        <button type="button" className="btn btn-primary">Middle</button>
                        <button type="button" className="btn btn-primary">Right</button>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="sizingButtonGroup"><pre><code className="language-html"
                                                                                     data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group btn-group-lg"</span> <span
                            className="na">role=</span><span className="s">"group"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Left<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Middle<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Right<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span> <span
                                className="na">role=</span><span className="s">"group"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Left<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Middle<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Right<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"btn-group btn-group-sm"</span> <span className="na">role=</span><span
                                className="s">"group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Left<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Middle<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Right<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#sizingButtonGroup"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Nesting Button Group</h3>
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
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-secondary">1</button>
                        <button type="button" className="btn btn-secondary">2</button>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Dropdown link</a>
                                <a className="dropdown-item" href="#">Dropdown link</a>
                            </div>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="nestingButtonGroup"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"btn-group"</span> <span className="na">role=</span><span
                            className="s">"group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>1<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>2<span className="nt">&lt;/button&gt;</span>

    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span> <span
                                className="na">role=</span><span className="s">"group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span> <span
                                className="na">aria-expanded=</span><span className="s">"false"</span><span
                                className="nt">&gt;</span>
            Dropdown
        <span className="nt">&lt;/button&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span
                                className="nt">&lt;/a&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#nestingButtonGroup"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Vertical Button Group</h3>
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
                    <div className="btn-group-vertical" role="group">
                        <button type="button" className="btn btn-secondary">Button 1</button>
                        <button type="button" className="btn btn-secondary">Button 2</button>
                        <button type="button" className="btn btn-secondary">Button 3</button>
                        <button type="button" className="btn btn-secondary">Button 4</button>
                        <button type="button" className="btn btn-secondary">Button 5</button>
                        <button type="button" className="btn btn-secondary">Button 6</button>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="verticalButtonGroup"><pre><code className="language-html"
                                                                                       data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"btn-group-vertical"</span> <span className="na">role=</span><span
                            className="s">"group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>Button 1<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>Button 2<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>Button 3<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>Button 4<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>Button 5<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>Button 6<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#verticalButtonGroup"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                    <div className="btn-group-vertical mt-4" role="group">
                        <button type="button" className="btn btn-primary">Button 1</button>
                        <button type="button" className="btn btn-secondary">Button 2</button>
                        <button type="button" className="btn btn-success">Button 3</button>
                        <button type="button" className="btn btn-dark">Button 4</button>
                        <button type="button" className="btn btn-info">Button 5</button>
                        <button type="button" className="btn btn-light">Button 6</button>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="verticalColorButtonGroup"><pre><code className="language-html"
                                                                                            data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"btn-group-vertical"</span> <span className="na">role=</span><span
                            className="s">"group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Button 1<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>Button 2<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-success"</span><span
                                className="nt">&gt;</span>Button 3<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-dark"</span><span
                                className="nt">&gt;</span>Button 4<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-info"</span><span
                                className="nt">&gt;</span>Button 5<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-light"</span><span
                                className="nt">&gt;</span>Button 6<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#verticalColorButtonGroup"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                    <div className="btn-group-vertical mt-4" role="group">
                        <button type="button" className="btn btn-secondary">Button</button>
                        <button type="button" className="btn btn-secondary">Button</button>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Dropdown link</a>
                                <a className="dropdown-item" href="#">Dropdown link</a>
                            </div>
                        </div>
                        <button type="button" className="btn btn-secondary">Button</button>
                        <button type="button" className="btn btn-secondary">Button</button>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Dropdown link</a>
                                <a className="dropdown-item" href="#">Dropdown link</a>
                            </div>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Dropdown link</a>
                                <a className="dropdown-item" href="#">Dropdown link</a>
                            </div>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Dropdown link</a>
                                <a className="dropdown-item" href="#">Dropdown link</a>
                            </div>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="verticalColorNestingButtonGroup"><pre><code
                            className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span
                            className="na">class=</span><span className="s">"btn-group-vertical"</span> <span
                            className="na">role=</span><span className="s">"group"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span> <span
                                className="na">role=</span><span className="s">"group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span> <span
                                className="na">aria-expanded=</span><span className="s">"false"</span><span
                                className="nt">&gt;</span>
            Dropdown
        <span className="nt">&lt;/button&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span
                                className="nt">&lt;/a&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-secondary"</span><span
                                className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span> <span
                                className="na">role=</span><span className="s">"group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span> <span
                                className="na">aria-expanded=</span><span className="s">"false"</span><span
                                className="nt">&gt;</span>
            Dropdown
        <span className="nt">&lt;/button&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span
                                className="nt">&lt;/a&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span> <span
                                className="na">role=</span><span className="s">"group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span> <span
                                className="na">aria-expanded=</span><span className="s">"false"</span><span
                                className="nt">&gt;</span>
            Dropdown
        <span className="nt">&lt;/button&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span
                                className="nt">&lt;/a&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-group"</span> <span
                                className="na">role=</span><span className="s">"group"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span
                                className="na">data-toggle=</span><span className="s">"dropdown"</span> <span
                                className="na">aria-haspopup=</span><span className="s">"true"</span> <span
                                className="na">aria-expanded=</span><span className="s">"false"</span><span
                                className="nt">&gt;</span>
            Dropdown
        <span className="nt">&lt;/button&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span
                                className="nt">&lt;/a&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"dropdown-item"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#verticalColorNestingButtonGroup"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Vertical Outlines Button Group</h3>
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
                    <div className="btn-group-vertical" role="group">
                        <button type="button" className="btn btn-outline-primary">Button 1</button>
                        <button type="button" className="btn btn-outline-secondary">Button 2</button>
                        <button type="button" className="btn btn-outline-success">Button 3</button>
                        <button type="button" className="btn btn-outline-dark">Button 4</button>
                        <button type="button" className="btn btn-outline-info">Button 5</button>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="verticalOutlinesButtonGroup"><pre><code className="language-html"
                                                                                               data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"btn-group-vertical"</span> <span className="na">role=</span><span
                            className="s">"group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-primary"</span><span
                                className="nt">&gt;</span>Button 1<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-secondary"</span><span
                                className="nt">&gt;</span>Button 2<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-success"</span><span
                                className="nt">&gt;</span>Button 3<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-dark"</span><span
                                className="nt">&gt;</span>Button 4<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-info"</span><span
                                className="nt">&gt;</span>Button 5<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#verticalOutlinesButtonGroup"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ButtonGroup