import {Fragment} from "react";

function Typography(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Headings</h3>
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
                    <h1>h1. Bootstrap heading</h1>
                    <h2>h2. Bootstrap heading</h2>
                    <h3>h3. Bootstrap heading</h3>
                    <h4>h4. Bootstrap heading</h4>
                    <h5>h5. Bootstrap heading</h5>
                    <h6>h6. Bootstrap heading</h6>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicHeadings"><pre><code className="language-html"
                                                                                 data-lang="html"><span
                            className="nt">&lt;h1</span><span className="nt">&gt;</span>h1. Bootstrap heading<span
                            className="nt">&lt;/h1&gt;</span>
<span className="nt">&lt;h2</span><span className="nt">&gt;</span>h2. Bootstrap heading<span
                                className="nt">&lt;/h2&gt;</span>
<span className="nt">&lt;h3</span><span className="nt">&gt;</span>h3. Bootstrap heading<span
                                className="nt">&lt;/h3&gt;</span>
<span className="nt">&lt;h4</span><span className="nt">&gt;</span>h4. Bootstrap heading<span
                                className="nt">&lt;/h4&gt;</span>
<span className="nt">&lt;h5</span><span className="nt">&gt;</span>h5. Bootstrap heading<span
                                className="nt">&lt;/h5&gt;</span>
<span className="nt">&lt;h6</span><span className="nt">&gt;</span>h6. Bootstrap heading<span
                                className="nt">&lt;/h6&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#basicHeadings">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Customizing Headings</h3>
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
                    <h3>
                        Fancy display heading
                        <small className="text-muted">With faded secondary text</small>
                    </h3>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicCustomizingHeadings"><pre><code className="language-html"
                                                                                            data-lang="html"><span
                            className="nt">&lt;h3&gt;</span>
    Fancy display heading
    <span className="nt">&lt;small</span> <span className="na">class=</span><span className="s">"text-muted"</span><span
                                className="nt">&gt;</span>With faded secondary text<span
                                className="nt">&lt;/small&gt;</span>
<span className="nt">&lt;/h3&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicCustomizingHeadings"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Display Headings</h3>
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
                    <h1 className="display-1">Display 1</h1>
                    <h1 className="display-2">Display 2</h1>
                    <h1 className="display-3">Display 3</h1>
                    <h1 className="display-4">Display 4</h1>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicDisplayHeadings"><pre><code className="language-html"
                                                                                        data-lang="html"><span
                            className="nt">&lt;h1</span> <span className="na">class=</span><span
                            className="s">"display-1"</span><span className="nt">&gt;</span>Display 1<span
                            className="nt">&lt;/h1&gt;</span>
<span className="nt">&lt;h1</span> <span className="na">class=</span><span className="s">"display-2"</span><span
                                className="nt">&gt;</span>Display 2<span className="nt">&lt;/h1&gt;</span>
<span className="nt">&lt;h1</span> <span className="na">class=</span><span className="s">"display-3"</span><span
                                className="nt">&gt;</span>Display 3<span className="nt">&lt;/h1&gt;</span>
<span className="nt">&lt;h1</span> <span className="na">class=</span><span className="s">"display-4"</span><span
                                className="nt">&gt;</span>Display 4<span className="nt">&lt;/h1&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicDisplayHeadings"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Lead</h3>
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
                    <p className="lead">
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non
                        commodo luctus.
                    </p>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicLeadHeadings"><pre><code className="language-html"
                                                                                     data-lang="html"><span
                            className="nt">&lt;p</span> <span className="na">class=</span><span
                            className="s">"lead"</span><span className="nt">&gt;</span>
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
<span className="nt">&lt;/p&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicLeadHeadings"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Inline Text Elements</h3>
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
                    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                    <p>
                        <del>This line of text is meant to be treated as deleted text.</del>
                    </p>
                    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                    <p>
                        <ins>This line of text is meant to be treated as an addition to the document.</ins>
                    </p>
                    <p><u>This line of text will render as underlined</u></p>
                    <p><small>This line of text is meant to be treated as fine print.</small></p>
                    <p><strong>This line rendered as bold text.</strong></p>
                    <p><em>This line rendered as italicized text.</em></p>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicInlineTextElements"><pre><code className="language-html"
                                                                                           data-lang="html"><span
                            className="nt">&lt;p&gt;</span>You can use the mark tag to <span
                            className="nt">&lt;mark&gt;</span>highlight<span
                            className="nt">&lt;/mark&gt;</span> text.<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;del&gt;</span>This line of text is meant to be treated as deleted text.<span
                                className="nt">&lt;/del&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;s&gt;</span>This line of text is meant to be treated as no longer accurate.<span
                                className="nt">&lt;/s&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;ins&gt;</span>This line of text is meant to be treated as an addition to the document.<span
                                className="nt">&lt;/ins&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;u&gt;</span>This line of text will render as underlined<span
                                className="nt">&lt;/u&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;small&gt;</span>This line of text is meant to be treated as fine print.<span
                                className="nt">&lt;/small&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;strong&gt;</span>This line rendered as bold text.<span
                                className="nt">&lt;/strong&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;em&gt;</span>This line rendered as italicized text.<span
                                className="nt">&lt;/em&gt;&lt;/p&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicInlineTextElements"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Abbreviations</h3>
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
                    <p><abbr title="attribute">attr</abbr></p>
                    <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicAbbreviations"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="nt">&lt;p&gt;&lt;abbr</span> <span className="na">title=</span><span
                            className="s">"attribute"</span><span className="nt">&gt;</span>attr<span
                            className="nt">&lt;/abbr&gt;&lt;/p&gt;</span>
<span className="nt">&lt;p&gt;&lt;abbr</span> <span className="na">title=</span><span className="s">"HyperText Markup Language"</span> <span
                                className="na">class=</span><span className="s">"initialism"</span><span
                                className="nt">&gt;</span>HTML<span className="nt">&lt;/abbr&gt;&lt;/p&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicAbbreviations"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Blockquotes</h3>
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
                    <blockquote className="blockquote">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.</p>
                    </blockquote>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicBlockquotes"><pre><code className="language-html"
                                                                                    data-lang="html"><span
                            className="nt">&lt;blockquote</span> <span className="na">class=</span><span
                            className="s">"blockquote"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"mb-0"</span><span
                                className="nt">&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<span
                                className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;/blockquote&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicBlockquotes"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                    <blockquote className="blockquote mt-4">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source
                            Title</cite></footer>
                    </blockquote>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicBlockquotes2"><pre><code className="language-html"
                                                                                     data-lang="html"><span
                            className="nt">&lt;blockquote</span> <span className="na">class=</span><span
                            className="s">"blockquote"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"mb-0"</span><span
                                className="nt">&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<span
                                className="nt">&lt;/p&gt;</span>
    <span className="nt">&lt;footer</span> <span className="na">class=</span><span
                                className="s">"blockquote-footer"</span><span className="nt">&gt;</span>Someone famous in <span
                                className="nt">&lt;cite</span> <span className="na">title=</span><span className="s">"Source Title"</span><span
                                className="nt">&gt;</span>Source Title<span
                                className="nt">&lt;/cite&gt;&lt;/footer&gt;</span>
<span className="nt">&lt;/blockquote&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicBlockquotes2"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                    <blockquote className="blockquote mt-4 text-center">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source
                            Title</cite></footer>
                    </blockquote>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicBlockquotes3"><pre><code className="language-html"
                                                                                     data-lang="html"><span
                            className="nt">&lt;blockquote</span> <span className="na">class=</span><span className="s">"blockquote text-center"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"mb-0"</span><span
                                className="nt">&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<span
                                className="nt">&lt;/p&gt;</span>
    <span className="nt">&lt;footer</span> <span className="na">class=</span><span
                                className="s">"blockquote-footer"</span><span className="nt">&gt;</span>Someone famous in <span
                                className="nt">&lt;cite</span> <span className="na">title=</span><span className="s">"Source Title"</span><span
                                className="nt">&gt;</span>Source Title<span
                                className="nt">&lt;/cite&gt;&lt;/footer&gt;</span>
<span className="nt">&lt;/blockquote&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicBlockquotes3"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                    <blockquote className="blockquote mt-4 text-right">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source
                            Title</cite></footer>
                    </blockquote>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicBlockquotes4"><pre><code className="language-html"
                                                                                     data-lang="html"><span
                            className="nt">&lt;blockquote</span> <span className="na">class=</span><span className="s">"blockquote text-right"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"mb-0"</span><span
                                className="nt">&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<span
                                className="nt">&lt;/p&gt;</span>
    <span className="nt">&lt;footer</span> <span className="na">class=</span><span
                                className="s">"blockquote-footer"</span><span className="nt">&gt;</span>Someone famous in <span
                                className="nt">&lt;cite</span> <span className="na">title=</span><span className="s">"Source Title"</span><span
                                className="nt">&gt;</span>Source Title<span
                                className="nt">&lt;/cite&gt;&lt;/footer&gt;</span>
<span className="nt">&lt;/blockquote&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicBlockquotes4"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Lists Unstyled</h3>
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
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit
                            <ul>
                                <li>Phasellus iaculis neque</li>
                                <li>Purus sodales ultricies</li>
                                <li>Vestibulum laoreet porttitor sem</li>
                                <li>Ac tristique libero volutpat at</li>
                            </ul>
                        </li>
                        <li>Faucibus porta lacus fringilla vel</li>
                        <li>Aenean sit amet erat nunc</li>
                        <li>Eget porttitor lorem</li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicListsUnstyled"><pre><code className="language-html"
                                                                                      data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span
                            className="s">"list-unstyled"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;li&gt;</span>Lorem ipsum dolor sit amet<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li&gt;</span>Consectetur adipiscing elit<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li&gt;</span>Integer molestie lorem at massa<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li&gt;</span>Facilisis in pretium nisl aliquet<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li&gt;</span>Nulla volutpat aliquam velit
    <span className="nt">&lt;ul&gt;</span>
        <span className="nt">&lt;li&gt;</span>Phasellus iaculis neque<span className="nt">&lt;/li&gt;</span>
        <span className="nt">&lt;li&gt;</span>Purus sodales ultricies<span className="nt">&lt;/li&gt;</span>
        <span className="nt">&lt;li&gt;</span>Vestibulum laoreet porttitor sem<span className="nt">&lt;/li&gt;</span>
        <span className="nt">&lt;li&gt;</span>Ac tristique libero volutpat at<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;/ul&gt;</span>
    <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li&gt;</span>Faucibus porta lacus fringilla vel<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li&gt;</span>Aenean sit amet erat nunc<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li&gt;</span>Eget porttitor lorem<span className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicListsUnstyled"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Lists Inline</h3>
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
                    <ul className="list-inline">
                        <li className="list-inline-item">Lorem ipsum</li>
                        <li className="list-inline-item">Phasellus iaculis</li>
                        <li className="list-inline-item">Nulla volutpat</li>
                    </ul>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicListsInline"><pre><code className="language-html"
                                                                                    data-lang="html"><span
                            className="nt">&lt;ul</span> <span className="na">class=</span><span
                            className="s">"list-inline"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-inline-item"</span><span className="nt">&gt;</span>Lorem ipsum<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-inline-item"</span><span className="nt">&gt;</span>Phasellus iaculis<span
                                className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"list-inline-item"</span><span
                                className="nt">&gt;</span>Nulla volutpat<span className="nt">&lt;/li&gt;</span>
<span className="nt">&lt;/ul&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicListsInline"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Description List Alignment</h3>
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
                    <dl className="row">
                        <dt className="col-sm-3">Description lists</dt>
                        <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
                        <dt className="col-sm-3">Euismod</dt>
                        <dd className="col-sm-9">
                            <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                            <p>Donec id elit non mi porta gravida at eget metus.</p>
                        </dd>
                        <dt className="col-sm-3">Malesuada porta</dt>
                        <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
                        <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                        <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                            nibh, ut fermentum massa justo sit amet risus.
                        </dd>
                        <dt className="col-sm-3">Nesting</dt>
                        <dd className="col-sm-9">
                            <dl className="row">
                                <dt className="col-sm-4">Nested definition list</dt>
                                <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
                                    nunc.
                                </dd>
                            </dl>
                        </dd>
                    </dl>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicDescriptionListAlignment"><pre><code
                            className="language-html" data-lang="html"><span className="nt">&lt;dl</span> <span
                            className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;dt</span> <span className="na">class=</span><span className="s">"col-sm-3"</span><span
                                className="nt">&gt;</span>Description lists<span className="nt">&lt;/dt&gt;</span>
    <span className="nt">&lt;dd</span> <span className="na">class=</span><span className="s">"col-sm-9"</span><span
                                className="nt">&gt;</span>A description list is perfect for defining terms.<span
                                className="nt">&lt;/dd&gt;</span>

    <span className="nt">&lt;dt</span> <span className="na">class=</span><span className="s">"col-sm-3"</span><span
                                className="nt">&gt;</span>Euismod<span className="nt">&lt;/dt&gt;</span>
    <span className="nt">&lt;dd</span> <span className="na">class=</span><span className="s">"col-sm-9"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;p&gt;</span>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.<span
                                className="nt">&lt;/p&gt;</span>
        <span className="nt">&lt;p&gt;</span>Donec id elit non mi porta gravida at eget metus.<span
                                className="nt">&lt;/p&gt;</span>
    <span className="nt">&lt;/dd&gt;</span>

    <span className="nt">&lt;dt</span> <span className="na">class=</span><span className="s">"col-sm-3"</span><span
                                className="nt">&gt;</span>Malesuada porta<span className="nt">&lt;/dt&gt;</span>
    <span className="nt">&lt;dd</span> <span className="na">class=</span><span className="s">"col-sm-9"</span><span
                                className="nt">&gt;</span>Etiam porta sem malesuada magna mollis euismod.<span
                                className="nt">&lt;/dd&gt;</span>

    <span className="nt">&lt;dt</span> <span className="na">class=</span><span
                                className="s">"col-sm-3 text-truncate"</span><span className="nt">&gt;</span>Truncated term is truncated<span
                                className="nt">&lt;/dt&gt;</span>
    <span className="nt">&lt;dd</span> <span className="na">class=</span><span className="s">"col-sm-9"</span><span
                                className="nt">&gt;</span>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.<span
                                className="nt">&lt;/dd&gt;</span>

    <span className="nt">&lt;dt</span> <span className="na">class=</span><span className="s">"col-sm-3"</span><span
                                className="nt">&gt;</span>Nesting<span className="nt">&lt;/dt&gt;</span>
    <span className="nt">&lt;dd</span> <span className="na">class=</span><span className="s">"col-sm-9"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;dl</span> <span className="na">class=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;dt</span> <span className="na">class=</span><span
                                className="s">"col-sm-4"</span><span
                                className="nt">&gt;</span>Nested definition list<span className="nt">&lt;/dt&gt;</span>
            <span className="nt">&lt;dd</span> <span className="na">class=</span><span
                                className="s">"col-sm-8"</span><span className="nt">&gt;</span>Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.<span
                                className="nt">&lt;/dd&gt;</span>
        <span className="nt">&lt;/dl&gt;</span>
    <span className="nt">&lt;/dd&gt;</span>
<span className="nt">&lt;/dl&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicDescriptionListAlignment"><i
                                className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Typography