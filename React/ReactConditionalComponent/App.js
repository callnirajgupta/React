import React from 'react'
import Conditional from './Conditional'


class App extends React.Component{
    constructor(){
        super()
        this.state={
            isLoading:true
        }

    }
    
 componentDidMount(){
     setTimeout(()=>{
         this.setState({
            isLoading:false
         })
            
         
     },1500)
 }

    render(){
/* this one way
        return(
            <div>
            {this.state.isLoading?<h1> rendering....</h1> :
            <Conditional />}
            </div>
        )
        */

        /*otherway */

        return(
            <Conditional isLoading={this.state.isLoading}/>
        )
    }

}

export default App