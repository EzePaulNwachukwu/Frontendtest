import React from 'react'
import Experiencecard from './Experiencecard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons'
import Profprops from './Profprops'
import Casestudy from './Casestudy'
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'

function Experience() {
    return (
        <div>
            <div className="text-light text-start pt-5 " style={{ backgroundColor: "#0F0D1D", minHeight: "100vh" }}>
                <h1 className='text-center'>REAL-WORLD EXPERIENCE</h1>
                <p style={{ color: "#726F84" }} className='text-center'>Best business consulting firm you can count on</p>

                <div className="row g-3 container mx-auto my-5">
                    <div className="col-12 col-md-6 col-lg-4">
                        <Experiencecard />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Experiencecard />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Experiencecard />
                    </div>
                </div>


                <div class="py-5  container mx-auto my-5">

                    <div className="row g-2 mb-5 align-items-center text-center mx-auto">
                        <div className="col-12 col-sm-5">
                            <span
                                style={{
                                    display: "block",
                                    borderBottom: "1px solid rgb(58, 57, 57)",
                                }}
                            ></span>
                        </div>

                        <div className="col-12 col-sm-auto fw-bold">
                            MEET THE PARTNERS
                        </div>

                        <div className="col-12 col-sm-5">
                            <span
                                style={{
                                    display: "block",
                                    borderBottom: "1px solid rgb(58, 57, 57)",
                                }}
                            ></span>
                        </div>
                    </div>


                    <p className='text-center'></p>

                    <div className='d-flex justify-content-between align-items-center my-5' >
                        <button className='p-2 text-primary btn' style={{ backgroundColor: "#161a23ff" }}><FontAwesomeIcon icon={faArrowLeft} /></button>
                        <button className='p-2 text-primary btn' style={{ backgroundColor: "#161a23ff" }}><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>

                </div>



            </div>

            <div className="container mx-auto my-3  row g-5 justify-content-between align-items-center ">
                <div className="col-12 col-md-6 mb-3">

                    <span className='text-light p-5 fs-1 bg-primary '>
                        <FontAwesomeIcon icon={faPlay} />
                    </span>

                </div>
              

                <div className="col-12 col-md-6 text-start">
                    <h3 className='fs-2 fs-md-1 fw-bold'>WE ARE LEADING IN THE MARKET</h3>

                    <p className='my-3 fs-6 fs-md-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Est eligendi totam dolorem, similique commodi cupiditate! Quos, accusantium vitae!
                        Error corporis quae nobis quibusdam facilis, magni tenetur temporibus sit dolorem iure.
                    </p>

                    <p className='fs-6 fs-md-5 text-primary'>
                        We have 30+ years of Experience. We offer marketing and consulting service
                    </p>

                    <div className='my-4'>
                        <div className="progress" role="progressbar" aria-label="Consulting progress"
                            aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style={{ height: "12px" }}>
                            <div className="progress-bar" style={{ width: "88%", borderRadius: "10px" }}></div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center w-75 fw-bold mt-2'>
                            <p className='mb-0'>CONSULTING</p>
                            <p className='mb-0'>88%</p>
                        </div>

                        <div className="progress mt-3" role="progressbar" aria-label="Advise progress"
                            aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style={{ height: "12px" }}>
                            <div className="progress-bar" style={{ width: "68%", borderRadius: "10px" }}></div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center w-50 fw-bold mt-2'>
                            <p className='mb-0'>ADVISE</p>
                            <p className='mb-0'>68%</p>
                        </div>
                    </div>

                    <div className='d-flex gap-3 align-items-center mt-3'>
                        <div style={{ width: "50px", height: "50px", backgroundColor: "#c7d4f2ff" }}
                            className='d-flex justify-content-center align-items-center flex-shrink-0'>
                            <FontAwesomeIcon icon={faPhone} className='text-primary fs-4' />
                        </div>
                        <div className='text-start'>
                            <p className='mb-1 fs-6 fs-md-5'>Have any question? Give us a call</p>
                            <p className='fw-bold fs-6 fs-md-5'>+92 666 888 0000</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container mx-auto'>
                <div className='container-fluid mx-auto mt-5 row g-0 justify-content-between align-items-center' style={{ marginBottom: "-100px" }}>
                    <div className='col-12 col-md-6 text-start'>
                        <Profprops numb={"01"} title={"GET PROFESSIONAL ADVICE"} desc={"There are a lot out available but the majority have suffered alteration."} />
                    </div>
                    <div className='col-12 col-md-6 text-start'>
                        <Profprops numb={"02"} title={"TRUST & PROFESSIONAL "} desc={"There are a lot out available but the majority have suffered alteration."} />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Experience