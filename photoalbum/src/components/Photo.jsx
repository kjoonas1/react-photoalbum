import React from "react"

const Photo = (props) => {
    return (
        <img className="grid-item" onClick={props.onClick} src={props.image.thumbnailUrl} alt={props.image.title}></img>
    )
}

export default Photo