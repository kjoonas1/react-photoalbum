import "@testing-library/jest-dom/extend-expect"
import store from "../store"

describe("Store", () => {
    it("should save data to store and localStorage", () => {
        expect(store.getState()).toStrictEqual(
            {
                albumId: 2,
                photos: []
            })

        store.dispatch({
            type: "GET_PHOTOS_SUCCESS",
            payload: "TEST"
        })

        expect(store.getState().photos).toBe("TEST")
    })
})