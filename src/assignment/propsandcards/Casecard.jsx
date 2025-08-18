import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Casecard({ icon , title, subtitle }) {
  return (
    <div className="card h-100 text-white  " style={{ backgroundColor: "#8e8c8cff", paddingTop:"150px" }}>
        <div className='text-start casecard p-4 w-75' >
           <span style={{fontSize:"50px"}}>{icon}</span> 
           <h5  style={{fontSize:"20px"}}>{subtitle}</h5>
           <h3 style={{fontSize:"30px"}}>{title}</h3>
        </div>

    </div>
  )
}

export default Casecard