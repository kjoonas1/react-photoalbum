
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import photoReducer from "./reducers/photoReducer"
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(
    photoReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)


export default store