import React from 'react'
import Category from './category'
import './categories.css'
import Search from '../../widgets/containers/search-container'
function Categories(props) {
    return (
        
        <div className="Categories">
            <Search />
            {
                props.categories.map((item)=>{
                    return (
                        <Category key={item.id}{...item} handleOpenModal={props.handleOpenModal} rightScroll={props.rightScroll}/>
                        
                    )
                })
            }
        </div>
    )
}

export default Categories