import React from "react"

const Photo = props => <img className={props.className} onClick={props.onClick} src={props.image.thumbxnailUrl} alt={props.image.albumId} />

export default Photo