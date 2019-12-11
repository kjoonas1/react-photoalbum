import React from "react"
import { useSelector } from "react-redux"
import Photo from "./Photo"
import { Link } from "react-router-dom"
import { requestPhotosByAlbumId, setSelectedPhoto, setAlbumId } from "../reducers/photoReducer"
import { connect } from "react-redux"
import shortid from "shortid"
import Spinner from "./Spinner"

export const PhotoGrid = props => {
    const photos = useSelector(state => state.photos)
    const albumId = useSelector(state => state.albumId)

    const error = props.error
    const isLoading = props.isLoading

    const onClick = photo => {
        props.setSelectedPhoto(photo)
    }

    // Tämä pitäisi toteuttaa kyselynä palvelimelta
    const albumCount = 100

    return (
        <>
            {photos && photos.length && error === null ?
                <>
                    <div className="grid-container animate-top">
                        { photos.map(photo => (
                            <div className="grid-link" key={shortid.generate()}>
                                <Link to={`photos/${photo.id}`} onClick={() => onClick(photo)}>
                                    <Photo className={"grid-item"} image={photo} albumId={photo.albumId} />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Link
                        className="show-more-link"
                        to=""
                        onClick={() => {
                            props.setAlbumId(albumId+1)
                            props.requestPhotosByAlbumId(albumId)
                        }}
                    > {isLoading ? <Spinner /> : albumId <= albumCount ? <p>Show more...</p> : null}
                    </Link></> : props.errorMessage}
        </>
    )
}

export default connect(null, { setAlbumId, setSelectedPhoto, requestPhotosByAlbumId })(PhotoGrid)
