import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Talkinkaboutprops from './propsandcards/Talkinkaboutprops'

function Talkingabout() {
    return (
        <div className='py-5 mt-5' style={{ backgroundColor: "#F2F4F8" }}>
            <div className='row  container g-4 justify-content-around align-items-center text-start mx-auto '>
                <div className='col-12  col-md-4 col-lg-4 p-4'>
                    <h1 className='fw-bold ' style={{fontSize:"43px"}}>WHAT THEY ARE TALKING ABOUT?</h1>
                    <p style={{fontSize:"10px"}}>Trusted by more than 4 200 customers</p>
                    <div className='my-3' >
                        <button className='btn btn-light  shadow mx-2' style={{borderRadius:"50%"}}><FontAwesomeIcon icon={faArrowLeft} /></button>
                        <button className='btn btn-light  shadow mx-2' style={{borderRadius:"50%"}}><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
                <div className='col-12  col-md-4 col-lg-4'>
                    <Talkinkaboutprops text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ea nobis ut? Blanditiis atque recusandae saepe sapiente, totam consectetur exercitationem doloremque nesciunt, dolorum, nisi quidem necessitatibus. Voluptatibus itaque nesciunt ut."} linktext={"TODD HIGGINS"} by={"CUSTOMER"} />
                </div>
                <div className='col-12  col-md-4 col-lg-4'>
                    <Talkinkaboutprops text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ea nobis ut? Blanditiis atque recusandae saepe sapiente, totam consectetur exercitationem doloremque nesciunt, dolorum, nisi quidem necessitatibus. Voluptatibus itaque nesciunt ut."} linktext={"JANE DOE"} by={"CLIENT"} />
                </div>

            </div>
        </div>
    )
}

export default Talkingabout