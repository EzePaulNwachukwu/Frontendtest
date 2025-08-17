import { faDrawPolygon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Experiencecard() {
    return (

        <div class="card h-100 text-white p-5" style={{ backgroundColor: "#000" }} >
            <div class="card-body d-flex justify-content-between align-items-center gap-3">
                <div>
                    <h4 class="fw-bold mb-2">WEALTH<br />MANAGEMENT</h4>
                    <small class="text-secondary">READ MORE</small>
                </div>
                <div>
                   

                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="70" height="70"
                        viewBox="0 0 24 24"
                        fill="#2f6af3">
                        <path d="M12 2l9.51 6.91-3.63 11.18H6.12L2.49 8.91 12 2z" />
                    </svg>

                   
                </div>
            </div>
        </div>


    )
}

export default Experiencecard