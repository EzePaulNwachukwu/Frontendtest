import React from 'react'

function Ratingprops({ icon, rate, text }) {
  return (
    <div>
        <div className='text-center '>
            <span className='text-primary bg-black fs-1 p-3 '>{icon}</span>
            <h1 className='text-center py-3'>{rate}</h1>
            <p className='text-center'style={{fontSize:"10px"}}>{text}</p>
        </div>
    </div>
  )
}

export default Ratingprops