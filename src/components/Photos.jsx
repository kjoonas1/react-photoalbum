import React from "react"
import { Link } from "react-router-dom"
import Photo from "./Photo"

const Photos = props => {
    const photos = props.photos
 
    return <div className="grid-container animate-top">
        {photos.map(photo => (
            <div className="grid-link" key={photo.id}>
                <Link to={`photos/${photo.id}`} onClick={() => props.onClick(photo)}>
                    <Photo className={"grid-item"} image={photo} albumId={photo.albumId} />
                </Link>
            </div>
        ))}
    </div>
}

export default Photos