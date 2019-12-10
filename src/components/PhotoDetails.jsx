import React from "react"
import { Link } from "react-router-dom"

const PhotoDetails = props => {
    const image = props.image
    if (image !== undefined) {
        console.log(image)
        return (
            <>
                <img src={image.url} alt={image.title} />
                <h2>{image.title.toUpperCase()}</h2>
                <h4>Album number: {image.albumId}</h4>
                <Link to={props.returnLinkUrl}>Return back</Link>
            </>
        )
    }
    return null
}

export default PhotoDetails