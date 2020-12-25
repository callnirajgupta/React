import React from "react"
import Toggler from "./Toggler"

function Favorite(props) {
    const {on,toggle}=Toggler(false)
    return (
        
                <div>
                    <h3>Click heart to favorite</h3>
                    <h1>
                        <span 
                            onClick={toggle}
                        >
                            {on ? "❤️" : "♡"}
                        </span>
                    </h1>
                </div>
        
    ) 
}

export default Favorite
