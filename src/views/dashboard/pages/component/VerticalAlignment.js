import {Fragment} from "react";

function VerticalAlignment(){
    return (
        <Fragment>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>Vertical Alignment</h3>
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
                    <span className="align-baseline">baseline</span>
                    <span className="align-top">top</span>
                    <span className="align-middle">middle</span>
                    <span className="align-bottom">bottom</span>
                    <span className="align-text-top">text-top</span>
                    <span className="align-text-bottom">text-bottom</span>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicVerticalAlignment"><pre><code className="language-html"
                                                                                          data-lang="html"><span
                            className="nt">&lt;span</span> <span className="na">class=</span><span
                            className="s">"align-baseline"</span><span className="nt">&gt;</span>baseline<span
                            className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"align-top"</span><span
                                className="nt">&gt;</span>top<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"align-middle"</span><span
                                className="nt">&gt;</span>middle<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"align-bottom"</span><span
                                className="nt">&gt;</span>bottom<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"align-text-top"</span><span
                                className="nt">&gt;</span>text-top<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span
                                className="s">"align-text-bottom"</span><span className="nt">&gt;</span>text-bottom<span
                                className="nt">&lt;/span&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicVerticalAlignment"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-30">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>With Table Cells:</h3>
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
                    <table style={{height:"100px"}}>
                        <tbody>
                        <tr>
                            <td className="align-baseline">baseline</td>
                            <td className="align-top">top</td>
                            <td className="align-middle">middle</td>
                            <td className="align-bottom">bottom</td>
                            <td className="align-text-top">text-top</td>
                            <td className="align-text-bottom">text-bottom</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="demo-code-preview" data-label="Code Example">
                        <div className="highlight" id="basicVerticalAlignment2"><pre><code className="language-html"
                                                                                           data-lang="html"><span
                            className="nt">&lt;table</span> <span className="na">style=</span><span className="s">"height: 100px;"</span><span
                            className="nt">&gt;</span>
    <span className="nt">&lt;tbody&gt;</span>
        <span className="nt">&lt;tr&gt;</span>
            <span className="nt">&lt;td</span> <span className="na">class=</span><span
                                className="s">"align-baseline"</span><span className="nt">&gt;</span>baseline<span
                                className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td</span> <span className="na">class=</span><span
                                className="s">"align-top"</span><span className="nt">&gt;</span>top<span
                                className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td</span> <span className="na">class=</span><span
                                className="s">"align-middle"</span><span className="nt">&gt;</span>middle<span
                                className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td</span> <span className="na">class=</span><span
                                className="s">"align-bottom"</span><span className="nt">&gt;</span>bottom<span
                                className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td</span> <span className="na">class=</span><span
                                className="s">"align-text-top"</span><span className="nt">&gt;</span>text-top<span
                                className="nt">&lt;/td&gt;</span>
            <span className="nt">&lt;td</span> <span className="na">class=</span><span
                                className="s">"align-text-bottom"</span><span className="nt">&gt;</span>text-bottom<span
                                className="nt">&lt;/td&gt;</span>
        <span className="nt">&lt;/tr&gt;</span>
    <span className="nt">&lt;/tbody&gt;</span>
<span className="nt">&lt;/table&gt;</span></code></pre>
                            <button type="button" className="btn btn-clipboard"
                                    data-clipboard-target="#basicVerticalAlignment2"><i className='bx bx-copy'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default VerticalAlignment