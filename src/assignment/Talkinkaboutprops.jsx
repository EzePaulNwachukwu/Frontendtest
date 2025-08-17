import React from 'react'

function Talkinkaboutprops({text, linktext, by}) {
  return (
    <div className='talking-about-props bg-light p-4' style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
        <div className='text-start '>
            <p className='text-start' style={{fontSize:"14px"}}>{text}</p>

            <a style={{textDecoration:"none", fontWeight:"bold"}} href="#">{linktext}</a>
            <p className='text-start' style={{fontSize:"10px"}}> {by}</p>
        </div>
    </div>
  )
}

export default Talkinkaboutprops