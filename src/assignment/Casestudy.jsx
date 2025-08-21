import React from 'react'
import Casecard from './propsandcards/Casecard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import Button from './propsandcards/Button'

function Casestudy() {
  return (
    <div className="  text-center " style={{ backgroundColor: "#eae9f0ff", minHeight: "100vh", paddingTop: "150px" }}>
      <div className='container'>
        <h1 className="fs-2 fw-bold text-uppercase">NEW CASE STUDY</h1>
        <p>We help our client renew their business.</p>

        <div className="row mx-auto mt-5 mb-5 justify-content-between align-items-center g-4" >
          <div className="col-12 col-md-6 col-lg-4">
            <Casecard icon={<FontAwesomeIcon icon={faCar} />} title="BUSINESSES GROWTH" subtitle="THOUGHT LEADERSHIP" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Casecard icon={<FontAwesomeIcon icon={faCar} />} title="BUSINESSES GROWTH" subtitle="THOUGHT LEADERSHIP" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Casecard icon={<FontAwesomeIcon icon={faCar} />} title="BUSINESSES GROWTH" subtitle="THOUGHT LEADERSHIP" />
          </div>

        </div>

      </div>
      <div className="text-center text-light py-5" style={{ backgroundColor: "#5e5e5e" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 px-3">
              <h1 className="fw-bold mb-4 text-center fs-3 fs-md-2 fs-lg-1 text-uppercase"style={{ lineHeight: "1.4" }}> MISSION IS TO PROTECT YOUR BUSINESS AND MUCH MORE</h1>
              <Button text={"DISCOVER MORE"} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Casestudy