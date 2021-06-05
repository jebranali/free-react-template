import {Fragment} from "react";

function ListGroup(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Basic List Group</h3>
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
                    <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicListGroup"><pre><code className="language-html"
                                                                                  data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span
                            className="s">"list-group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span
                                className="nt">&gt;</span>Cras justo odio<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span className="nt">&gt;</span>Dapibus ac facilisis in<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span
                                className="nt">&gt;</span>Morbi leo risus<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span className="nt">&gt;</span>Porta ac consectetur ac<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span className="nt">&gt;</span>Vestibulum at eros<span
                                className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#basicListGroup">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Active Items List Group</h3>
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
                    <ul className="list-group">
                        <li className="list-group-item active">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="activeItemsListGroup"><pre><code className="language-html"
                                                                                        data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span
                            className="s">"list-group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item active"</span><span className="nt">&gt;</span>Cras justo odio<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span className="nt">&gt;</span>Dapibus ac facilisis in<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span
                                className="nt">&gt;</span>Morbi leo risus<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span className="nt">&gt;</span>Porta ac consectetur ac<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span className="nt">&gt;</span>Vestibulum at eros<span
                                className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#activeItemsListGroup"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Disabled Items List Group</h3>
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
                    <ul className="list-group">
                        <li className="list-group-item disabled">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="disabledItemsListGroup"><pre><code className="language-html"
                                                                                          data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span
                            className="s">"list-group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item disabled"</span><span className="nt">&gt;</span>Cras justo odio<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span className="nt">&gt;</span>Dapibus ac facilisis in<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span
                                className="nt">&gt;</span>Morbi leo risus<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span className="nt">&gt;</span>Porta ac consectetur ac<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span className="nt">&gt;</span>Vestibulum at eros<span
                                className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#disabledItemsListGroup"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Links and Buttons List Group</h3>
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
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action active">
                            Cras justo odio
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                        <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                        <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                        <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight"><pre><code className="language-html" data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"list-group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"list-group-item list-group-item-action active"</span><span
                                className="nt">&gt;</span>
        Cras justo odio
    <span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span
                                className="s">"list-group-item list-group-item-action"</span><span
                                className="nt">&gt;</span>Dapibus ac facilisis in<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span
                                className="s">"list-group-item list-group-item-action"</span><span
                                className="nt">&gt;</span>Morbi leo risus<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span
                                className="s">"list-group-item list-group-item-action"</span><span
                                className="nt">&gt;</span>Porta ac consectetur ac<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"list-group-item list-group-item-action disabled"</span><span
                                className="nt">&gt;</span>Vestibulum at eros<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#linksButtonsListGroup2"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                    <div className="list-group mt-4">
                        <button type="button" className="list-group-item list-group-item-action active">
                            Cras justo odio
                        </button>
                        <button type="button" className="list-group-item list-group-item-action">Dapibus ac facilisis
                            in
                        </button>
                        <button type="button" className="list-group-item list-group-item-action">Morbi leo risus
                        </button>
                        <button type="button" className="list-group-item list-group-item-action">Porta ac consectetur
                            ac
                        </button>
                        <button type="button" className="list-group-item list-group-item-action" disabled>Vestibulum at
                            eros
                        </button>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="linksButtonsListGroup2"><pre><code className="language-html"
                                                                                          data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"list-group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"list-group-item list-group-item-action active"</span><span
                                className="nt">&gt;</span>
        Cras justo odio
    <span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"list-group-item list-group-item-action"</span><span
                                className="nt">&gt;</span>Dapibus ac facilisis in<span
                                className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"list-group-item list-group-item-action"</span><span
                                className="nt">&gt;</span>Morbi leo risus<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"list-group-item list-group-item-action"</span><span
                                className="nt">&gt;</span>Porta ac consectetur ac<span
                                className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span
                                className="s">"list-group-item list-group-item-action"</span> <span
                                className="na">disabled</span><span className="nt">&gt;</span>Vestibulum at eros<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#linksButtonsListGroup2"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Flush List Group</h3>
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
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item pt-0">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight"><pre><code className="language-html" data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"list-group list-group-flush"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span
                                className="nt">&gt;</span>Cras justo odio<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span className="nt">&gt;</span>Dapibus ac facilisis in<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span
                                className="nt">&gt;</span>Morbi leo risus<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span className="nt">&gt;</span>Porta ac consectetur ac<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span className="nt">&gt;</span>Vestibulum at eros<span
                                className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#customContentListGroup2"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Contextual Classes List Group</h3>
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
                    <ul className="list-group">
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item list-group-item-primary">This is a primary list group item</li>
                        <li className="list-group-item list-group-item-secondary">This is a secondary list group item
                        </li>
                        <li className="list-group-item list-group-item-success">This is a success list group item</li>
                        <li className="list-group-item list-group-item-danger">This is a danger list group item</li>
                        <li className="list-group-item list-group-item-warning">This is a warning list group item</li>
                        <li className="list-group-item list-group-item-info">This is a info list group item</li>
                        <li className="list-group-item list-group-item-light">This is a light list group item</li>
                        <li className="list-group-item list-group-item-dark">This is a dark list group item</li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="contextualClassesListGroup"><pre><code className="language-html"
                                                                                              data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span
                            className="s">"list-group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-group-item"</span><span className="nt">&gt;</span>Dapibus ac facilisis in<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-primary"</span><span
                                className="nt">&gt;</span>This is a primary list group item<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-secondary"</span><span
                                className="nt">&gt;</span>This is a secondary list group item<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-success"</span><span
                                className="nt">&gt;</span>This is a success list group item<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-danger"</span><span
                                className="nt">&gt;</span>This is a danger list group item<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-warning"</span><span
                                className="nt">&gt;</span>This is a warning list group item<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-info"</span><span
                                className="nt">&gt;</span>This is a info list group item<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-light"</span><span
                                className="nt">&gt;</span>This is a light list group item<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-dark"</span><span
                                className="nt">&gt;</span>This is a dark list group item<span
                                className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#contextualClassesListGroup"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>With Badges List Group</h3>
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
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Cras justo odio
                            <span className="badge badge-primary badge-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Dapibus ac facilisis in
                            <span className="badge badge-primary badge-pill">2</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Morbi leo risus
                            <span className="badge badge-primary badge-pill">1</span>
                        </li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="withBadgesListGroup"><pre><code className="language-html"
                                                                                       data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span
                            className="s">"list-group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"list-group-item d-flex justify-content-between align-items-center"</span><span
                                className="nt">&gt;</span>
        Cras justo odio
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-primary badge-pill"</span><span
                                className="nt">&gt;</span>14<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"list-group-item d-flex justify-content-between align-items-center"</span><span
                                className="nt">&gt;</span>
        Dapibus ac facilisis in
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-primary badge-pill"</span><span
                                className="nt">&gt;</span>2<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"list-group-item d-flex justify-content-between align-items-center"</span><span
                                className="nt">&gt;</span>
        Morbi leo risus
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"badge badge-primary badge-pill"</span><span
                                className="nt">&gt;</span>1<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#withBadgesListGroup"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Custom Content List Group</h3>
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
                    <div className="list-group">
                        <a href="#"
                           className="list-group-item list-group-item-action flex-column align-items-start active">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-2 text-white">List group item heading</h4>
                                <small>3 days ago</small>
                            </div>
                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                                risus varius blandit.</p>
                            <small>Donec id elit non mi porta.</small>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-2">List group item heading</h4>
                                <small className="text-muted">3 days ago</small>
                            </div>
                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                                risus varius blandit.</p>
                            <small className="text-muted">Donec id elit non mi porta.</small>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-2">List group item heading</h4>
                                <small className="text-muted">3 days ago</small>
                            </div>
                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                                risus varius blandit.</p>
                            <small className="text-muted">Donec id elit non mi porta.</small>
                        </a>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="customContentListGroup2"><pre><code className="language-html"
                                                                                           data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"list-group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"list-group-item list-group-item-action flex-column align-items-start active"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex w-100 justify-content-between"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"mb-1"</span><span
                                className="nt">&gt;</span>List group item heading<span className="nt">&lt;/h5&gt;</span>
            <span className="nt">&lt;small&gt;</span>3 days ago<span className="nt">&lt;/small&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"mb-1"</span><span
                                className="nt">&gt;</span>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.<span
                                className="nt">&lt;/p&gt;</span>
        <span className="nt">&lt;small&gt;</span>Donec id elit non mi porta.<span className="nt">&lt;/small&gt;</span>
    <span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"list-group-item list-group-item-action flex-column align-items-start"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex w-100 justify-content-between"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"mb-1"</span><span
                                className="nt">&gt;</span>List group item heading<span className="nt">&lt;/h5&gt;</span>
            <span className="nt">&lt;small</span> <span className="na">class=</span><span
                                className="s">"text-muted"</span><span className="nt">&gt;</span>3 days ago<span
                                className="nt">&lt;/small&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"mb-1"</span><span
                                className="nt">&gt;</span>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.<span
                                className="nt">&lt;/p&gt;</span>
        <span className="nt">&lt;small</span> <span className="na">class=</span><span
                                className="s">"text-muted"</span><span className="nt">&gt;</span>Donec id elit non mi porta.<span
                                className="nt">&lt;/small&gt;</span>
    <span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span
                                className="na">class=</span><span className="s">"list-group-item list-group-item-action flex-column align-items-start"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex w-100 justify-content-between"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"mb-1"</span><span
                                className="nt">&gt;</span>List group item heading<span className="nt">&lt;/h5&gt;</span>
            <span className="nt">&lt;small</span> <span className="na">class=</span><span
                                className="s">"text-muted"</span><span className="nt">&gt;</span>3 days ago<span
                                className="nt">&lt;/small&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"mb-1"</span><span
                                className="nt">&gt;</span>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.<span
                                className="nt">&lt;/p&gt;</span>
        <span className="nt">&lt;small</span> <span className="na">class=</span><span
                                className="s">"text-muted"</span><span className="nt">&gt;</span>Donec id elit non mi porta.<span
                                className="nt">&lt;/small&gt;</span>
    <span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#customContentListGroup2"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Custom Content List Group</h3>
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
                    <div className="row">
                        <div className="col-4">
                            <div className="list-group" id="list-tab" role="tablist">
                                <a className="list-group-item list-group-item-action active" id="list-home-list"
                                   data-toggle="list" href="#list-home" role="tab">Home</a>
                                <a className="list-group-item list-group-item-action" id="list-profile-list"
                                   data-toggle="list" href="#list-profile" role="tab">Profile</a>
                                <a className="list-group-item list-group-item-action" id="list-messages-list"
                                   data-toggle="list" href="#list-messages" role="tab">Messages</a>
                                <a className="list-group-item list-group-item-action" id="list-settings-list"
                                   data-toggle="list" href="#list-settings" role="tab">Settings</a>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="list-home" role="tabpanel">
                                    Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing
                                    exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident
                                    ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt
                                    voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt
                                    incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in
                                    cupidatat nisi enim eu nostrud do aliquip veniam minim.
                                </div>
                                <div className="tab-pane fade" id="list-profile" role="tabpanel">
                                    Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex
                                    nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui
                                    commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute
                                    dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in
                                    elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo
                                    veniam incididunt veniam ad.
                                </div>
                                <div className="tab-pane fade" id="list-messages" role="tabpanel">
                                    Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo
                                    reprehenderit aute ipsum voluptate. Irure Lorem et laboris nostrud amet cupidatat
                                    cupidatat anim do ut velit mollit consequat enim tempor. Consectetur est minim
                                    nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint
                                    voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt.
                                    Consectetur et fugiat anim do eiusmod aliquip nulla laborum elit adipisicing
                                    pariatur cillum.
                                </div>
                                <div className="tab-pane fade" id="list-settings" role="tabpanel">
                                    Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt
                                    ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt
                                    dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore aute occaecat
                                    ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet
                                    consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore
                                    dolor quis ex labore id nostrud deserunt dolor eiusmod eu pariatur culpa mollit in
                                    irure.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="customContentListGroup"><pre><code className="language-html"
                                                                                          data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"row"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"list-group"</span> <span className="na">id=</span><span
                                className="s">"list-tab"</span> <span className="na">role=</span><span
                                className="s">"tablist"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-action active"</span> <span
                                className="na">id=</span><span className="s">"list-home-list"</span> <span
                                className="na">data-toggle=</span><span className="s">"list"</span> <span
                                className="na">href=</span><span className="s">"#list-home"</span> <span
                                className="na">role=</span><span className="s">"tab"</span> <span
                                className="na">aria-controls=</span><span className="s">"home"</span><span
                                className="nt">&gt;</span>Home<span className="nt">&lt;/a&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-action"</span> <span
                                className="na">id=</span><span className="s">"list-profile-list"</span> <span
                                className="na">data-toggle=</span><span className="s">"list"</span> <span
                                className="na">href=</span><span className="s">"#list-profile"</span> <span
                                className="na">role=</span><span className="s">"tab"</span> <span
                                className="na">aria-controls=</span><span className="s">"profile"</span><span
                                className="nt">&gt;</span>Profile<span className="nt">&lt;/a&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-action"</span> <span
                                className="na">id=</span><span className="s">"list-messages-list"</span> <span
                                className="na">data-toggle=</span><span className="s">"list"</span> <span
                                className="na">href=</span><span className="s">"#list-messages"</span> <span
                                className="na">role=</span><span className="s">"tab"</span> <span
                                className="na">aria-controls=</span><span className="s">"messages"</span><span
                                className="nt">&gt;</span>Messages<span className="nt">&lt;/a&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"list-group-item list-group-item-action"</span> <span
                                className="na">id=</span><span className="s">"list-settings-list"</span> <span
                                className="na">data-toggle=</span><span className="s">"list"</span> <span
                                className="na">href=</span><span className="s">"#list-settings"</span> <span
                                className="na">role=</span><span className="s">"tab"</span> <span
                                className="na">aria-controls=</span><span className="s">"settings"</span><span
                                className="nt">&gt;</span>Settings<span className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-8"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"tab-content"</span> <span className="na">id=</span><span
                                className="s">"nav-tabContent"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"tab-pane fade show active"</span> <span
                                className="na">id=</span><span className="s">"list-home"</span> <span
                                className="na">role=</span><span className="s">"tabpanel"</span> <span
                                className="na">aria-labelledby=</span><span className="s">"list-home-list"</span><span
                                className="nt">&gt;</span>...<span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"tab-pane fade"</span> <span className="na">id=</span><span
                                className="s">"list-profile"</span> <span className="na">role=</span><span
                                className="s">"tabpanel"</span> <span className="na">aria-labelledby=</span><span
                                className="s">"list-profile-list"</span><span className="nt">&gt;</span>...<span
                                className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"tab-pane fade"</span> <span className="na">id=</span><span
                                className="s">"list-messages"</span> <span className="na">role=</span><span
                                className="s">"tabpanel"</span> <span className="na">aria-labelledby=</span><span
                                className="s">"list-messages-list"</span><span className="nt">&gt;</span>...<span
                                className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"tab-pane fade"</span> <span className="na">id=</span><span
                                className="s">"list-settings"</span> <span className="na">role=</span><span
                                className="s">"tabpanel"</span> <span className="na">aria-labelledby=</span><span
                                className="s">"list-settings-list"</span><span className="nt">&gt;</span>...<span
                                className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#customContentListGroup"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ListGroup