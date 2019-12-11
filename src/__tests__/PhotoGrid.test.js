import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import PhotoGrid from "../components/PhotoGrid"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import { BrowserRouter as Router } from "react-router-dom"

describe("Photo Grid", () => {
    const mockStore = configureStore()
    const mockComponent = store => render(
        <Provider store={store}>
            <Router>
                <PhotoGrid />
            </Router>
        </Provider>
    )

    const store = mockStore({
        photos: [
            {
                albumId: 1,
                id: 1,
                title: "accusamus beatae ad facilis cum similique qui sunt",
                url: "https://via.placeholder.com/600/92c952",
                thumbnailUrl: "https://via.placeholder.com/150/92c952"
            }
        ]
    })

    it("should contain a grid", () => {

        const component = mockComponent(store)
        expect(component.container.innerHTML).toContain("<div class=\"grid-container animate-top\">")
    })
})