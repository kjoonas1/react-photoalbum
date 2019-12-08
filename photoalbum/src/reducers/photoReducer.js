import { fetchPhotos } from "../services/photos"

const initialState = {
    photos: {}
}

export const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INIT_PHOTOS":
            return { ...state, photos: action.data }
        case "NEW_PHOTO":
            return { ...state, photos: action.data }
        default:
            return state
    }
}

export const initializePhotos = () => {
    return async dispatch => {
        const photos = await fetchPhotos()
        dispatch({
            type: "INIT_PHOTOS",
            data: photos
        })
    }
}

export default photoReducer