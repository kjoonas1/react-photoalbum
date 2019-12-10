import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import photoReducer from "./reducers/photoReducer"
import { composeWithDevTools } from "redux-devtools-extension"

// Simple way to keep data in local storage
const persistedState = localStorage.getItem("reduxState") ? JSON.parse(localStorage.getItem("reduxState")) : {}

// Redux store with dev tools
const store = createStore(
    photoReducer,
    persistedState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

store.subscribe(()=>{
    localStorage.setItem("reduxState", JSON.stringify(store.getState()))
})

export default store