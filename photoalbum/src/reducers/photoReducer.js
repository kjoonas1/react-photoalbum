import { fetchPhotos } from "../services/photos"

const initialState = {
    photos: []
}

export const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PHOTOS":
            return { ...state, photos: action.data }
        case "ADD_PHOTOS":
            return { ...state, photos: [...state.photos, ...action.data]}
        default:
            return state
    }
}

export const initializePhotos = () => {
    return async dispatch => {
        const photos = await fetchPhotos()
        dispatch({
            type: "SET_PHOTOS",
            data: photos
        })
    }
}

export const requestPhotosByAlbumId = albumId => {
    return async dispatch => {
        const photos = await fetchPhotos(albumId)
        dispatch({
            type: "ADD_PHOTOS",
            data: photos
        })
    }
}

export default photoReducer