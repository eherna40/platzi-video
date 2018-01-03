import React from 'react'
import Icon from './icon'

// Componente funcional para boton play

function Play(props){
    return (
        <Icon {...props}>
            <path d="M6 4l20 12-20 12z"></path>
        </Icon>
    )
}

export default Play