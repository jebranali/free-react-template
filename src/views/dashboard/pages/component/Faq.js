import {Fragment} from "react";

function Faq(){
    return (
        <Fragment>
            <div className="faq-search mb-30">
                <h2>Hello, how can we help?</h2>
                <form>
                    <input type="text" className="form-control" placeholder="Search a question..."></input>
                        <button type="button">Search</button>
                </form>
                <p>or choose a category to quickly find the help you need</p>
            </div>
            <div className="faq-area mb-30">
                <div className="tab faq-accordion-tab">
                    <ul className="tabs d-flex flex-wrap justify-content-center">
                        <li><a href="#"><i className='bx bx-flag'></i> <span>Getting Started</span></a></li>
                        <li><a href="#"><i className='bx bxs-badge-dollar'></i> <span>Pricing & Planes</span></a></li>
                        <li><a href="#"><i className='bx bx-shopping-bag'></i> <span>Sales Question</span></a></li>
                        <li><a href="#"><i className='bx bx-book-open'></i> <span>Usage Guides</span></a></li>
                        <li><a href="#"><i className='bx bx-info-circle'></i> <span>General Guide</span></a></li>
                    </ul>
                    <div className="tab_content">
                        <div className="tabs_item">
                            <div className="title">
                                <h2>Getting Started</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className="faq-accordion">
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        <a className="accordion-title active" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            How can I purchase a Admin Template?
                                        </a>
                                        <p className="accordion-content show">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            Why do we use it?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            Where does it come from?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            Where can I get some?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            How can I customize the template?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tabs_item">
                            <div className="title">
                                <h2>Pricing & Planes</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className="faq-accordion">
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        <a className="accordion-title active" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            How can I purchase a Admin Template?
                                        </a>
                                        <p className="accordion-content show">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            Why do we use it?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            Where does it come from?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            Where can I get some?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            How can I customize the template?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tabs_item">
                            <div className="title">
                                <h2>Sales Question</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className="faq-accordion">
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        <a className="accordion-title active" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            How can I purchase a Admin Template?
                                        </a>
                                        <p className="accordion-content show">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            Why do we use it?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            Where does it come from?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            Where can I get some?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            How can I customize the template?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tabs_item">
                            <div className="title">
                                <h2>Usage Guides</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className="faq-accordion">
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        <a className="accordion-title active" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            How can I purchase a Admin Template?
                                        </a>
                                        <p className="accordion-content show">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            Why do we use it?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            Where does it come from?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            Where can I get some?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            How can I customize the template?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tabs_item">
                            <div className="title">
                                <h2>General Guide</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className="faq-accordion">
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        <a className="accordion-title active" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            How can I purchase a Admin Template?
                                        </a>
                                        <p className="accordion-content show">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            Why do we use it?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            Where does it come from?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            Where can I get some?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-plus"></i>
                                            How can I customize the template?
                                        </a>
                                        <p className="accordion-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Faq