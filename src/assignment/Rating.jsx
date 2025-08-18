import React from 'react'
import Ratingprops from './propsandcards/Ratingprops'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersCog } from '@fortawesome/free-solid-svg-icons'
import Growth from './Growth'
import Growthprops from './propsandcards/Growthprops'

function Rating() {
    return (
        <div >
            <div className='py-5 ' style={{ backgroundColor: "#07122D" }}>
                <div className="container  text-light row g-4 justify-content-around align-items-center text-start mx-auto">

                    <div className='col-6 col-md-3 border-end border-dark pb-3'>
                        <Ratingprops icon={<FontAwesomeIcon icon={faUsersCog} />} rate={"420"} text={"CONSULTING SOLUTIONS"} />
                    </div>

                    <div className='col-6 col-md-3 border-end border-dark pb-3'>
                        <Ratingprops icon={<FontAwesomeIcon icon={faUsersCog} />} rate={"420"} text={"CONSULTING SOLUTIONS"} />
                    </div>

                    <div className='col-6 col-md-3 border-end border-dark pb-3'>
                        <Ratingprops icon={<FontAwesomeIcon icon={faUsersCog} />} rate={"420"} text={"CONSULTING SOLUTIONS"} />
                    </div>

                    <div className='col-6 col-md-3'>
                        <Ratingprops icon={<FontAwesomeIcon icon={faUsersCog} />} rate={"420"} text={"CONSULTING SOLUTIONS"} />
                    </div>

                </div>
                <div className='row  container g-0 justify-content-around align-items-center text-start mx-auto mt-5 ' style={{ marginBottom: "-100px" }}>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <Growthprops tex={"BUSINESS GROWTH"} />
                    </div>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <Growthprops tex={"BUSINESS GROWTH"} />
                    </div>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <Growthprops tex={"BUSINESS GROWTH"} />
                    </div>
                </div>

            </div>




            <div>
                <Growth />
            </div>
        </div>
    )
}

export default Rating