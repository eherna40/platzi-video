import React, { Component } from 'react'
import Media from './media.js'
import './playlist.css'
import Play from './../../icons/components/play'
import Scroll from './scroll.js'
//componente funcional, son funciones en react
//<Scroll position={'right'} rightScroll={props.rightScroll}></Scroll>
function Playlist(props) {
    return (
        <div className="Playlist">
            {
                props.playlist.map((item) => {
                    return <Media handleOpenModal={props.handleOpenModal} {...item} key={item.id} />
                })
            }
            
        </div>
    )
}


export default Playlist