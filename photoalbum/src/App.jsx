import React, { useEffect } from "react"
import "./App.css"
import PhotoGrid from "./components/PhotoGrid"
import { initializePhotos } from "./reducers/photoReducer"
import { connect } from "react-redux"

const App = (props) => {
    useEffect(() => {
        props.initializePhotos()
    }, [props])

    
    return (
        <PhotoGrid />
    )
}

export default connect(null, { initializePhotos })(App)
