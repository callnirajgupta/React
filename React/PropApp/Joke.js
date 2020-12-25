import React from 'react'
class Joke extends React.Component{
render(){
    return (<div>
        <h1 style={{diplay: !this.props.question && "none"}}>Question:{this.props.question}</h1>
    <p>PunchLine:{this.props.punchline}</p>
    <hr/>
    </div>)
}
}

export default Joke