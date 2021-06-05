import {Fragment} from "react";

function MediaObject(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Default Media Object</h3>
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
                    <div className="media">
                        <img src="assets/img/70x70.jpg" className="mr-3" alt="image"></img>
                            <div className="media-body">
                                <h5 className="mt-0">Media heading</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="defaultMediaObject"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"media"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"mr-3"</span> <span
                                className="na">alt=</span><span className="s">"..."</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"media-body"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"mt-0"</span><span
                                className="nt">&gt;</span>Media heading<span className="nt">&lt;/h5&gt;</span>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate
        at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#defaultMediaObject"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Nesting Media Object</h3>
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
                    <div className="media">
                        <img src="assets/img/70x70.jpg" className="mr-3" alt="image"></img>
                            <div className="media-body">
                                <h5 className="mt-0">Media heading</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                <div className="media mt-3">
                                    <a className="mr-3" href="#">
                                        <img src="assets/img/70x70.jpg" className="mr-3" alt="image"></img>
                                    </a>
                                    <div className="media-body">
                                        <h5 className="mt-0">Media heading</h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                        felis in faucibus.
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="nestingMediaObject"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"media"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"mr-3"</span> <span
                                className="na">alt=</span><span className="s">"..."</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"media-body"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"mt-0"</span><span
                                className="nt">&gt;</span>Media heading<span className="nt">&lt;/h5&gt;</span>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate
        at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"media mt-3"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"mr-3"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">src=</span><span
                                className="s">"..."</span> <span className="na">class=</span><span
                                className="s">"mr-3"</span> <span className="na">alt=</span><span
                                className="s">"..."</span><span className="nt">&gt;</span>
            <span className="nt">&lt;/a&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"media-body"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;h5</span> <span className="na">class=</span><span
                                className="s">"mt-0"</span><span className="nt">&gt;</span>Media heading<span
                                className="nt">&lt;/h5&gt;</span>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate
                at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#nestingMediaObject"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Top Aligned Media Object</h3>
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
                    <div className="media">
                        <img src="assets/img/70x70.jpg" className="align-self-start mr-3" alt="image"></img>
                            <div className="media-body">
                                <h5 className="mt-0">Top-aligned media</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.</p>
                                <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus.</p>
                            </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="topAlignedMediaObject"><pre><code className="language-html"
                                                                                         data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"media"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"align-self-start mr-3"</span> <span
                                className="na">alt=</span><span className="s">"..."</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"media-body"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"mt-0"</span><span
                                className="nt">&gt;</span>Top-aligned media<span className="nt">&lt;/h5&gt;</span>
        <span className="nt">&lt;p&gt;</span>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate
        at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.<span
                                className="nt">&lt;/p&gt;</span>
        <span className="nt">&lt;p&gt;</span>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.<span className="nt">&lt;/p&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#topAlignedMediaObject"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Center Aligned Media Object</h3>
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
                    <div className="media">
                        <img src="assets/img/70x70.jpg" className="align-self-center mr-3" alt="image"></img>
                            <div className="media-body">
                                <h5 className="mt-0">Center-aligned media</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.</p>
                                <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus.</p>
                            </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="centerAlignedMediaObject"><pre><code className="language-html"
                                                                                            data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"media"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"align-self-center mr-3"</span> <span
                                className="na">alt=</span><span className="s">"..."</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"media-body"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"mt-0"</span><span
                                className="nt">&gt;</span>Center-aligned media<span className="nt">&lt;/h5&gt;</span>
        <span className="nt">&lt;p&gt;</span>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate
        at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.<span
                                className="nt">&lt;/p&gt;</span>
        <span className="nt">&lt;p&gt;</span>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.<span className="nt">&lt;/p&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#centerAlignedMediaObject"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Bottom Aligned Media Object</h3>
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
                    <div className="media">
                        <img src="assets/img/70x70.jpg" className="align-self-end mr-3" alt="image"></img>
                            <div className="media-body">
                                <h5 className="mt-0">Bottom-aligned media</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.</p>
                                <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus.</p>
                            </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="bottomAlignedMediaObject"><pre><code className="language-html"
                                                                                            data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"media"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"align-self-end mr-3"</span> <span
                                className="na">alt=</span><span className="s">"..."</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"media-body"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"mt-0"</span><span
                                className="nt">&gt;</span>Bottom-aligned media<span className="nt">&lt;/h5&gt;</span>
        <span className="nt">&lt;p&gt;</span>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate
        at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.<span
                                className="nt">&lt;/p&gt;</span>
        <span className="nt">&lt;p&gt;</span>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.<span className="nt">&lt;/p&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#bottomAlignedMediaObject"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Order Media Object</h3>
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
                    <div className="media">
                        <div className="media-body">
                            <h5 className="mt-0">Media object</h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                faucibus.</p>
                        </div>
                        <img src="assets/img/70x70.jpg" className="ml-3" alt="image"></img>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="orderMediaObject"><pre><code className="language-html"
                                                                                    data-lang="html"><span
                            className="nt">&lt;div</span> <span className="na">class=</span><span
                            className="s">"media"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"media-body"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"mt-0"</span><span
                                className="nt">&gt;</span>Media object<span className="nt">&lt;/h5&gt;</span>
        <span className="nt">&lt;p&gt;</span>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate
        at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.<span
                                className="nt">&lt;/p&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"ml-3"</span> <span
                                className="na">alt=</span><span className="s">"..."</span><span
                                className="nt">&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#orderMediaObject"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Media List Object</h3>
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
                    <ul className="list-unstyled">
                        <li className="media">
                            <img src="assets/img/70x70.jpg" className="mr-3" alt="image"></img>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1 font-weight-bold">List-based media object</h5>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.
                                </div>
                        </li>
                        <li className="media my-4">
                            <img src="assets/img/70x70.jpg" className="mr-3" alt="image"></img>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1 font-weight-bold">List-based media object</h5>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.
                                </div>
                        </li>
                        <li className="media">
                            <img src="assets/img/70x70.jpg" className="mr-3" alt="image"></img>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1 font-weight-bold">List-based media object</h5>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.
                                </div>
                        </li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="mediaListObject"><pre><code className="language-html"
                                                                                   data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span
                            className="s">"list-unstyled"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"media"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"mr-3"</span> <span
                                className="na">alt=</span><span className="s">"..."</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"media-body"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"mt-0 mb-1 font-weight-bold"</span><span
                                className="nt">&gt;</span>List-based media object<span className="nt">&lt;/h5&gt;</span>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate
            at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"media my-4"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"mr-3"</span> <span
                                className="na">alt=</span><span className="s">"..."</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"media-body"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"mt-0 mb-1 font-weight-bold"</span><span
                                className="nt">&gt;</span>List-based media object<span className="nt">&lt;/h5&gt;</span>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"media"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                                className="na">class=</span><span className="s">"mr-3"</span> <span
                                className="na">alt=</span><span className="s">"..."</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"media-body"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;h5</span> <span className="na">class=</span><span className="s">"mt-0 mb-1 font-weight-bold"</span><span
                                className="nt">&gt;</span>List-based media object<span className="nt">&lt;/h5&gt;</span>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate
            at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#mediaListObject"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MediaObject