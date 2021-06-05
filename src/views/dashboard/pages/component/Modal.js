import {Fragment} from "react";

function Modal(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Default Modal</h3>
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
                    <button type="button" className="btn btn-outline-primary" data-toggle="modal"
                            data-target="#basicModal">
                        Launch demo modal
                    </button>

                    <div className="modal fade" id="basicModal" role="dialog" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p className="mb-0">Cras mattis consectetur purus sit amet fermentum. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="defaultModal"><pre><code className="language-html"
                                                                                data-lang="html"><span
                            className="c">&lt;!-- Button trigger modal --&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span> <span
                                className="na">data-toggle=</span><span className="s">"modal"</span> <span
                                className="na">data-target=</span><span className="s">"#basicModal"</span><span
                                className="nt">&gt;</span>
    Launch demo modal
<span className="nt">&lt;/button&gt;</span>

<span className="c">&lt;!-- Modal --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal fade"</span> <span
                                className="na">id=</span><span className="s">"basicModal"</span> <span
                                className="na">role=</span><span className="s">"dialog"</span> <span
                                className="na">aria-hidden=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-dialog"</span> <span className="na">role=</span><span
                                className="s">"document"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-content"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-header"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;h5</span> <span className="na">class=</span><span
                                className="s">"modal-title"</span><span className="nt">&gt;</span>Modal title<span
                                className="nt">&lt;/h5&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span
                                className="s">"close"</span> <span className="na">data-dismiss=</span><span
                                className="s">"modal"</span><span className="nt">&gt;</span>
                    <span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span><span
                                className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-body"</span><span className="nt">&gt;</span>
                ...
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-footer"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span
                                className="na">data-dismiss=</span><span className="s">"modal"</span><span
                                className="nt">&gt;</span>Close<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Save changes<span className="nt">&lt;/button&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#defaultModal"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Scrolling Long Content Modal</h3>
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
                    <button type="button" className="btn btn-outline-dark" data-toggle="modal"
                            data-target="#basicModalLong">
                        Launch demo modal
                    </button>

                    <div className="modal fade" id="basicModalLong" role="dialog" aria-hidden="true">
                        <div className="modal-dialog  modal-dialog-scrollable" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                        metus auctor fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                        metus auctor fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                        metus auctor fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                        metus auctor fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                        metus auctor fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                        metus auctor fringilla.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="scrollingLongContentModal"><pre><code className="language-html"
                                                                                             data-lang="html"><span
                            className="c">&lt;!-- Button trigger modal --&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-dark"</span> <span
                                className="na">data-toggle=</span><span className="s">"modal"</span> <span
                                className="na">data-target=</span><span className="s">"#basicModalLong"</span><span
                                className="nt">&gt;</span>
    Launch demo modal
<span className="nt">&lt;/button&gt;</span>

<span className="c">&lt;!-- Modal --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal fade"</span> <span
                                className="na">id=</span><span className="s">"basicModalLong"</span> <span
                                className="na">role=</span><span className="s">"dialog"</span> <span
                                className="na">aria-hidden=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-dialog modal-dialog-scrollable"</span> <span
                                className="na">role=</span><span className="s">"document"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-content"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-header"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;h5</span> <span className="na">class=</span><span
                                className="s">"modal-title"</span><span className="nt">&gt;</span>Modal title<span
                                className="nt">&lt;/h5&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span
                                className="s">"close"</span> <span className="na">data-dismiss=</span><span
                                className="s">"modal"</span><span className="nt">&gt;</span>
                    <span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span><span
                                className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-body"</span><span className="nt">&gt;</span>
                ...
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-footer"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span
                                className="na">data-dismiss=</span><span className="s">"modal"</span><span
                                className="nt">&gt;</span>Close<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Save changes<span className="nt">&lt;/button&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#scrollingLongContentModal"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Vertically Centered Modal</h3>
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
                    <button type="button" className="btn btn-outline-info" data-toggle="modal"
                            data-target="#basicModalCenter">
                        Launch demo modal
                    </button>

                    <div className="modal fade" id="basicModalCenter" role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="verticallyCenteredModal"><pre><code className="language-html"
                                                                                           data-lang="html"><span
                            className="c">&lt;!-- Button trigger modal --&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-outline-info"</span> <span
                                className="na">data-toggle=</span><span className="s">"modal"</span> <span
                                className="na">data-target=</span><span className="s">"#basicModalCenter"</span><span
                                className="nt">&gt;</span>
    Launch demo modal
<span className="nt">&lt;/button&gt;</span>

<span className="c">&lt;!-- Modal --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal fade"</span> <span
                                className="na">id=</span><span className="s">"basicModalCenter"</span> <span
                                className="na">role=</span><span className="s">"dialog"</span> <span
                                className="na">aria-hidden=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-dialog modal-dialog-centered"</span> <span
                                className="na">role=</span><span className="s">"document"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-content"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-header"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;h5</span> <span className="na">class=</span><span
                                className="s">"modal-title"</span><span className="nt">&gt;</span>Modal title<span
                                className="nt">&lt;/h5&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span
                                className="s">"close"</span> <span className="na">data-dismiss=</span><span
                                className="s">"modal"</span><span className="nt">&gt;</span>
                    <span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span><span
                                className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-body"</span><span className="nt">&gt;</span>
                ...
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-footer"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span
                                className="na">data-dismiss=</span><span className="s">"modal"</span><span
                                className="nt">&gt;</span>Close<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Save changes<span className="nt">&lt;/button&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#verticallyCenteredModal"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Static Backdrop Modal</h3>
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
                    <button type="button" className="btn btn-primary" data-toggle="modal"
                            data-target="#basicStaticBackdrop">
                        Launch demo modal
                    </button>

                    <div className="modal fade" id="basicStaticBackdrop" data-backdrop="static" role="dialog"
                         aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="staticBackdropModal"><pre><code className="language-html"
                                                                                       data-lang="html"><span
                            className="c">&lt;!-- Button trigger modal --&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span> <span
                                className="na">data-toggle=</span><span className="s">"modal"</span> <span
                                className="na">data-target=</span><span className="s">"#basicStaticBackdrop"</span><span
                                className="nt">&gt;</span>
    Launch demo modal
<span className="nt">&lt;/button&gt;</span>

<span className="c">&lt;!-- Modal --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal fade"</span> <span
                                className="na">id=</span><span className="s">"basicStaticBackdrop"</span> <span
                                className="na">data-backdrop=</span><span className="s">"static"</span> <span
                                className="na">role=</span><span className="s">"dialog"</span> <span
                                className="na">aria-hidden=</span><span className="s">"true"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-dialog"</span> <span className="na">role=</span><span
                                className="s">"document"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-content"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-header"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;h5</span> <span className="na">class=</span><span
                                className="s">"modal-title"</span><span className="nt">&gt;</span>Modal title<span
                                className="nt">&lt;/h5&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span
                                className="s">"close"</span> <span className="na">data-dismiss=</span><span
                                className="s">"modal"</span><span className="nt">&gt;</span>
                    <span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span><span
                                className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-body"</span><span className="nt">&gt;</span>
                ...
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-footer"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span
                                className="na">data-dismiss=</span><span className="s">"modal"</span><span
                                className="nt">&gt;</span>Close<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Save changes<span className="nt">&lt;/button&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#staticBackdropModal"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Sizes Modal</h3>
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
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".basicModalXL">
                        Extra large modal
                    </button>

                    <div className="modal fade basicModalXL" role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-xl" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Extra large modal</h5>
                                    <button type="button" className="close" data-dismiss="modal">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicExtraLargeModal"><pre><code className="language-html"
                                                                                        data-lang="html"><span
                            className="c">&lt;!-- Button trigger modal --&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span> <span
                                className="na">data-toggle=</span><span className="s">"modal"</span> <span
                                className="na">data-target=</span><span className="s">".basicModalXL"</span><span
                                className="nt">&gt;</span>
    Extra large modal
<span className="nt">&lt;/button&gt;</span>

<span className="c">&lt;!-- Modal --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal fade basicModalXL"</span> <span className="na">role=</span><span
                                className="s">"dialog"</span> <span className="na">aria-hidden=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-dialog modal-xl"</span> <span className="na">role=</span><span
                                className="s">"document"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-content"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-header"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;h5</span> <span className="na">class=</span><span
                                className="s">"modal-title"</span><span className="nt">&gt;</span>Extra large modal<span
                                className="nt">&lt;/h5&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span
                                className="s">"close"</span> <span className="na">data-dismiss=</span><span
                                className="s">"modal"</span><span className="nt">&gt;</span>
                    <span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span><span
                                className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-body"</span><span className="nt">&gt;</span>
                ...
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-footer"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span
                                className="na">data-dismiss=</span><span className="s">"modal"</span><span
                                className="nt">&gt;</span>Close<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Save changes<span className="nt">&lt;/button&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicExtraLargeModal"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary mt-5" data-toggle="modal"
                            data-target=".basicModalLG">
                        Large modal
                    </button>

                    <div className="modal fade basicModalLG" role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Large modal</h5>
                                    <button type="button" className="close" data-dismiss="modal">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicLargeModal"><pre><code className="language-html"
                                                                                   data-lang="html"><span
                            className="c">&lt;!-- Button trigger modal --&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span> <span
                                className="na">data-toggle=</span><span className="s">"modal"</span> <span
                                className="na">data-target=</span><span className="s">".basicModalLG"</span><span
                                className="nt">&gt;</span>
    Large modal
<span className="nt">&lt;/button&gt;</span>

<span className="c">&lt;!-- Modal --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal fade basicModalLG"</span> <span className="na">role=</span><span
                                className="s">"dialog"</span> <span className="na">aria-hidden=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-dialog modal-lg"</span> <span className="na">role=</span><span
                                className="s">"document"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-content"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-header"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;h5</span> <span className="na">class=</span><span
                                className="s">"modal-title"</span><span className="nt">&gt;</span>Large modal<span
                                className="nt">&lt;/h5&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span
                                className="s">"close"</span> <span className="na">data-dismiss=</span><span
                                className="s">"modal"</span><span className="nt">&gt;</span>
                    <span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span><span
                                className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-body"</span><span className="nt">&gt;</span>
                ...
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-footer"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span
                                className="na">data-dismiss=</span><span className="s">"modal"</span><span
                                className="nt">&gt;</span>Close<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Save changes<span className="nt">&lt;/button&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicLargeModal"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary mt-5" data-toggle="modal"
                            data-target=".basicModalSM">
                        Small modal
                    </button>

                    <div className="modal fade basicModalSM" role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-sm" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Small modal</h5>
                                    <button type="button" className="close" data-dismiss="modal">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicSmallModal"><pre><code className="language-html"
                                                                                   data-lang="html"><span
                            className="c">&lt;!-- Button trigger modal --&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span
                                className="na">class=</span><span className="s">"btn btn-primary"</span> <span
                                className="na">data-toggle=</span><span className="s">"modal"</span> <span
                                className="na">data-target=</span><span className="s">".basicModalSM"</span><span
                                className="nt">&gt;</span>
    Small modal
<span className="nt">&lt;/button&gt;</span>

<span className="c">&lt;!-- Modal --&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal fade basicModalSM"</span> <span className="na">role=</span><span
                                className="s">"dialog"</span> <span className="na">aria-hidden=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-dialog modal-sm"</span> <span className="na">role=</span><span
                                className="s">"document"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"modal-content"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-header"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;h5</span> <span className="na">class=</span><span
                                className="s">"modal-title"</span><span className="nt">&gt;</span>Small modal<span
                                className="nt">&lt;/h5&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span
                                className="s">"close"</span> <span className="na">data-dismiss=</span><span
                                className="s">"modal"</span><span className="nt">&gt;</span>
                    <span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span><span
                                className="ni">&amp;times;</span><span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-body"</span><span className="nt">&gt;</span>
                ...
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"modal-footer"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span> <span
                                className="na">data-dismiss=</span><span className="s">"modal"</span><span
                                className="nt">&gt;</span>Close<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span
                                className="nt">&gt;</span>Save changes<span className="nt">&lt;/button&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicSmallModal"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal