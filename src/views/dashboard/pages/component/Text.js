import {Fragment} from "react";

function Text(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Text Alignment</h3>
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
                    <p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit
                        amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam
                        res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium
                        totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicTextAlignment"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="nt">&lt;p</span> <span className="na">class=</span><span
                            className="s">"text-justify"</span><span className="nt">&gt;</span>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate
felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius
Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.<span
                                className="nt">&lt;/p&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicTextAlignment"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                    <p className="text-left mt-4">Left aligned text on all viewport sizes.</p>
                    <p className="text-center">Center aligned text on all viewport sizes.</p>
                    <p className="text-right">Right aligned text on all viewport sizes.</p>
                    <p className="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
                    <p className="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
                    <p className="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
                    <p className="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicTextAlignment2"><pre><code className="language-html"
                                                                                       data-lang="html"><span
                            className="nt">&lt;p</span> <span className="na">class=</span><span
                            className="s">"text-left"</span><span className="nt">&gt;</span>Left aligned text on all viewport sizes.<span
                            className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-center"</span><span
                                className="nt">&gt;</span>Center aligned text on all viewport sizes.<span
                                className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-right"</span><span
                                className="nt">&gt;</span>Right aligned text on all viewport sizes.<span
                                className="nt">&lt;/p&gt;</span>

<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-sm-left"</span><span
                                className="nt">&gt;</span>Left aligned text on viewports sized SM (small) or wider.<span
                                className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-md-left"</span><span
                                className="nt">&gt;</span>Left aligned text on viewports sized MD (medium) or wider.<span
                                className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-lg-left"</span><span
                                className="nt">&gt;</span>Left aligned text on viewports sized LG (large) or wider.<span
                                className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-xl-left"</span><span
                                className="nt">&gt;</span>Left aligned text on viewports sized XL (extra-large) or wider.<span
                                className="nt">&lt;/p&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicTextAlignment2"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Text Transform</h3>
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
                    <p className="text-lowercase">Lowercased text.</p>
                    <p className="text-uppercase">Uppercased text.</p>
                    <p className="text-capitalize">CapiTaliZed text.</p>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicTextTransform"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="nt">&lt;p</span> <span className="na">class=</span><span
                            className="s">"text-lowercase"</span><span className="nt">&gt;</span>Lowercased text.<span
                            className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-uppercase"</span><span
                                className="nt">&gt;</span>Uppercased text.<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-capitalize"</span><span
                                className="nt">&gt;</span>CapiTaliZed text.<span className="nt">&lt;/p&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicTextTransform"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Font Weight and Italics</h3>
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
                    <p className="font-weight-bold">Bold text.</p>
                    <p className="font-weight-normal">Normal weight text.</p>
                    <p className="font-weight-light">Light weight text.</p>
                    <p className="font-italic">Italic text.</p>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicFontWeightAndItalics"><pre><code className="language-html"
                                                                                             data-lang="html"><span
                            className="nt">&lt;p</span> <span className="na">class=</span><span
                            className="s">"font-weight-bold"</span><span className="nt">&gt;</span>Bold text.<span
                            className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"font-weight-normal"</span><span
                                className="nt">&gt;</span>Normal weight text.<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"font-weight-light"</span><span
                                className="nt">&gt;</span>Light weight text.<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"font-italic"</span><span
                                className="nt">&gt;</span>Italic text.<span
                                className="nt">&lt;/p&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicFontWeightAndItalics"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Text