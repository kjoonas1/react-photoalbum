import axios from "axios"

export const fetchPhotos = async (albumId=1) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    return response.data
}

export default fetchPhotos