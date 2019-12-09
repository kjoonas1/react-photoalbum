import React, { useState } from "react"
import { useSelector } from "react-redux"
import Photo from "./Photo"
import { Link } from "react-router-dom"
import { requestPhotosByAlbumId } from "../reducers/photoReducer"
import { connect } from "react-redux"
import shortid from "shortid"

export const PhotoGrid = props => {
    // eslint-disable-next-line
    const [selectedPhoto, setSelectedPhoto] = useState(null)
    const photos = useSelector(state => state.photos)
    const [albumId, setAlbumId] = useState(2)

    const onClick = photo => {
        setSelectedPhoto(photo)
        console.log(photo)
    }

    return (
        <>
            <div className="grid-container">
                {photos.length
                    ? photos.map(photo => (
                        <div className="grid-link" key={shortid.generate()}>
                            <Link to={`photos/${photo.id}`} onClick={() => onClick(photo)}>
                                <Photo className={"grid-item"} image={photo} />
                            </Link>
                        </div>
                    ))
                    : null}
            </div>
            <Link
                to=""
                onClick={() => {
                    props.requestPhotosByAlbumId(albumId).then(() => setAlbumId(albumId + 1))
                }}
            >
                We want more
            </Link>
        </>
    )
}

export default connect(null, { requestPhotosByAlbumId })(PhotoGrid)
