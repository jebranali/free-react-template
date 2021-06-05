function BreadCrumb(){
    return (
        <div className="card mb-30 collapse-card-box">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h3>Basic Breadcrumb</h3>
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
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                </nav>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
                <div className="demo-code-preview" data-label="Code Example">
                    <div className="highlight" id="basicBreadcrumb"><pre><code className="language-html"
                                                                               data-lang="html"><span
                        className="nt">&lt;nav</span> <span className="na">aria-label=</span><span
                        className="s">"breadcrumb"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;ol</span> <span className="na">class=</span><span className="s">"breadcrumb"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                            className="s">"breadcrumb-item active"</span> <span className="na">aria-current=</span><span
                            className="s">"page"</span><span className="nt">&gt;</span>Home<span
                            className="nt">&lt;/li&gt;</span>
  <span className="nt">&lt;/ol&gt;</span>
<span className="nt">&lt;/nav&gt;</span>

<span className="nt">&lt;nav</span> <span className="na">aria-label=</span><span className="s">"breadcrumb"</span><span
                            className="nt">&gt;</span>
  <span className="nt">&lt;ol</span> <span className="na">class=</span><span className="s">"breadcrumb"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                            className="s">"breadcrumb-item"</span><span className="nt">&gt;&lt;a</span> <span
                            className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Home<span
                            className="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                            className="s">"breadcrumb-item active"</span> <span className="na">aria-current=</span><span
                            className="s">"page"</span><span className="nt">&gt;</span>Library<span
                            className="nt">&lt;/li&gt;</span>
  <span className="nt">&lt;/ol&gt;</span>
<span className="nt">&lt;/nav&gt;</span>

<span className="nt">&lt;nav</span> <span className="na">aria-label=</span><span className="s">"breadcrumb"</span><span
                            className="nt">&gt;</span>
  <span className="nt">&lt;ol</span> <span className="na">class=</span><span className="s">"breadcrumb"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                            className="s">"breadcrumb-item"</span><span className="nt">&gt;&lt;a</span> <span
                            className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Home<span
                            className="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                            className="s">"breadcrumb-item"</span><span className="nt">&gt;&lt;a</span> <span
                            className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Library<span
                            className="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                            className="s">"breadcrumb-item active"</span> <span className="na">aria-current=</span><span
                            className="s">"page"</span><span className="nt">&gt;</span>Data<span
                            className="nt">&lt;/li&gt;</span>
  <span className="nt">&lt;/ol&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                        <button type="button" className="btn btn-clipboard" data-clipboard-target="#basicBreadcrumb"><i
                            className='bx bx-copy'></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb