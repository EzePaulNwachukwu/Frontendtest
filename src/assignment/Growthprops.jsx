import React from 'react'

function Growthprops({tex}) {
  return (
    <div className='bg-light growthcard' style={{backgroundColor:"#F2F4F8"}}>
        <div className='text-center  p-5 ' style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
            <h1 className='text-center fs-5 fw-bold'>{tex}</h1>
        </div>
    </div>
  )
}

export default Growthprops