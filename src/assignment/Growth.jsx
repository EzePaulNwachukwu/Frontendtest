import React from 'react'
import Growthprops from './Growthprops'
import Rateprop from './Rateprop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'

function Growth() {
  return (
    <div>
       
        <div className='row container g-5 justify-content-left align-items-center text-start mx-auto my-5'>
            <div className=' col-12 col-md-4 col-lg-4 '>
                <div>
                    <Rateprop icon={<FontAwesomeIcon icon={faCircleCheck}/>} title={"HIGHEST SUCCESS RATES"} desc={"Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum."}/>
                </div>
                <div>
                    <Rateprop icon={<FontAwesomeIcon icon={faCircleCheck}/>} title={"WE BUILD EXPERIENCE"} desc={"Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum."}/>
                </div>
            </div>
            <div className=' col-12 col-md-4 col-lg-4  border-start' style={{fontSize:"12px"}}>
                <p className='mb-5'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look believable.</p>

                <div>
                    <p><span>-</span> If you are going to use a passage</p>
                    <p><span>-</span> lorem ipsum ypu need to be sure</p>
                    <p><span>-</span> there isn't anything embarrassing</p>
                    <p><span>-</span> hidden in the middle of text</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Growth