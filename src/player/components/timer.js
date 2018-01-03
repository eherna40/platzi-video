import React from 'react'
import './timer.css'

function Timer (props) {
    return (
        <div>
            <div className="Timer">
                <p>
                    <span>{props.currentTime} / {props.duration}</span>
                </p>
            </div>
        </div>
    )
}


export default Timer