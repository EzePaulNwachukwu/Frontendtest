import { faEnvelope, faLocationDot, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from './propsandcards/Button';
import { PHONE_NUMBER } from './constant';
import { SOCIAL_LINKS } from './constant';

const Footer = () => {

    return (
        <div className='footer  text-start py-5' style={{ minHeight: "100vh", backgroundColor: "#0F0D1D", color: "#8F8DA0" }}>




            <div className="container py-3">
                <div className="row g-5 text-light">

                    <div className="col-12 col-md-4 text-start">
                        {/* <img
                            src={require("../images/download (1).png")}
                            alt="logo"
                            className="img-fluid "
                            style={{ maxWidth: "150px" }}
                        /> */}
                        <p className=" fs-4 fw-bold mb-3">CreatveLogo</p>


                        <p className="fs-6">
                            Welcome to our consultancy agency, your business growth is our concern.
                        </p>

                        <div className="border-top pt-3 small">
                            <p className="mb-2">
                                <FontAwesomeIcon icon={faPhone} /> {PHONE_NUMBER}
                            </p>
                            <p className="mb-2">
                                <FontAwesomeIcon icon={faEnvelope} /> needhelp@gmail.com
                            </p>
                            <p className="mb-0">
                                <FontAwesomeIcon icon={faLocationDot} /> 1234, Street Name, City, Country
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 text-start">
                        <h3 className="fs-4 fw-bold mb-3">EXPLORE</h3>
                        <div className="row">
                            <ul className="list-unstyled col-6 small ">
                                <li><a href="#" className="text-decoration-none text-light ">About</a></li>
                                <li><a href="#" className="text-decoration-none text-light">Meet Our Team</a></li>
                                <li><a href="#" className="text-decoration-none text-light">Case Studies</a></li>
                                <li><a href="#" className="text-decoration-none text-light">Latest News</a></li>
                                <li><a href="#" className="text-decoration-none text-light">Contact</a></li>
                            </ul>
                            <ul className="list-unstyled col-6 small">
                                <li><a href="#" className="text-decoration-none text-light">Terms & Conditions</a></li>
                                <li><a href="#" className="text-decoration-none text-light">Privacy Policy</a></li>
                                <li><a href="#" className="text-decoration-none text-light">Refund Policy</a></li>
                                <li><a href="#" className="text-decoration-none text-light">Support</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 text-start">
                        <h3 className="fs-4 fw-bold mb-3">NEWSLETTER</h3>
                        <div style={{ backgroundColor: "#06050C" }} className="p-3 rounded">
                            <p className="small">
                                Subscribe for fastest articles and resources
                            </p>
                            <form className="d-flex flex-column flex-sm-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="form-control"
                                />
                                <Button text="Register" />
                            </form>
                        </div>
                    </div>

                </div>
            </div>


            <div className='d-flex justify-content-between align-items-center flex-column flex-md-row gap-3 container py-4 border-top' >
                <p>copyright 2025 by dev-paul</p>

                <div className="d-flex gap-3">
                    {SOCIAL_LINKS.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <Icon size={25} color={social.color} />
                            </a>
                        );
                    })}
                </div>

            </div>
        </div>
    )

}
export default Footer