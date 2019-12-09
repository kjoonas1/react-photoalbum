import React from "react"

const Photo = props => {
    return (
        <img className={props.className} onClick={props.onClick} src={props.image.thumbnailUrl} alt={props.image.title}></img>
    )
}

export default Photo