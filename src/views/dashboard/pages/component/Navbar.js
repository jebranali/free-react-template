import {Fragment} from "react";

function Navbar(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Brand</h3>
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

                    <nav className="navbar navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                    </nav>

                    <nav className="navbar navbar-light bg-light mt-3">
                        <span className="navbar-brand mb-0 h1">Navbar</span>
                    </nav>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicBaseNavbarBrand"><pre><code className="language-markup"
                                                                                        data-lang="html"><span
                            className="c">&lt;!-- As a link --&gt;</span>
<span className="nt">&lt;nav</span> <span className="na">class=</span><span
                                className="s">"navbar navbar-light bg-light"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Navbar<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;/nav&gt;</span>

<span className="c">&lt;!-- As a heading --&gt;</span>
<span className="nt">&lt;nav</span> <span className="na">class=</span><span
                                className="s">"navbar navbar-light bg-light"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"navbar-brand mb-0 h1"</span><span className="nt">&gt;</span>Navbar<span
                                className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicBaseNavbarBrand"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Nav</h3>
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
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabIndex="-1"
                                       aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicBaseNavbarNav"><pre><code className="language-markup"
                                                                                      data-lang="html"><span
                            className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-expand-lg navbar-light bg-light"</span><span
                            className="nt">&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Navbar<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;button</span> <span className="na">class=</span><span
                                className="s">"navbar-toggler"</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">data-toggle=</span><span
                                className="s">"collapse"</span> <span className="na">data-target=</span><span
                                className="s">"#navbarNav"</span> <span className="na">aria-controls=</span><span
                                className="s">"navbarNav"</span> <span className="na">aria-expanded=</span><span
                                className="s">"false"</span> <span className="na">aria-label=</span><span className="s">"Toggle navigation"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"navbar-toggler-icon"</span><span className="nt">&gt;&lt;/span&gt;</span>
  <span className="nt">&lt;/button&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"collapse navbar-collapse"</span> <span className="na">id=</span><span
                                className="s">"navbarNav"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"navbar-nav"</span><span
                                className="nt">&gt;</span>
      <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"nav-item active"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Home <span className="nt">&lt;span</span> <span
                                className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>(current)<span className="nt">&lt;/span&gt;&lt;/a&gt;</span>
      <span className="nt">&lt;/li&gt;</span>
      <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Features<span className="nt">&lt;/a&gt;</span>
      <span className="nt">&lt;/li&gt;</span>
      <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Pricing<span className="nt">&lt;/a&gt;</span>
      <span className="nt">&lt;/li&gt;</span>
      <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"nav-link disabled"</span> <span className="na">href=</span><span
                                className="s">"#"</span> <span className="na">tabindex=</span><span
                                className="s">"-1"</span> <span className="na">aria-disabled=</span><span
                                className="s">"true"</span><span className="nt">&gt;</span>Disabled<span
                                className="nt">&lt;/a&gt;</span>
      <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;/ul&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicBaseNavbarNav"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Text</h3>
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
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar w/ text</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                            </ul>
                            <span className="navbar-text">
Navbar text with an inline element
</span>
                        </div>
                    </nav>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicBaseNavbarText"><pre><code className="language-markup"
                                                                                       data-lang="html"><span
                            className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-expand-lg navbar-light bg-light"</span><span
                            className="nt">&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Navbar w/ text<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;button</span> <span className="na">class=</span><span
                                className="s">"navbar-toggler"</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">data-toggle=</span><span
                                className="s">"collapse"</span> <span className="na">data-target=</span><span
                                className="s">"#navbarText"</span> <span className="na">aria-controls=</span><span
                                className="s">"navbarText"</span> <span className="na">aria-expanded=</span><span
                                className="s">"false"</span> <span className="na">aria-label=</span><span className="s">"Toggle navigation"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"navbar-toggler-icon"</span><span className="nt">&gt;&lt;/span&gt;</span>
  <span className="nt">&lt;/button&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"collapse navbar-collapse"</span> <span className="na">id=</span><span
                                className="s">"navbarText"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;ul</span> <span className="na">class=</span><span className="s">"navbar-nav mr-auto"</span><span
                                className="nt">&gt;</span>
      <span className="nt">&lt;li</span> <span className="na">class=</span><span
                                className="s">"nav-item active"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Home <span className="nt">&lt;span</span> <span
                                className="na">class=</span><span className="s">"sr-only"</span><span
                                className="nt">&gt;</span>(current)<span className="nt">&lt;/span&gt;&lt;/a&gt;</span>
      <span className="nt">&lt;/li&gt;</span>
      <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Features<span className="nt">&lt;/a&gt;</span>
      <span className="nt">&lt;/li&gt;</span>
      <span className="nt">&lt;li</span> <span className="na">class=</span><span className="s">"nav-item"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"nav-link"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Pricing<span className="nt">&lt;/a&gt;</span>
      <span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;/ul&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"navbar-text"</span><span
                                className="nt">&gt;</span>
      Navbar text with an inline element
    <span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicBaseNavbarText"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Color Schemes</h3>
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
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav className="navbar navbar-expand-lg navbar-dark mt-3 bg-secondary">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-success mt-3">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor03">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav className="navbar navbar-expand-lg navbar-dark mt-3 bg-danger">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor04">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-warning mt-3">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor05">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-info mt-3">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor06">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor07">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor08">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicNavbarColors"><pre><code className="language-markup"
                                                                                     data-lang="html"><span
                            className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-dark bg-primary"</span><span
                            className="nt">&gt;</span>
  <span className="c">&lt;!-- Navbar content --&gt;</span>
<span className="nt">&lt;/nav&gt;</span>

<span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-dark bg-secondary"</span><span
                                className="nt">&gt;</span>
  <span className="c">&lt;!-- Navbar content --&gt;</span>
<span className="nt">&lt;/nav&gt;</span>

<span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-dark bg-success"</span><span
                                className="nt">&gt;</span>
  <span className="c">&lt;!-- Navbar content --&gt;</span>
<span className="nt">&lt;/nav&gt;</span>

<span className="nt">&lt;nav</span> <span className="na">class=</span><span
                                className="s">"navbar navbar-dark bg-danger"</span><span className="nt">&gt;</span>
  <span className="c">&lt;!-- Navbar content --&gt;</span>
<span className="nt">&lt;/nav&gt;</span>

<span className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-dark bg-warning"</span><span
                                className="nt">&gt;</span>
  <span className="c">&lt;!-- Navbar content --&gt;</span>
<span className="nt">&lt;/nav&gt;</span>

<span className="nt">&lt;nav</span> <span className="na">class=</span><span
                                className="s">"navbar navbar-dark bg-info"</span><span className="nt">&gt;</span>
  <span className="c">&lt;!-- Navbar content --&gt;</span>
<span className="nt">&lt;/nav&gt;</span>

<span className="nt">&lt;nav</span> <span className="na">class=</span><span
                                className="s">"navbar navbar-dark bg-dark"</span><span className="nt">&gt;</span>
  <span className="c">&lt;!-- Navbar content --&gt;</span>
<span className="nt">&lt;/nav&gt;</span>

<span className="nt">&lt;nav</span> <span className="na">class=</span><span
                                className="s">"navbar navbar-light bg-light"</span><span className="nt">&gt;</span>
  <span className="c">&lt;!-- Navbar content --&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicNavbarColors"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Placement</h3>
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
                    <nav className="navbar navbar-light bg-light">
                        <a className="navbar-brand" href="#">Default</a>
                    </nav>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicNavbarDefault"><pre><code className="language-markup"
                                                                                      data-lang="html"><span
                            className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar navbar-light bg-light"</span><span
                            className="nt">&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Default<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicNavbarDefault"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                    <nav className="navbar navbar-light bg-light mt-4">
                        <a className="navbar-brand" href="#">Fixed Top</a>
                    </nav>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicNavbarFixedTop"><pre><code className="language-markup"
                                                                                       data-lang="html"><span
                            className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar fixed-top navbar-light bg-light"</span><span
                            className="nt">&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Default<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicNavbarFixedTop"><i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                    <nav className="navbar navbar-light bg-light mt-4">
                        <a className="navbar-brand" href="#">Fixed Bottom</a>
                    </nav>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicNavbarFixedBottom"><pre><code className="language-markup"
                                                                                          data-lang="html"><span
                            className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar fixed-bottom navbar-light bg-light"</span><span
                            className="nt">&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Default<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicNavbarFixedBottom"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                    <nav className="navbar navbar-light bg-light mt-4">
                        <a className="navbar-brand" href="#">Sticky Top</a>
                    </nav>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicNavbarStickyTop"><pre><code className="language-markup"
                                                                                        data-lang="html"><span
                            className="nt">&lt;nav</span> <span className="na">class=</span><span className="s">"navbar sticky-top navbar-light bg-light"</span><span
                            className="nt">&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"navbar-brand"</span> <span
                                className="na">href=</span><span className="s">"#"</span><span
                                className="nt">&gt;</span>Default<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;/nav&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicNavbarStickyTop"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>External Content</h3>
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
                    <div className="pos-f-t">
                        <div className="collapse" id="navbarToggleExternalContent">
                            <div className="bg-dark p-4">
                                <h5 className="text-white h4">Collapsed content</h5>
                                <span className="text-muted">Toggleable via the navbar brand.</span>
                            </div>
                        </div>
                        <nav className="navbar navbar-dark bg-dark">
                            <button className="navbar-toggler cursor-pointer" type="button" data-toggle="collapse"
                                    data-target="#navbarToggleExternalContent"
                                    aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </nav>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicNavbarExternalContent"><pre><code
                            className="language-markup" data-lang="html"><span className="nt">&lt;div</span> <span
                            className="na">class=</span><span className="s">"pos-f-t"</span><span
                            className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse"</span> <span
                                className="na">id=</span><span className="s">"navbarToggleExternalContent"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"bg-dark p-4"</span><span
                                className="nt">&gt;</span>
      <span className="nt">&lt;h5</span> <span className="na">class=</span><span
                                className="s">"text-white h4"</span><span
                                className="nt">&gt;</span>Collapsed content<span className="nt">&lt;/h5&gt;</span>
      <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"text-muted"</span><span className="nt">&gt;</span>Toggleable via the navbar brand.<span
                                className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;nav</span> <span className="na">class=</span><span
                                className="s">"navbar navbar-dark bg-dark"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"navbar-toggler"</span> <span
                                className="na">type=</span><span className="s">"button"</span> <span
                                className="na">data-toggle=</span><span className="s">"collapse"</span> <span
                                className="na">data-target=</span><span
                                className="s">"#navbarToggleExternalContent"</span> <span
                                className="na">aria-controls=</span><span
                                className="s">"navbarToggleExternalContent"</span> <span
                                className="na">aria-expanded=</span><span className="s">"false"</span> <span
                                className="na">aria-label=</span><span className="s">"Toggle navigation"</span><span
                                className="nt">&gt;</span>
      <span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"navbar-toggler-icon"</span><span className="nt">&gt;&lt;/span&gt;</span>
    <span className="nt">&lt;/button&gt;</span>
  <span className="nt">&lt;/nav&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicNavbarExternalContent"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar