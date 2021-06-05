import {Fragment} from "react";

function Collapse(){
    return (
        <Fragment>
            <div className="card mb-30 collapse-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Basic Collapse</h3>
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
                    <p>
                        <a className="btn btn-primary mt-2 mr-2" data-toggle="collapse" href="#collapseExample"
                           role="button" aria-expanded="false" aria-controls="collapseExample">
                            Link with href
                        </a>
                        <button className="btn btn-primary mt-2" type="button" data-toggle="collapse"
                                data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Button with data-target
                        </button>
                    </p>
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                            ea proident.
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicCollapse"><pre><code className="language-html"
                                                                                 data-lang="html"><span
                            className="nt">&lt;p&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"btn btn-primary"</span> <span className="na">data-toggle=</span><span
                                className="s">"collapse"</span> <span className="na">href=</span><span
                                className="s">"#collapseExample"</span> <span className="na">role=</span><span
                                className="s">"button"</span> <span className="na">aria-expanded=</span><span
                                className="s">"false"</span> <span className="na">aria-controls=</span><span
                                className="s">"collapseExample"</span><span className="nt">&gt;</span>
        Link with href
    <span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">class=</span><span
                                className="s">"btn btn-primary"</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">data-toggle=</span><span
                                className="s">"collapse"</span> <span className="na">data-target=</span><span
                                className="s">"#collapseExample"</span> <span className="na">aria-expanded=</span><span
                                className="s">"false"</span>
    <span className="na">aria-controls=</span><span className="s">"collapseExample"</span><span
                                className="nt">&gt;</span>
        Button with data-target
    <span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse"</span> <span
                                className="na">id=</span><span className="s">"collapseExample"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"card card-body"</span><span className="nt">&gt;</span>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard" data-clipboard-target="#basicCollapse">
                                <i className='bx bx-copy'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 collapse-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Multiple Targets</h3>
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
                    <p>
                        <a className="btn btn-secondary mt-2 mr-2" data-toggle="collapse" href="#multiCollapseExample1"
                           role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first
                            element</a>
                        <button className="btn btn-secondary mt-2 mr-2" type="button" data-toggle="collapse"
                                data-target="#multiCollapseExample2" aria-expanded="false"
                                aria-controls="multiCollapseExample2">Toggle second element
                        </button>
                        <button className="btn btn-secondary mt-2" type="button" data-toggle="collapse"
                                data-target=".multi-collapse" aria-expanded="false"
                                aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements
                        </button>
                    </p>
                    <div className="row">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample1">
                                <div className="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                                    cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample2">
                                <div className="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                                    cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="multipleTargetsCollapse"><pre><code className="language-html"
                                                                                           data-lang="html"><span
                            className="nt">&lt;p&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">class=</span><span
                                className="s">"btn btn-primary"</span> <span className="na">data-toggle=</span><span
                                className="s">"collapse"</span> <span className="na">href=</span><span
                                className="s">"#multiCollapseExample1"</span> <span className="na">role=</span><span
                                className="s">"button"</span> <span className="na">aria-expanded=</span><span
                                className="s">"false"</span> <span className="na">aria-controls=</span><span
                                className="s">
        "multiCollapseExample1"</span><span className="nt">&gt;</span>Toggle first element<span
                                className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">class=</span><span
                                className="s">"btn btn-primary"</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">data-toggle=</span><span
                                className="s">"collapse"</span> <span className="na">data-target=</span><span
                                className="s">"#multiCollapseExample2"</span> <span className="na">aria-expanded=</span><span
                                className="s">"false"</span> <span className="na">aria-controls=</span><span
                                className="s">
        "multiCollapseExample2"</span><span className="nt">&gt;</span>Toggle second element<span
                                className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">class=</span><span
                                className="s">"btn btn-primary"</span> <span className="na">type=</span><span
                                className="s">"button"</span> <span className="na">data-toggle=</span><span
                                className="s">"collapse"</span> <span className="na">data-target=</span><span
                                className="s">".multi-collapse"</span> <span className="na">aria-expanded=</span><span
                                className="s">"false"</span> <span className="na">aria-controls=</span><span
                                className="s">
        "multiCollapseExample1 multiCollapseExample2"</span><span className="nt">&gt;</span>Toggle both elements<span
                                className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span
                                className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse multi-collapse"</span> <span
                                className="na">id=</span><span className="s">"multiCollapseExample1"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"card card-body"</span><span className="nt">&gt;</span>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,
                craft beer labore wes anderson cred nesciunt sapiente ea proident.
            <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col"</span><span
                                className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"collapse multi-collapse"</span> <span
                                className="na">id=</span><span className="s">"multiCollapseExample2"</span><span
                                className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span
                                className="s">"card card-body"</span><span className="nt">&gt;</span>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,
                craft beer labore wes anderson cred nesciunt sapiente ea proident.
            <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#multipleTargetsCollapse"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30 collapse-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Accordion Example</h3>
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
                    <div className="accordion-box">
                        <ul className="accordion">
                            <li className="accordion-item">
                                <a className="accordion-title active" href="javascript:void(0)">
                                    <i className="bx bx-plus"></i>
                                    What access do I have on the free plan?
                                </a>
                                <p className="accordion-content show">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                            <li className="accordion-item">
                                <a className="accordion-title" href="javascript:void(0)">
                                    <i className="bx bx-plus"></i>
                                    What access do I have on a free trial?
                                </a>
                                <p className="accordion-content">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                            <li className="accordion-item">
                                <a className="accordion-title" href="javascript:void(0)">
                                    <i className="bx bx-plus"></i>
                                    Does the price go up as my team gets larger?
                                </a>
                                <p className="accordion-content">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                            <li className="accordion-item">
                                <a className="accordion-title" href="javascript:void(0)">
                                    <i className="bx bx-plus"></i>
                                    How can I cancel/pause my subscription?
                                </a>
                                <p className="accordion-content">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                            <li className="accordion-item">
                                <a className="accordion-title" href="javascript:void(0)">
                                    <i className="bx bx-plus"></i>
                                    Can I pay via invoicing?
                                </a>
                                <p className="accordion-content">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                            <li className="accordion-item">
                                <a className="accordion-title" href="javascript:void(0)">
                                    <i className="bx bx-plus"></i>
                                    What is a paid conversation?
                                </a>
                                <p className="accordion-content">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                            <li className="accordion-item">
                                <a className="accordion-title" href="javascript:void(0)">
                                    <i className="bx bx-plus"></i>
                                    How can I get an invoice/a receipt?
                                </a>
                                <p className="accordion-content">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card mb-30 collapse-card-box">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Accordion Example</h3>
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
                    <div className="faq-accordion p-0">
                        <ul className="accordion">
                            <li className="accordion-item">
                                <a className="accordion-title active" href="javascript:void(0)">
                                    <i className="bx bx-plus"></i>
                                    How can I purchase a Admin Template?
                                </a>
                                <p className="accordion-content show">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                            <li className="accordion-item">
                                <a className="accordion-title" href="javascript:void(0)">
                                    <i className="bx bx-plus"></i>
                                    Why do we use it?
                                </a>
                                <p className="accordion-content">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                            <li className="accordion-item">
                                <a className="accordion-title" href="javascript:void(0)">
                                    <i className="bx bx-plus"></i>
                                    Where does it come from?
                                </a>
                                <p className="accordion-content">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                            <li className="accordion-item">
                                <a className="accordion-title" href="javascript:void(0)">
                                    <i className="bx bx-plus"></i>
                                    Where can I get some?
                                </a>
                                <p className="accordion-content">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                            <li className="accordion-item">
                                <a className="accordion-title" href="javascript:void(0)">
                                    <i className="bx bx-plus"></i>
                                    How can I customize the template?
                                </a>
                                <p className="accordion-content">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Collapse