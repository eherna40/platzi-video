import React from 'react'
import './scroll.css'
function Scroll(props) {
    console.log(props)
    
    if(props.position === 'left') {
        return(
        <div style={{left: '0'}} className="Scroll"  >
                <button className="Scroll-button" onClick={props.rightScroll}>
                &#60;
                </button>
            
            </div>
        )
    } else {
        return (
            <div style={{ right: '0' }} className="Scroll"  >
                <button className="Scroll-button" onClick={props.rightScroll}>
                &#62;
                </button>

            </div>
        )
    }

}

export default Scroll