import React from "react"
import { useSelector } from "react-redux"
import Photo from "./Photo"

export const PhotoGrid = () => {
    const photos = useSelector(state => state.photos)

    const onClick = (photo) => {
        console.log(photo.title)
    }

    return (
        <div className="grid-container">
            {photos.length ? photos.map((photo, key) =>
                <Photo image={photo} key={key} onClick={() => onClick(photo)} />
            ) : null }

        </div>
    )
}

export default PhotoGrid