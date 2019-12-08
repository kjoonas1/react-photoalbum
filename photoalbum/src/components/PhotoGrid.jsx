import React from "react"
import store from "../store"

export const PhotoGrid = (props) => {
    return (
        <div className="grid-container">
            <ul>
                {store.getState().map((photo, key) =>
                    <li key={key}>
                        {photo.title}
                    </li>
                )}
            </ul>
            <div className="grid-item">
                Hello
            </div>
        </div>
    )
}

export default PhotoGrid