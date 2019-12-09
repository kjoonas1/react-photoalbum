import "@testing-library/jest-dom/extend-expect"
import photoReducer from "../reducers/photoReducer"

describe("Photo reducer", () => {
    it("should return an array with 2 objects", () => {
        const reducer = photoReducer({}, { data: [{}, {}], type: "SET_PHOTOS" })
        expect(reducer.photos.length).toBe(2)
    })

    it("should merge new object's array to existing one", () => {
        const initialState = [
            {
                albumId: 1,
                id: 1,
                title: "accusamus beatae ad facilis cum similique qui sunt",
                url: "https://via.placeholder.com/600/92c952",
                thumbnailUrl: "https://via.placeholder.com/150/92c952"
            },
            {
                albumId: 1,
                id: 2,
                title: "reprehenderit est deserunt velit ipsam",
                url: "https://via.placeholder.com/600/771796",
                thumbnailUrl: "https://via.placeholder.com/150/771796"
            }
        ]

        const photos = [
            {
                albumId: 1,
                id: 3,
                title: "officia porro iure quia iusto qui ipsa ut modi",
                url: "https://via.placeholder.com/600/24f355",
                thumbnailUrl: "https://via.placeholder.com/150/24f355"
            },
            {
                albumId: 1,
                id: 4,
                title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
                url: "https://via.placeholder.com/600/d32776",
                thumbnailUrl: "https://via.placeholder.com/150/d32776"
            }
        ]

        const reducer = photoReducer({photos: initialState}, { data: photos, type: "ADD_PHOTOS" })
        expect(reducer.photos).toStrictEqual(initialState.concat(photos))
    })
})