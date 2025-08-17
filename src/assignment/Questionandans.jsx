import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Talkingabout from './Talkingabout'

function Questionandans() {
    return (
        <div>
            <div className="container  mt-5 mb-5">
                <h1 className="fs-2 fw-bold">QUESTIONS ANSWERS</h1>
                <p>We help our client renew their business.</p>

                <div className="row mx-auto mt-5 mb-5 justify-content-between align-items-center g-4">
                    <div className="accordion accordion-flush col-12 col-md-6" id="accordionFlushExample" style={{ fontSize: '15px' }}>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed shadow"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseOne"
                                >
                                    <p  style={{ fontSize: '10px', fontWeight: 'bold' }}>
                                        <span className="text-primary p-2">1</span > THINK AHEAD AND BOOST YOUR BUSINESS?
                                    </p>
                                </button>
                            </h2>
                            <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body text-start" style={{ fontSize: '14px' }}>
                                    <p>We provide strategies to help scale your business effectively.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed shadow"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseTwo"
                                >
                                    <p style={{ fontSize: '10px', fontWeight: 'bold' }}>
                                        <span className="text-primary p-2">2</span> HOW CONSULTANCY EXPERTS WORK?
                                    </p>
                                </button>
                            </h2>
                            <div
                                id="flush-collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body text-start" style={{ fontSize: '14px' }}>
                                    We analyze, strategize, and execute growth-driven solutions.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed shadow"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseThree"
                                >
                                    <p style={{ fontSize: '10px', fontWeight: 'bold' }}>
                                        <span className="text-primary p-2">3</span> WHAT IS THE BEST ADVICE FOR GROWTH?
                                    </p>
                                </button>
                            </h2>
                            <div
                                id="flush-collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body text-start" style={{ fontSize: '14px' }}>
                                    Focus on innovation, customer satisfaction, and smart investments.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed shadow"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseFour"
                                >
                                    <p style={{ fontSize: '10px', fontWeight: 'bold' }}>
                                        <span className="text-primary p-2">4</span> HOW TO IMPROVE YOUR BUSINESS?
                                    </p>
                                </button>
                            </h2>
                            <div
                                id="flush-collapseFour"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body text-start" style={{fontSize:"14px"}}>Embrace technology and adapt to market changes.</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 row justify-content-between align-items-center g-3 mt-5">
                        <div className="col-12 col-lg-8 text-start" style={{ fontSize: '14px' }}>
                            <p>
                                <span className="text-primary p-2">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Consectetur adipiscing elit
                            </p>
                            <p>
                                <span className="text-primary p-2">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Suspendisse suscipit sagittis leo
                            </p>
                            <p>
                                <span className="text-primary p-2">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Vestibulum dignissim posuere
                            </p>
                            <p>
                                <span className="text-primary p-2">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Reliable growth strategies
                            </p>
                            <p>
                                <span className="text-primary p-2">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Data-driven consultancy insights
                            </p>
                        </div>

                        <div className="bg-primary py-5 py-lg-3 px-4 shadow text-center text-light col-12 col-lg-4">
                            <h1 className="fw-bold">30</h1>
                            <p className="mb-0">YEARS OF EXPERIENCE</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Talkingabout/>
            </div>
        </div>
    )
}

export default Questionandans
