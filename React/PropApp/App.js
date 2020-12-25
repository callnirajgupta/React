import React from 'react'
import Joke from "./Joke"
import JokesData from "./JokesData"

class App extends React.Component {
    render(){
        const jokecomponents = JokesData.map((joke) => { return <Joke  key={joke.id} question={joke.question} punchline={joke.punchLine}/>})
        console.log(jokecomponents);
            return (<div>
                {jokecomponents}
            </div>)
    }
  

}

export default App