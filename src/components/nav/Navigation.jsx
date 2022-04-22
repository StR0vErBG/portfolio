import React from 'react';
import "./navigation.css"

const Navigation = () => {
    return (
        <nav className="container-fluid">
            <section className="d-flex justify-content-between">
                <div>
                <img src="logo" alt="logo" />
                </div>
                <div className="d-flex nav-links">
                    <ul className="d-flex flex-column flex-md-row align-items-center">
                        <li className="secondary-color"> <span className="primary-color">01.</span> About</li>
                        <li className="secondary-color"> <span className="primary-color">02.</span> Work</li>
                        <li className="secondary-color"> <span className="primary-color">03.</span> Contact</li>
                        <li className="btn">
                           Resume
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="navSticky nav-social">
                    <div>Git Icon</div>
                    <div>Instagram Icon</div>
                </div>
                <div className="navSticky">
                    emilzlatinov1@abv.bg
                </div>
            </section>
        </nav>
    );
}

export default Navigation;
