// 

import React from 'react'

function Profprops({ numb, title, desc }) {
  return (
    <div className="row  align-items-center justify-content-center bg-light  my-3 p-3 p-md-4 p-lg-5 " style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
      <div
        className="col-2 col-sm-2 col-md-1 col-lg-1 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: '#c7d4f2ff', minHeight: '50px' }}
      >
        <p className="text-primary fw-bold fs-6 fs-md-5 fs-lg-4 mb-0">{numb}</p>
      </div>

      <div className="col-10 col-sm-10 col-md-11 col-lg-11 text-start">
        <h4 className="fw-bold fs-6 fs-md-5 fs-lg-4 mb-2">{title}</h4>
        <p className="fs-6 fs-md-6 fs-lg-5 mb-0">{desc}</p>
      </div>
    </div>
  )
}

export default Profprops
