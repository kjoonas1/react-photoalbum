import React, { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { requestPhotosByAlbumId, setSelectedPhoto, setAlbumId } from "../reducers/photoReducer"
import { connect } from "react-redux"
import Spinner from "./Spinner"
import Photos from "./Photos"
import Pagination from "./Pagination"

export const PhotoGrid = ({ setAlbumId, setSelectedPhoto, requestPhotosByAlbumId, errorMessage, error, isLoading }) => {
    const photos = useSelector(state => state.photos)
    const albumId = useSelector(state => state.albumId)
    const lastAlbumId = useRef(albumId)

    const [photosPerPage] = useState(9)
    const [currentPage, setCurrentPage] = useState(1)
    const indexOfLastPhoto = currentPage * photosPerPage
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto)

    // Tämä pitäisi toteuttaa kyselynä palvelimelta
    const albumCount = 100
    const photosPerAlbum = 50

    const onClick = photo => {
        setSelectedPhoto(photo)
    }

    useEffect(() => {
        if (albumId !== lastAlbumId.current)
            requestPhotosByAlbumId(albumId)
    }, [albumId, requestPhotosByAlbumId])

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const pageNumbers = []
    const totalPhotos = albumId * photosPerAlbum
    for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            {photos && photos.length && error === null ?
                <>
                    <Photos onClick={onClick} photos={currentPhotos} />
                    <Pagination activePage={currentPage} pageNumbers={pageNumbers} paginate={paginate} />
                    <Link
                        className="show-more-link"
                        to=""
                        onClick={() => {
                            setAlbumId(albumId + 1)
                        }}
                    >

                        {isLoading ? <Spinner /> : albumId <= albumCount && currentPage === pageNumbers.length ? <p>Show more...</p> : null}
                    </Link></> : error !== null ? errorMessage : null}
        </>
    )
}

export default connect(null, { setAlbumId, setSelectedPhoto, requestPhotosByAlbumId })(PhotoGrid)
