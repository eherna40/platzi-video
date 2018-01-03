import React from 'react'
import VolumenIcon from '../../icons/components/volume'
import './volume.css'
function Volume(props) {
    return (
    <div className="Volume-container">
            <button onClick={props.handleVolumeClick} className="Volume">
            <VolumenIcon
                color="white"
                size={25} 
            />
        </button>
        <div className="Volume-range">
            <input 
                type="range"
                min={0}
                max={1}
                step={.05}
                onChange={props.handleVolumeChange}
                value={props.volume}
            />
        </div>
    </div>
    )

}

export default Volume