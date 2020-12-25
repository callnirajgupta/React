import React from "react"

function Conditional(props) {
    /* first way from App 
    return <h1>Some cool stuff about conditional rendering</h1>
    */

    return(
        props.isLoading? <h1>loading .....</h1>:
    
    <h1>Some cool stuff about conditional rendering</h1>) 
}

export default Conditional