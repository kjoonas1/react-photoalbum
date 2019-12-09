import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import PhotoGrid from "../components/PhotoGrid"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import { BrowserRouter as Router } from "react-router-dom"


describe("Photo Grid", () => {
    const mockStore = configureStore()
    const mockComponent = (store) => render(
        <Provider store={store}>
            <Router>
                <PhotoGrid />
            </Router>
        </Provider>
    )

    it("should contain an empty grid", () => {
        const store = mockStore({ photos: [] })
        const component = mockComponent(store)
        expect(component.container.innerHTML).toContain("<div class=\"grid-container\"></div>")
    })
})