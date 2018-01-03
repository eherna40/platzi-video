import React from 'react'
import './home-layout.css'

function HomeLayout(props) {
    console.log(props)
    return(
        <section className="HomeLayout">
            {props.children}        
        </section>
    )
}

export default HomeLayout