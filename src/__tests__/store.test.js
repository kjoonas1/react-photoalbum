import "@testing-library/jest-dom/extend-expect"
import store from "../store"

describe("Store", () => {
    it("should save data to store and localStorage", () => {
        expect(localStorage.getItem("reduxState")).toBe(null)
        expect(store.getState()).toStrictEqual({})

        store.dispatch({
            type: "GET_PHOTOS_SUCCESS",
            payload: "TEST"
        })

        expect(store.getState().photos).toBe("TEST")
        expect(localStorage.getItem("reduxState")).toContain("{\"isFetching\":false,\"errorMessage\":null,\"photos\":\"TEST\"}")
    })
})