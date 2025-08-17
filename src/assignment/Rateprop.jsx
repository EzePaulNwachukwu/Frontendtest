import React from 'react'

function Rateprop({ icon, title, desc }) {
  return (
    <div>
        <div className='d-flex align-items-center gap-4 '>
            <span className='text-primary fs-4 p-2' style={{backgroundColor:"#EBF1FF"}} >{icon}</span>
            <div>
                <h5 className='text-start fw-bold ' style={{fontSize:"14px"}}>{title}</h5>
                <p className='text-start ' style={{fontSize:"12px"}}>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Rateprop