import React, { useState } from "react"
import { useSelector } from "react-redux"
import Photo from "./Photo"
import { Link } from "react-router-dom"
import { requestPhotosByAlbumId, setSelectedPhoto } from "../reducers/photoReducer"
import { connect } from "react-redux"
import shortid from "shortid"
import Spinner from "./Spinner"

export const PhotoGrid = props => {
    const photos = useSelector(state => state.photos)

    const [albumId, setAlbumId] = useState(2)

    const error = props.error
    const isLoading = props.isLoading
    
    const onClick = photo => {
        props.setSelectedPhoto(photo)
    }

    return (
        <>
            {photos && photos.length && error === null ?
                <>
                    <div className="grid-container animate-top">
                        { photos.map(photo => (
                            <div className="grid-link" key={shortid.generate()}>
                                <Link to={`photos/${photo.id}`} onClick={() => onClick(photo)}>
                                    <Photo className={"grid-item"} image={photo} />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Link
                        className="show-more-link"
                        to=""
                        onClick={() => {
                            props.requestPhotosByAlbumId(albumId).then(() => setAlbumId(albumId + 1))
                        }}
                    > {isLoading ? <Spinner /> : <p>Show more...</p>}
                    </Link></> : props.errorMessage}
        </>
    )
}

export default connect(null, { setSelectedPhoto, requestPhotosByAlbumId })(PhotoGrid)
