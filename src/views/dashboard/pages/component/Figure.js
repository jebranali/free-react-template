function Figure(){
    return (
        <div className="card mb-30">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h3>Figures</h3>
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
                <figure className="figure">
                    <img src="assets/img/200x200.jpg" className="figure-img img-fluid rounded" alt="..."></img>
                        <figcaption className="figure-caption">A caption for the above image.</figcaption>
                </figure>
                <div className="demo-code-preview" data-label="Code Example">
                    <div className="highlight" id="basicFigures1"><pre><code className="language-html" data-lang="html"><span
                        className="nt">&lt;figure</span> <span className="na">class=</span><span
                        className="s">"figure"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                            className="na">class=</span><span className="s">"figure-img img-fluid rounded"</span> <span
                            className="na">alt=</span><span className="s">"..."</span><span className="nt">&gt;</span>
  <span className="nt">&lt;figcaption</span> <span className="na">class=</span><span
                            className="s">"figure-caption"</span><span className="nt">&gt;</span>A caption for the above image.<span
                            className="nt">&lt;/figcaption&gt;</span>
<span className="nt">&lt;/figure&gt;</span></code></pre>
                        <button type="button" className="btn btn-clipboard" data-clipboard-target="#basicFigures1"><i
                            className='bx bx-copy'></i></button>
                    </div>
                </div>
                <figure className="figure mt-4">
                    <img src="assets/img/200x200.jpg" className="figure-img img-fluid rounded" alt="..."></img>
                        <figcaption className="figure-caption text-right">A caption for the above image.</figcaption>
                </figure>
                <div className="demo-code-preview" data-label="Code Example">
                    <div className="highlight" id="basicFigures2"><pre><code className="language-html" data-lang="html"><span
                        className="nt">&lt;figure</span> <span className="na">class=</span><span
                        className="s">"figure"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"..."</span> <span
                            className="na">class=</span><span className="s">"figure-img img-fluid rounded"</span> <span
                            className="na">alt=</span><span className="s">"..."</span><span className="nt">&gt;</span>
  <span className="nt">&lt;figcaption</span> <span className="na">class=</span><span className="s">"figure-caption text-right"</span><span
                            className="nt">&gt;</span>A caption for the above image.<span
                            className="nt">&lt;/figcaption&gt;</span>
<span className="nt">&lt;/figure&gt;</span></code></pre>
                        <button type="button" className="btn btn-clipboard" data-clipboard-target="#basicFigures2"><i
                            className='bx bx-copy'></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Figure