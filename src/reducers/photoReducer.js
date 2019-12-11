import { fetchPhotos } from "../services/photos"

const initialState = {
    photos: []
}

export const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PHOTOS_REQUEST":
            return { ...state, isFetching: true, errorMessage: null }
        case "GET_PHOTOS_SUCCESS":
            return { ...state, isFetching: false, errorMessage: null, photos: action.payload }
        case "GET_PHOTOS_FAILURE":
            return { ...state, isFetching: false, errorMessage: action.payload.message }
        case "ADD_PHOTOS_REQUEST":
            return { ...state, isFetching: true, errorMessage: null  }
        case "ADD_PHOTOS_SUCCESS":
            return { ...state, isFetching: false, errorMessage: null, photos: [...state.photos, ...action.payload] }
        case "ADD_PHOTOS_FAILURE":
            return { ...state, isFetching: false, errorMessage: action.payload.message }
        case "SET_SELECTED_PHOTO":
            return { ...state, selectedPhoto: action.payload }
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

export default photoReducer