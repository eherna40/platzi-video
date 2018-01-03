import React, { PureComponent } from 'react'
import './media.css'
import PropTypes, { oneOf } from 'prop-types'



class Media extends PureComponent {
    // // asi se asignan estados con EMACS7
    // state = {
    //     author: this.props.author
    // }
        constructor(props) {
            super(props)
            this.state = {
                author: props.author
            }
            //this.handleClick = this.handleClick.bind(this) si lo usamos con arrow function nohace falta bindear
        }
handleClick = (event) => {
    this.props.handleOpenModal(this.props)
}
    
    render() {
        const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 240,
                border: '1px solid red'
            }
        }
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img
                        className="Media-image"
                        src={this.props.cover}
                        alt=""
                        width={240}
                        height={160}
                    />
                    <div className="Media-description">
                        <h3 className="Media-title">{this.props.title}</h3>
                        <p className="Media-author">{this.props.author}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    images: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio'])
}

export default Media