import React, { useEffect } from "react"
import "./styles/App.scss"
import PhotoGrid from "./components/PhotoGrid"
import { initializePhotos } from "./reducers/photoReducer"
import { connect } from "react-redux"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import PhotoDetails from "./components/PhotoDetails"


const App = (props) => {
    useEffect(() => {
        props.initializePhotos()
    }, [props])

    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() =>
                    <PhotoGrid />
                } />
                {/*<Route exact path="/photos" render={() =>
                    <PhotoGrid />
                } />*/}
                <Route exact path="/photos/:id" render={() =>
                    <PhotoDetails />
                } /> 
            </Switch>
        </Router>
    )
}

export default connect(null, { initializePhotos })(App)
