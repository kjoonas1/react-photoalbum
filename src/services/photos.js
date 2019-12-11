import axios from "axios"

export const fetchPhotos = async (albumId=1) => {
    return await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
}

export default fetchPhotos