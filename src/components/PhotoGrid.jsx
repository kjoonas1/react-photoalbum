import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { requestPhotosByAlbumId, setSelectedPhoto, setAlbumId } from "../reducers/photoReducer"
import { connect } from "react-redux"
import Spinner from "./Spinner"
import Photos from "./Photos"
import Pagination from "./Pagination"

export const PhotoGrid = props => {
    const photos = useSelector(state => state.photos)
    const albumId = useSelector(state => state.albumId)

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
        props.requestPhotosByAlbumId(albumId)
    }, [albumId])

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const pageNumbers = []
    const totalPhotos = albumId * photosPerAlbum
    for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <>


            {photos && photos.length && props.error === null ?
                <>
                    <Photos onClick={onClick} photos={currentPhotos} />
                    <Pagination activePage={currentPage} pageNumbers={pageNumbers} paginate={paginate} />

                    <Link
                        className="show-more-link"
                        to=""
                        onClick={() => {
                            props.setAlbumId(albumId + 1)
                        }}
                    >
                    
                        {props.isLoading ? <Spinner /> : albumId <= albumCount && currentPage === pageNumbers.length ? <p>Show more...</p> : null}
                    </Link></> : props.errorMessage}


        </>
    )
}

export default connect(null, { setAlbumId, setSelectedPhoto, requestPhotosByAlbumId })(PhotoGrid)
