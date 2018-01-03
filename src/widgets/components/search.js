import React from 'react'
import './search.css';


function Search (props){
    return (
        <form className="Search" onSubmit={props.handleSubmit}>
            <input 
            ref={props.setRef} //Solo valido en react 
            type="text" 
            placeholder="Buscar" 
            className="Search-input"
            onChange={props.handleChange}
            value={props.value} />
        </form>
    )
}


export default Search