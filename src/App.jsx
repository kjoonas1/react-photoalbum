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
import { Link } from "react-router-dom"

const App = props => {
    useEffect(() => {
        props.initializePhotos()
    }, [props])

    const selectedPhoto = useSelector(state => state.selectedPhoto) // Using a hook instead mapStateToProps

    // Error message for displaying if something went wrong
    const errorMessage = <div className="error-message">
        <h4>Content seems to be missing</h4>
        <h5>
            <Link to="/">
                Try again
            </Link>
        </h5>
    </div>

    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path="/" render={() =>
                        <PhotoGrid errorMessage={errorMessage} />
                    } />
                    <Redirect exact from="/photos" to="/" />
                    <Route exact path="/photos/:id" render={() =>
                        selectedPhoto ?
                            <PhotoDetails returnLinkUrl={"/"} image={selectedPhoto} />
                            : errorMessage
                    } />
                </Switch>
            </Router>
        </div>
    )
}

export default connect(null, { initializePhotos })(App)
