import React from "react"

const Photo = props => <img className={props.className} onClick={props.onClick} src={props.image.thumbnailUrl} alt={props.image.title} />

export default Photo