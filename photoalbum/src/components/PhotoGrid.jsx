import React, { useState } from "react"
import { useSelector } from "react-redux"
import Photo from "./Photo"
import { Link } from "react-router-dom"
import { requestPhotosByAlbumId } from "../reducers/photoReducer"
import { connect } from "react-redux"

export const PhotoGrid = props => {
    // eslint-disable-next-line
    const [selectedPhoto, setSelectedPhoto] = useState(null)
    const photos = useSelector(state => state.photos)
    const [albumId, setAlbumId] = useState(2)

    const onClick = (photo) => {
        setSelectedPhoto(photo.id)
        console.log(photo)
        // TODO: forward to page where full size photo is displayed
    }

    return (
        <>
            <div className="grid-container">
                {photos.length ? photos.map((photo, key) =>
                    <Photo image={photo} key={"photo" + key} onClick={() => onClick(photo)} />
                ) : null}

            </div>
            <Link to="" onClick={() => {
                props.requestPhotosByAlbumId(albumId)
                setAlbumId(albumId+1)
                console.log(props)
            }}>
                We want more
            </Link>
        </>
    )
}

export default connect(null, { requestPhotosByAlbumId })(PhotoGrid)
