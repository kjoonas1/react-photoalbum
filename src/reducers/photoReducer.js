import { fetchPhotos } from "../services/photos"

const initialState = {
    photos: [],
    albumId: 1
}

export const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        // Overwrite photos state
        case "GET_PHOTOS_REQUEST":
            return { ...state, isFetching: true, errorMessage: null }
        case "GET_PHOTOS_SUCCESS":
            return { ...state, isFetching: false, errorMessage: null, photos: action.payload }
        case "GET_PHOTOS_FAILURE":
            return { ...state, isFetching: false, errorMessage: action.payload.message }

        // Add new photos to existing collection
        case "ADD_PHOTOS_REQUEST":
            return { ...state, isFetching: true, errorMessage: null }
        case "ADD_PHOTOS_SUCCESS":
            return { ...state, isFetching: false, errorMessage: null, photos: [...state.photos, ...action.payload] }
        case "ADD_PHOTOS_FAILURE":
            return { ...state, isFetching: false, errorMessage: action.payload.message }

        // Select photo for displaying details
        case "SET_SELECTED_PHOTO":
            return { ...state, selectedPhoto: action.payload }

        case "SET_ALBUM_ID":
            return { ...state, albumId: action.payload }

        default:
            return state


    }
}

export const initializePhotos = () => {
    return async dispatch => {
        dispatch({ type: "GET_PHOTOS_REQUEST" })
        await fetchPhotos()
            .then((photos) => dispatch({ type: "GET_PHOTOS_SUCCESS", payload: photos.data }))
            .catch((error) => dispatch({ type: "GET_PHOTOS_FAILURE", payload: error }))
    }
}

export const requestPhotosByAlbumId = albumId => {
    return async dispatch => {
        dispatch({ type: "ADD_PHOTOS_REQUEST" })
        await fetchPhotos(albumId)
            .then((photos) => dispatch({ type: "ADD_PHOTOS_SUCCESS", payload: photos.data }))
            .catch((error) => dispatch({ type: "ADD_PHOTOS_FAILURE", payload: error }))
    }
}

export const setSelectedPhoto = selectedPhoto => {
    return dispatch => {
        dispatch({
            type: "SET_SELECTED_PHOTO",
            payload: selectedPhoto
        })
    }
}

export const setAlbumId = albumId => {
    return dispatch => {
        dispatch({
            type: "SET_ALBUM_ID",
            payload: albumId
        })
    }
}

export default photoReducer