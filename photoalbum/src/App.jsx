import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import "./styles/App.scss"
import PhotoGrid from "./components/PhotoGrid"
import { initializePhotos } from "./reducers/photoReducer"
import { connect } from "react-redux"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import PhotoDetails from "./components/PhotoDetails"

const App = props => {
    useEffect(() => {
        props.initializePhotos()
    }, [props])

    const selectedPhoto = useSelector(state => state.selectedPhoto)

    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path="/" render={() =>
                        <PhotoGrid />
                    } />
                    <Redirect exact from="/photos" to="/" />
                    <Route exact path="/photos/:id" render={() =>
                        <PhotoDetails returnLinkUrl={"/"} image={selectedPhoto} />
                    } />
                </Switch>
            </Router>
        </div>
    )
}



export default connect(null, { initializePhotos })(App)
