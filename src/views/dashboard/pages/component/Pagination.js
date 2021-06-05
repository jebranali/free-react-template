import {Fragment} from "react";

function Pagination(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Basic Pagination</h3>
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
                    <nav>
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="BasicPagination"><pre><code className="language-html"
                                                                                   data-lang="html"><span
                            className="nt">&lt;nav</span><span className="nt">&gt;</span>
    <span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"pagination"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Previous<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>1<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>2<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>3<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Next<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span className="nt">&lt;/ul&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#BasicPagination"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>With Icon Pagination</h3>
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
                    <nav>
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="withIconPagination"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="nt">&lt;nav</span><span className="nt">&gt;</span>
    <span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"pagination"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span><span
                                className="ni">&amp;laquo;</span><span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"sr-only"</span><span className="nt">&gt;</span>Previous<span
                                className="nt">&lt;/span&gt;</span>
            <span className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>1<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>2<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>3<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">aria-hidden=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span><span
                                className="ni">&amp;raquo;</span><span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"sr-only"</span><span className="nt">&gt;</span>Next<span
                                className="nt">&lt;/span&gt;</span>
            <span className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;/ul&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#withIconPagination"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Disabled and Active Pagination</h3>
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
                    <nav>
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active">
                                <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="disabledActivePagination"><pre><code className="language-html"
                                                                                            data-lang="html"><span
                            className="nt">&lt;nav</span><span className="nt">&gt;</span>
    <span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"pagination"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"page-item disabled"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span> <span className="na">tabindex=</span><span
                                className="s">"-1"</span><span className="nt">&gt;</span>Previous<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>1<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"page-item active"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>2 <span
                                className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"sr-only"</span><span className="nt">&gt;</span>(current)<span
                                className="nt">&lt;/span&gt;&lt;/a&gt;</span>
        <span className="nt">&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>3<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Next<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;/ul&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#disabledActivePagination"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Sizing Pagination</h3>
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
                    <nav>
                        <ul className="pagination pagination-lg">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1">1</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                        </ul>
                    </nav>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="sizingPaginationLarge"><pre><code className="language-html"
                                                                                         data-lang="html"><span
                            className="nt">&lt;nav</span><span className="nt">&gt;</span>
    <span className="nt">&lt;ul</span> <span className="na">class=</span><span
                                className="s">"pagination pagination-lg"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"page-item disabled"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span> <span className="na">tabindex=</span><span
                                className="s">"-1"</span><span className="nt">&gt;</span>1<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>2<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>3<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span className="nt">&lt;/ul&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#sizingPaginationLarge"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                    <nav className="mt-4">
                        <ul className="pagination pagination-sm">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1">1</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                        </ul>
                    </nav>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="sizingPaginationSmall"><pre><code className="language-html"
                                                                                         data-lang="html"><span
                            className="nt">&lt;nav</span><span className="nt">&gt;</span>
    <span className="nt">&lt;ul</span> <span className="na">class=</span><span
                                className="s">"pagination pagination-sm"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"page-item disabled"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span> <span className="na">tabindex=</span><span
                                className="s">"-1"</span><span className="nt">&gt;</span>1<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>2<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>3<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span className="nt">&lt;/ul&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#sizingPaginationSmall"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Alignment Pagination</h3>
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
                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="alignmentPagination"><pre><code className="language-html"
                                                                                       data-lang="html"><span
                            className="nt">&lt;nav</span><span className="nt">&gt;</span>
    <span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"pagination justify-content-center"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"page-item disabled"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span> <span className="na">tabindex=</span><span
                                className="s">"-1"</span><span className="nt">&gt;</span>Previous<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>1<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>2<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>3<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Next<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;/ul&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#alignmentPagination"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                    <nav className="mt-4">
                        <ul className="pagination justify-content-end">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="alignmentPagination2"><pre><code className="language-html"
                                                                                        data-lang="html"><span
                            className="nt">&lt;nav</span><span className="nt">&gt;</span>
    <span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"pagination justify-content-end"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"page-item disabled"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span> <span className="na">tabindex=</span><span
                                className="s">"-1"</span><span className="nt">&gt;</span>Previous<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>1<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>2<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>3<span
                                className="nt">&lt;/a&gt;&lt;/li&gt;</span>
        <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"page-item"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"page-link"</span> <span className="na">href=</span><span
                                className="s">"#"</span><span className="nt">&gt;</span>Next<span
                                className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;/ul&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#alignmentPagination2"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Pagination